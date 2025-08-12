import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersForSidbar, getMessages } from "../controllers/message.controller.js";

const router = express.Router();



router.get("/user", protectRoute, getUsersForSidbar)
router.get("/:id", protectRoute, getMessages);



export default router;