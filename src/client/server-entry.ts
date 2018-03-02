// server-entry
import { createApp } from './create-app';
import { appRouter } from "./app.router";

// the default export should be a function
// which will receive the context of the render call
export default (context: any) => {

  return new Promise((resolve, reject) => {
    const app = createApp();

    // app.fetchServerData(context);
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