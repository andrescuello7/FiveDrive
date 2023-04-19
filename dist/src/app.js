"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const usersRouter_1 = __importDefault(require("./users/usersRouter"));
const postsRouter_1 = __importDefault(require("./posts/postsRouter"));
const body_parser_1 = __importDefault(require("body-parser"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = 3000;
    }
    settings() {
        this.app.set("port", process.env.PORT || this.port);
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(body_parser_1.default.json());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use("/api/users", usersRouter_1.default);
        this.app.use("/api/posts", postsRouter_1.default);
    }
    listen() {
        this.app.listen(this.app.get("port"), () => {
            console.log("server listening on", this.app.get("port"));
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map