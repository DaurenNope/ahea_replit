# Using Context7 with AHEU Project

This guide explains how to use Context7 MCP protocol to access documentation and maintain context with AI assistants like Claude.

## What is Context7?

Context7 is a protocol that allows AI assistants to access external documentation and resources directly. It's integrated with Anthropic's Claude and provides access to a library of documentation for popular frameworks and tools, including React, React Router, and other libraries used in the AHEU project.

## Setup

1. Run the helper script to generate necessary files:
   ```bash
   chmod +x context7-helper.js
   ./context7-helper.js
   ```

2. This will create two files:
   - `context7-reference.md` - A reference guide for using Context7 with this project
   - `context7-info.md` - A comprehensive project context file (for information not available in Context7)

## Available Documentation Libraries

Using Context7, you can access official documentation for:

1. **React Core** - Library ID: `/reactjs/react.dev`
2. **React Router** - Library ID: `/remix-run/react-router`
3. **React Query** - Search for "react query"
4. Many other popular libraries and frameworks

## Using with AI Assistants

### With Context7-Enabled Assistants (like Claude)

1. Share the reference from `context7-reference.md` at the beginning of your conversation
2. Ask questions about React, frameworks, or libraries directly
3. For project-specific context, include relevant sections from your project files

Example prompt:
```
Here's my project reference:

I'm working on the AHEU University project which uses React, React Router, and Express.
Can you explain how to properly implement React hooks for data fetching?
```

### Accessing Specific Documentation

You can directly specify which library documentation to access:

```
Using Context7 library ID /reactjs/react.dev, show me examples of using the useEffect hook.
```

## Benefits of Context7

- **Access to Official Docs**: Get accurate information from official documentation
- **No Need to Copy Paste**: The AI can retrieve the documentation on its own
- **Consistent Reference**: All developers get the same information from the same sources
- **Up-to-date Information**: Documentation is maintained and updated centrally

## Example Queries Using Context7

Once you've referenced the Context7 libraries, you can ask questions like:

- "How do I create a custom React hook for form validation?"
- "Show me how to implement protected routes in React Router"
- "What's the correct way to handle side effects in React components?"
- "Explain the useState hook with examples"
- "How should I structure my Express API routes?"

## Combining Context7 with Project Context

For project-specific questions:

1. Use Context7 for general framework/library documentation
2. Include specific project context from `context7-info.md` when needed

Example:
```
Using Context7 with library ID /reactjs/react.dev, help me implement hooks for the AHEU project's user authentication system.

Here's our current implementation:
[paste relevant part from context7-info.md]
```

## Troubleshooting

If an AI assistant doesn't recognize a specific Context7 library:

1. Try different variations (e.g., "react" instead of "/reactjs/react.dev")
2. Search for similar libraries ("react router" if "/remix-run/react-router" doesn't work)
3. Include specific documentation questions in your prompt
4. As a last resort, paste the relevant documentation sections directly 