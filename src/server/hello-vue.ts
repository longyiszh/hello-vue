import { join } from 'path';
import { readFileSync } from 'fs';

import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as logger from 'koa-logger';
import * as send from 'koa-send';
import * as serve from 'koa-static';
import * as bodyParser from 'koa-bodyparser';
import * as cors from "@koa/cors";

import {createBundleRenderer} from 'vue-server-renderer';

// import { api } from './router/api';

const app = new Koa();
const router = new Router();

const clientPath = join(__dirname, "../client");

app.use(logger());
app.use(bodyParser());
app.use(cors());

const serverBundle = readFileSync(join(clientPath, 'bundle.server.js'), 'utf8');
const serverRenderer = createBundleRenderer(serverBundle);

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

router.get('/', async (ctx, next) => {

  let html: string = '';

  try {
    html = await serverRenderer.renderToString();
  } catch (err) {
    console.error(err);
    ctx.status = 500;
    ctx.body = {
      msg: "Server Rendering error"
    }
    return;
  }

  ctx.body = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Hello Vue</title>
    </head>
    <body>
      ${html}
      <script src="${clientBundleFileUrl}"></script>
    </body>
  </html>
  `

});


app.use(serve(clientPath));

app.use(router.routes())
.use(router.allowedMethods());

// listen
app.listen(3000, () => {
  console.log("** koa started on port 3000. **");
});

export default app;
