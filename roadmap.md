# AHEU University Website Project Roadmap

## Project Overview
This is a website for Almaty Humanitarian Economic University (AHEU) built with React, Express, and TypeScript. The project uses a modern stack including:
- React for the frontend
- Express for the backend
- TypeScript for type safety
- TailwindCSS for styling
- Drizzle ORM for database operations
- Vite for development and building

### Unified Design Approach
We are implementing a cohesive structure for the website:
- **Main Landing Page**: Simple, elegant landing page that serves as an entry point
- **Institution Selection**: Three clear options to choose different institutions
- **Institution Websites**: Each institution will have its own website based on the same design template
  - Consistent UI/UX across all institution websites
  - Color scheme and branding elements customized for each institution
  - Same component structure and layout with institution-specific content
  - Shared backend infrastructure and frontend architecture

## Current State

### Completed Components
- **Basic Website Structure** (to be adapted for institution-specific versions)
  - Landing page with institution selection cards
  - Homepage with university introduction
  - About page with university history and mission
  - Institutes page showing the three main institutes
  - Programs page showing available academic programs
  - Admissions page with application information
  - Contact page with university contact details
- **Institution Theme System**
  - Implemented CSS variables for dynamic institution theming
  - Created institution-specific color schemes
  - Fixed CSS nesting issues with Tailwind
  - Ensured consistent UI across all institution pages

### Backend Structure
- Express server setup with API routes
- Static data for university information, institutes, and programs
- Minimal database schema with users table
- Development and production environment configuration

### Frontend Structure
- React application with routing using Wouter
- UI components using shadcn/ui and Tailwind CSS
- Basic responsive design
- Framer Motion for animations and interactions

## What Needs To Be Done

### High Priority
1. **Institution-Specific Navigation Implementation**
   - Implement detailed dropdown menu structure based on spreadsheet layouts
   - Create consistent navigation experience across different institutions
   - Ensure proper routing for all menu items
   - Add multilingual support for menu items (Russian, Kazakh, English)

2. **Template-Based Design System**
   - Complete the master design system as the foundation for all websites
   - Ensure consistent component styling across institution themes
   - Finalize shared component library with theme-aware styling
   - Verify color palettes for each institution that align with their identities

3. **Database Integration**
   - Implement proper database connections
   - Extend schema to include institution-specific data
   - Create data models for each institution's content needs
   - Move static data from routes.ts to database with institution identifiers

4. **Authentication System**
   - Complete user authentication flow with institution-specific roles
   - Implement role-based access control
   - Add protected routes for admin areas
   - Design a unified login experience with institution selection

### Medium Priority
1. **Institution-Specific Content Pages**
   - Create template pages for each section in the institution navigation
   - Implement content management for institution-specific pages
   - Ensure consistent layout with institution-specific theming
   - Add proper breadcrumb navigation for deep-linking

2. **Multilingual Support**
   - Add Kazakh and Russian language options
   - Implement elegant language switcher on all sites
   - Translate all content with institution-specific terminology
   - Create a streamlined translation workflow for content updates

3. **Dynamic Content Management**
   - Create templated content pages that inherit institutional styling
   - Implement news/blog system with institutional categories
   - Design a shared events calendar with institutional filtering
   - Develop a faculty directory that supports institutional grouping

### Low Priority
1. **Performance Optimization**
   - Implement code splitting for theme-specific components
   - Create a shared asset loading strategy with theme variations
   - Optimize images with automated institutional color processing
   - Develop caching strategies for themed content

2. **Institution-Specific Features**
   - Create virtual campus tours following the design system
   - Implement institution-specific student portals within the main design
   - Customize application processes while maintaining design consistency
   - Develop faculty/staff directories with institutional styling

3. **Testing and Quality Assurance**
   - Test theme consistency across all institution websites
   - Create automated tests to verify proper theme application
   - Implement visual regression testing for institutional variations
   - Establish guidelines for maintaining design consistency during updates

## Technical Approach
1. Create a theme provider that applies institution colors based on route/context
2. Refactor components to use theme variables instead of hardcoded colors
3. Establish component variation system that maintains core structure while allowing for institutional styling
4. Build a comprehensive design system documentation with institution-specific examples

## Next Sprint Goals
1. ✅ Complete the landing page with working institution selection cards
2. ✅ Create theme configuration files for each institution 
3. ✅ Implement a theme provider for dynamic styling
4. ✅ Convert key pages to use the theme system across all institutions
5. Implement detailed navigation structure for each institution (starting with Pedagogy)
6. Create templates for institution-specific content pages based on the menu structure

## Theme Management Protocol
To maintain consistency across institutions:

### Base Theme
- Define core design tokens (spacing, typography, shadows)
- Create a neutral color palette for shared elements
- Establish consistent layout grids and breakpoints
- Document component behaviors and interactions

### Institution Themes
- Create color palettes for each institution based on their identity
- Define primary, secondary, and accent colors for each institution
- Establish rules for color application to maintain accessibility
- Create institution-specific gradient and effect variations

### Theme Application
- Use CSS variables for dynamic color application
- Create a context-based theme provider to detect current institution
- Implement smooth transitions when switching between institutions
- Ensure all components respond appropriately to theme changes

By following this theme-based approach, we will create a cohesive multi-institution experience with consistent user interfaces while still maintaining distinct brand identities through color and subtle styling variations. 