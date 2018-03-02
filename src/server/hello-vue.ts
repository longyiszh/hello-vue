import { join, resolve } from 'path';
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

// 坑：不可以require一个json文件，因为webpack里的require和node里的require不！一！样！
const serverBundle = JSON.parse(readFileSync(join(clientPath, 'vue-ssr-server-bundle.json'), 'utf8'));
const clientManifest = JSON.parse(readFileSync(join(clientPath, 'vue-ssr-client-manifest.json'), 'utf8'));

// template
const index = readFileSync(join(clientPath, 'index.html'), 'utf8');

const serverRenderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  clientManifest: clientManifest
})

router.get('/*', async (ctx, next) => {

  let html = '';

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

});


app.use(serve(clientPath));

app.use(router.routes())
.use(router.allowedMethods());

// listen
app.listen(3000, () => {
  console.log("** koa started on port 3000. **");
});

export default app;
