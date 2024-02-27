const News = require('../models/news');

const createNews = async params => {
    // Check if the request body is empty
    if (!params || Object.keys(params).length === 0) {
        throw new Error('Request body is empty');
    }

    // Check if title and description are present
    if (!params.title || !params.description) {
        throw new Error('Title and description are required');
    }

    // Check if news_type has a valid value
    if (params.news_type !== 'tour' && params.news_type !== 'match') {
        throw new Error('Invalid value for news_type. It should be "tour" or "match"');
    }

    return await News.createNews(params);
}

const getNewsByMatchId = async params => {
    const { matchId } = params;

    if (!matchId) {
        throw new Error('Missing required parameter: matchId');
    }

    return await News.getNewsByMatchId(params);
}

const getNewsByTourId = async params => {
    const { tourId } = params;

    if (!tourId) {
        throw new Error('Missing required parameter: tourId');
    }

    return await News.getNewsByTourId(params);
}

const getNewsBySportId = async params => {
    const { sportId } = params;

    if (!sportId) {
        throw new Error('Missing required parameter: sportId');
    }

    return await News.getNewsBySportId(params);
}

module.exports = {
    createNews: createNews,
    getNewsByTourId: getNewsByTourId,
    getNewsByMatchId: getNewsByMatchId,
    getNewsBySportId: getNewsBySportId
}