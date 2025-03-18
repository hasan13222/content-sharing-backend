
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import AppError from "../errors/AppError.js"
import { catchAsync } from "../utils/catchAsync.js";
import User from "../../db/models/user.js";
import config from "../config/index.js";

export const verifyToken = () => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    // check if token is missing
    if (!token) {
      throw new AppError(StatusCodes.UNAUTHORIZED, "You are not authorized");
    }
    // check if the token is valid
    const decoded = jwt.verify(
      token,
      config.access_token_secret
    );

    const { email } = decoded;

    // checking if the user is exist
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      throw new AppError(StatusCodes.NOT_FOUND, "This user is not found !!!");
    }

    req.user = { ...(decoded), id: user.id };
    next();
  });
};
