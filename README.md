# Civil Engineering Portfolio — Setup Guide

A ready-to-deploy portfolio with an interactive rotatable 3D model viewer,
a screenshot gallery, filterable projects, and a placement-focused layout.

## 1. File structure

```
portfolio/
├── index.html          ← all the content lives here
├── style.css           ← design/colors/layout
├── script.js           ← interactivity (filters, 3D picker, lightbox, form)
└── assets/
    ├── images/         ← put project screenshots here
    ├── models/         ← put your .glb 3D model files here
    ├── resume/          ← put resume.pdf here
    └── icons/
```

## 2. Replace the placeholder content (do this first)

Open `index.html` in any text editor (VS Code recommended) and replace:

- `Your Name` → his actual name (appears in `<title>`, nav logo, footer, contact)
- The hero heading, tagline, and stats (projects/internships/CGPA)
- The **About** section paragraphs and fact list (college, CGPA, location, software)
- The **Skills** percentages — set `data-level="XX"` on each `.skill-row` (0–100)
- The **Experience & Education** timeline entries
- Each **Project** card: title, description, tag, tool list, and link
- **Certifications** list
- **Contact** email, phone, LinkedIn, GitHub links

Everything is plain text/HTML — no build step, no framework, so it's safe to
hand-edit directly.

## 3. Add real project screenshots

Right now each project card shows a placeholder block with "PROJECT PHOTO".
To use real images:

1. Drop your screenshots into `assets/images/` (e.g. `project1.jpg`).
2. In `index.html`, find the `.proj-media` block for that project and replace:
   ```html
   <div class="ph">PROJECT PHOTO<br>replace with screenshot</div>
   ```
   with:
   ```html
   <img src="assets/images/project1.jpg" alt="Project name" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;">
   ```
3. Do the same for the screenshot gallery `.shot` divs near the 3D model section —
   swap each `<div class="shot">` for an `<img>` tag pointing at `assets/images/`.
4. If you swap `.shot` divs for `<img>` tags, open `script.js` and update the
   lightbox click handler (marked with a comment) to show `shot.src` instead of
   the caption text — a one-line change, the comment tells you exactly where.

## 4. Add the real interactive 3D model (the important part)

The site uses **`<model-viewer>`**, a free Google web component that renders
`.glb`/`.gltf` 3D files directly in the browser — draggable, zoomable, and even
viewable in AR on phones. No 3D coding needed.

### Step A — Export a `.glb` file from whatever he modelled the project in:

| Software      | How to export a .glb/.gltf                                             |
|---------------|--------------------------------------------------------------------------|
| **Revit**     | Export to FBX or IFC → convert with [Autodesk's free FBX→glTF converter](https://github.com/facebookincubator/FBX2glTF) or import the FBX into Blender and export as glTF |
| **SketchUp**  | Install the free **SketchUp glTF exporter** extension, then File → Export → glTF |
| **AutoCAD / Civil 3D** | Export to FBX (File → Export → FBX), then open in **Blender** (free) and export as glTF (`.glb`) |
| **Blender**   | File → Export → glTF 2.0 (`.glb`) — this is the easiest universal path |

If he's not sure, the fastest route for almost any software is:
**export FBX or OBJ → open free Blender → File → Export → glTF 2.0 (.glb)**.

### Step B — Drop the file in and point the code at it

1. Put the exported file at `assets/models/project1.glb`.
2. In `index.html`, find every `<model-viewer ...>` tag (there are two: one in
   the hero, one in the "Interactive 3D Model" section) and change:
   ```html
   src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
   ```
   to:
   ```html
   src="assets/models/project1.glb"
   ```
3. For the model-switcher buttons (`.model-picker`), update the
   `data-model="..."` attribute on each button to point at a different `.glb`
   file, and rename the button labels ("Project 1", "Project 2") to match.

That's it — visitors can drag to orbit, scroll/pinch to zoom, and on a phone
tap "View in your space" to place the model in AR.

**Tip:** keep each `.glb` under ~15MB so it loads quickly. Blender's export
dialog has a "Compression" option (Draco) that shrinks file size a lot with no
visible quality loss — turn it on.

## 5. Add the résumé

Put the PDF at `assets/resume/resume.pdf` (exact name matters — the nav button
already links to that path). Nothing else to change.

## 6. Make the contact form actually work

Right now the form just shows "Message sent" without emailing anyone. To make
it real without a backend:

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a form, copy the endpoint URL it gives you
   (looks like `https://formspree.io/f/xxxxxxx`).
3. In `index.html`, change:
   ```html
   <form class="contact-form" id="contactForm">
   ```
   to:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/xxxxxxx" method="POST">
   ```
4. In `script.js`, delete the line `e.preventDefault();` inside the submit
   handler so the form actually posts to Formspree.

Messages will now land straight in his inbox.

## 7. Preview it locally

Just double-click `index.html` to open it in a browser — no server needed.
(If the 3D model doesn't load when opened directly as a file, right-click the
`portfolio` folder → "Open with Live Server" in VS Code, or use step 8 below —
some browsers restrict local file loading for 3D assets.)

## 8. Deploy it for free (recommended: Netlify, same as the reference site)

**Easiest — drag and drop:**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the whole `portfolio` folder onto the page
3. Done — it gives a live URL in seconds. Add a custom domain later if wanted.

**Alternative — GitHub Pages:**
1. Create a new GitHub repo, upload all these files
2. Repo Settings → Pages → set source to the `main` branch
3. GitHub gives a live URL at `yourusername.github.io/reponame`

## 9. Before sending to recruiters — quick checklist

- [ ] Real name, email, phone, LinkedIn everywhere (search for "Your Name" / "example.com" to catch leftovers)
- [ ] At least one real project screenshot and one real `.glb` model uploaded
- [ ] Résumé PDF in place and the download button tested
- [ ] Skill percentages reflect him honestly — recruiters do ask about these in interviews
- [ ] Tested on a phone (the whole layout is responsive, but always double-check)
- [ ] Spelling/grammar pass on every project description
