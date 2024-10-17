import request from 'supertest'; // Import Supertest
import app from '../src/index';  // Import the Express app
import { Server } from 'http';    // Import Server type from Node

describe('GET /', () => {
    let server: Server;

    // Start the server before tests
    beforeAll((done) => {
        server = app.listen(4000, () => {
            console.log('Test server running on port 4000');
            done();
        });
    });

    // Close the server after tests
    afterAll((done) => {
        server.close((err) => {
            if (err) return done(err);
            done();
        });
    });

    // Test the GET / endpoint
    it('should return Hello, World!', async () => {
        const res = await request(server).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello, World!');
    });
});
