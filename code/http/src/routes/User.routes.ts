import {Router} from "express"
import { signup } from "../controllers/User.controller";

const router = Router();

router.post("/signup",signup);

export default router;