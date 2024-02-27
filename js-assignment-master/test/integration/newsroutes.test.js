const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');

const NewsController = require('../controllers/news');
const NewsRoutes = require('../routes/news');

describe('News Routes', () => {
    const app = express();
    app.use(bodyParser.json());
    NewsRoutes(app);

    describe('POST /news/create', () => {
        it('should create news', async () => {
            const newsData = {
                title: 'Exciting News for IPL 2023!',
                description: 'New sponsor announced for IPL 2023.',
                news_type: 'tour',
                tour_id: 1
            };
            const response = await request(app)
                .post('/news/create')
                .send(newsData);
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('message', 'News created successfully');
        });
    });

    describe('GET /news/getNewsForMatch', () => {
        it('should get news for match', async () => {
            const response = await request(app)
                .get('/news/getNewsForMatch')
                .query({ matchId: 1 });
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('news');
        });
    });

    describe('GET /news/getNewsForTour', () => {
        it('should get news for tour', async () => {
            const response = await request(app)
                .get('/news/getNewsForTour')
                .query({ tourId: 1 });
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('news');
        });
    });

    describe('GET /news/getNewsForSport', () => {
        it('should get news for sport', async () => {
            const response = await request(app)
                .get('/news/getNewsForSport')
                .query({ sportId: 1 });
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('news');
        });
    });
});
