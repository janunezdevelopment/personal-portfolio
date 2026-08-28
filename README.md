# Personal Portfolio Project Context

> Context file for the `personal-portfolio` React project. This repository is a
> personal portfolio site for Javier A. Núñez, not a Quiztopia project or quiz
> app codebase.

## Project Overview

### High-level summary

This project is a responsive personal portfolio for Javier A. Núñez, a
frontend developer based in Miami, Florida, USA. It presents a short
introduction, selected projects, an about page, and contact information.

The primary focus of this repository is the portfolio itself: showcasing the
developer's background, completed work, and professional contact details.

### Goals

- Present the developer and portfolio work clearly on desktop, tablet, and
  mobile layouts.
- Provide direct navigation to Home, Projects, About, and Contact pages.
- Showcase project screenshots, descriptions, live deployments, and source
  repositories.
- Maintain keyboard-accessible navigation and visible focus states.
- Use responsive, fluid typography and spacing rather than fixed layouts.

### Primary technologies

| Area            | Technology                                                |
| --------------- | --------------------------------------------------------- |
| UI              | React 19.2.6                                              |
| Build tool      | Vite 8.0.12                                               |
| Routing         | React Router DOM 7.18.0                                   |
| Language        | JavaScript with JSX, ES modules                           |
| Styling         | One global stylesheet, `src/styles.css`                   |
| Fonts           | Local Sora, Inter Variable, and JetBrains Mono font files |
| Quality tooling | ESLint 10 with React Hooks and React Refresh plugins      |

## Architecture & Structure

### Application flow

- `src/Main.jsx` imports the global stylesheet and mounts `App` inside
  `StrictMode`.
- `src/App.jsx` owns the `BrowserRouter`, shared shell, and route table.
- The shared shell renders `Navbar`, the active route, and `Footer`.
- Page components live in `src/pages/`.
- Reusable layout components live in `src/components/`.
- Images, SVG icons, and local fonts live under `src/assets/`.

### Routes

| Route       | Component  | Purpose                                                     |
| ----------- | ---------- | ----------------------------------------------------------- |
| `/`         | `Home`     | Introduction and link to the project showcase               |
| `/projects` | `Projects` | Scroll-snapped project showcase                             |
| `/about`    | `About`    | Biography, profile image, interests, and background         |
| `/contact`  | `Contact`  | Email address, telephone link, and collaboration invitation |

### Core files

| Path                             | Responsibility                                                                               |
| -------------------------------- | -------------------------------------------------------------------------------------------- |
| `src/App.jsx`                    | Router and shared page shell                                                                 |
| `src/Main.jsx`                   | React entry point and stylesheet import                                                      |
| `src/components/Navbar.jsx`      | Branding, responsive primary navigation, skip link, menu state, focus handling               |
| `src/components/ContentPage.jsx` | Shared content-page layout with optional portrait, title, divider, description, and children |
| `src/components/Footer.jsx`      | GitHub/LinkedIn links and responsive copyright text                                          |
| `src/pages/Home.jsx`             | Portfolio introduction and Projects CTA                                                      |
| `src/pages/Projects.jsx`         | Project data and project cards/screenshots/links                                             |
| `src/pages/About.jsx`            | Personal biography                                                                           |
| `src/pages/Contact.jsx`          | Contact details                                                                              |
| `src/styles.css`                 | Reset, fonts, design tokens, layout, responsive rules, controls, and animations              |
| `vite.config.js`                 | Vite React plugin configuration                                                              |
| `eslint.config.js`               | ESLint flat configuration and ignored `dist` directory                                       |

### Current project data

`src/pages/Projects.jsx` currently showcases a selection of portfolio projects,
including the developer's work across multiple small apps and interfaces. The
featured examples are:

1. **Quiztopia 3000**
   - Live site: `https://quiz3000.netlify.app/`
   - Code: `https://github.com/janunezdevelopment/quiz-project`
   - Assets: `quizzical-screenshot-1.png`, `quizzical-screenshot-2.png`
2. **Unit Conversion**
   - Live site: `https://unit-conversion-app-1.netlify.app/`
   - Code: `https://github.com/janunezdevelopment/unit-conversion-react-app`
   - Assets: `conversion-screenshot-1.png`, `conversion-screenshot-2.png`
3. **Password Generator**
   - Live site: `https://password-generator-jn.netlify.app/`
   - Code: `https://github.com/janunezdevelopment/Password-Generator`
   - Assets: `password-gen-screenshot-1.png`, `password-gen-screenshot-2.png`

## Key Decisions & Guidelines

### Code and structure

- Keep the existing React/Vite architecture and public component APIs unless a
  feature requires otherwise.
- Prefer local components and existing patterns over adding abstractions or
  dependencies without a clear need.
- Keep project-specific content in the page component data structures where it
  is currently defined.
- Use semantic HTML, meaningful image alt text, and links/buttons appropriate
  to their actions.
- Preserve unrelated user changes in a dirty worktree; do not reset or revert
  files without explicit instruction.
- Use `npm run lint` and `npm run build` to validate changes.

### Accessibility and interaction

- The navbar includes a `Skip to main content` link targeting `#main-content`.
- Navigation uses `NavLink` active states and an accessible hamburger button
  with `aria-controls`, `aria-expanded`, and a changing `aria-label`.
- Opening the mobile menu focuses its first link; closing it returns focus to
  the menu button; Escape closes the menu.
- External social links open in a new tab with `noopener noreferrer`.
- Preserve `:focus-visible` outlines and keyboard-operable controls.
- Keep the `tabIndex="-1"` main-content behavior used for skip-link targeting.

### Visual system

- The visual direction is a dark, teal, glass-like portfolio interface over
  `src/assets/imgs/portfolio-background.jpg`.
- Main color tokens are `--jet-black`, `--teal`, `--pale-sky`, `--lavender`,
  and `--white` in `src/styles.css`.
- Use the existing CSS custom properties for colors, fluid type, spacing,
  navbar/footer heights, buttons, shadows, and focus styles.
- Typography uses local Sora for selected branding/navigation and local Inter
  Variable for the main content. JetBrains Mono is available as a font token
  candidate but is not currently used by the components inspected.
- Keep the existing small border radius (`--border-radius: 7px`), translucent
  surfaces, shadows, and restrained teal/cyan accents consistent.
- Use fluid `clamp()` values for type and spacing. The repository CSS note says
  to prefer one clamp-based project-title size and avoid breakpoint overrides
  unless layout requires them.
- For project title underlines, prefer absolute positioning with a fluid gap
  variable instead of using pseudo-element `margin-top`.
- Keep responsive behavior orientation-aware: portrait layouts use the
  hamburger menu, while landscape layouts at `min-width: 640px` use inline
  navigation.
- The Projects page uses vertical scroll snapping, one project at a time, with
  a temporary scroll hint animation.

### Responsive layout rules

- Base layout uses a full viewport-height grid with navbar, content, and footer
  rows.
- Landscape layouts at `min-width: 640px` switch to desktop navigation and
  arrange project screenshots beside project details.
- Portrait tablet rules begin at `min-width: 768px`.
- Larger tablet/desktop adjustments begin at `min-width: 1024px`; large
  landscape adjustments begin at `min-width: 1280px`.
- Test both orientations and narrow widths after changing layout or type.

## Current State & Todo List

### Completed

- React/Vite project scaffold is present and configured.
- Shared router shell is implemented with four portfolio routes.
- Responsive navbar with mobile menu, desktop navigation, active links, skip
  link, focus restoration, and Escape handling is implemented.
- Home, Projects, About, and Contact pages are implemented.
- Three projects have descriptions, screenshots, live links, and code links.
- Footer includes GitHub and LinkedIn links plus responsive copyright text.
- Local font faces, design tokens, responsive breakpoints, glass surfaces,
  buttons, focus styles, and project scroll-snap styling are implemented.

### Immediate next steps

- Run `npm run lint` and `npm run build` after future edits; establish the
  current baseline if not already recorded.
- Add focused automated tests for route rendering and navbar open/close,
  Escape, focus restoration, and responsive behavior if the project grows.
- Verify all external URLs, image assets, and deployed project screenshots.
- Review the remaining responsive CSS after any visual changes at mobile,
  tablet, and desktop breakpoints.
- Keep `README.md` project-specific if onboarding documentation becomes part
  of the next iteration; it is currently the default Vite template text.

## AI Agent Context

When continuing this project, treat `src/styles.css` as the central source of
truth for visual tokens and responsive behavior. Read the nearby component or
page before changing a shared rule, because several layouts rely on the same
classes such as `.heading`, `.divider`, `.button`, `.project-container`, and
`.content-description`.

This project is a personal portfolio website. Project cards and links belong in
`src/pages/Projects.jsx`, while page shell and shared layout changes belong in
`App.jsx`, `Navbar.jsx`, `Footer.jsx`, or `ContentPage.jsx` as appropriate.

There is no test directory or test script in `package.json` at the current
state. The available scripts are:

| Command           | Purpose                           |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start the Vite development server |
| `npm run build`   | Create a production build         |
| `npm run lint`    | Run ESLint across the project     |
| `npm run preview` | Preview the production build      |

The current repository context does not record any agreed feature backlog
beyond the follow-up items above. Do not infer missing requirements from the
filename. Preserve existing content and styling decisions, make focused
changes, and validate behavior with lint/build plus a browser check when a UI
change affects layout or interaction.
