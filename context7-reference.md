# AHEU University Project Context

To use Context7 with this project, you can search for specific libraries of content:

## Available Documentation

You can access key React libraries documentation:

1. **React Core**: Use `/reactjs/react.dev` library ID
2. **React Router**: Use `/remix-run/react-router` library ID
3. **React Query**: Search for "react query"

## Key Project Files

- **roadmap.md**: Project roadmap and priorities
- **database-schema.md**: Database schema documentation
- **cleanup.md**: Cleanup tasks and code improvements
- **server/routes.ts**: API routes definition
- **shared/schema.ts**: Database models
- **client/src/App.tsx**: Main React app component

## How to Access Documentation

Ask questions like:

- "Show me how to use React hooks properly"
- "Help me understand React Router routes"
- "Explain how to use useEffect for data fetching"

## Project Context

For specific project context that's not in the documentation libraries, I've included it below.

### roadmap.md

_Project roadmap and priorities_

```
# AHEU University Website Project Roadmap

## Project Overview
This is a website for Almaty Humanitarian Economic University (AHEU) built with React, Express, and TypeScript. The project uses a modern stack including:
- React for the frontend
...
```

### database-schema.md

_Database schema documentation_

```
# Expanded Database Schema

This document outlines the expanded database schema needed to support the AHEU University website. The schema is designed to replace the hardcoded data currently in the codebase.

## Core Entities
...
```

### cleanup.md

_Cleanup tasks and code improvements_

```
# Project Cleanup Recommendations

## Unnecessary Dependencies
After analyzing the codebase, the following dependencies appear to be unused or redundant and can be considered for removal:

...
```

### server/routes.ts

_API routes definition_

```
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import mem0Routes from "./mem0Routes";

...
```

### shared/schema.ts

_Database models_

```
import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
...
```

### client/src/App.tsx

_Main React app component_

```
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
...
```

