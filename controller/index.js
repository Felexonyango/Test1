const express = require("express");
const router = express.Router();

const User = require("../model/user");




router.post("/users",async(req,res)=>{
  try{
    

    
    const user= new User({
        fname:req.body.fname,
        age:req.body.age,
        dateofbirth:req.body. dateofbirth,
        lname:req.body.lname,
      
      });
      const newuser = await user.save();

      res.json(newuser);
  }
  catch(e){
      console.error(e)


  }
})

router.get("/users",async(req,res)=>{
    try {
        const user = await User.find().sort({ date: -1 });
        res.json(user);
      } 
      catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
      }
    });
  







module.exports = router;