const Chat = require('../models/Chat');
const {
  analyzeUserFinances,
  chatWithAI,
  generateRecommendations,
  predictExpenses,
} = require('../services/aiService');
const ApiError = require('../utils/ApiError');
const ApiResponse = require('../utils/ApiResponse');

/**
 * @desc    Analyze user expenses & generate AI recommendations
 * @route   POST /api/v1/ai/analyze
 * @access  Private
 */
const analyzeSpending = async (req, res, next) => {
  try {
    const analysis = await analyzeUserFinances(req.user._id);
    return ApiResponse.send(res, 200, 'AI Financial Analysis generated successfully', analysis);
  } catch (error) {
    next(error);
  }
};
/**
 * @desc    Generate AI financial recommendations
 * @route   POST /api/v1/ai/recommendations
 * @access  Private
 */
const getRecommendations = async (req, res, next) => {
  try {
    const recommendations = await generateRecommendations({
    userId: req.user._id,
    ...req.body
});

    return ApiResponse.send(
      res,
      200,
      'AI Recommendations generated successfully',
      recommendations
    );
  } catch (error) {
    next(error);
  }
};
/**
 * @desc    Predict next month's expenses
 * @route   POST /api/v1/ai/predict
 * @access  Private
 */
const predictUserExpenses = async (req, res, next) => {
  try {
    const prediction = await predictExpenses(req.body);

    return ApiResponse.send(
      res,
      200,
      'Expense prediction generated successfully',
      prediction
    );
  } catch (error) {
    next(error);
  }
};
/**
 * @desc    Conversational AI Chat assistant
 * @route   POST /api/v1/ai/chat
 * @access  Private
 */
const askAIChat = async (req, res, next) => {
  try {
    const { question } = req.body;
    if (!question || !question.trim()) {
      return next(new ApiError(400, 'Please provide a valid question for AI Chat'));
    }

    const aiResponse = await chatWithAI(req.user._id, question.trim());

    // Persist conversation in Chat collection
    const chatRecord = await Chat.create({
      user: req.user._id,
      question: question.trim(),
      answer: aiResponse.answer,
      model: aiResponse.model,
      tokensUsed: aiResponse.tokensUsed,
    });

    return ApiResponse.send(res, 200, 'AI Chat response generated successfully', {
      chatId: chatRecord._id,
      question: chatRecord.question,
      answer: chatRecord.answer,
      model: chatRecord.model,
      tokensUsed: chatRecord.tokensUsed,
      createdAt: chatRecord.createdAt,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  analyzeSpending,
  getRecommendations,
  predictUserExpenses,
  askAIChat,
};
