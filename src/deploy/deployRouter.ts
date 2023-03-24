import { Router } from "express";
import { postDeploy } from "./deployController";

const router: Router = Router();

router.post("/", postDeploy);

export default router;
