import { Router } from "express";
import { postUser, getUsers, deleteUser, putUser } from "./users_controller";

const router: Router = Router();

router.get("/", getUsers);
router.post("/", postUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

export default router;
