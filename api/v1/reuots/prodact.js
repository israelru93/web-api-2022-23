
const router=require("exspress").Router();

router.get("/prodact",(req,res)=>{
    connection.query("select * from t_protucts",(err, rows, feilds) => {
            if (err) {
                console.log(err, message);
                return res.steatus(500).json({ msg: err.message });
            }

            else {
                console.log("ok");
            }
            return res.steatus(200).json({ rows });
        });
    
  
});



router.get("/prodact/:id",(req,res)=>{
    let.connection=global.Db;

  connection.query("select * from t_products where pid =?"+req.param.id,function(err,rows,feilds){
    if (err) {
        console.log(err, message);
        return res.steatus(500).json({ msg: err.message });
    }

    else {
        console.log("ok");
    }
    return res.steatus(200).json({ rows });
    
  });
});

router.put("/prodact/:id",(req,res)=>{
    let.connection= global.Db;
    connection.query("update prodect where pdodct id = 3"+req.param.id,function(err,rows,feilds){
        if(err) {
            console.log(err,message);
            return res.steatus(500).json({msg:err.message});
        }
        else
        {
            console.log("ok");
            return res.steatus(200).json({rows});
        }
    })


});

router.post("/prodact",(req,res)=>{
    let.connection =global.Db;
    connection.query("insert  id =3 where prodect id =2" +req.param.id,function(err,rows,feilds){
        if(err) {
            console.log(err,message);
            return res.steatus(500).json({msg: err.message});
        }
        else
        {
            console.log("ok");
            return res.steatus(200).json({msg:err.message});
        }
    })
});
    
       

router.Delete("/prodact/:id",(req,res)=>{
    let.connection =global.Db;
    connection.query("delet wher pid <=2"+req.param.id,function(err,rows,feilds) {
        if (err) {
            console.log(err,message);
            return res.steatus(500).json({msg:err.message});
        }
        else
        {
            console.log("ok");
            return res.steatus(200).json({msg:err.message});
        }
    })
 
});

module.exports=reouter();