import express from "express";
import { contentController } from "./content.controller.js";
import { validateRequest } from "../../middleware/validateRequest.js";
import { contentValidations } from "./content.validation.js";
import {verifyToken} from "../../middleware/verifyToken.js"

const router = express.Router();

router.post(
  "/", verifyToken(),
  validateRequest(contentValidations.updateContentValidationSchema),
  contentController.createContent
);
router.patch(
  "/:id", verifyToken(),
  validateRequest(contentValidations.updateContentValidationSchema),
  contentController.updateContent
);
router.get('/me', verifyToken(), contentController.getMyContent)
router.get('/', contentController.getAllContent)
router.get('/:userId', contentController.getUserContent)

export const contentRoutes = router;
