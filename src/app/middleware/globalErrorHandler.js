import { StatusCodes } from "http-status-codes";
import config from "../config/index.js";


export const globalErrorHandler = (
  err,
  req,
  res,
  next
) => {
  if (err) {
    let statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    let message = err.message || "Something went wrong";
    let errorSources = [
      { path: "", message: "Something went wrong" },
    ];

    res.status(statusCode).json({
      success: false,
      message,
      errorSources,
      stack: config.node_env === 'development' ? err.stack : null
    })
  } else {
    next();
  }
};
