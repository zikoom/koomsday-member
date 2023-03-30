/**
 * koomsday member 서버
 * wwww.koomsday.com/member 로 가는 요청을 이 서버가 처리함
 */

const path = require('path');
const fs = require('fs');

const logger = require('../config/winston')

const configPath = path.resolve(__dirname, '../', 'config.json');
const config = JSON.parse(fs.readFileSync(configPath));
const {PATH_TYPE} = config;

/**
 * global util
 */

global._logger = logger;
global._PATH_TYPE = PATH_TYPE;
global._CONFIG = config[`PATH_${PATH_TYPE}`]


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
router.get(rootPath + '/' , (ctx => {
  ctx.body = '루트'
}))
app.use(bodyParser()).use(router.routes());


const port = 9898;
app.listen(port, () => {
  console.log('koomsday member server on');
})
