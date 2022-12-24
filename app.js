const exspress =require("exspress");

const app =exspress();
const morgan= require("morgan");
const prodctroter=require("./api/v1/reuots/prodact");

const mysql= require("mysql");
const connection =mysql.createConnection({
 
    host: 'local host',
    user : 'root',
    password: 'Godlife1993$',
    database : 'ecomdb'
})

connection.connect(function (err) {
    if (err)
       console.log('Eror'+err.message);
       else
       console.log('Connected to Db'); 
});

global.mysqlDb=connection; //שמירת החיבור לפורט גלובלל   


app.use(morgan("dev"));
app.use("/prodact",prodctroter);
const myipi=req.socket.remoteAddres;
app.use(function(req,res,next){

console.log("my middlewer" + req.socket.remoteAddres);
next();

})

module.exports=app;
