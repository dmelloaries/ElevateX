import { Router } from "express";
import {
  createUser,
  deleteUser,
  loginUser,
  logoutUser,
  updateUser,
  storeUserSkillsAndSummary,
  getUserSkillsAndSummary,
} from "../controllers/userController.js";
import { verifyJWT } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/adduser", createUser);
router.post("/login", loginUser);
router.post("/logout", verifyJWT, logoutUser);
router.put("/update", verifyJWT, updateUser);
router.delete("/delete", verifyJWT, deleteUser);

router.post("/storeUserSkillsAndSummary",  storeUserSkillsAndSummary);

router.get("/getUserSkillsAndSummary", getUserSkillsAndSummary);

export default router;
