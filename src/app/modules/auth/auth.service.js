import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config/index.js";
import User from "../../../db/models/user.js";

const registerUserIntoDb = async (payload) => {
  const result = await User.create(payload);
  return result;
};

const getAllUsersFromDb = async (lmt) => {
  const limit = lmt || 10000;
  const result = await User.findAll({limit});
  return result;
};

const getUserInfoFromDb = async (id) => {
  const result = await User.findByPk(id);
  return result;
};

const loginUserService = async (payload) => {
  const user = await User.findOne({
    where: { email: payload.email },
  });

  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    user.password
  );
  if (!isPasswordMatched) {
    throw new Error("Password not matched");
  }
  const jwtPayload = {
    fullname: user?.fullname,
    email: user?.email,
  };

  const token = jwt.sign(jwtPayload, config.access_token_secret, {
    expiresIn: config.access_token_expires_in,
  });
  const refreshToken = jwt.sign(
    jwtPayload,
    config.refresh_token_secret,
    { expiresIn: config.refresh_token_expires_in }
  );

  return { user, token, refreshToken };
};

export const authServices = {
  registerUserIntoDb,
  loginUserService,
  getAllUsersFromDb,
  getUserInfoFromDb
};
