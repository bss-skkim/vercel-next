// @ts-ignore
import express from "express";
import next from "next";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(cors());
  server.use(bodyParser.json());

  server.get("/", (req, res) => {
    return app.render(req, res, "/");
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  // const mongURI = process.env.MONGO_URI;
  // mongoose.connect(mongURI);

  // mongoose.connection.on("connected", () => {
  //   console.log("Connect Success");
  // });

  // mongoose.connection.on("error", (error) => {
  //   console.log("error", error);
  // });

  // @ts-ignore
  server.listen(4000, (err) => {
    if (err) throw err;
    console.log("listening to 4000");
  });
});

// // @ts-ignore
// import "dotenv/config";
// import next, { Request, Response } from "express";
// import cors from "cors";
// import express from "express";
// import bodyParser from "body-parser";
// import cookieParser from "cookie-parser";

// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

//   // server.use(cors());
//   // server.use(bodyParser.urlencoded({ extended: false }));
//   // server.use(bodyParser.json());
//   // server.use(cookieParser());

//   server.get("/", (req: any, res: any) => {
//     return app.render(req, res, "/");
//   });

//   server.get("*", (req, res) => {
//     return handle(req, res);
//   });
//   // @ts-ignore
//   server.listen(3000, (err: any) => {
//     if (err) throw err;
//     console.log("listening to 3000");
//   });
// });
