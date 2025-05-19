#!/usr/bin/env node

/**
 * AHEU Project - Context7 Helper
 * 
 * This script helps you prepare project resources for using with Context7 MCP protocol,
 * which allows AI assistants to directly access project context.
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

// Get directory name in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Key project files to collect
const KEY_FILES = [
  { path: 'roadmap.md', description: 'Project roadmap and priorities' },
  { path: 'database-schema.md', description: 'Database schema documentation' },
  { path: 'cleanup.md', description: 'Cleanup tasks and code improvements' },
  { path: 'server/routes.ts', description: 'API routes definition' },
  { path: 'shared/schema.ts', description: 'Database models' },
  { path: 'client/src/App.tsx', description: 'Main React app component' }
];

/**
 * Get file content safely (returns empty string if file doesn't exist)
 */
async function getFileContent(filePath) {
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch (error) {
    console.warn(`Warning: Couldn't read ${filePath}: ${error.message}`);
    return '';
  }
}

/**
 * Create a Context7 reference snippet
 */
async function createReferenceSnippet() {
  console.log('🔍 Creating Context7 reference snippet...');
  
  // Build the reference snippet
  let snippet = `# AHEU University Project Context\n\n`;
  snippet += `To use Context7 with this project, you can search for specific libraries of content:\n\n`;
  
  // Add React documentation reference example
  snippet += `## Available Documentation\n\n`;
  snippet += `You can access key React libraries documentation:\n\n`;
  snippet += `1. **React Core**: Use \`/reactjs/react.dev\` library ID\n`;
  snippet += `2. **React Router**: Use \`/remix-run/react-router\` library ID\n`;
  snippet += `3. **React Query**: Search for "react query"\n\n`;
  
  // Add file listing
  snippet += `## Key Project Files\n\n`;
  for (const file of KEY_FILES) {
    snippet += `- **${file.path}**: ${file.description}\n`;
  }
  
  // Add usage instructions
  snippet += `\n## How to Access Documentation\n\n`;
  snippet += `Ask questions like:\n\n`;
  snippet += `- "Show me how to use React hooks properly"\n`;
  snippet += `- "Help me understand React Router routes"\n`;
  snippet += `- "Explain how to use useEffect for data fetching"\n\n`;
  
  // Add project context reference
  snippet += `## Project Context\n\n`;
  snippet += `For specific project context that's not in the documentation libraries, I've included it below.\n\n`;
  
  // Add a preview of project files
  for (const file of KEY_FILES) {
    const content = await getFileContent(file.path);
    if (content) {
      snippet += `### ${file.path}\n\n`;
      snippet += `_${file.description}_\n\n`;
      
      // Add a preview (just the first few lines)
      const preview = content.split('\n').slice(0, 5).join('\n');
      snippet += '```\n' + preview + '\n...\n```\n\n';
    }
  }
  
  // Write the snippet to a file
  const snippetPath = path.join(__dirname, 'context7-reference.md');
  await fs.writeFile(snippetPath, snippet, 'utf8');
  
  console.log(`✅ Created Context7 reference snippet at ${snippetPath}`);
  return snippetPath;
}

/**
 * Generate a project context information file
 */
async function generateContextFile() {
  console.log('📚 Collecting project context information...');
  
  // Build the context file
  let contextContent = `# AHEU University Project Context Information\n\n`;
  contextContent += `This document contains key project information that can be referenced alongside Context7 libraries.\n\n`;
  
  // Add content from key files
  for (const file of KEY_FILES) {
    contextContent += `## ${file.path}\n\n`;
    contextContent += `_${file.description}_\n\n`;
    
    const content = await getFileContent(file.path);
    if (content) {
      contextContent += '```\n' + content + '\n```\n\n';
    } else {
      contextContent += '_File not found_\n\n';
    }
  }
  
  // Write the context file
  const contextPath = path.join(__dirname, 'context7-info.md');
  await fs.writeFile(contextPath, contextContent, 'utf8');
  
  console.log(`✅ Generated context information file at ${contextPath}`);
  return contextPath;
}

/**
 * Show how to use Context7 with the project
 */
async function showUsageInstructions(referencePath, contextPath) {
  console.log('\n🚀 How to Use Context7 with Your Project\n');
  console.log('1. When working with AI assistants that support Context7 MCP:');
  console.log(`   - Share the reference snippet from: ${referencePath}`);
  console.log('   - For example, you can ask Claude: "How do I use React hooks properly?"');
  console.log('   - Claude will use the Context7 protocol to fetch relevant documentation');
  console.log('\n2. For project-specific information:');
  console.log(`   - Either use the full context file from: ${contextPath}`);
  console.log('   - Or include specific context in your messages');
  console.log('\n3. Example prompts:');
  console.log('   - "Help me refactor this React component to use hooks correctly"');
  console.log('   - "Show me examples of proper form handling in React"');
  console.log('   - "What are the next priorities in our roadmap?"');
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('🧠 AHEU Project - Context7 Helper 🧠');
    console.log('----------------------------------------');
    
    // Generate the reference snippet
    const referencePath = await createReferenceSnippet();
    
    // Generate the context file
    const contextPath = await generateContextFile();
    
    // Show usage instructions
    await showUsageInstructions(referencePath, contextPath);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    rl.close();
  }
}

// Run the script
main(); 