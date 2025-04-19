import express from "express";
import * as applicationController from "../controllers/application.controller.js";

const router = express.Router();

router.post("/", applicationController.createApplication);       // Créer une candidature
router.get("/:id", applicationController.getApplication);        // Obtenir une candidature par ID

export default router;
