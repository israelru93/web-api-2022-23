

const router=require("exspress").Router();

router.get("/prodact",(req,res)=>{
    return res.steatus(200).json({msg:" get all prodact"});
});



router.get("/prodact/:id",(req,res)=>{
    return res.steatus(200).json({msg:"prodact by id "});
});

router.put("/prodact/:id",(req,res)=>{
    return res.steatus(200).json({msg:"updeta prodact by id "});

});

router.post("/prodact",(req,res)=>{

    return res.steatus(200).json({msg:"add prodact"});
});

router.Delete("/prodact/:id",(req,res)=>{
    return res.steatus(200).json({msg:"delete prodact by id "});
});

module.exports=reouter();