import express from "express";

import * as candidatController from "../controllers/candidat.controller.js"; 

const router = express.Router();
router.post("/", candidatController.createCandidat);  
router.get("/:id", candidatController.getCandidat);  

export default router; 

