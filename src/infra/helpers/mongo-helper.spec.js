const MongoHelper = require('./mongo-helper')

describe('MongoHelper', () => {
  test('Should connect and disconnect gracefully when is invoked', async () => {
    const sut = MongoHelper
    await sut.connect(process.env.MONGO_URL, undefined)
    expect(sut.db).toBeTruthy()
    await sut.disconnect()
    expect(sut.db).toBeFalsy()
  })
})
