import { useState, useCallback } from 'react';

// Define types for memory items
interface Memory {
  role: 'user' | 'assistant' | 'system';
  content: string;
  metadata?: Record<string, any>;
}

interface UseMem0Result {
  addMemory: (memories: Memory[], userId: string) => Promise<void>;
  searchMemory: (query: string, userId: string) => Promise<Memory[]>;
  getUserMemories: (userId: string) => Promise<Memory[]>;
  deleteMemory: (memoryId: string, userId: string) => Promise<void>;
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook for interacting with Mem0 memory service via our API endpoints
 */
export function useMem0(): UseMem0Result {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Add memory for a user
  const addMemory = useCallback(async (memories: Memory[], userId: string): Promise<void> => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/mem0/memories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ memories, userId }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add memory');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      console.error('Error adding memory:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Search memories
  const searchMemory = useCallback(async (query: string, userId: string): Promise<Memory[]> => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/mem0/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, userId }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to search memories');
      }
      
      const data = await response.json();
      return data.memories || [];
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      console.error('Error searching memories:', err);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  // Get all memories for a user
  const getUserMemories = useCallback(async (userId: string): Promise<Memory[]> => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/mem0/memories/${userId}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to get user memories');
      }
      
      const data = await response.json();
      return data.memories || [];
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      console.error('Error getting user memories:', err);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  // Delete a memory
  const deleteMemory = useCallback(async (memoryId: string, userId: string): Promise<void> => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/mem0/memories/${userId}/${memoryId}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete memory');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      console.error('Error deleting memory:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    addMemory,
    searchMemory,
    getUserMemories,
    deleteMemory,
    loading,
    error,
  };
}

export default useMem0; 