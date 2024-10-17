import request from 'supertest';
import app from '../src/index';

describe('GET /', () => {
    let server: any;

    beforeAll((done) => {
        server = app.listen(4000, () => {
            console.log('Server is running on port 4000');
            done();
        });
    });

    afterAll(async () => {
        if (server) {
            await new Promise<void>((resolve, reject) => {
                server.close((err: Error | null) => {
                    if (err) return reject(err);
                    resolve();
                });
            });
        }
    });

    it('should return Hello, World!', async () => {
        const res = await request(server).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello, World!');
    });
});
