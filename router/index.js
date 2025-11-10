import { Router } from "express";
import userRoute from "./userRoute.js";
import followRoute from "./followRoute.js";

// init router
const router = Router();

// routing
router.use("/api/v1/user", userRoute);
router.use("/api/v1/follow", followRoute);
// export
export default router;
