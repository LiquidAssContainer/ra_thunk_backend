const http = require('http');
// const path = require('path');
const Koa = require('koa');
const koaBody = require('koa-body');
// const serve = require('koa-static');
const Router = require('koa-router');
const cors = require('koa2-cors');
const uuid = require('uuid');

const app = new Koa();
const router = new Router();

const services = require('./services');
// const publicDirPath = path.join(__dirname, '/public');

app.use(
  cors({
    origin: '*',
  }),
);

app.use(
  koaBody({
    text: true,
    urlencoded: true,
    multipart: true,
    json: true,
  }),
);

router
  .get('/api/services', async (ctx, next) => {
    const servicesWithoutContent = services.map(
      ({ content, ...service }) => service,
    );
    ctx.body = servicesWithoutContent;
    return await next();
  })

  .post('/api/services', async (ctx, next) => {
    const { name, price } = ctx.request.body;

    if (typeof name === 'string' && typeof price === 'number' && price >= 0) {
      const id = uuid.v4();
      const newService = { id, name, price };
      services.push(newService);
      ctx.body = newService;
    } else {
      ctx.status = 400;
      ctx.body = { message: 'Invalid data' };
    }
    return await next();
  })

  .get('/api/services/:id', async (ctx, next) => {
    const { id } = ctx.params;
    const service = services.find((service) => service.id == id);

    if (service) {
      ctx.body = service;
    } else {
      ctx.status = 400;
      ctx.body = { message: 'No services with such id' };
    }
    return await next();
  })

  .delete('/api/services/:id', async (ctx, next) => {
    const { id } = ctx.params;
    const serviceIndex = services.findIndex((service) => service.id == id);

    if (serviceIndex !== -1) {
      services.splice(serviceIndex, 1);
      ctx.status = 204;
    } else {
      ctx.status = 400;
      ctx.body = { message: 'No services with such id' };
    }
    return await next();
  });

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 7070;
const server = http.createServer(app.callback());
server.listen(port);
