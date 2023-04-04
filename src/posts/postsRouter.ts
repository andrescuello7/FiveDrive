import { Router } from "express";
import { postPosts, getPosts, putPosts, deletePosts } from "./postsController";

const router: Router = Router();

router.get("/", getPosts);
router.post("/", postPosts);
router.put("/:id", putPosts);
router.delete("/:id", deletePosts);

export default router;
