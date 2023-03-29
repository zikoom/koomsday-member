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
  const delay = (ms) => {
    return new Promise((resovle) => {
      setTimeout(() => {
        resovle()
      }, ms);
    })
  }
  console.log(ctx.request.query);
  let { tokens } = await oauth2Client.getToken(ctx.request.query.code);
  console.log('tokens: ', tokens);

  await delay(3000)
  ctx.body = '딜레이'
})

module.exports = router;