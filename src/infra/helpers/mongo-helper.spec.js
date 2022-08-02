const MongoHelper = require('./mongo-helper')

describe('MongoHelper', () => {
  test('Should reconnect when getCollection() is invoked and client is disconnected', async () => {
    const sut = MongoHelper
    await sut.connect(process.env.MONGO_URL, undefined)
    expect(sut.db).toBeTruthy()
    await sut.disconnect()
    expect(sut.db).toBeFalsy()
    await sut.getCollection('users')
    expect(sut.db).toBeTruthy()
    await sut.disconnect()
  })
})
