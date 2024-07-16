import express from "express";

const mainRouter = express.Router();

mainRouter.get("/", (req, res, next) => {
  res.send({
    message: "Hello World !",
  });
});

export default mainRouter;
