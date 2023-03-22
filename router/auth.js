const Router = require('@koa/router');
const router = new Router();
const logger = require('../config/winston')

const getAuthURL = require('../js/oauth')

router.get('/googleOauthURL', ctx => {
  const url = getAuthURL();
  logger.info(`/googleOauthURL. url: ${url}`);
  ctx.status = 202;
  ctx.body = {
    url: url
  }
})



module.exports = router;