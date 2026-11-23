/* App logic: rendering, progress, saving. Content lives in data.js. */
/* ---------- STORAGE ---------- */
const KEY = "cisa3320-checklist-v1";
let state = {checks:{}, cells:{}, open:{}, hideDone:false};
try { const s = JSON.parse(localStorage.getItem(KEY)); if (s) state = Object.assign(state, s); } catch(e){}
function save(){ try { localStorage.setItem(KEY, JSON.stringify(state)); } catch(e){} }

/* ---------- RENDER ---------- */
const md = s => s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

document.getElementById("intro").append(...INTRO.map(c => {
  const d = el("div", "card " + c.cls);
  d.append(el("h3", null, c.title), el("p", null, md(c.text)));
  return d;
}));

const phasesEl = document.getElementById("phases");
const navList = document.getElementById("navList");
const sectionIndex = []; // {phase, sec, ids:[], detailsEl, countEl, navLink}

PHASES.forEach(ph => {
  const wrap = el("section", "phase"); wrap.id = ph.id;
  const head = el("div", "phase-head");
  head.append(el("h2", null, ph.title));
  const pct = el("span", "pct", "0%"); head.append(pct);
  const bar = el("div", "bar"); const barI = el("i"); bar.append(barI);
  wrap.append(head, bar, el("p", "phase-intro", ph.intro));
  ph._pct = pct; ph._bar = barI; ph._ids = [];

  const navPh = el("div", "navphase");
  const navA = el("a", null, ph.title.replace(" – ", "<br><span class='hint'>") + "</span>"); navA.href = "#" + ph.id;
  const navBar = el("div", "bar"); const navBarI = el("i"); navBar.append(navBarI);
  const navUl = el("ul");
  navPh.append(navA, navBar, navUl); navList.append(navPh);
  ph._navBar = navBarI;

  ph.sections.forEach(sec => {
    const secId = "s" + sec.id.replace(".", "-");
    const det = el("details", "sec"); det.id = secId;
    det.open = state.open[secId] ?? false;
    det.addEventListener("toggle", () => { state.open[secId] = det.open; save(); });
    const sum = el("summary");
    sum.append(el("span", "chev", "▶"), el("span", "t", sec.id + "  " + sec.title));
    const count = el("span", "count"); sum.append(count);
    det.append(sum);
    const body = el("div", "sec-body");
    const ids = [];

    sec.blocks.forEach((b, bi) => {
      if (b.t === "p") body.append(el("p", null, md(b.text)));
      else if (b.t === "h") body.append(el("h4", null, md(b.text)));
      else if (b.t === "note") body.append(el("div", "note", md(b.text)));
      else if (b.t === "ul" || b.t === "ol") {
        const l = el(b.t, "plain"); b.items.forEach(i => l.append(el("li", null, md(i)))); body.append(l);
      }
      else if (b.t === "check") {
        const ul = el("ul", "check");
        b.items.forEach((txt, ii) => {
          const id = `${sec.id}-${bi}-${ii}`; ids.push(id); ph._ids.push(id);
          const li = el("li"); li.dataset.id = id;
          const cb = el("input"); cb.type = "checkbox"; cb.id = "cb-" + id; cb.checked = !!state.checks[id];
          const lab = el("label", null, md(txt)); lab.htmlFor = cb.id;
          li.classList.toggle("done", cb.checked);
          cb.addEventListener("change", () => {
            state.checks[id] = cb.checked; if (!cb.checked) delete state.checks[id];
            li.classList.toggle("done", cb.checked); save(); updateProgress();
          });
          li.append(cb, lab); ul.append(li);
        });
        body.append(ul);
      }
      else if (b.t === "table") {
        const tw = el("div", "tablewrap"); const tb = el("table");
        const thead = el("thead"); const tr = el("tr");
        b.head.forEach(h => tr.append(el("th", null, md(h)))); thead.append(tr); tb.append(thead);
        const tbody = el("tbody");
        b.rows.forEach((row, ri) => {
          const r = el("tr");
          row.forEach((cell, ci) => {
            const editable = (b.editable && ci > 0) || (b.editableCols && b.editableCols.includes(ci));
            const td = el("td");
            if (editable) {
              const key = `${sec.id}-${bi}-${ri}-${ci}`;
              td.className = "edit"; td.contentEditable = "true";
              td.textContent = state.cells[key] ?? cell;
              td.addEventListener("input", () => { const v = td.textContent.trim(); if (v) state.cells[key] = v; else delete state.cells[key]; save(); });
            } else td.innerHTML = md(cell);
            r.append(td);
          });
          tbody.append(r);
        });
        tb.append(tbody); tw.append(tb); body.append(tw);
        if (b.editable || b.editableCols) body.append(el("div", "hint", "Shaded cells are editable. Click to type — it saves automatically."));
      }
    });

    det.append(body); wrap.append(det);

    const li = el("li"); const a = el("a"); a.href = "#" + secId;
    a.innerHTML = `<span>${sec.id} ${sec.title.replace(/ \(.*\)$/, "")}</span><span class="nc"></span>`;
    a.addEventListener("click", () => { det.open = true; closeNav(); });
    li.append(a); navUl.append(li);

    sectionIndex.push({ph, sec, ids, det, count, navLink:a});
  });

  phasesEl.append(wrap);
});

/* ---------- PROGRESS ---------- */
function updateProgress(){
  let total = 0, done = 0;
  sectionIndex.forEach(s => {
    const d = s.ids.filter(id => state.checks[id]).length;
    s.count.textContent = `${d} / ${s.ids.length}`;
    const full = d === s.ids.length && s.ids.length > 0;
    s.count.classList.toggle("full", full);
    if (full) s.count.textContent = "✓ done";
    s.navLink.querySelector(".nc").textContent = full ? "✓" : `${d}/${s.ids.length}`;
    s.navLink.classList.toggle("complete", full);
  });
  PHASES.forEach(ph => {
    const d = ph._ids.filter(id => state.checks[id]).length;
    const p = ph._ids.length ? Math.round(d / ph._ids.length * 100) : 0;
    ph._pct.textContent = p + "%"; ph._bar.style.width = p + "%"; ph._navBar.style.width = p + "%";
    total += ph._ids.length; done += d;
  });
  const p = total ? Math.round(done / total * 100) : 0;
  document.getElementById("overallPct").textContent = p + "%";
  document.getElementById("overallBar").style.width = p + "%";
  document.getElementById("overallCount").textContent = `${done} of ${total} tasks done`;
}

/* ---------- TOOLBAR ---------- */
const toast = msg => { const t = document.getElementById("toast"); t.textContent = msg; t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 1800); };

document.getElementById("nextBtn").onclick = () => {
  for (const s of sectionIndex) {
    const id = s.ids.find(i => !state.checks[i]);
    if (id) {
      s.det.open = true;
      const li = document.querySelector(`li[data-id="${id}"]`);
      li.scrollIntoView({behavior:"smooth", block:"center"});
      li.classList.add("flash"); setTimeout(() => li.classList.remove("flash"), 1600);
      return;
    }
  }
  toast("Everything is done! 🎉");
};

const hideBtn = document.getElementById("hideBtn");
function applyHide(){ document.body.classList.toggle("hide-done", state.hideDone); hideBtn.setAttribute("aria-pressed", state.hideDone); }
hideBtn.onclick = () => { state.hideDone = !state.hideDone; save(); applyHide(); };
applyHide();

document.getElementById("expandBtn").onclick = () => sectionIndex.forEach(s => s.det.open = true);
document.getElementById("collapseBtn").onclick = () => sectionIndex.forEach(s => s.det.open = false);

document.getElementById("exportBtn").onclick = () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], {type:"application/json"});
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
  a.download = "cisa3320-progress.json"; a.click(); URL.revokeObjectURL(a.href);
  toast("Progress downloaded");
};
document.getElementById("importFile").onchange = e => {
  const f = e.target.files[0]; if (!f) return;
  f.text().then(t => {
    try { state = Object.assign({checks:{}, cells:{}, open:{}, hideDone:false}, JSON.parse(t)); save(); location.reload(); }
    catch(err){ toast("That file didn't work"); }
  });
};
document.getElementById("resetBtn").onclick = () => {
  if (prompt("Type RESET to clear all ticks and table entries.") === "RESET") {
    try { localStorage.removeItem(KEY); } catch(e){}
    location.reload();
  }
};

/* mobile nav */
const nav = document.getElementById("nav");
function closeNav(){ nav.classList.remove("open"); }
document.getElementById("menuBtn").onclick = () => nav.classList.toggle("open");

/* open the first unfinished section on first visit */
if (!Object.keys(state.open).length) {
  const first = sectionIndex.find(s => s.ids.some(i => !state.checks[i]));
  if (first) first.det.open = true;
}
updateProgress();
