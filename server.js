
require("dotenv").config();

// function sendemail(u,p)
// {
//     console.log("send email to "+u)
// }
// sendemail(process.env.User_EMAIL,process.env.EMAIL_PASS);
const { Console } = require("console");
const http =require("http");
const { cwd } = require("process");
const app = require("./app");

const port = process.env.port;

const server =http.createServer(app,() => {Console.log("server start")});
server.listen(port);
