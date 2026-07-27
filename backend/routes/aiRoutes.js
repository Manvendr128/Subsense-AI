const express = require('express');
const router = express.Router();
const {
  analyzeSpending,
  getRecommendations,
  predictUserExpenses,
  askAIChat,
} = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware');

// All AI routes require authentication
router.use(protect);

/**
 * @route   POST /api/v1/ai/analyze
 * @desc    Analyze user financial spending, trends, duplicate subscriptions, and risk alerts
 * @access  Private
 */
router.post('/analyze', analyzeSpending);

/**
 * @route   POST /api/v1/ai/recommendations
 * @desc    Generate AI financial recommendations
 * @access  Private
 */
router.post('/recommendations', getRecommendations);

/**
 * @route   POST /api/v1/ai/predict
 * @desc    Predict future expenses
 * @access  Private
 */
router.post('/predict', predictUserExpenses);

/**
 * @route   POST /api/v1/ai/chat
 * @desc    Conversational AI Financial Assistant Chatbot
 * @access  Private
 */
router.post('/chat', askAIChat);
module.exports = router;
