import express = require("express");
import router from "./routes/users";
import dbConnection from "./database/connection";
import cors from "cors";

class Server {
  app: express.Application;
  port = process.env.PORT;

  constructor() {
    this.app = express();

    //initial configs
    this.connection();
    this.middlewares();
    this.routes();
  }

  connection() {
    dbConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/default", router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Listening on port " + this.port);
    });
  }
}

export default Server;
