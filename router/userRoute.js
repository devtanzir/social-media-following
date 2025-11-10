import { Router } from "express";
import {
  createUserController,
  getUserController,
  getSingleUserController,
} from "../controllers/userController.js";

// init router
const router = Router();

// routing
router.get("/", getUserController);
router.get("/:id", getSingleUserController);
router.post("/", createUserController);
// export
export default router;
