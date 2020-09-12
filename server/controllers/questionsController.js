const Query = require('../models/query');

module.exports.getQuestions = async (req, res, next) => {
  try {
    const queries = await Query.find({}).sort('-createdAt');
    return res.json({
      message: 'all question',
      queries,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.askQuestion = async (req, res, next) => {
  try {
    // console.log(req.body);
    const { query, topic, tags } = req.body;
    let question;

    //check if query have minimum length
    if (query.length < 20) {
      throw Error('Query Should be of minimum 20 characters');
    }
    //check if incoming request field have all the required fields
    if (query && topic && tags) {
      let question = await Query.create(req.body);
    } else {
      throw Error('All fields Required');
    }

    return res.json({
      message: 'Query Added',
      query: question,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error); //passed to error handler
  }
};
