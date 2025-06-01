const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');

// Mock environment variables
process.env.JWT_SECRET = 'testsecret';
process.env.MONGO_URI = 'mongodb://localhost:27017/testdb';

describe('Auth Routes', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  });

  test('POST /api/auth/signup - should create a new user', async () => {
    const response = await request(app)
      .post('/api/auth/signup')
      .send({ name: 'Test User', email: 'test@example.com', password: 'password123' });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('User created successfully');
  });

  test('POST /api/auth/login - should log in a user', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'password123' });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});
