# Abdul Hadi | Personal Portfolio

A multi-page, static portfolio built with plain HTML, CSS, and JavaScript for the EPITECH Portfolio assignment.

## Design direction

An editorial engineering notebook: warm paper, bold ink, vermilion, strong typographic rhythm, and project-specific conceptual artwork. No UI kit or front-end framework is required. The work pages describe context, tools, technical challenges, and lessons, not invented performance metrics.

## Structure

- `index.html` — landing page, portrait, selected work, introduction
- `work.html` — projects index
- `projects/*.html` — individual project reflections
- `about.html` — background, education, and skills
- `journal.html` — learning progress and events beyond school projects
- `contact.html` — contact information and front-end email form
- `css/style.css` — responsive layout, visual system, print-independent site styles
- `js/script.js` — mobile navigation, saved theme preference, and email-draft handoff
- `assets/` — local portrait, original SVG favicon, and downloadable PDF CV

## Running locally

Opening `index.html` works for basic browsing. For reliable local testing, run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Contact form behavior

The form uses the standard `mailto:` URI scheme. After browser-side validation, it opens a draft in the visitor's configured email application. It **does not send a message automatically**, persist data, or require a backend. The public email address is also displayed as a fallback.

## Publishing

1. Commit all files to a public GitHub repository.
2. In **Settings → Pages**, choose **Deploy from a branch**, select the `main` branch and `/ (root)`.
3. Save. GitHub Pages will publish future pushes automatically; there is no build step.
4. Check the deployed URL, mobile layout, navigation, and links.

Publishing isn't performed by this downloadable archive. Configure it in your own repository.

## Assets and attribution

- Portrait: user-supplied image. Confirm you have permission to publish it publicly.
- Favicon, diagrams and website styles: original code and CSS created for this portfolio.
- Fonts: operating-system fallback fonts (Impact/Arial Narrow, Georgia, Courier New, Arial); there are no third-party font downloads.
- The project graphics are **concept illustrations**, not screenshots or proof that a feature is deployed.
- The included PDF is a concise CV built from the information in the provided CV and portfolio. Review it for accuracy before publishing.

## Before submission

- Verify every project link and update project descriptions to match actual repositories.
- Add genuine screenshots, demos, or documentation if available; properly attribute all additional assets.
- Publish online and confirm GitHub Pages rebuilds after a push.
- Check contrast, keyboard access, and performance using Chrome Lighthouse.
- Proofread the personal reflections; edit them to match your experience and learning.
