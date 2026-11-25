# AI Learning Journey

A lightweight, responsive AI learning platform built with vanilla HTML, CSS, and JavaScript.

## Features
- Six-stage AI learning roadmap with topic and practice checklists
- Local progress tracking using browser localStorage
- Module completion celebrations and achievement badges
- Curated resource library with search and category filters
- Resource editor for adding links
- Device requirements and setup checklist
- Personal learning notes
<!-- - Optional career preparation section -->

## Run locally
Open `index.html` in a browser. For the best experience, use VS Code with the Live Server extension.

## Deploy with GitHub Pages
1. Create a new GitHub repository (for example, `ai-learning-journey`).
2. Upload `index.html`, `styles.css`, `app.js`, and this README to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then Save.
6. Wait for GitHub Pages to publish the site. Your URL will look like `https://YOUR-USERNAME.github.io/ai-learning-journey/`.

## Editing learning resources
Open the Resource library page and use the Resource editor form to add links. The initial resources are defined in `defaultResources` inside `app.js`.

### Important storage note
Progress, notes, setup checklist, and resources edited through the website are stored in the current browser's `localStorage`. They are not shared or synchronized between devices or different browsers. The default resource list is part of the source code, so your friend starts with the same curated links on a fresh browser. If you want shared progress, accounts, or a central admin panel later, connect a backend such as Supabase or Firebase.

## Hardware note
The device recommendations are learning-oriented guidelines, not strict minimums. Large-model training from scratch is not expected in this roadmap. Use pretrained models, APIs, small experiments, and cloud notebooks when local compute is limited. Cloud GPU availability, quotas, and pricing can change.
