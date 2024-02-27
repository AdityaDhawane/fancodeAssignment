const mysql = require('../lib/mysql');

const createNews = async params => {
    // Insert news data into the database
    let statement, parameters;
    if (params.news_type === 'tour') {
        statement = 'INSERT INTO news (title, description, tourId) VALUES (?, ?, ?)';
        parameters = [params.title, params.description, params.id];
    } else if (params.news_type === 'match') {
        statement = 'INSERT INTO news (title, description, matchId) VALUES (?, ?, ?)';
        parameters = [params.title, params.description, params.id];
    } else {
        // Invalid news type
        return res.status(400).json({ error: 'Invalid news_type' });
    }
    return await mysql.query(statement, parameters);
}

const getNewsByTourId = async params => {
    const statement = 'select * from news where news.tourId = ?';
    const parameters = [params.tourId];
    return await mysql.query(statement, parameters);
}

const getNewsByMatchId = async params => {
    const statement = 'select * from news where news.matchId = ?';
    const parameters = [params.matchId];
    return await mysql.query(statement, parameters);
}

const getNewsBySportId = async params => {
    const statement = 'select n.* from news n inner join tours t on n.tourId = t.id where t.sportId = ?';
    const parameters = [params.sportId];
    return await mysql.query(statement, parameters);
}

module.exports = {
    createNews: createNews,
    getNewsByTourId: getNewsByTourId,
    getNewsByMatchId: getNewsByMatchId,
    getNewsBySportId: getNewsBySportId
}