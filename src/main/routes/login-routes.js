const loginRouter = require('../composers/login-router-composer')
const ExpressRoutesAdapter = require('../adapters/express-router-adapter')

module.exports = (router) => {
  router.post('/login', ExpressRoutesAdapter.adapt(loginRouter))
}
