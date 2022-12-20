const { Console } = require("console");
const http =require("http");
const app =require("./app");

const port =5050;

const server =http.createServer(app,() => {Console.log("server start")});
server.listen(port);
