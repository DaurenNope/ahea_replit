# AHEU University Website Project Roadmap

## Project Overview
This is a website for Almaty Humanitarian Economic University (AHEU) built with React, Express, and TypeScript. The project uses a modern stack including:
- React for the frontend
- Express for the backend
- TypeScript for type safety
- TailwindCSS for styling
- Drizzle ORM for database operations
- Vite for development and building

### New Architectural Approach
We are implementing a new structure for the website:
- **Main Landing Page**: Simple, elegant landing page that serves as an entry point
- **Institution Selection**: Three clear options to choose different institutions
- **Institution Websites**: Each institution will have its own full-featured website
  - Similar in functionality to modern university websites like [Q University](https://quniversity.netlify.app/)
  - Different visual design and brand identity for each institution
  - Shared backend infrastructure but separate frontend experiences

## Current State

### Completed Components
- **Basic Website Structure** (to be refactored for new architecture)
  - Homepage with university introduction
  - About page with university history and mission
  - Institutes page showing the three main institutes
  - Programs page showing available academic programs
  - Admissions page with application information
  - Contact page with university contact details

### Backend Structure
- Express server setup with API routes
- Static data for university information, institutes, and programs
- Minimal database schema with users table
- Development and production environment configuration

### Frontend Structure
- React application with routing using Wouter
- UI components using shadcn/ui and Tailwind CSS
- Basic responsive design

## What Needs To Be Done

### High Priority
1. **Architectural Refactoring**
   - Create new landing page design with the three institution options
   - Set up routing structure for multiple institution websites
   - Implement shared components library to maintain consistency while allowing for design variations
   - Develop institution-specific themes and styles

2. **Database Integration**
   - Implement proper database connections
   - Extend schema to include institution-specific data
   - Create data models for each institution's content needs
   - Move static data from routes.ts to database with institution identifiers

3. **Authentication System**
   - Complete user authentication flow with institution-specific roles
   - Implement role-based access control
   - Add protected routes for admin areas
   - Consider single sign-on across all institution websites

4. **Institution Websites Development**
   - Create template for institution websites with customizable components
   - Implement essential pages for each institution:
     - Home page (institution-specific)
     - About (history, mission, vision)
     - Academic schools/departments
     - Programs offered
     - Admissions information
     - Student resources
     - News and events
     - Contact information

### Medium Priority
1. **Enhanced UI/UX**
   - Develop distinctive yet cohesive visual identity for each institution
   - Ensure consistent navigation patterns across all sites
   - Implement responsive design for all devices
   - Add animations and transitions appropriate to each institution's branding

2. **Multilingual Support**
   - Add Kazakh and Russian language options
   - Implement language switcher
   - Translate all content with institution-specific terminology
   - Consider cultural differences in design elements

3. **Dynamic Content Management**
   - Institution-specific news/blog systems
   - Events calendar for each institution
   - Faculty directory by institution
   - Shared and institution-specific resources

### Low Priority
1. **Performance Optimization**
   - Implement code splitting across institution sites
   - Optimize asset loading with institution-specific bundles
   - Image optimization with CDN integration
   - Caching strategy for shared and unique content

2. **Institution-Specific Features**
   - Virtual campus tours for each institution
   - Institution-specific student portals
   - Custom application processes for different programs
   - Faculty/staff directories by institution

3. **Testing**
   - Unit tests for shared and institution-specific components
   - Integration tests for API with institution context
   - End-to-end testing for user journeys across institutions

## Technical Debt to Address
1. Remove unused dependencies from package.json
2. Refactor hardcoded data in routes.ts to support the multi-institution approach
3. Implement proper error handling throughout the application, accounting for institution context
4. Improve TypeScript type safety, especially for institution-specific data structures

## Next Sprint Goals
1. Design and implement the main landing page with institution selection
2. Create basic templates for institution websites
3. Refactor database schema to support multi-institution architecture
4. Implement routing structure for navigating between institutions

## MCP (Model-Context-Persistence) Protocol
To maintain context throughout development:

### Model
- Use consistent data models with institution identifiers
- Define clear interfaces for all entities, both shared and institution-specific
- Keep models in shared directory for access by both client and server
- Extend the current schema.ts with all required entities and institution relationships

### Context
- Maintain state using React Query for client-side
- Implement proper context providers for authentication, language, and institution selection
- Document API endpoints with expected request/response formats, including institution context
- Keep a development journal of major changes

### Persistence
- Use Drizzle ORM consistently for all database operations
- Implement proper migrations strategy for the multi-institution approach
- Define clear separation between database models and API responses
- Implement caching where appropriate, with consideration for institution-specific data

By following this MCP protocol and implementing the new architectural approach, we will create a cohesive multi-institution experience while maintaining distinct identities for each institution. 