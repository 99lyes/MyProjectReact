import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();



router.get("/user", protectRoute, getUsersForSidbar)




export default router;