# AHEU University Website - Next.js & TypeScript Roadmap (Updated)

**Project Goal:** Develop a modern, performant, and informative website for Almaty Humanitarian Economic University (AHEU) using Next.js and TypeScript, focusing on showcasing the university's strengths, particularly its three core institutes.

**Technology Stack:**
*   **Frontend:** Next.js (with App Router or Pages Router - TBD, App Router recommended for new projects)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Deployment:** Vercel, Netlify, or similar
*   **i18n:** `react-i18next` implemented

**Legend:**
*   `[ ]`: Task to be done
*   `[x]`: Task completed
*   `(TBD)`: To Be Decided
*   `(!)`: Important consideration or potential blocker

---

## Phase 0: Project Setup & Foundation (Week 1)

**Milestone 0.1: Project Initialization & Environment Setup**
*   [x] Initialize Next.js project (`create-next-app`) with TypeScript
*   [x] Setup ESLint, Prettier, and Husky for code quality and consistency
*   [x] Configure TypeScript `tsconfig.json` for strictness and path aliases
*   [x] Initialize Git repository and push to remote (e.g., GitHub, GitLab)
*   [x] Define project structure (components, pages/app, lib, styles, public, etc.)

**Milestone 0.2: Core Dependencies & Configuration**
*   [x] Decide on and install styling solution (Tailwind CSS installed and configured)
*   [x] Install and configure i18n library (react-i18next). Set up initial language files (RU, KZ, EN)
*   [x] Setup basic layout components (Navbar, Footer, MainLayout)
*   [x] Implement basic responsive design breakpoints

**Milestone 0.3: Design System & Brand Integration**
*   [x] Define color palette in CSS variables/theme based on brand book (dark green primary, neutrals)
*   [x] Configure typography using `@font-face` with proper font families
*   [x] Create basic UI components (Button, Link, Card - styled according to brand)
*   [x] Integrate AHEU logo variants as per brand book

---

## Phase 1: Core Pages Development (Week 2-3)

**Milestone 1.1: Landing Page**
*   [x] Develop Header component with logo, navigation, and language switcher
*   [x] Develop Hero Section featuring the 3 institutes prominently
    *   [x] Create visually striking cards for each institute
    *   [x] Implement smooth animations and transitions for an impressive first impression
    *   [x] Ensure responsive design for all screen sizes
*   [x] Develop Footer with essential links and contact information
*   [x] Ensure the Landing Page is fully responsive and optimized

**Milestone 1.2: Navigation & Footer**
*   [x] Implement main navigation (Navbar) with essential links
    *   [x] Implement dropdowns for sections with sub-pages
    *   [x] Implement language switcher
*   [x] Implement Footer with required links (Contact, Social, Privacy, etc.)
*   [x] Ensure navigation is responsive (e.g., hamburger menu for mobile)

---

## Phase 2: Institute Landing Pages (Week 4-5)

**Milestone 2.1: Institute Landing Page Template**
*   [x] Design and develop a reusable template for institute landing pages
*   [x] Include sections for:
    *   [x] Institute overview/introduction
    *   [x] Programs offered (Bachelor's, Master's)
    *   [x] Faculty highlights
    *   [x] Unique selling points/advantages
*   [x] Ensure template is responsive and visually appealing

**Milestone 2.2: Individual Institute Pages**
*   **Institute of Pedagogy, Business and Law**
    *   [x] Implement page using the template
    *   [x] Add institute-specific content and imagery
    *   [x] List relevant academic programs
*   **Institute of Economics, Statistics and IT Technologies**
    *   [x] Implement page using the template
    *   [x] Add institute-specific content and imagery
    *   [x] List relevant academic programs
*   **"Symbat" Institute of Design and Technology**
    *   [x] Implement page using the template
    *   [x] Add institute-specific content and imagery
    *   [x] List relevant academic programs

---

## Phase 3: Enhancements & Optimization (Week 6)

**Milestone 3.1: Visual Enhancements**
*   [x] Add advanced animations and transitions where appropriate
*   [x] Optimize and enhance all UI components
*   [x] Ensure visual consistency across all pages
*   [ ] Implement dark/light mode if required

**Milestone 3.2: Performance Optimization**
*   [x] Analyze bundle sizes and optimize (code splitting, dynamic imports)
*   [x] Leverage Next.js image optimization (`<Image />` component)
*   [x] Implement static site generation for all pages
*   [x] Minify CSS and JavaScript
*   [x] Test site speed using Lighthouse, PageSpeed Insights

**Milestone 3.3: Accessibility & SEO**
*   [x] Ensure sufficient color contrast
*   [x] Add ARIA attributes where necessary
*   [x] Implement basic SEO optimizations (meta tags, sitemap)
*   [x] Test with keyboard navigation

---

## Phase 4: Testing & Deployment (Week 7)

**Milestone 4.1: Testing**
*   [x] Test on various browsers (Chrome, Firefox, Safari, Edge)
*   [x] Test on different devices and screen sizes
*   [x] User acceptance testing with stakeholders

**Milestone 4.2: Deployment**
*   [x] Setup deployment configuration for chosen platform (Replit)
*   [x] Configure domain and DNS settings
*   [x] Deploy production version
*   [x] Perform final testing on live site

---

## Completed Enhancements

**Navigation Improvements:**
* [x] Implemented modern, visually consistent dropdown mega-menus for all navigation sections
* [x] Enhanced menu organization with logical grouping and category indicators
* [x] Added contextual icons and visual cues to improve usability
* [x] Implemented responsive card-based layouts for all dropdown menus
* [x] Added color-coded category tags to improve content differentiation
* [x] Ensured consistent styling and visual appeal across all navigation components

**Hero Section:**
* [x] Created a fully responsive hero section with animated institute cards
* [x] Implemented video background with gradient overlay
* [x] Added smooth hover animations for interactive elements
* [x] Ensured perfect centering and alignment across all device sizes

**Contact Section:**
* [x] Implemented responsive contact information layout
* [x] Fixed alignment issues in buttons and links
* [x] Added proper map placeholder with location information

**Institute Pages:**
* [x] Developed consistent styling across all institute pages
* [x] Implemented responsive layouts for program listings
* [x] Added proper navigation between institutes

**General:**
* [x] Improved overall site performance and loading speed
* [x] Enhanced mobile responsiveness across all sections
* [x] Implemented proper i18n support for multilingual content 