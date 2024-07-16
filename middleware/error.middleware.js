const errorMiddleware = (error, req, res, next) => {
  console.log("Error:=>", error);
};

export default errorMiddleware;
