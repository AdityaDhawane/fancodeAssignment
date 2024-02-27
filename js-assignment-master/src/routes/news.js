const News = require('../controllers/news');
const bodyParser = require('body-parser');


module.exports = function (app) {
    app.use(bodyParser.json());
    app.route('/news/create').post(async (req, res, next) => {
        try {
            let reqBody = req.body;
            return res.json(await News.createNews(reqBody));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/getNewsForMatch').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsByMatchId(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/getNewsForTour').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsByTourId(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/getNewsForSport').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsBySportId(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });
}