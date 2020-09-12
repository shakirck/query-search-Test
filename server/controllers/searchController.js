const Query = require('../models/query');

module.exports.search = async (req, res, next) => {
  try {
    // console.log(req.body.searchText, '***');
    if (!req.body.searchText) {
      return res.redirect('/api/questions'); //redirect to get all the queries from the DB  if the searchText  is empty
    }
    let results = await Query.find({
      $or: [
        { query: { $regex: req.body.searchText, $options: 'i' } },
        { tags: { $regex: req.body.searchText, $options: 'i' } },
      ],
    });
    // console.log(results);

    //Sort the results based on the count of string matches
    if (results) {
      const searchText = req.body.searchText.toLowerCase();

      results.sort((a, b) => {
        let queryA = a.query.toLowerCase();
        let queryB = b.query.toLowerCase();
        let lena = queryA.split(searchText).length;

        let lenb = queryB.split(searchText).length;
        let comparison = 0;
        if (lena > lenb) {
          comparison = 1;
        } else if (lena < lenb) {
          comparison = -1;
        }
        return -1 * comparison;
      });
    }

    // console.log(results);

    return res.json({
      message: 'search Results',
      queries: results,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
