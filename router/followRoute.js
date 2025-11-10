import { Router } from "express";
import {
  createFollowController,
  getFollowController,
} from "../controllers/followController.js";

// init router
const router = Router();

// routing
router.get("/", getFollowController);
router.post("/", createFollowController);
// export
export default router;
