/**
 * koomsday member 서버
 * wwww.koomsday.com/member 로 가는 요청을 이 서버가 처리함
 */
const logger = require('../config/winston')
/**
 * global util
 */

global._logger = logger;

///////////////////////////////

const rootPath = '/member'


const Koa = require('koa');
const Router = require('@koa/router')
const bodyParser = require('koa-bodyparser')


const app = new Koa();
const router = new Router();
const cors = require('@koa/cors')




app.use(cors());



const globalRouter = require('../router/index')
router.use(rootPath, globalRouter.routes());
app.use(bodyParser()).use(router.routes());


const port = 9898;
app.listen(port, () => {
  console.log('koomsday member server on');
})