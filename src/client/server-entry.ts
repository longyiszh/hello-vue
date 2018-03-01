// server-entry
import Vue from 'vue';
import App from './App.vue';

import { createApp } from './entry';
import { appRouter } from "./app.router";

// const app = new Vue({
//   el: '#app',
//   // the root instance simply renders the App component.
//   render: h => h(App),
//   router: appRouter
// });

// the default export should be a function
// which will receive the context of the render call
export default (context: any) => {

  return new Promise((resolve, reject) => {
    //const app = createApp();
    const app = new Vue({
      el: '#app',
      render: (h: any) => h(App),
      router: appRouter
    });
    // app.fetchServerData(context);
    console.log(context)
    appRouter.push(context.url);
    appRouter.onReady(
      () => {
        const matchedComponents = appRouter.getMatchedComponents();
        // no matched routes, reject with 404
        if (!matchedComponents.length) {
          return reject({ code: 404 });
        }
        // the Promise should resolve to the app instance so it can be rendered
        resolve(app);
      },
      reject
    );
  });
};