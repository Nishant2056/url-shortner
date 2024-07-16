import mainRouter from "./main.route.js";

export const initializeRoutes = (app) => {
  app.use(mainRouter);
};
