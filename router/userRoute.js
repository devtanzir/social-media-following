import { Router } from "express";
import {
  createUserController,
  getUserController,
} from "../controllers/userController.js";

// init router
const router = Router();

// routing
router.get("/", getUserController);
router.post("/", createUserController);
// export
export default router;
