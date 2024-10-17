import request from 'supertest';
import app from '../src/index';

describe('GET /', () => {
    let server: any;

    beforeAll(async () => {
        server = await app.listen(4000);
    });

    afterAll((done) => {
        server.close((err) => {
            if (err) return done(err);
            done();
        });
    });

    it('should return Hello, World!', async () => {
        const res = await request(server).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello, World!');
    });
});
