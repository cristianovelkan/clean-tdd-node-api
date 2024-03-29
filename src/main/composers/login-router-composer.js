const LoginRouter = require('../../presentation/routers/login-router')
const AuthUseCase = require('../../domain/usecases/auth-usecase')
const EmailValidator = require('../../utils/helpers/email-validator')
const LoadUserByEmailRepository = require('../../infra/repositories/load-user-by-email-repository')
const UpdateAccessTokenRepository = require('../../infra/repositories/update-access-token-repository')
const Encrypter = require('../../utils/helpers/encrypter')
const TokenGenerator = require('../../utils/helpers/token-generator')
const env = require('../config/env')

const loadedUserByEmailRepository = new LoadUserByEmailRepository()
const updateAccessTokenRepository = new UpdateAccessTokenRepository()
const encrypter = new Encrypter()
const tokenGenerator = new TokenGenerator(env.tokenSecret)
const emailValidator = new EmailValidator()

const authUserCase = new AuthUseCase({
  loadedUserByEmailRepository,
  updateAccessTokenRepository,
  encrypter,
  tokenGenerator
})

const loginRouter = new LoginRouter({ authUserCase, emailValidator })

module.exports = loginRouter
