import express from "express";
import UsersRoutes from "./users/users_router";

export class App {
  private app = express();
  private port: number = 3000;

  settings() {
    this.app.set("port", process.env.PORT || this.port);
  }

  routes() {
    this.app.use("/api/users", UsersRoutes);
  }

  listen() {
    this.routes();
    this.settings();
    this.app.listen(this.app.get("port"), () => {
      console.log("server listening on", this.app.get("port"));
    });
  }
}
