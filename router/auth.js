const Router = require('@koa/router');
const router = new Router();
const logger = require('../config/winston')

const {oauth2Client ,getAuthURL} = require('../js/oauth')

/**
 * /auth/...
 */

router.get('/googleOauthURL', ctx => {
  const url = getAuthURL();
  logger.info(`/googleOauthURL`);
  ctx.status = 202;
  ctx.body = {
    url: url
  }
})

router.get('/oauth2callback', async (ctx) => {

  logger.info('get /oauth2callback.')

  try {
    const {code} = ctx.request.query;
    if(!code) throw new Error('unvaild authcode');
    ctx.redirect(`${global._CONFIG.WEB_DOMAIN}/auth/oauth2callback?code=${code}`)


  } catch (error) {
    logger.error(`get /oauth2callback error:${error}`)
    ctx.status = 500;
  }
})

router.post('/userinfo', async (ctx) => {
  logger.info('post /userinfo.')
  ctx.body = 'test';
})

module.exports = router;