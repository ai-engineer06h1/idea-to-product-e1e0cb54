const express = require('express');
const Task = require('../models/Task');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

// Middleware for authentication
router.use(authenticate);

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.userId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// Add a new task
router.post('/', async (req, res) => {
  const { text } = req.body;
  try {
    const task = new Task({ text, userId: req.user.userId });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add task' });
  }
});

// Update a task
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  try {
    const task = await Task.findOneAndUpdate(
      { _id: id, userId: req.user.userId },
      { completed },
      { new: true }
    );
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOneAndDelete({ _id: id, userId: req.user.userId });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

module.exports = router;
