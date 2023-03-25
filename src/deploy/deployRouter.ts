import { Router } from "express";
import { postDeploy, getDeploy } from "./deployController";

const router: Router = Router();

router.get("/", getDeploy);
router.post("/", postDeploy);

export default router;
