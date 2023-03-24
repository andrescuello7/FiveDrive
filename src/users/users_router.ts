import { Router } from "express";
import { createUsers, getUsers } from "./users_controller";

const router: Router = Router();

router.get("/", getUsers);
router.post("/", createUsers);

export default router;
