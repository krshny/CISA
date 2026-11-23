# CISA 3320 Wireless Project – Checklist

An interactive, step-by-step checklist for the CISA 3320 final project:

1. **Phase 1** – Customer Discovery role-play
2. **Phase 2** – Lab 10 predictive survey in Acrylic
3. **Phase 3** – Wireless design report

## Features
- Tick boxes with progress bars per section, per phase and overall
- **Next task** button jumps to the first unticked item
- **Hide done** to show only what's left
- Editable tables (AP record, room priority, segmentation, monitoring)
- Progress saves in your browser automatically
- **Export / Import** progress as a JSON file to move between computers
- Light and dark mode follow your system setting

## Files
| File | What it holds |
| --- | --- |
| `index.html` | Page structure |
| `styles.css` | Dark theme and layout |
| `data.js` | All checklist content — edit this to change tasks |
| `app.js` | Rendering, progress, saving, buttons |

## Run it
Open `index.html` in any browser. No build step. Keep all four files in the same folder.

## Publish on GitHub Pages
1. Create a new repository and upload all four files plus `README.md`.
2. Go to **Settings → Pages**.
3. Under **Source**, pick **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Save. Your site appears at `https://<your-username>.github.io/<repo-name>/` after a minute or two.

Progress is stored per browser. Use **Export** before switching computers.
