const request = require('supertest');
const db = require('../database/dbConfig.js');
const server = require('../api/server');

describe('auth-router.js', () => {
  beforeEach(async () => {
    await db('auth').truncate();
  });

  describe('POST to /api/auth/register', () => {
    it('responds with 201 OK', async done => {
      await request(server)
        .post('/api/auth/register')
        .send({ username: 'student', password: 'hired' })
        .expect(201);

      done();
    });

    it('responds with JSON', async done => {
      await request(server)
        .post('/api/auth/register')
        .send({ username: 'testing', password: 'testing' })
        .expect('Content-Type', /json/i);

      done();
    });
  });

  describe('POST  to /api/auth/login', () => {
    it('responds with 200 OK', async done => {
      await request(server)
        .post('/api/auth/register')
        .send({ username: 'student', password: 'hired' });

        request(server)
        .post('/api/auth/login')
        .send({ username: 'monday', password: 'tuesday' })
        .expect(200);

      done();
    });

    it('responds with JSON', async done => {
      await request(server)
        .post('/api/auth/register')
        .send({ username: 'student', password: 'hired' });

         request(server)
        .post('/api/auth/login')
        .send({ username: 'wednesday', password: 'thursday' })
        .expect('Content-Type', /json/i);

      done();
    });
  });
});