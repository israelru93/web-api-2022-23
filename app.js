const exspress =require("exspress");

const app =exspress();

const prodctroter=require("./api/v1/reuots/prodact");

app.use("/prodact",prodctroter);


//hshs//
module.exports=app;
