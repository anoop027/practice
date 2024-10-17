import request from 'supertest';
import app from '../src/index';

describe('GET /', () => {
    let server: any;

    beforeAll((done) => {
        server = app.listen(4000, () => {
            done();
        });
    });

    afterAll((done) => {
        server.close(done);
    });

    it('should return Hello, World!', async () => {
        const res = await request(server).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello, World!');
    });
});
