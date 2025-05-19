# AHEU University Project Context Information

This document contains key project information that can be referenced alongside Context7 libraries.

## roadmap.md

_Project roadmap and priorities_

```
# AHEU University Website Project Roadmap

## Project Overview
This is a website for Almaty Humanitarian Economic University (AHEU) built with React, Express, and TypeScript. The project uses a modern stack including:
- React for the frontend
- Express for the backend
- TypeScript for type safety
- TailwindCSS for styling
- Drizzle ORM for database operations
- Vite for development and building

## Current State

### Completed Components
- **Basic Website Structure**
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
1. **Database Integration**
   - Implement proper database connections
   - Extend schema for all required entities (institutes, programs, admissions, etc.)
   - Move static data from routes.ts to database

2. **Authentication System**
   - Complete user authentication flow
   - Implement role-based access control
   - Add protected routes for admin areas

3. **Admin Panel**
   - Create admin dashboard
   - Implement CRUD operations for university content
   - Add content management system for news and events

### Medium Priority
1. **Enhanced UI/UX**
   - Improve responsive design for all devices
   - Add animations and transitions
   - Implement proper loading states

2. **Multilingual Support**
   - Add Kazakh and Russian language options
   - Implement language switcher
   - Translate all content

3. **Dynamic Content**
   - News/blog system
   - Events calendar
   - Faculty directory

### Low Priority
1. **Performance Optimization**
   - Implement code splitting
   - Image optimization
   - Caching strategy

2. **Additional Features**
   - Student portal integration
   - Virtual campus tour
   - Online application system
   - FAQ section

3. **Testing**
   - Unit tests for components
   - Integration tests for API
   - End-to-end testing

## Technical Debt to Address
1. Remove unused dependencies from package.json
2. Refactor hardcoded data in routes.ts
3. Implement proper error handling throughout the application
4. Improve TypeScript type safety, especially in API responses

## Next Sprint Goals
1. Complete database schema and move static data to database
2. Implement basic authentication system
3. Create admin panel skeleton
4. Add multilingual support for main pages

## MCP (Model-Context-Persistence) Protocol
To maintain context throughout development:

### Model
- Use consistent data models throughout the application
- Define clear interfaces for all entities
- Keep models in shared directory for access by both client and server
- Extend the current schema.ts with all required entities

### Context
- Maintain state using React Query for client-side
- Implement proper context providers for authentication, language, etc.
- Document API endpoints with expected request/response formats
- Keep a development journal of major changes

### Persistence
- Use Drizzle ORM consistently for all database operations
- Implement proper migrations strategy
- Define clear separation between database models and API responses
- Implement caching where appropriate

By following this MCP protocol, we ensure consistent development patterns and avoid context loss between development sessions. 
```

## database-schema.md

_Database schema documentation_

```
# Expanded Database Schema

This document outlines the expanded database schema needed to support the AHEU University website. The schema is designed to replace the hardcoded data currently in the codebase.

## Core Entities

### Users
```typescript
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  role: text("role").notNull().default("user"), // user, admin, faculty, student
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
```

### Institutes
```typescript
export const institutes = pgTable("institutes", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  shortName: text("short_name").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url"),
  established: integer("established"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
```

### Programs
```typescript
export const programs = pgTable("programs", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  level: text("level").notNull(), // bachelor, master, phd
  instituteId: integer("institute_id").references(() => institutes.id).notNull(),
  duration: integer("duration").notNull(),
  studyForm: text("study_form").notNull(), // full-time, part-time, online
  credits: integer("credits").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
```

### Faculty
```typescript
export const faculty = pgTable("faculty", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  instituteId: integer("institute_id").references(() => institutes.id).notNull(),
  position: text("position").notNull(),
  biography: text("biography"),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
```

### Students
```typescript
export const students = pgTable("students", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  programId: integer("program_id").references(() => programs.id).notNull(),
  enrollmentYear: integer("enrollment_year").notNull(),
  status: text("status").notNull(), // active, graduated, on-leave, expelled
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
```

## Content Management

### News
```typescript
export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  summary: text("summary"),
  imageUrl: text("image_url"),
  authorId: integer("author_id").references(() => users.id).notNull(),
  publishDate: timestamp("publish_date").defaultNow().notNull(),
  isPublished: boolean("is_published").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
```

### Events
```typescript
export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  location: text("location"),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  imageUrl: text("image_url"),
  isPublished: boolean("is_published").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
```

### Pages
```typescript
export const pages = pgTable("pages", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  isPublished: boolean("is_published").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
```

## Admissions

### Applications
```typescript
export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  programId: integer("program_id").references(() => programs.id).notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  status: text("status").notNull().default("pending"), // pending, reviewing, accepted, rejected
  submissionDate: timestamp("submission_date").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
```

### Documents
```typescript
export const documents = pgTable("documents", {
  id: serial("id").primaryKey(),
  applicationId: integer("application_id").references(() => applications.id).notNull(),
  type: text("type").notNull(), // transcript, id, certificate, etc.
  fileUrl: text("file_url").notNull(),
  uploadDate: timestamp("upload_date").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
```

## Statistics

### InstituteStatistics
```typescript
export const instituteStatistics = pgTable("institute_statistics", {
  id: serial("id").primaryKey(),
  instituteId: integer("institute_id").references(() => institutes.id).notNull(),
  year: integer("year").notNull(),
  studentCount: integer("student_count").notNull(),
  facultyCount: integer("faculty_count").notNull(),
  programCount: integer("program_count").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
```

## Relations

### ProgramFaculty (many-to-many)
```typescript
export const programFaculty = pgTable("program_faculty", {
  id: serial("id").primaryKey(),
  programId: integer("program_id").references(() => programs.id).notNull(),
  facultyId: integer("faculty_id").references(() => faculty.id).notNull(),
  role: text("role").notNull(), // instructor, coordinator, advisor
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
```

## System

### Settings
```typescript
export const settings = pgTable("settings", {
  id: serial("id").primaryKey(),
  key: text("key").notNull().unique(),
  value: text("value").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
```

### Sessions
```typescript
export const sessions = pgTable("sessions", {
  sid: text("sid").primaryKey(),
  sess: json("sess").notNull(),
  expire: timestamp("expire").notNull(),
});
```

## Implementation Notes

1. This schema should be implemented in `shared/schema.ts` to replace the existing minimal schema.

2. Use Drizzle's migration tools to create the database tables:
   ```
   npm run db:push
   ```

3. Create seed data to populate the database with the existing hardcoded data from routes.ts.

4. Update the API routes to use the database instead of the hardcoded data.

5. Add proper validation using Zod schemas for each entity.

This expanded schema provides a foundation for all the features outlined in the roadmap.md file, especially the high-priority database integration task. 
```

## cleanup.md

_Cleanup tasks and code improvements_

```
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
```

## server/routes.ts

_API routes definition_

```
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import mem0Routes from "./mem0Routes";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes with '/api' prefix
  
  // Register Mem0 routes
  app.use('/api/mem0', mem0Routes);
  
  // Route to get university information
  app.get('/api/university', (req, res) => {
    const universityInfo = {
      name: "Almaty Humanitarian Economic University",
      shortName: "AHEU",
      established: 1995,
      location: "36, Aksay-3 microdistrict, 050031, Almaty, Kazakhstan",
      phone: "+7 (727) 303-32-73",
      email: "priem.ageu@mail.ru"
    };
    
    res.json(universityInfo);
  });

  // Route to get all institutes
  app.get('/api/institutes', (req, res) => {
    const institutes = [
      {
        id: "pedagogy",
        name: "Institute of Pedagogy, Business and Law",
        shortName: "Pedagogy, Business & Law",
        image: "photo-1524178232363-1fb2b075b655",
        programCount: 14,
        studentCount: 1200,
        facultyCount: 110,
        established: 1997
      },
      {
        id: "economics",
        name: "Institute of Economics, Statistics and IT Technologies",
        shortName: "Economics, Statistics & IT",
        image: "photo-1516321497487-e288fb19713f",
        programCount: 13,
        studentCount: 950,
        facultyCount: 95,
        established: 1998
      },
      {
        id: "symbat",
        name: "\"Symbat\" Institute of Design and Technology",
        shortName: "Design & Technology",
        image: "photo-1581078426770-6d336e5de7bf",
        programCount: 12,
        studentCount: 850,
        facultyCount: 80,
        established: 2003
      }
    ];
    
    res.json(institutes);
  });

  // Route to get an institute by ID
  app.get('/api/institutes/:id', (req, res) => {
    const institutes = [
      {
        id: "pedagogy",
        name: "Institute of Pedagogy, Business and Law",
        shortName: "Pedagogy, Business & Law",
        image: "photo-1524178232363-1fb2b075b655",
        programCount: 14,
        studentCount: 1200,
        facultyCount: 110,
        established: 1997
      },
      {
        id: "economics",
        name: "Institute of Economics, Statistics and IT Technologies",
        shortName: "Economics, Statistics & IT",
        image: "photo-1516321497487-e288fb19713f",
        programCount: 13,
        studentCount: 950,
        facultyCount: 95,
        established: 1998
      },
      {
        id: "symbat",
        name: "\"Symbat\" Institute of Design and Technology",
        shortName: "Design & Technology",
        image: "photo-1581078426770-6d336e5de7bf",
        programCount: 12,
        studentCount: 850,
        facultyCount: 80,
        established: 2003
      }
    ];
    
    const institute = institutes.find(inst => inst.id === req.params.id);
    
    if (!institute) {
      res.status(404).json({ message: "Institute not found" });
      return;
    }
    
    res.json(institute);
  });

  // Route to get all academic programs
  app.get('/api/programs', (req, res) => {
    const programs = [
      // Pedagogy Institute Programs
      {
        id: "business-administration",
        title: "Business Administration",
        description: "A comprehensive program preparing future business leaders with essential management skills and strategic thinking.",
        level: "bachelor",
        institute: "pedagogy",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "law",
        title: "Law",
        description: "Develop legal expertise through a program that combines theoretical foundations with practical legal skills.",
        level: "bachelor",
        institute: "pedagogy",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "education-leadership",
        title: "Education Leadership",
        description: "Prepare to lead educational institutions with advanced knowledge in educational policy, management, and innovation.",
        level: "master",
        institute: "pedagogy",
        duration: 2,
        studyForm: "full-time",
        credits: 120
      },
      // Economics Institute Programs
      {
        id: "computer-science",
        title: "Computer Science",
        description: "Learn programming, algorithms, and software development with a focus on practical applications in various industries.",
        level: "bachelor",
        institute: "economics",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "economics",
        title: "Economics",
        description: "Develop an understanding of economic principles and their application to business, policy, and global contexts.",
        level: "bachelor",
        institute: "economics",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "data-science",
        title: "Data Science",
        description: "Master the skills needed to analyze complex data sets, develop predictive models, and extract actionable insights.",
        level: "master",
        institute: "economics",
        duration: 2,
        studyForm: "full-time",
        credits: 120
      },
      // Symbat Institute Programs
      {
        id: "fashion-design",
        title: "Fashion Design",
        description: "Develop creative and technical skills needed for a successful career in the dynamic fashion industry.",
        level: "bachelor",
        institute: "symbat",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "interior-design",
        title: "Interior Design",
        description: "Learn to create functional and aesthetically pleasing interior spaces for commercial and residential settings.",
        level: "bachelor",
        institute: "symbat",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "interior-design-advanced",
        title: "Interior Design",
        description: "Advance your design expertise focusing on sustainability, innovation, and creating functional, aesthetic interior spaces.",
        level: "master",
        institute: "symbat",
        duration: 2,
        studyForm: "full-time",
        credits: 120
      }
    ];
    
    // Filter by level if provided
    const level = req.query.level as string;
    if (level && level !== 'all') {
      const filteredPrograms = programs.filter(program => program.level === level);
      res.json(filteredPrograms);
      return;
    }
    
    // Filter by institute if provided
    const institute = req.query.institute as string;
    if (institute && institute !== 'all') {
      const filteredPrograms = programs.filter(program => program.institute === institute);
      res.json(filteredPrograms);
      return;
    }
    
    // Return all programs if no filters
    res.json(programs);
  });

  // Route to get program by ID
  app.get('/api/programs/:id', (req, res) => {
    const programs = [
      // Pedagogy Institute Programs
      {
        id: "business-administration",
        title: "Business Administration",
        description: "A comprehensive program preparing future business leaders with essential management skills and strategic thinking.",
        level: "bachelor",
        institute: "pedagogy",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "law",
        title: "Law",
        description: "Develop legal expertise through a program that combines theoretical foundations with practical legal skills.",
        level: "bachelor",
        institute: "pedagogy",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "education-leadership",
        title: "Education Leadership",
        description: "Prepare to lead educational institutions with advanced knowledge in educational policy, management, and innovation.",
        level: "master",
        institute: "pedagogy",
        duration: 2,
        studyForm: "full-time",
        credits: 120
      },
      // Economics Institute Programs
      {
        id: "computer-science",
        title: "Computer Science",
        description: "Learn programming, algorithms, and software development with a focus on practical applications in various industries.",
        level: "bachelor",
        institute: "economics",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "economics",
        title: "Economics",
        description: "Develop an understanding of economic principles and their application to business, policy, and global contexts.",
        level: "bachelor",
        institute: "economics",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "data-science",
        title: "Data Science",
        description: "Master the skills needed to analyze complex data sets, develop predictive models, and extract actionable insights.",
        level: "master",
        institute: "economics",
        duration: 2,
        studyForm: "full-time",
        credits: 120
      },
      // Symbat Institute Programs
      {
        id: "fashion-design",
        title: "Fashion Design",
        description: "Develop creative and technical skills needed for a successful career in the dynamic fashion industry.",
        level: "bachelor",
        institute: "symbat",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "interior-design",
        title: "Interior Design",
        description: "Learn to create functional and aesthetically pleasing interior spaces for commercial and residential settings.",
        level: "bachelor",
        institute: "symbat",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "interior-design-advanced",
        title: "Interior Design",
        description: "Advance your design expertise focusing on sustainability, innovation, and creating functional, aesthetic interior spaces.",
        level: "master",
        institute: "symbat",
        duration: 2,
        studyForm: "full-time",
        credits: 120
      }
    ];
    
    const program = programs.find(p => p.id === req.params.id);
    
    if (!program) {
      res.status(404).json({ message: "Program not found" });
      return;
    }
    
    res.json(program);
  });

  // Route to submit contact form
  app.post('/api/contact', (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }
    
    // In a real app, we'd save to database, send email, etc.
    // This is a simplified example for demonstration
    
    res.json({ 
      success: true, 
      message: "Contact form submitted successfully",
      contact: { name, email, phone, subject, message }
    });
  });

  // Route to get news articles
  app.get('/api/news', (req, res) => {
    const newsItems = [
      {
        id: "graduation",
        title: "Spring 2023 Graduation Ceremony",
        excerpt: "Over 500 students received their diplomas at this year's spring graduation ceremony...",
        content: "Over 500 students received their diplomas at this year's spring graduation ceremony held in the main AHEU auditorium. The ceremony was attended by faculty, staff, and families of the graduates. The university president congratulated the graduates on their achievements and wished them success in their future endeavors.",
        image: "photo-1523050854058-8df90110c9f1",
        date: "2023-05-25"
      },
      {
        id: "research",
        title: "International Research Symposium",
        excerpt: "AHEU hosted researchers from 15 countries to discuss innovations in sustainable development...",
        content: "AHEU hosted researchers from 15 countries to discuss innovations in sustainable development at the annual International Research Symposium. The symposium featured keynote speeches, panel discussions, and research presentations on topics such as renewable energy, sustainable agriculture, and eco-friendly urban planning.",
        image: "photo-1560439514-4e9645039924",
        date: "2023-05-12"
      },
      {
        id: "design",
        title: "Symbat Design Exhibition",
        excerpt: "Students from the Symbat Institute showcased their innovative design projects to industry professionals...",
        content: "Students from the Symbat Institute of Design and Technology showcased their innovative design projects to industry professionals at the annual Design Exhibition. The exhibition featured works from fashion design, interior design, and graphic design students, with several projects receiving recognition and job offers from industry representatives.",
        image: "photo-1581078426770-6d336e5de7bf",
        date: "2023-04-30"
      }
    ];
    
    res.json(newsItems);
  });

  // Route to get news article by ID
  app.get('/api/news/:id', (req, res) => {
    const newsItems = [
      {
        id: "graduation",
        title: "Spring 2023 Graduation Ceremony",
        excerpt: "Over 500 students received their diplomas at this year's spring graduation ceremony...",
        content: "Over 500 students received their diplomas at this year's spring graduation ceremony held in the main AHEU auditorium. The ceremony was attended by faculty, staff, and families of the graduates. The university president congratulated the graduates on their achievements and wished them success in their future endeavors.",
        image: "photo-1523050854058-8df90110c9f1",
        date: "2023-05-25"
      },
      {
        id: "research",
        title: "International Research Symposium",
        excerpt: "AHEU hosted researchers from 15 countries to discuss innovations in sustainable development...",
        content: "AHEU hosted researchers from 15 countries to discuss innovations in sustainable development at the annual International Research Symposium. The symposium featured keynote speeches, panel discussions, and research presentations on topics such as renewable energy, sustainable agriculture, and eco-friendly urban planning.",
        image: "photo-1560439514-4e9645039924",
        date: "2023-05-12"
      },
      {
        id: "design",
        title: "Symbat Design Exhibition",
        excerpt: "Students from the Symbat Institute showcased their innovative design projects to industry professionals...",
        content: "Students from the Symbat Institute of Design and Technology showcased their innovative design projects to industry professionals at the annual Design Exhibition. The exhibition featured works from fashion design, interior design, and graphic design students, with several projects receiving recognition and job offers from industry representatives.",
        image: "photo-1581078426770-6d336e5de7bf",
        date: "2023-04-30"
      }
    ];
    
    const newsItem = newsItems.find(item => item.id === req.params.id);
    
    if (!newsItem) {
      res.status(404).json({ message: "News article not found" });
      return;
    }
    
    res.json(newsItem);
  });

  // Route to get upcoming events
  app.get('/api/events', (req, res) => {
    const events = [
      {
        id: "open-house",
        title: "Open House Day",
        description: "Explore our campus, meet faculty and students, and learn about our programs.",
        date: "2023-06-01",
        location: "Main Campus, AHEU"
      },
      {
        id: "orientation",
        title: "International Student Orientation",
        description: "Welcome session for new international students with information about living in Almaty and studying at AHEU.",
        date: "2023-06-15",
        location: "International Center, AHEU"
      },
      {
        id: "summer-school",
        title: "Summer School: Business Leadership",
        description: "Intensive one-week program on business leadership for current students and external participants.",
        date: "2023-07-05",
        location: "Business School, AHEU"
      },
      {
        id: "webinar",
        title: "Online Admissions Webinar",
        description: "Information session about application process, requirements, and deadlines for prospective students.",
        date: "2023-07-20",
        location: "Online (Zoom)"
      }
    ];
    
    res.json(events);
  });

  // Route to get event by ID
  app.get('/api/events/:id', (req, res) => {
    const events = [
      {
        id: "open-house",
        title: "Open House Day",
        description: "Explore our campus, meet faculty and students, and learn about our programs.",
        date: "2023-06-01",
        location: "Main Campus, AHEU"
      },
      {
        id: "orientation",
        title: "International Student Orientation",
        description: "Welcome session for new international students with information about living in Almaty and studying at AHEU.",
        date: "2023-06-15",
        location: "International Center, AHEU"
      },
      {
        id: "summer-school",
        title: "Summer School: Business Leadership",
        description: "Intensive one-week program on business leadership for current students and external participants.",
        date: "2023-07-05",
        location: "Business School, AHEU"
      },
      {
        id: "webinar",
        title: "Online Admissions Webinar",
        description: "Information session about application process, requirements, and deadlines for prospective students.",
        date: "2023-07-20",
        location: "Online (Zoom)"
      }
    ];
    
    const event = events.find(e => e.id === req.params.id);
    
    if (!event) {
      res.status(404).json({ message: "Event not found" });
      return;
    }
    
    res.json(event);
  });

  const server = createServer(app);
  return server;
}

```

## shared/schema.ts

_Database models_

```
import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

```

## client/src/App.tsx

_Main React app component_

```
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Admissions from "@/pages/admissions";
import Institutes from "@/pages/institutes";
import Programs from "@/pages/programs";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/admissions" component={Admissions} />
        <Route path="/institutes" component={Institutes} />
        <Route path="/programs" component={Programs} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

```

