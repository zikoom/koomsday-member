/**
 * koomsday member 서버
 * wwww.koomsday.com/member 로 가는 요청을 이 서버가 처리함
 */


const Koa = require('koa');
const Router = require('@koa/router')
const bodyParser = require('koa-bodyparser')


const app = new Koa();
const router = new Router();
const cors = require('@koa/cors')

const logger = require('../config/winston')


app.use(cors());

const tempData = {
  users: ['ㅁㅁㅁㅁ', 'ㅁㄴㅇㄹ', 'ㅁㄴㅇㄹ'],
  points: ['10','123123', '551']
};



router.get('/', (ctx) => {
  logger.info(`GET / request: ${ ctx.request.originalUrl}`)
  ctx.body = {ok: true, users: '루트'}
})
router.get('/api/users', ctx => {
  logger.info('GET /api/users')
  ctx.body = {ok: true, users: tempData.users}
})

router.get('/:one/:two/:three/:four', (ctx) => {
  const {one, two, three, four} = ctx.params
  logger.info(`GET for wildcard route(/:one/:two/:three/:four) one: ${one}, two: ${two}, three: ${three}, for:${four}`)
  ctx.body = {ok: true, users: '루트'}
})

const port = 9898;
app.use(bodyParser()).use(router.routes());

app.listen(port, () => {
  console.log('koomsday member server on');
})