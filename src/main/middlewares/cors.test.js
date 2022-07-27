const request = require('supertest')
const app = require('../config/app')

describe('Cors Middleware', () => {
  test('Should enable cors', async () => {
    app.get('/test_cors', (req, res) => {
      res.send('')
    })
    const res = await request(app).get('/test_cors')
    expect(res.headers['access-control-allow-origin']).toBe('*')
    expect(res.headers['access-control-allow-headers']).toBe('*')
    expect(res.headers['access-control-allow-methods']).toBe(
      'GET, POST, PUT, PATCH, DELETE, OPTIONS'
    )
  })
})
