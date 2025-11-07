import { Router } from "express";
import userRoute from "./userRoute.js";

// init router
const router = Router();

// routing
router.use("/api/v1/user", userRoute);
// export
export default router;
