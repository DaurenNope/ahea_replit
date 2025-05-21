import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { URL } from "url";

export default defineConfig({
  plugins: [
    react(),
    
    ...(process.env.NODE_ENV !== "production" 
      ? [
          
            
          
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(new URL(import.meta.url).pathname), "client", "src"),
      "@shared": path.resolve(path.dirname(new URL(import.meta.url).pathname), "shared"),
      "@assets": path.resolve(path.dirname(new URL(import.meta.url).pathname), "attached_assets"),
    },
  },
  root: path.resolve(path.dirname(new URL(import.meta.url).pathname), "client"),
  publicDir: path.resolve(path.dirname(new URL(import.meta.url).pathname), "public"),
  build: {
    outDir: path.resolve(path.dirname(new URL(import.meta.url).pathname), "dist/public"),
    emptyOutDir: true,
  },
});
