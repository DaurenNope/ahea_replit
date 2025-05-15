# AHEU University Website - Design Guidelines (design.md)

**Project Goal:** To create a visually compelling, modern, professional, and user-friendly design for the Almaty Humanitarian Economic University (AHEU) website that reflects its status as a leading educational institution, aligns with its brand identity, and effectively serves a multilingual audience (Russian, Kazakh, English).

**Design References:**
*   University of Toronto (utoronto.ca)
*   University of Melbourne (unimelb.edu.au)

**Core Design Principles Inspired by References:**
1.  **Clean & Uncluttered Layout:** Prioritize readability and ease of navigation. Ample white space is key.
2.  **Strong Visual Hierarchy:** Guide users' attention to the most important information through size, color, contrast, and placement.
3.  **Professional & Trustworthy Aesthetic:** Convey academic rigor and institutional stability.
4.  **High-Quality Imagery:** Use professional photography and videography to showcase the campus, student life, and Almaty.
5.  **Intuitive Navigation:** Simple, predictable, and easily accessible main navigation and search functionality.
6.  **Mobile-First & Responsive:** Ensure a seamless experience across all devices.
7.  **Accessibility (WCAG):** Design with accessibility in mind from the start (color contrast, font sizes, keyboard navigation).
8.  **Consistent Branding:** Uniform application of colors, typography, and logo.

---

## I. Layout & Structure

*   **Grid System:**
    *   Implement a consistent grid system (e.g., 12-column) for all pages to ensure alignment and visual harmony.
    *   Define standard gutter widths and margins.
*   **White Space:**
    *   Utilize generous white space (or negative space) around elements to improve readability and reduce cognitive load. Avoid overcrowding.
*   **Max Width:**
    *   Content areas should have a maximum width (e.g., 1200px - 1440px) for comfortable reading on larger screens, similar to reference sites. Backgrounds can extend full-width.
*   **Page Structure:**
    *   **Header/Navbar:** Clean, prominent, with clear branding (AHEU logo), main navigation links, language switcher, and possibly a search icon.
        *   _Reference UofT/UniMelb for fixed/sticky navigation on scroll for easy access._
    *   **Hero Sections:** Impactful, full-width or near full-width visuals with concise, powerful messaging and clear Call-to-Actions (CTAs).
    *   **Content Sections:** Break down information into digestible chunks using clear headings, subheadings, and visually distinct sections.
    *   **Footer:** Comprehensive, well-organized with quick links, contact information, social media icons, copyright, and legal links.
*   **Card-Based Design:**
    *   Use cards effectively for displaying summarized information like programs, news articles, institute highlights, and events. Ensure consistent card styling.
    *   _Reference UniMelb's use of cards for program discovery and news._

---

## II. Color Palette (Based on Brand Book & No Orange Constraint)

*   **Primary Color:**
    *   **Dark Green:** `#003826` (from brand book). This will be the dominant brand color used for headings, CTAs, accents, and backgrounds of key sections.
*   **Secondary/Accent Colors:**
    *   **Lighter Green (Monochromatic):** `#006343` (from brand book - can be used for secondary buttons, hover states, or subtle section backgrounds if needed to break monotony without introducing new hues).
    *   **Tan/Beige (Subtle Accent):** `#CC9966` (from brand book - **Use EXTREMELY sparingly** as per "no orange" constraint. If it reads too orange, avoid entirely. If used, it could be for minor accents like horizontal rules or specific, non-primary CTAs where it doesn't clash. Test thoroughly). *Alternative: A desaturated, more neutral beige if `#CC9966` is too warm.*
*   **Neutral Colors:**
    *   **White:** `#FFFFFF` (for backgrounds, text on dark backgrounds).
    *   **Light Grays:** e.g., `#F8F9FA`, `#E9ECEF` (for subtle backgrounds, borders, section dividers).
    *   **Dark Grays/Off-Black:** e.g., `#212529`, `#343A40` (for body text on light backgrounds, secondary text).
*   **Functional Colors:**
    *   **Error/Alert:** A muted red (e.g., a desaturated, less vibrant red than typical error red, to maintain professionalism).
    *   **Success:** A muted, desaturated green (distinct from the brand greens).
    *   **Warning:** A muted amber/yellow (if absolutely necessary, ensuring it doesn't lean orange).
*   **Color Usage:**
    *   Primary dark green should establish the brand.
    *   Neutrals will form the backbone of the layout, ensuring content is legible.
    *   Maintain high contrast ratios for text and background colors for accessibility.
    *   _Reference UofT/UniMelb's balance of strong brand colors with ample white/neutral space._

---

## III. Typography (Based on Brand Book)

*   **Primary Font Family:** **URW Gothic**
    *   **Headings (H1-H6):** `URW Gothic Demi` (or a bolder weight if available and suitable).
        *   Clear hierarchy in heading sizes. H1 largest, H6 smallest.
        *   Ensure sufficient line height for readability.
    *   **Body Text:** `URW Gothic Book` (or regular weight).
        *   Font size: 16px - 18px for optimal readability.
        *   Line height: 1.5 - 1.7 for comfortable reading.
    *   **Captions/Meta Text:** `URW Gothic Book` or `URW Gothic Oblique` (smaller size, e.g., 12px-14px).
    *   **Buttons/CTAs:** `URW Gothic Demi` or `Book` (depending on emphasis).
*   **Font Loading:**
    *   Use `@font-face` for self-hosting or a reliable web font service if URW Gothic is available.
    *   Implement font display strategies (e.g., `font-display: swap;`) to avoid FOIT/FOUT.
*   **Multilingual Considerations:**
    *   **Crucial:** Ensure URW Gothic supports Cyrillic (Russian, Kazakh) and Latin (English) character sets comprehensively.
    *   If URW Gothic has limitations for any script, a complementary, highly legible fallback font specific to that script might be needed (e.g., a system font or another web font known for good Cyrillic support). This should be a last resort to maintain brand consistency.
    *   Test line heights and letter spacing across languages, as text can expand/contract.

---

## IV. Imagery & Iconography

*   **Photography:**
    *   High-quality, professional, and authentic.
    *   Showcase:
        *   Modern campus facilities and architecture.
        *   Diverse student body engaged in learning and campus activities.
        *   Faculty interacting with students.
        *   Vibrant Almaty cityscapes (where relevant).
        *   Research and innovation.
    *   Avoid generic stock photos.
    *   Optimize all images for the web (compression, appropriate formats: WebP, JPG, PNG).
    *   _Reference UofT/UniMelb's use of strong, aspirational photography._
*   **Videography:**
    *   Short, engaging videos for hero sections or specific program pages.
    *   Focus on storytelling and student/faculty experiences.
*   **Illustrations/Graphics:**
    *   If used, they should align with the professional and modern aesthetic.
    *   The geometric pattern from the brand book can be used subtly as a background texture or section divider.
*   **Iconography:**
    *   Use a consistent set of icons (e.g., Material Design Icons, Font Awesome, or a custom set).
    *   Icons should be simple, clear, and recognizable.
    *   Use SVG icons for scalability and crispness.
    *   Ensure icons are culturally appropriate for all target languages.
    *   The brand book provides examples for "Recognition" badges (THE, IAAR, QS) and social media icons – adhere to these. The "actuals" icons from the brand book (for Instagram Stories) can inspire a general icon style: clean, possibly duotone (brand green + white/light gray).

---

## V. UI Elements & Interactivity

*   **Buttons:**
    *   **Primary CTA:** Solid dark green (`#003826`) background, white text. Clear hover and active states (e.g., slightly lighter/darker green or subtle shadow).
    *   **Secondary CTA:** Outlined dark green, or solid lighter green (`#006343`).
    *   Consistent padding and border-radius (e.g., slightly rounded corners for a modern feel, similar to references).
*   **Links:**
    *   Standard links in body text should be clearly distinguishable (e.g., a distinct color from the brand palette or underline).
    *   Consistent hover/focus states for links.
*   **Forms:**
    *   Clean, simple input fields.
    *   Clear labels and placeholders.
    *   Adequate spacing between fields.
    *   Visible focus states on input fields.
    *   Clear error messaging.
*   **Navigation:**
    *   Dropdown menus for main navigation should be smooth and easy to use.
    *   Mobile navigation (hamburger menu) should be intuitive and provide access to all main sections.
    *   "Breadcrumbs" for easy navigation within deep sections.
*   **Modals/Pop-ups:**
    *   Use sparingly. Design should be consistent with the overall site aesthetic.
    *   Clear close buttons and accessible.
*   **Loading States:**
    *   Subtle loaders or skeleton screens for content being fetched dynamically to improve perceived performance.

---

## VI. Multilingual Design Considerations

*   **Language Switcher:**
    *   Prominently placed, typically in the header.
    *   Clear indication of the current language and available languages (e.g., "RU | KZ | EN" or globe icon with dropdown).
*   **Text Expansion/Contraction:**
    *   Design layouts to accommodate varying text lengths between Russian, Kazakh, and English.
    *   Buttons, navigation items, and content blocks need to be flexible.
*   **Right-to-Left (RTL) Support:**
    *   Not explicitly requested for RU/KZ/EN, but good to keep in mind if Arabic or Hebrew were ever considered. For now, focus on LTR.
*   **Cultural Nuances:**
    *   Ensure imagery and iconography are culturally sensitive and appropriate for all target audiences.
*   **Font Rendering:**
    *   Thoroughly test how URW Gothic (and any fallbacks) render in all three languages across different browsers and operating systems.

---

## VII. Specific Page Design Notes

*   **Homepage Hero:**
    *   Needs to make a strong first impression. A full-width, high-quality video or a rotating carousel of impactful images could work.
    *   Overlay text (University name, tagline) must have high contrast with the background.
*   **"Our Institutes" Section (Homepage & Main Section):**
    *   **Critical for Prominence:** Design this to be highly visible and engaging.
    *   Use visually appealing cards for each of the three institutes. Each card could feature:
        *   A representative icon or image.
        *   The institute's name (clear and bold).
        *   A very brief (1-2 sentence) description.
        *   A clear CTA like "Learn More" or "Explore [Institute Name]".
    *   _Reference UniMelb's "Study Areas" or UofT's faculty listings for inspiration on grouping and presenting academic units._
*   **Program Pages:**
    *   Clear structure: Overview, Curriculum, Entry Requirements, Career Outcomes, How to Apply.
    *   Use accordions or tabs for lengthy information to keep the page scannable.
*   **Contact Page:**
    *   Interactive map (Google Maps or similar).
    *   Clearly listed phone numbers, email addresses (priem.ageu@mail.ru), and physical address (36, Aksay-3 microdistrict, 050031).
    *   Contact form.

---

**Design Review & Iteration:**

*   Regularly review designs with stakeholders to ensure alignment with vision and brand.
*   Conduct usability testing (even informal) with target users to identify pain points.
*   Iterate on designs based on feedback and testing results.

This document should serve as a living guide for the design phase. It will be updated as more specific decisions are made and as the project progresses.