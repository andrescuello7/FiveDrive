"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("./usersController");
const router = (0, express_1.Router)();
router.get("/", usersController_1.getUsers);
router.post("/", usersController_1.postUsers);
router.put("/:id", usersController_1.putUsers);
router.delete("/:id", usersController_1.deleteUsers);
exports.default = router;
//# sourceMappingURL=usersRouter.js.map