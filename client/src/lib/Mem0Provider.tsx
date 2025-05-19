import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { useMem0 } from '@/hooks/useMem0';

// Define types for memory items
interface Memory {
  role: 'user' | 'assistant' | 'system';
  content: string;
  metadata?: Record<string, any>;
}

interface Mem0ContextType {
  addMemory: (memories: Memory[], userId: string) => Promise<void>;
  searchMemory: (query: string, userId: string) => Promise<Memory[]>;
  getUserMemories: (userId: string) => Promise<Memory[]>;
  deleteMemory: (memoryId: string, userId: string) => Promise<void>;
  loading: boolean;
  error: string | null;
  clearError: () => void;
  currentUserId: string | null;
  setCurrentUserId: (userId: string | null) => void;
}

// Create the context with default values
const Mem0Context = createContext<Mem0ContextType>({
  addMemory: async () => {},
  searchMemory: async () => [],
  getUserMemories: async () => [],
  deleteMemory: async () => {},
  loading: false,
  error: null,
  clearError: () => {},
  currentUserId: null,
  setCurrentUserId: () => {},
});

// Create a custom hook to use the Mem0 context
export const useMem0Context = () => useContext(Mem0Context);

// Create the provider component
export const Mem0Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const {
    addMemory,
    searchMemory,
    getUserMemories,
    deleteMemory,
    loading,
    error,
  } = useMem0();

  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  
  // A function to clear any error messages
  const clearError = useCallback(() => {
    // Since error is managed in the useMem0 hook and 
    // we can't clear it directly, we would need to add 
    // that functionality to the hook. This is a placeholder.
  }, []);
  
  // Create the context value
  const contextValue: Mem0ContextType = {
    addMemory,
    searchMemory,
    getUserMemories,
    deleteMemory,
    loading,
    error,
    clearError,
    currentUserId,
    setCurrentUserId,
  };
  
  return (
    <Mem0Context.Provider value={contextValue}>
      {children}
    </Mem0Context.Provider>
  );
};

export default Mem0Provider; 