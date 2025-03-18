import express from "express";
import { profileController } from "./profile.controller.js";
import { validateRequest } from "../../middleware/validateRequest.js";
import { profileValidations } from "./profile.validation.js";
import {verifyToken} from "../../middleware/verifyToken.js"

const router = express.Router();

router.post(
  "/",
  validateRequest(profileValidations.updateProfileValidationSchema),
  profileController.updateProfile
);
router.get('/me', verifyToken(), profileController.getMyProfile)
router.get('/:userId', profileController.getUserProfile)

export const profileRoutes = router;
