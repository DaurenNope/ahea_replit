import { Router } from 'express';
import { mem0Client } from '../shared/mem0';
import { z } from 'zod';

const router = Router();

// Schema for memory validation
const MemoriesRequestSchema = z.object({
  memories: z.array(
    z.object({
      role: z.enum(['user', 'assistant', 'system']),
      content: z.string(),
      metadata: z.record(z.any()).optional(),
    })
  ),
  userId: z.string(),
});

const SearchRequestSchema = z.object({
  query: z.string(),
  userId: z.string(),
});

// Add memories
router.post('/memories', async (req, res) => {
  try {
    const { memories, userId } = MemoriesRequestSchema.parse(req.body);
    await mem0Client.addMemory(memories, userId);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error adding memory:', error);
    res.status(400).json({ 
      success: false, 
      message: error instanceof Error ? error.message : 'Failed to add memory' 
    });
  }
});

// Search memories
router.post('/search', async (req, res) => {
  try {
    const { query, userId } = SearchRequestSchema.parse(req.body);
    const memories = await mem0Client.searchMemory(query, userId);
    res.status(200).json({ success: true, memories });
  } catch (error) {
    console.error('Error searching memories:', error);
    res.status(400).json({ 
      success: false, 
      message: error instanceof Error ? error.message : 'Failed to search memories' 
    });
  }
});

// Get user memories
router.get('/memories/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const memories = await mem0Client.getUserMemories(userId);
    res.status(200).json({ success: true, memories });
  } catch (error) {
    console.error('Error getting user memories:', error);
    res.status(400).json({ 
      success: false, 
      message: error instanceof Error ? error.message : 'Failed to get user memories' 
    });
  }
});

// Delete memory
router.delete('/memories/:userId/:memoryId', async (req, res) => {
  try {
    const { userId, memoryId } = req.params;
    await mem0Client.deleteMemory(memoryId, userId);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error deleting memory:', error);
    res.status(400).json({ 
      success: false, 
      message: error instanceof Error ? error.message : 'Failed to delete memory' 
    });
  }
});

export default router; 