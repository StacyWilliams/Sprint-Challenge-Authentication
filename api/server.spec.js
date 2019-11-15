const request = require('supertest');

const server = require('./server.js');

describe('server.js,' , () => {
    describe('GET /', () => {
        it('returns 200 OK' , () => {
//make a GET request to the / endpoint on the server
request(server)
.get('/')
.then(res => {
    expect(res.status).toBe(200);
});
//assert that we get an http status code 200
        });
        it("should return { message: 'Sprint Challenge Server up and running!!'}", async () => {
            const res = await request(server).get('/');
            expect(res.body.message).toBe('Sprint Challenge Server up and running!!' );
            expect(res.body).toEqual({message: 'Sprint Challenge Server up and running!!'});
            
        })

        it('returns JSON', done => {
            request(server)
            .get('/')
            .then(res => {
                expect(res.type).toMatch(/json/i);
                done();
            })
        })
    });
});
