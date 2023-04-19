"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postsController_1 = require("./postsController");
const router = (0, express_1.Router)();
router.get("/", postsController_1.getPosts);
router.post("/", postsController_1.postPosts);
router.put("/:id", postsController_1.putPosts);
router.delete("/:id", postsController_1.deletePosts);
exports.default = router;
//# sourceMappingURL=postsRouter.js.map