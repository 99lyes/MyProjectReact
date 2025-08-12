import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersForSidbar } from "../controllers/message.controller.js";

const router = express.Router();



router.get("/user", protectRoute, getUsersForSidbar)
router.get("/:id", protectedRoute, getMessages);



export default router;