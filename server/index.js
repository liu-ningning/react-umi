const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const cors = require('koa2-cors');
const logger = require('koa-logger');
const favicon = require('koa-favicon');

let app = new Koa();

app.use(koaBody());
app.use(logger());

// 设置跨域
app.use(cors({
  'origin': '*',
  'exposeHeaders': ['Content-Type', 'Authorization'],
  'maxAge': 60, //  该字段可选，用来指定本次预检请求的有效期，单位为秒
  'credentials': true,
  'allowMethods': ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  'allowHeaders': ['Content-Type', 'Authorization', 'Accept']
}));

app.use(favicon('./favicon.ico'));

app.use(async (ctx, next) => {
  await next();
  const { url, status } = ctx;

  if (status === 404) {
    console.error(`Server Api Not Found: ${url}`);
  }
});

const home = new Router();

home.get('/', async ctx => {
  ctx.body = 'Hello World';
});

const router = new Router();

router.use('/api', require('./routers')(Router).routes());
router.use('/', home.routes());
app.use(router.routes()).use(router.allowedMethods());

app.listen(5210, () => {
  console.info(`Server running on http://127.0.0.1:${5210}`);
});

