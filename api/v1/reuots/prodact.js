

const router=require("exspress").Router();

router.get("/prodact",(req,res)=>{
    return res.steatus(200).json({msg:"all prodact"});
});



router.get("/prodact/:id",(req,res)=>{});

router.put("/prodact/:id",(req,res)=>{});

router.post("/prodact",(req,res)=>{});

router.Delete("/prodact/:id",(req,res)=>{});

module.exports=reouter();