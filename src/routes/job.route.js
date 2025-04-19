
import express from "express";
import * as jobController from "../controllers/job.controller.js";

const router = express.Router();

router.post("/", jobController.createJob);         // Créer un job
router.get("/:id", jobController.getJob);          // Obtenir un job par ID

export default router;
