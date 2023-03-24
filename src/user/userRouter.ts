import { Router } from "express";
import { postUser, getUser, putUser, deleteUser } from "./userController";

const router: Router = Router();

router.get("/", getUser);
router.post("/", postUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

export default router;
