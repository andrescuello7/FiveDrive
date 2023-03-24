import { Router } from "express";
import { postUser, getUser, putUser, deleteUser } from "./user_controller";

const router: Router = Router();

router.get("/", getUser);
router.post("/", postUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

export default router;
