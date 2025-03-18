import express from "express";
import { authController } from "./auth.controller.js";
import { validateRequest } from "../../middleware/validateRequest.js";
import { authValidations } from "./auth.validation.js";
import { verifyToken } from "../../middleware/verifyToken.js";

const router = express.Router();

router.post(
  "/register",
  validateRequest(authValidations.registerUserValidationSchema),
  authController.registerUser
);
router.post(
  "/login",
  validateRequest(authValidations.loginValidationSchema),
  authController.loginUser
);
router.post("/refresh-token", authController.refreshToken);
router.get('/', authController.getAllUsers);
router.get('/me', verifyToken(), authController.getMyInfo)
router.get('/:userId', authController.getUserInfo)

export const authRoutes = router;
