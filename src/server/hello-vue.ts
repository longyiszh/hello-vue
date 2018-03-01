import { join } from 'path';
import { readFileSync } from 'fs';

import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as logger from 'koa-logger';
import * as send from 'koa-send';
import * as serve from 'koa-static';
import * as bodyParser from 'koa-bodyparser';
import * as cors from "@koa/cors";

import { createBundleRenderer } from 'vue-server-renderer';

// import { api } from './router/api';

const app = new Koa();
const router = new Router();

const clientPath = join(__dirname, "../client");

app.use(logger());
app.use(bodyParser());
app.use(cors());

const serverBundle = readFileSync(join(clientPath, 'bundle.server.js'), 'utf8');
const index = readFileSync(join(clientPath, 'index.html'), 'utf8');
const serverRenderer = createBundleRenderer(serverBundle);


// const serverBundle2 = require(join(clientPath, 'bundle.server.js'));
// const serverRenderer2 = createRenderer({
//   template: index
// });

const clientBundleFileUrl = '/bundle.client.js';

// root route and sub route settings

// router.use('/api', api.routes(), api.allowedMethods())
// router.get('/*', async (ctx, next) => {
//   await send(ctx, join(clientPath, 'index.html'), { root: '/' });
// });

// router.get(clientBundleFileUrl, async (ctx) => {
//   const clientBundle = readFileSync(join(clientPath, 'bundle.client.js'), 'utf8');
//   await send(ctx, clientBundle, { root: '/' });
// });

router.get('/*', async (ctx, next) => {

  let html: string = '';

  try {
    html = await serverRenderer.renderToString({url: ctx.url});
  } catch (err) {
    console.error(err);
    ctx.status = 500;
    ctx.body = {
      msg: "Server Rendering error"
    }
    return;
  }

  ctx.body = index.replace('<div id="app"></div>', html);

  // let app = await serverBundle2.default({ url: ctx.req.url });
  // const context = {
  //   title: 'Hello vue - Server Render'
  // }

  // let html: string = '';

  // try {
  //   html = await serverRenderer2.renderToString(app, context);
  // } catch (err) {
  //   console.error(err);
  //   if (err.code === 404) {
  //     ctx.status = 404;
  //     ctx.body = {
  //       msg: "Page not found"
  //     }
  //     return;
  //   } else if (err.code === 500) {
  //     ctx.status = 500;
  //     ctx.body = {
  //       msg: "Server Rendering error"
  //     }
  //     return;
  //   }

  //   ctx.body = html;

  //   return;
  // }


});


app.use(serve(clientPath));

app.use(router.routes())
.use(router.allowedMethods());

// listen
app.listen(3000, () => {
  console.log("** koa started on port 3000. **");
});

export default app;
