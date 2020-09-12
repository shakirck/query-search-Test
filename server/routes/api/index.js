const { Router } = require('express');

const router = Router();

const questionController = require('../../controllers/questionsController');
const searchController = require('../../controllers/searchController');
router.get('/', (req, res) => {
  res.json({ message: 'welcome to api' });
});
router.get('/questions', questionController.getQuestions);
router.post('/create', questionController.askQuestion);
router.post('/search', searchController.search);
module.exports = router;
