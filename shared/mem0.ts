// Mem0 Integration for Context Management
// This utility handles the integration with Mem0 for maintaining context
// across user interactions and application states.

import { z } from "zod";

// Environment variable validation for Mem0 API key
const EnvSchema = z.object({
  MEM0_API_KEY: z.string().min(1, "MEM0_API_KEY is required"),
});

// Memory item schema
export const MemorySchema = z.object({
  role: z.enum(["user", "assistant", "system"]),
  content: z.string(),
  metadata: z.record(z.any()).optional(),
});

export type Memory = z.infer<typeof MemorySchema>;

class Mem0Client {
  private apiKey: string;
  private baseUrl: string = "https://api.mem0.ai";

  constructor() {
    // Get API key from environment or use a default for development
    // In production, always use environment variables
    this.apiKey = process.env.MEM0_API_KEY || "your-development-api-key";
  }

  /**
   * Add a memory for a specific user
   * @param memories Array of memories to add
   * @param userId User identifier
   */
  async addMemory(memories: Memory[], userId: string): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/memories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          memories,
          user_id: userId
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to add memory: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Mem0 addMemory error:", error);
      // Fallback to local storage or other mechanism if available
    }
  }

  /**
   * Search for memories based on query
   * @param query Search query
   * @param userId User identifier
   * @returns Retrieved memories
   */
  async searchMemory(query: string, userId: string): Promise<Memory[]> {
    try {
      const response = await fetch(`${this.baseUrl}/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          query,
          user_id: userId
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to search memory: ${response.statusText}`);
      }

      const data = await response.json();
      return data.memories;
    } catch (error) {
      console.error("Mem0 searchMemory error:", error);
      // Fallback to local storage or return empty array if service is unavailable
      return [];
    }
  }

  /**
   * Get all memories for a user
   * @param userId User identifier
   * @returns All user memories
   */
  async getUserMemories(userId: string): Promise<Memory[]> {
    try {
      const response = await fetch(`${this.baseUrl}/memories/${userId}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${this.apiKey}`
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to get user memories: ${response.statusText}`);
      }

      const data = await response.json();
      return data.memories;
    } catch (error) {
      console.error("Mem0 getUserMemories error:", error);
      return [];
    }
  }

  /**
   * Delete a specific memory
   * @param memoryId Memory identifier
   * @param userId User identifier
   */
  async deleteMemory(memoryId: string, userId: string): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/memories/${userId}/${memoryId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${this.apiKey}`
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to delete memory: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Mem0 deleteMemory error:", error);
    }
  }
}

// Export a singleton instance
export const mem0Client = new Mem0Client();

export default mem0Client; 