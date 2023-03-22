const Router = require('@koa/router');
const globalRouter = new Router();

const auth = require('./auth')

globalRouter.use('/auth', auth.routes());


module.exports = globalRouter;