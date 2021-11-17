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

async function responseWithDelay(callback, delay) {
  await new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
  return await callback();
}

router
  .get('/api/services', async (ctx, next) => {
    return await responseWithDelay(async () => {
      const servicesWithoutContent = services.map(
        ({ content, ...service }) => service,
      );
      ctx.body = servicesWithoutContent;
      return await next();
    }, 1000);
  })

  .post('/api/services', async (ctx, next) => {
    return await responseWithDelay(async () => {
      console.log(ctx.request.body);
      const { name, price, content } = JSON.parse(ctx.request.body);

      if (
        typeof name === 'string' &&
        typeof content === 'string' &&
        typeof price === 'number' &&
        price >= 10
      ) {
        const id = uuid.v4();
        const newService = { id, name, price, content };
        services.push(newService);
        ctx.body = newService;
      } else {
        ctx.status = 400;
        ctx.body = { message: 'Invalid data' };
      }
      return await next();
    }, 1000);
  })

  .get('/api/services/:id', async (ctx, next) => {
    return await responseWithDelay(async () => {
      const { id } = ctx.params;
      const service = services.find((service) => service.id == id);

      if (service) {
        ctx.body = service;
      } else {
        ctx.status = 400;
        ctx.body = { message: 'No services with such id' };
      }
      return await next();
    }, 1);
  })

  .put('/api/services/:id', async (ctx, next) => {
    return await responseWithDelay(async () => {
      const { id } = ctx.params;
      const serviceIndex = services.findIndex((service) => service.id == id);

      if (serviceIndex === -1) {
        ctx.status = 400;
        ctx.body = { message: 'No services with such id' };
        return await next();
      }

      const { name, price, content } = JSON.parse(ctx.request.body);

      if (
        typeof name === 'string' &&
        typeof content === 'string' &&
        typeof price === 'number' &&
        price >= 10
      ) {
        services[serviceIndex] = { id, name, price, content };
        ctx.body = services[serviceIndex];
      } else {
        ctx.status = 400;
        ctx.body = { message: 'Invalid data' };
      }
      return await next();
    }, 1000);
  })

  .delete('/api/services/:id', async (ctx, next) => {
    return await responseWithDelay(async () => {
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
    }, 100);
  });

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 7070;
const server = http.createServer(app.callback());
server.listen(port);
