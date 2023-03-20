import Koa from 'koa';
const app = new Koa();

const port = 9898;

app.listen(port, () => {
  console.log('koomsday member server on');
})