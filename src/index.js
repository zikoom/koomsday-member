const Koa = require('koa');
const Router = require('@koa/router')
const bodyParser = require('koa-bodyparser')


const app = new Koa();
const router = new Router();
const cors = require('@koa/cors')

app.use(cors());

const tempData = {
  users: ['ㅁㅁㅁㅁ', 'ㅁㄴㅇㄹ', 'ㅁㄴㅇㄹ'],
  points: ['10','123123', '551']
};



router.get('/api/users', ctx => {
  ctx.body = {ok: true, users: tempData.users}
})

const port = 9898;
app.use(bodyParser()).use(router.routes());

app.listen(port, () => {
  console.log('koomsday member server on');
})