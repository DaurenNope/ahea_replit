# AHEU University Website - Next.js & TypeScript Roadmap (Updated)

**Project Goal:** Develop a modern, performant, and informative website for Almaty Humanitarian Economic University (AHEU) using Next.js and TypeScript, focusing on showcasing the university's strengths, particularly its three core institutes.

**Technology Stack:**
*   **Frontend:** Next.js (with App Router or Pages Router - TBD, App Router recommended for new projects)
*   **Language:** TypeScript
*   **Styling:** TBD (e.g., Tailwind CSS, CSS Modules, Styled Components)
*   **Deployment:** Vercel, Netlify, or similar
*   **i18n:** `next-i18next` or similar

**Legend:**
*   `[ ]`: Task to be done
*   `[x]`: Task completed
*   `(TBD)`: To Be Decided
*   `(!)`: Important consideration or potential blocker

---

## Phase 0: Project Setup & Foundation (Week 1)

**Milestone 0.1: Project Initialization & Environment Setup**
*   [ ] Initialize Next.js project (`create-next-app`) with TypeScript
*   [ ] Setup ESLint, Prettier, and Husky for code quality and consistency
*   [ ] Configure TypeScript `tsconfig.json` for strictness and path aliases
*   [ ] Initialize Git repository and push to remote (e.g., GitHub, GitLab)
*   [ ] Define project structure (components, pages/app, lib, styles, public, etc.)

**Milestone 0.2: Core Dependencies & Configuration**
*   [ ] Decide on and install styling solution (e.g., `npm install tailwindcss postcss autoprefixer`)
*   [ ] Install and configure i18n library (e.g., `next-i18next`). Set up initial language files (RU, KZ, EN)
*   [ ] Setup basic layout components (Navbar, Footer, MainLayout)
*   [ ] Implement basic responsive design breakpoints

**Milestone 0.3: Design System & Brand Integration**
*   [ ] Define color palette in CSS variables/theme based on brand book (dark green primary, neutrals, NO ORANGE)
*   [ ] Configure typography (URW Gothic family) using `@font-face` or a font provider
*   [ ] Create basic UI components (Button, Link, Card - styled according to brand)
*   [ ] Integrate AHEU logo variants as per brand book

---

## Phase 1: Core Pages Development (Week 2-3)

**Milestone 1.1: Landing Page**
*   [ ] Develop Header component with logo, navigation, and language switcher
*   [ ] Develop Hero Section featuring the 3 institutes prominently
    *   [ ] Create visually striking 3D/animated cards for each institute
    *   [ ] Implement smooth animations and transitions for an impressive first impression
    *   [ ] Ensure responsive design for all screen sizes
*   [ ] Develop Footer with essential links and contact information
*   [ ] Ensure the Landing Page is fully responsive and optimized

**Milestone 1.2: Navigation & Footer**
*   [ ] Implement main navigation (Navbar) with essential links
    *   [ ] Implement dropdowns for sections with sub-pages
    *   [ ] Implement language switcher
*   [ ] Implement Footer with required links (Contact, Social, Privacy, etc.)
*   [ ] Ensure navigation is responsive (e.g., hamburger menu for mobile)

---

## Phase 2: Institute Landing Pages (Week 4-5)

**Milestone 2.1: Institute Landing Page Template**
*   [ ] Design and develop a reusable template for institute landing pages
*   [ ] Include sections for:
    *   [ ] Institute overview/introduction
    *   [ ] Programs offered (Bachelor's, Master's)
    *   [ ] Faculty highlights
    *   [ ] Unique selling points/advantages
*   [ ] Ensure template is responsive and visually appealing

**Milestone 2.2: Individual Institute Pages**
    *   [ ] **Institute of Pedagogy, Business and Law**
    *   [ ] Implement page using the template
    *   [ ] Add institute-specific content and imagery
    *   [ ] List relevant academic programs
    *   [ ] **Institute of Economics, Statistics and IT Technologies**
    *   [ ] Implement page using the template
    *   [ ] Add institute-specific content and imagery
    *   [ ] List relevant academic programs
    *   [ ] **"Symbat" Institute of Design and Technology**
    *   [ ] Implement page using the template
    *   [ ] Add institute-specific content and imagery
    *   [ ] List relevant academic programs

---

## Phase 3: Enhancements & Optimization (Week 6)

**Milestone 3.1: Visual Enhancements**
*   [ ] Add advanced animations and transitions where appropriate
*   [ ] Optimize and enhance all UI components
*   [ ] Ensure visual consistency across all pages
*   [ ] Implement dark/light mode if required

**Milestone 3.2: Performance Optimization**
*   [ ] Analyze bundle sizes and optimize (code splitting, dynamic imports)
*   [ ] Leverage Next.js image optimization (`<Image />` component)
*   [ ] Implement static site generation for all pages
*   [ ] Minify CSS and JavaScript
*   [ ] Test site speed using Lighthouse, PageSpeed Insights

**Milestone 3.3: Accessibility & SEO**
*   [ ] Ensure sufficient color contrast
*   [ ] Add ARIA attributes where necessary
*   [ ] Implement basic SEO optimizations (meta tags, sitemap)
*   [ ] Test with keyboard navigation

---

## Phase 4: Testing & Deployment (Week 7)

**Milestone 4.1: Testing**
*   [ ] Test on various browsers (Chrome, Firefox, Safari, Edge)
*   [ ] Test on different devices and screen sizes
*   [ ] User acceptance testing with stakeholders

**Milestone 4.2: Deployment**
*   [ ] Setup deployment configuration for chosen platform (Vercel/Netlify)
*   [ ] Configure domain and DNS settings
*   [ ] Deploy production version
*   [ ] Perform final testing on live site

---

**Key Considerations & Decisions:**

*   **App Router vs. Pages Router:** App Router is the future for Next.js. If starting new, strongly consider it.
*   **Styling Solution:** Make a firm decision early (Tailwind, CSS Modules, etc.) for consistency.
*   **Content Management:** Since there's no backend, all content will be static and hardcoded in the components or stored as static JSON files.
*   **Animations:** Focus on creating impressive animations, especially for the 3 institute cards in the hero section.
*   **Performance:** Without a backend, focus on making the site extremely fast and responsive.

This roadmap is focused on delivering a high-quality static site that showcases the three institutes effectively. The timeline is compressed compared to the original plan since no backend/CMS integration is required.


How to use this in VSCode:

Create a new file named ROADMAP.md in the root of your Next.js project.

Copy the entire content above and paste it into ROADMAP.md.

VSCode has excellent Markdown preview capabilities. You can open the preview (Ctrl+Shift+V or Cmd+Shift+V) to see it rendered nicely.

As you complete tasks, you can change [ ] to [x].

This provides a strong, actionable base for your project. Remember to adapt it as the project evolves and new requirements or challenges arise.