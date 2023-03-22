const Router = require('@koa/router');
const router = new Router();
const logger = require('../config/winston')

const {oauth2Client ,getAuthURL} = require('../js/oauth')

router.get('/googleOauthURL', ctx => {
  const url = getAuthURL();
  logger.info(`/googleOauthURL`);
  ctx.status = 202;
  ctx.body = {
    url: url
  }
})

router.get('/oauth2callback', ctx => {
  logger.info('/oauth2callback.');

  ctx.body = ctx.request.query.code;
})



module.exports = router;