import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { authServices } from "./auth.service.js";
import bcrypt from "bcrypt";
import AppError from "../../errors/AppError.js";
import jwt from "jsonwebtoken";
import config from "../../config/index.js";

const getAllUsers = catchAsync(async (req, res) => {
  const result = await authServices.getAllUsersFromDb(Number(req.query.limit));

  sendResponse(res, {
    status: StatusCodes.CREATED,
    message: "User Registered successfully",
    data: result,
  });
});

const getMyInfo = catchAsync(async (req, res) => {
  const result = await authServices.getUserInfoFromDb(req.user.id);

  sendResponse(res, {
    status: StatusCodes.CREATED,
    message: "User Info retrieved successfully",
    data: result,
  });
});
const getUserInfo = catchAsync(async (req, res) => {
  const result = await authServices.getUserInfoFromDb(req.params.userId);

  sendResponse(res, {
    status: StatusCodes.CREATED,
    message: "User Info retrieved successfully",
    data: result,
  });
});

const registerUser = catchAsync(async (req, res) => {
  const password = await bcrypt.hash(
    req.body.password,
    Number(config.bcrypt_salt_rounds)
  );
  const result = await authServices.registerUserIntoDb({
    ...req.body,
    password,
  });

  sendResponse(res, {
    status: StatusCodes.CREATED,
    message: "User Registered successfully",
    data: result,
  });
});


const loginUser = catchAsync(async (req, res) => {
  const result = await authServices.loginUserService(req.body);

  sendResponse(res, {
    status: StatusCodes.OK,
    message: "You are logged in successfully",
    data: result,
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const refreshToken = req.body.refresh_token;
  if (!refreshToken) {
    throw new AppError(StatusCodes.NOT_FOUND, "Refresh token not found");
  }
  const decoded = jwt.verify(
    refreshToken,
    config.refresh_token_secret
  );

  if (!decoded) {
    sendResponse(res, {
      status: StatusCodes.FORBIDDEN,
      message: "You are not authorized",
      data: null,
    });
  }
  const { email, fullname } = decoded;
  const jwtPayload = {
    fullname,
    email,
  };

  const token = jwt.sign(jwtPayload, config.access_token_secret, {
    expiresIn: config.access_token_expires_in
  });

  sendResponse(res, {
    status: StatusCodes.OK,
    message: "Acceess token has been sent successfully",
    data: { token },
  });
});



export const authController = {
  registerUser,
  loginUser,
  refreshToken,
  getAllUsers,
  getMyInfo,
  getUserInfo
};
