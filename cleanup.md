# Project Cleanup Recommendations

## Unnecessary Dependencies
After analyzing the codebase, the following dependencies appear to be unused or redundant and can be considered for removal:

### UI Components Not Being Used
- `@radix-ui/react-collapsible` - Not used in any components
- `@radix-ui/react-context-menu` - Not used in any components
- `@radix-ui/react-hover-card` - Not used in any components
- `@radix-ui/react-menubar` - Not used in any components
- `@radix-ui/react-radio-group` - Not used in any components
- `@radix-ui/react-slider` - Not used in any components
- `@radix-ui/react-toggle` - Not used in any components
- `@radix-ui/react-toggle-group` - Not used in any components
- `input-otp` - Not used for one-time passwords
- `vaul` - Not used for drawer components

### Libraries with Overlapping Functionality
- `framer-motion` - Can be removed if using tailwindcss-animate
- `react-icons` - Redundant since lucide-react is already included
- `tw-animate-css` - Redundant with tailwindcss-animate

## Code Issues
1. **Hardcoded Data**: The server/routes.ts file contains hardcoded data for universities, institutes, and programs that should be moved to a database.

2. **Limited Database Schema**: The current schema only includes users and needs to be expanded to include all relevant entities.

3. **No Error Handling**: Proper error handling is missing throughout the application.

4. **Incomplete Authentication**: The authentication system is minimal and needs to be completed.

## Files to Remove or Update
1. **website.zip** - This compressed file in the root directory should be removed, especially if it contains an older version of the website.

2. **generated-icon.png** - If this is a temporary file or a placeholder, it should be replaced with the official university logo.

## Code Restructuring
1. **API Routes**: Move API routes from server/routes.ts to separate controller files organized by entity (institutes, programs, users, etc.).

2. **React Components**: Some page components are large and should be broken down into smaller, reusable components.

3. **Styling**: Consider organizing TailwindCSS utility classes into better reusable components or applying consistent patterns.

This cleanup will help make the codebase more maintainable, reduce bundle size, and improve developer experience. 