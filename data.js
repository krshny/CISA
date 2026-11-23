/* ---------- CONTENT (edit this file to change the checklist) ----------
   Block types: p, h, check, ul, ol, table, note
   Use **bold** inside strings. */

const INTRO = [
  {cls:"warn", title:"Key rule", text:"AI must not pick your design or write your “why” reasoning. This checklist covers what to do and how. Every design choice is yours. Your instructor may ask you to defend it."},
  {cls:"warn", title:"Heads-up", text:"The floor plan image shows a 15 m Testing Lab ceiling. The brief says use **12 m**. Use 12 m everywhere."},
  {cls:"", title:"Golden rule for every decision", text:"For each major choice, write 4 things: **1)** what you chose, **2)** the customer need or evidence behind it, **3)** the alternative you considered, **4)** why yours fits PDMS better. Also explain what you **didn't** do: no AP placed, 2.4 GHz off, no 80 MHz, a security method rejected."},
  {cls:"", title:"Order of work", text:"**Phase 1** Customer Discovery role-play → **Phase 2** Lab 10 in Acrylic → **Phase 3** Design report. One exception: do step **3.1** (requirements) before step **2.4** (placing APs)."}
];

const PHASES = [
{
  id:"p1", title:"Phase 1 – Customer Discovery role-play",
  intro:"A separate 15-minute class activity. Different scenario: a medical research organization. Do it first.",
  sections:[
  {id:"1.1", title:"What this activity is", blocks:[
    {t:"p", text:"A role-play of a first customer meeting. It's the **Prepare** phase of PPDIOO."},
    {t:"ul", items:[
      "The customer is a **medical research organization** moving to a new building. Not PDMS.",
      "The goal is to understand the business. Not to design the network.",
      "**Don't** talk about AP models, channel widths, RSSI targets or controller settings."]},
    {t:"table", head:["Role","Gets","Does"], rows:[
      ["Consultant","Consultant Brief + Questionnaire","Runs the interview and records answers"],
      ["Customer","Confidential Customer Card","Plays “Alex Morgan”, IT Manager. Answers only what's asked"],
      ["Observer (groups of 3)","Consultant Brief","Listens for priorities, gaps and better follow-up questions"]]},
    {t:"check", items:[
      "Find out which role you're playing.",
      "If you're the consultant, **don't read the Customer Card** before the meeting. Uncovering it is the exercise."]}
  ]},
  {id:"1.2", title:"Before the meeting (consultant)", blocks:[
    {t:"check", items:[
      "Read the Consultant Brief.",
      "Read all 20 questions in the Questionnaire.",
      "Fill in the Meeting details box: your name, organization, date, contact and role.",
      "Star the questions you must not skip. Good picks: Q2, Q3, Q4, Q5, Q6, Q9, Q11, Q13, Q16, Q17, Q20.",
      "Write 1 follow-up question beside each starred one.",
      "Plan your time: about 2–3 minutes per section.",
      "Have a pen ready, or the Word file open to type into."]},
    {t:"note", text:"Follow-up examples: “Can you give me a rough number?” · “What happens if Wi-Fi drops there?” · “Who would know that?”"}
  ]},
  {id:"1.3", title:"During the interview (15 minutes)", blocks:[
    {t:"h", text:"General rules"},
    {t:"check", items:[
      "Talk, don't read the form word for word.",
      "Ask a follow-up when an answer is vague.",
      "Write answers as you go. Short notes are fine.",
      "If the customer doesn't know, write **“To confirm”**. Never make up an answer.",
      "Keep a running list of open questions in the margin."]},
    {t:"h", text:"Section by section"},
    {t:"table", head:["Section","Questions","What you're trying to learn"], rows:[
      ["1 Organization & goals","Q1–Q4","Why the project exists, top 3 goals, cost of an outage"],
      ["2 Users & apps","Q5–Q8","How many users, what they do on Wi-Fi, who moves around"],
      ["3 Facilities","Q9–Q12","Which areas, tricky spaces, other sites, future growth"],
      ["4 Security","Q13–Q15","Different user groups, privacy rules, install limits"],
      ["5 Constraints","Q16–Q20","Budget, deadline, existing gear, approvers, what success looks like"]]},
    {t:"check", items:[
      "Section 1: tick the right box in Q2. Get 3 goals in Q3.",
      "Section 2: get rough numbers for each user group. Tick all boxes that apply in Q6.",
      "Section 3: ask about every type of space. Ask directly about other locations (Q11).",
      "Section 4: ask who needs access to what. Ask about any sensitive data.",
      "Section 5: ask for a budget range, even if not final. Ask how they'll judge success.",
      "Last minute: read back the top 3 priorities. Ask “Did I miss anything?”"]}
  ]},
  {id:"1.4", title:"If you play the customer or observer", blocks:[
    {t:"h", text:"Customer (Alex Morgan)"},
    {t:"check", items:[
      "Read your Confidential Customer Card. Keep it hidden from the consultant.",
      "Learn the “What you know” facts. Share these when asked.",
      "Learn the “Reveal only if asked” facts. Share these **only** if asked a related question.",
      "Answer like a business manager, not a network engineer.",
      "If a question is broad, mention one concern. Don't dump everything.",
      "If your card doesn't cover it, say “I would need to confirm that.”",
      "Don't invent technical specs."]},
    {t:"h", text:"Observer"},
    {t:"check", items:[
      "Note the customer's main priorities.",
      "Note any assumptions the consultant made.",
      "Note questions that went unanswered.",
      "Note where a better follow-up question would have helped.",
      "Share your notes with the consultant after the meeting."]}
  ]},
  {id:"1.5", title:"After the meeting: summary and submission", blocks:[
    {t:"h", text:"Clean up the questionnaire"},
    {t:"check", items:[
      "Go through Q1–Q20. Turn rough notes into clear short answers.",
      "Mark every unanswered item **“To confirm”**.",
      "Add the observer's notes if you had one."]},
    {t:"h", text:"Write Section 6 – Meeting summary"},
    {t:"p", text:"A business summary, not a technical design."},
    {t:"check", items:[
      "**Top business priorities:** the 3 things the customer cares about most.",
      "**Critical users and applications:** which activities or areas suffer most if Wi-Fi is poor.",
      "**Major constraints and risks:** timing, budget, operations, security, building.",
      "**Information still to confirm:** everything marked “To confirm”, plus things to check in the Plan phase.",
      "**Recommended next steps:** what to ask for next, e.g. floor plans, device lists, site access, budget approval."]},
    {t:"h", text:"Check and submit"},
    {t:"check", items:[
      "No AP models, channels, RSSI targets or controller settings anywhere.",
      "No invented answers.",
      "Meeting details box is filled in.",
      "Submit the completed Word questionnaire with your notes and summary."]}
  ]}
  ]
},
{
  id:"p2", title:"Phase 2 – Lab 10: Predictive survey in Acrylic",
  intro:"Builds your predicted design. Its maps become Appendices B–F of the report.",
  sections:[
  {id:"2.1", title:"Before you begin", blocks:[
    {t:"check", items:[
      "Sit at a Windows PC with Acrylic Wi-Fi Heatmaps installed.",
      "Activate the Educational License with your own details.",
      "Plug the Wireless USB adapter in **before** opening Acrylic. It won't open without a Wi-Fi card.",
      "Download the building blueprint from Learning Hub → Content → Labs. Use only this file.",
      "Open the assignment questionnaire (Appendix A) in another window.",
      "Bookmark the <a href=\"https://www.acrylicwifi.com/en/wifi-heatmaps/user-manual/\" target=\"_blank\" rel=\"noopener\">Acrylic user manual</a> in case a menu looks different.",
      "Do step **3.1** now, or at least before 2.4."]},
    {t:"note", text:"The watermark on exported images is normal for the EDU licence. Ignore it."}
  ]},
  {id:"2.2", title:"Create and calibrate the project", blocks:[
    {t:"check", items:[
      "Open Acrylic Wi-Fi Heatmaps.",
      "Create a new project. Give it a clear name, e.g. “PDMS WLAN Design”.",
      "Add one location. Name it **Ground Floor**.",
      "Choose to upload a blueprint image. Pick the Learning Hub floor plan.",
      "Select **Manual Calibration**.",
      "Find the **40.0 m** dimension across the top of the plan.",
      "Draw the calibration line along it.",
      "Start and end the line on the **exterior walls**. Not the image border.",
      "Enter 40 m as the distance.",
      "Add the location and press **OK**.",
      "Sanity check: Open Office 122 should look about 20 × 14 m. If not, redo the calibration.",
      "Note where the project saves: ☰ (3 bars) → Project → Project Folder. It saves automatically."]},
    {t:"note", text:"Why it matters: a wrong scale distorts every coverage map and wall loss."}
  ]},
  {id:"2.3", title:"Model the walls", blocks:[
    {t:"p", text:"Open the **Planning / Wall Editor**. Draw one material at a time. Close tracing is fine. Ignore doors and windows."},
    {t:"table", head:["Round","Material","Thickness","Where"], rows:[
      ["1","Concrete","30 cm","Every exterior wall, all the way round"],
      ["2","Glass","15 cm","Interior walls around Conference Room 127 only"],
      ["3","Drywall","15 cm","Every other interior wall and corridor"]]},
    {t:"h", text:"Round 1 – Concrete"},
    {t:"check", items:[
      "Select Concrete. Set thickness to 30 cm.",
      "Trace the outside of the building. Follow every corner of the irregular shape.",
      "Include the bump-outs: Offices 106/107 at the top, Conference 128 at the bottom."]},
    {t:"h", text:"Round 2 – Glass"},
    {t:"check", items:[
      "Select Glass. Set thickness to 15 cm.",
      "Trace only the **interior** walls of Conference 127. Any outside wall stays concrete."]},
    {t:"h", text:"Round 3 – Drywall"},
    {t:"check", items:[
      "Select Drywall. Set thickness to 15 cm.",
      "Trace Testing Lab 109 walls.",
      "Trace Open Offices 101 and 122, and Video Ops 123.",
      "Trace Conference 128 interior walls.",
      "Trace the private offices, washrooms, storage and utility rooms.",
      "Trace the corridor walls."]},
    {t:"h", text:"Review"},
    {t:"check", items:[
      "The outline matches the floor plan.",
      "Testing Lab, Conference 127 and corridors are all drawn.",
      "Click a few walls of each type. Confirm the material is right."]},
    {t:"note", text:"Acrylic only predicts from what you enter. This is not a measured survey."}
  ]},
  {id:"2.4", title:"Add and position APs", blocks:[
    {t:"p", text:"Start with about **10 APs**. Your final count can be 8–14. You must justify whatever number you end with."},
    {t:"h", text:"Create the APs"},
    {t:"check", items:[
      "Create all 10 APs first. Park them beside the drawing.",
      "Use an indoor omni AP for offices, meeting rooms and corridors. Cisco 2802i is a good start if it's in the catalogue.",
      "For Testing Lab 109, try 1–2 APs with a directional or semi-directional antenna."]},
    {t:"h", text:"Place them (use your room priority table from 3.1)"},
    {t:"check", items:[
      "Place APs in high-priority rooms first: Open Offices 101 and 122, Video Ops 123, Conference 127 and 128.",
      "Decide if big rooms need more than one AP. Open Office 122 is 280 m².",
      "Place the Testing Lab AP(s).",
      "Place APs for private offices and corridors. Think about people walking while on video calls.",
      "Decide which low-priority rooms get **no** AP. Write down why.",
      "Place by user demand, not equal spacing."]},
    {t:"h", text:"Set each AP"},
    {t:"check", items:[
      "Mounting height: about 4 m in offices.",
      "Testing Lab height: your choice. Don't assume a 12 m ceiling mount.",
      "Directional antennas: aim them at the floor area where staff work.",
      "Record each AP in the table below as you go."]},
    {t:"h", text:"AP record table"},
    {t:"table", editable:true, head:["AP ID","Room / zone","Model","Antenna","Height (m)","Power","5 GHz ch / width","2.4 GHz on? ch"],
      rows:[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(n=>["AP-"+String(n).padStart(2,"0"),"","","","","","",""])},
    {t:"note", text:"Rows 11–14 are spare. This table becomes your channel plan in Appendix C."}
  ]},
  {id:"2.5", title:"Configure the 5 GHz radios", blocks:[
    {t:"p", text:"The lab allows 80 MHz, but the report requires **40 MHz** as the starting width. Use 40 MHz."},
    {t:"h", text:"For each AP, one at a time"},
    {t:"check", items:[
      "Open the AP editor.",
      "Confirm the **5 GHz** radio is selected.",
      "Set channel width to 40 MHz.",
      "Check the antenna is right.",
      "Check the mounting height.",
      "Leave transmit power at default for now.",
      "Assign a channel (see below).",
      "Copy the settings into your AP record table."]},
    {t:"h", text:"Picking channels"},
    {t:"check", items:[
      "List the 40 MHz channels allowed in Canada. Check the AP datasheet and course notes.",
      "Mark which ones are **DFS** channels. You'll explain DFS risk in the report.",
      "Give neighbouring APs with strong overlap **different** channels.",
      "Only reuse a channel on APs that are far apart or separated by heavy walls."]},
    {t:"h", text:"Power"},
    {t:"check", items:[
      "Change power only when a map shows a reason.",
      "Don't fix every gap by turning power up. It adds interference."]},
    {t:"h", text:"Quick review"},
    {t:"check", items:[
      "Look at RSSI, AP Coverage, Number of APs, Channel Coverage and SIR maps for 5 GHz.",
      "Fix anything obviously wrong. Detailed review happens in 2.7."]}
  ]},
  {id:"2.6", title:"Configure the 2.4 GHz radios", blocks:[
    {t:"p", text:"You don't need 2.4 GHz on every AP. There are only 3 clean channels, so too many radios cause co-channel interference."},
    {t:"check", items:[
      "Decide which APs keep 2.4 GHz **on**.",
      "Turn 2.4 GHz **off** on the rest.",
      "Set width to **20 MHz** on every enabled radio.",
      "Use channels **1, 6 and 11** only.",
      "Don't give neighbouring APs the same channel.",
      "Check the 2.4 GHz maps for coverage gaps.",
      "Check for too many overlapping 2.4 GHz cells.",
      "Adjust: turn a radio on or off, move an AP, or change power.",
      "Fill in the 2.4 GHz column of your AP record table.",
      "Write one line on why each radio is on or off. You need this for Appendix E."]}
  ]},
  {id:"2.7", title:"Evaluate the heatmaps and refine", blocks:[
    {t:"p", text:"Check **5 GHz first**, then 2.4 GHz. Screenshot every map. Name files clearly, e.g. <code>5GHz_RSSI_before.png</code>."},
    {t:"table", head:["Map","What to look for"], rows:[
      ["RSSI / Signal Level","Are required areas at −70 dBm? Are priority areas at −65 dBm?"],
      ["AP Coverage","Which AP is strongest where. Holes or tiny cells."],
      ["Number of APs","Where 2+ APs overlap. Some helps roaming; too much adds interference."],
      ["Channel Coverage","Neighbours on the same channel that overlap."],
      ["SIR","Where your own APs interfere with each other. **Not** the same as SNR."]]},
    {t:"h", text:"5 GHz review"},
    {t:"check", items:[
      "RSSI at −70 dBm. List every gap in a room that needs coverage.",
      "RSSI at −65 dBm. Check Open Offices, Video Ops, Conference rooms, Testing Lab.",
      "AP Coverage. Note holes and odd cell sizes.",
      "Number of APs. Note good roaming overlap and excessive overlap.",
      "Channel Coverage. Note same-channel neighbours.",
      "SIR. Note low-SIR patches and which APs cause them."]},
    {t:"h", text:"2.4 GHz review"},
    {t:"check", items:[
      "Repeat the same maps for 2.4 GHz.",
      "Confirm disabled radios didn't leave a real gap."]},
    {t:"h", text:"Refinement (needed for Appendix F)"},
    {t:"check", items:[
      "Duplicate the project folder first. That keeps a “before” version.",
      "Save “before” screenshots of the problem map.",
      "Make **one** clear change: move an AP, change a channel, change power, or turn a radio off.",
      "Re-open the same map. Save the “after” screenshot.",
      "Write 3 lines: the problem, the change, the result.",
      "Update the AP record table."]},
    {t:"note", text:"Weak signal outside the building or in a storage room may be fine. Just explain why that area doesn't need coverage."}
  ]},
  {id:"2.8", title:"Generate and submit the lab report", blocks:[
    {t:"h", text:"Generate"},
    {t:"check", items:[
      "Open **Reports**.",
      "Choose the **Technical** report type.",
      "Under Document, enable **Planning** only. Include 2.4 GHz and 5 GHz prediction plots.",
      "Disable every other document section.",
      "Uncheck **KMZ** and **RAW**. Keep Word output.",
      "Select **Ground Floor**. Don't select any scans.",
      "Generate the report.",
      "Open the .docx. Check it shows the AP drawing and colour heatmaps."]},
    {t:"table", head:["Include","Leave out"], rows:[
      ["Planning: AP positions, RSSI, Number of APs, AP coverage, channels, SIR","Site Survey Summary, AP Inventory, Networks, Access Points"],
      ["5 GHz and 2.4 GHz planning","Network details, RF Spectrum, WiFi Quality"],
      ["DOCX","Passive survey, Active survey, KMZ, RAW"]]},
    {t:"h", text:"If pages say “No data is available”"},
    {t:"check", items:[
      "Go back to Planning.",
      "Check the APs are on Ground Floor.",
      "Check each AP has a band assigned.",
      "Check the heatmap actually displays.",
      "Regenerate. A scan is **not** the fix."]},
    {t:"h", text:"Submit Lab 10"},
    {t:"check", items:[
      "The planning-only Word report.",
      "The Acrylic project file (☰ → Project → Project Folder).",
      "Confirm these maps are included, for 2.4 and 5 GHz: RSSI, Channel Coverage, SIR.",
      "Keep all screenshots. You reuse them in Phase 3."]},
    {t:"note", text:"The passive survey demo is optional and not graded. Never put demo scans in your report."}
  ]}
  ]
},
{
  id:"p3", title:"Phase 3 – Wireless design report",
  intro:"Explains and defends your design. 6–8 pages plus appendices.",
  sections:[
  {id:"3.1", title:"Pull out the requirements", blocks:[
    {t:"h", text:"Read the questionnaire"},
    {t:"check", items:[
      "Read Appendix A once, start to finish. No notes.",
      "Read it again. Highlight numbers, room names and anything the customer says “must” or “need”."]},
    {t:"h", text:"Device maths (do the arithmetic yourself)"},
    {t:"table", editableCols:[2], head:["Scenario","How to work it out","Your number"], rows:[
      ["Normal day","Onsite staff (60–75) × 2 devices",""],
      ["Busy / event day","100 people × 2 devices",""],
      ["With growth","Busy-day number × 1.20 to 1.25",""],
      ["Active video users","Pick a % of people on video at once. State it as an assumption.",""]]},
    {t:"check", items:["Explain the difference: **connected devices** vs **people actively on video**."]},
    {t:"h", text:"Room priority table"},
    {t:"table", editableCols:[2,3], head:["Room","Use","Priority: High / Basic / No AP","Why"], rows:[
      ["101 Open Office (11.5 × 6 m)","Desks","",""],
      ["122 Open Office (20 × 14 m)","Desks","",""],
      ["123 Video Operations (13 × 8 m)","Video work","",""],
      ["109 Testing Lab (11 × 9 m, 12 m ceiling)","Demos, testing","",""],
      ["127 Conference (6 × 6 m)","Meetings","",""],
      ["128 Conference (6 × 12 m)","Meetings","",""],
      ["116 Video & Media Lab","Media work","",""],
      ["Offices 105, 106, 107, 110, 111, 112","Private offices","",""],
      ["Corridors 100, 105, 108, 124","Walking / roaming","",""],
      ["115 Resource","Shared room","",""],
      ["Storage 117, 118, 125, 126","Storage","",""],
      ["103 / 104 Washrooms","Washrooms","",""],
      ["102 IT/Server, 113 Elec, 114 / 119 Mech, 116 Comms, 120 Cleaning","Utility","",""]]},
    {t:"check", items:["High = −65 dBm target. Basic = −70 dBm. No AP = explain why."]},
    {t:"h", text:"Assumptions and objectives"},
    {t:"check", items:[
      "List assumptions: client Wi-Fi generations, video bandwidth per call, growth %, guest numbers.",
      "Write measurable objectives, e.g. signal targets per zone and the post-install SNR target."]}
  ]},
  {id:"3.2", title:"Physical RF design write-up (45 marks)", blocks:[
    {t:"p", text:"The lab gave you the design. Now explain it. Use the 4-part “why” for every point."},
    {t:"h", text:"APs and placement"},
    {t:"check", items:[
      "State the final AP count. Explain why that number, not fewer or more.",
      "Name the AP model and Wi-Fi standard. Cite its datasheet.",
      "For each important AP: which zone it serves and why it sits there.",
      "Explain how you handled video hotspots, 20–25% growth and roaming overlap.",
      "List rooms with no AP and why."]},
    {t:"h", text:"Antennas and Testing Lab 109"},
    {t:"check", items:[
      "State antenna type, direction and height for each AP type.",
      "Compare at least 2 Testing Lab options in the table below."]},
    {t:"table", editableCols:[1,2,3], head:["Option","Pros","Cons","Chosen?"], rows:[
      ["Ceiling omni at 12 m","","",""],
      ["Directional / semi-directional","","",""],
      ["Lower wall mount","","",""]]},
    {t:"check", items:["Explain why your choice beats a ceiling omni at 12 m."]},
    {t:"h", text:"Walls"},
    {t:"check", items:[
      "Look up typical loss for concrete, drywall and glass. Cite the source.",
      "Explain how 30 cm concrete affects signal leaving the building.",
      "Explain how 15 cm drywall lets cells overlap. Link it to channel reuse.",
      "Explain the effect of the glass around Conference 127."]},
    {t:"h", text:"Bands and widths"},
    {t:"check", items:[
      "State your choice on 2.4, 5 and 6 GHz.",
      "Explain what older BYOD devices support. Use it to justify 6 GHz yes or no.",
      "Explain 40 vs 20 vs 80 MHz: speed per link vs number of channels to reuse.",
      "Note any exception to 40 MHz and why."]},
    {t:"h", text:"Channel and power plan"},
    {t:"check", items:[
      "Insert the AP record table (from 2.4) as the channel plan.",
      "List which 2.4 GHz radios are on and off, and why.",
      "State starting power levels.",
      "Explain co-channel reuse and DFS risk."]},
    {t:"h", text:"Reading the maps"},
    {t:"check", items:[
      "RSSI: where you hit −65 and −70 dBm, and any gaps.",
      "Channel map: where channels are reused and why it's acceptable.",
      "SIR: where interference appears and what causes it.",
      "Refinement: describe the before/after change from 2.7.",
      "Propose a 25 dB SNR target for the real survey after install.",
      "Always say “predicted”. Never “measured”."]}
  ]},
  {id:"3.3", title:"Logical design and security (25 marks)", blocks:[
    {t:"h", text:"Architecture"},
    {t:"check", items:[
      "List the parts: APs, PoE switches, controller or cloud management, DHCP, DNS, RADIUS, user directory, firewall.",
      "Check the AP datasheet for the PoE level it needs.",
      "Choose controller-based or cloud-managed. Explain why.",
      "State what PDMS must buy or set up. Don't assume they already have a controller, RADIUS or certificates."]},
    {t:"h", text:"Employee Data WLAN"},
    {t:"check", items:[
      "Pick an SSID name and VLAN.",
      "Say who uses it and on which devices.",
      "Compare WPA2-Enterprise, WPA3-Enterprise and transition mode.",
      "Choose an 802.1X / EAP method. Consider how hard it is to set up on personal devices.",
      "Explain onboarding: what an employee does the first time they connect.",
      "Decide if older devices need transition mode. Explain why."]},
    {t:"h", text:"Guest WLAN"},
    {t:"check", items:[
      "Pick an SSID name and VLAN.",
      "Say who uses it: customers, contractors, presenters.",
      "Compare guest options, e.g. captive portal, OWE (Enhanced Open), shared password.",
      "Choose one. Explain why it differs from the employee method.",
      "Explain how guests reach the Internet only.",
      "Explain how guests are blocked from internal networks and from each other."]},
    {t:"h", text:"Access control and management"},
    {t:"check", items:[
      "List what employees need: cloud apps, internal file and media servers.",
      "Explain how management interfaces are limited to IT admins.",
      "Fill the segmentation table below."]},
    {t:"table", editableCols:[1,2,3,4,5], head:["Network","Users","VLAN","Auth / encryption","Allowed","Blocked"], rows:[
      ["Employee Data SSID","","","","",""],
      ["Guest SSID","","","","",""],
      ["Management (wired)","","","","",""]]},
    {t:"check", items:["Describe at least one security option you **rejected**. Explain why: compatibility, user experience, effort or risk."]}
  ]},
  {id:"3.4", title:"Implementation, validation and monitoring (10 marks)", blocks:[
    {t:"h", text:"Install order (write 1–2 lines per step)"},
    {t:"check", items:[
      "1. Confirm cabling and PoE at each AP spot.",
      "2. Mount APs and antennas. Testing Lab gets special mounting.",
      "3. Set up controller or cloud, RADIUS, VLANs, SSIDs.",
      "4. Test connections on both SSIDs.",
      "5. Run the survey. Tune channels and power."]},
    {t:"h", text:"Post-install survey must test"},
    {t:"check", items:[
      "Real RSSI and SNR (passive survey). Compare to −65/−70 dBm and 25 dB SNR.",
      "Coverage in every high-priority room.",
      "A live video call in each priority room.",
      "Roaming: walk the building on a video call. Note drops.",
      "Capacity: many devices active at once.",
      "Employee login works on Windows, Mac, phone and tablet.",
      "Guest isolation: from a guest device, try to reach an internal address. It must fail."]},
    {t:"h", text:"Monitoring plan"},
    {t:"table", editableCols:[1,2,3], head:["What to watch","Alert threshold","Who reviews","Action if triggered"], rows:[
      ["AP / controller down","","",""],
      ["Clients per AP","","",""],
      ["Channel utilization","","",""],
      ["Interference / rogue APs","","",""],
      ["Login (auth) failures","","",""],
      ["DHCP failures","","",""],
      ["Automatic RF changes","","",""]]},
    {t:"check", items:["Keep it simple. The IT team is small. Use email or app alerts, not dashboard watching."]},
    {t:"h", text:"Risks a predictive survey can't solve"},
    {t:"check", items:[
      "Real wall materials may differ.",
      "Actual client devices may be older or weaker.",
      "12 m Testing Lab mounting may behave differently.",
      "Real traffic loads are unknown.",
      "Furniture and people absorb signal."]}
  ]},
  {id:"3.5", title:"Write the report", blocks:[
    {t:"p", text:"Aim for 6–8 pages of writing, not counting title page, maps, big tables and appendices. Write as a proposal to the PDMS IT director, not a lab diary."},
    {t:"table", head:["Section","Marks","Suggested length","Source"], rows:[
      ["1. Executive summary & requirements","10","~1 page","3.1"],
      ["2. Physical RF design","45","~3 pages","2.4–2.7, 3.2"],
      ["3. Logical design & security","25","~1.5–2 pages","3.3"],
      ["4. Implementation & monitoring","10","~1 page","3.4"],
      ["5. Final recommendation & trade-offs","10","~¾ page","All"]]},
    {t:"h", text:"Section 1"},
    {t:"check", items:[
      "Explain the move, the Wi-Fi-only BYOD setup, and why video makes Wi-Fi critical.",
      "Give the device numbers from 3.1. Separate connected devices from active video users.",
      "Summarize the room priority table, including rooms with no AP.",
      "State objectives and assumptions."]},
    {t:"h", text:"Sections 2–4"},
    {t:"check", items:[
      "Turn your 3.2, 3.3 and 3.4 notes into paragraphs.",
      "Refer to figures by name, e.g. “see Appendix B”."]},
    {t:"h", text:"Section 5"},
    {t:"check", items:[
      "Summarize AP count and layout, band and channel plan, and security.",
      "Discuss **at least 3** trade-offs, e.g. 40 vs 80 MHz, 2.4 GHz on vs off, more APs vs more contention, directional vs omni, WPA3-only vs compatibility.",
      "Link the design back to PDMS's needs.",
      "List what still needs confirming after install."]},
    {t:"h", text:"Every paragraph"},
    {t:"check", items:[
      "Uses the 4-part “why”.",
      "Cites datasheets and technical claims.",
      "Has no step-by-step controller config."]}
  ]},
  {id:"3.6", title:"Appendices A–H", blocks:[
    {t:"p", text:"Every figure needs a title and 1–3 sentences explaining it. An image with no explanation earns little."},
    {t:"table", head:["Appendix","Must show","Comes from"], rows:[
      ["A – Annotated floor plan","AP IDs, coverage zones, antennas, mounting notes, key rooms","2.4 screenshot + your labels"],
      ["B – 5 GHz RSSI","Heatmap with legend vs −70 / −65 dBm","2.7"],
      ["C – 5 GHz channel coverage","Channel map + AP-by-AP channel, width, power table","2.7 + 2.4 table"],
      ["D – 5 GHz SIR","Heatmap + what the interference pattern means","2.7"],
      ["E – 2.4 GHz planning","Channel map + which radios are on/off","2.6, 2.7"],
      ["F – Refinement","Before and after maps + what changed","2.7 refinement"],
      ["G – Segmentation","Table or diagram of SSIDs, VLANs, auth, access","3.3"],
      ["H – Final summary","Equipment and AP count, assumptions, validation notes","3.2–3.4"]]},
    {t:"check", items:["A done","B done","C done","D done","E done","F done","G done","H done"]}
  ]},
  {id:"3.7", title:"Final check before submitting", blocks:[
    {t:"check", items:[
      "Every big choice has the 4-part “why”.",
      "Rooms with no AP, disabled 2.4 GHz radios and rejected options are explained.",
      "Acrylic results are called “predicted”, never “measured”.",
      "SIR is never called SNR.",
      "Testing Lab uses 12 m everywhere.",
      "No voice WLAN.",
      "No step-by-step controller config.",
      "The questionnaire is not pasted in as analysis.",
      "Every figure has a title and is discussed.",
      "Datasheets, sources and instructor drawings are cited.",
      "Written part is about 6–8 pages.",
      "Saved as one editable .docx.",
      "You can explain every choice out loud if the instructor asks."]},
    {t:"note", text:"**Tip:** Section 2 is worth 45 of 100 marks. Spend the most time on 2.4–2.7 and 3.2."}
  ]}
  ]
}
];
