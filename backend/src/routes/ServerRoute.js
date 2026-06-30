import express from "express";
import { requireAuth } from "../middleware/requireAuth.js";
const router = express.Router();

import {
  adminLogin,
  publicCaseStudies,
  publicCaseStudiesbySlug,
  AdminCaseStudies,
  PostCaseStudies,
  UpdateCaseStudies,
  DeleteCaseStudies,
} from "../controllers/ServerController.js";

//this all are public end points
router.get("/api/case-studies", publicCaseStudies);
router.get("/api/case-studies/:slug", publicCaseStudiesbySlug);
router.post("/api/auth/login", adminLogin);

//Protected Routes
router.post("/api/admin/case-studies/add", requireAuth, PostCaseStudies);
router.get("/api/admin/case-studies", requireAuth, AdminCaseStudies);
router.put("/api/admin/case-studies/:id", requireAuth, UpdateCaseStudies);
router.delete("/api/admin/case-studies/delete/:id", requireAuth, DeleteCaseStudies);

export default router;