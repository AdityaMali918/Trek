const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//register

router.post("/register",async (req,res)=>{
    try{
        //generate new password
        const salt =await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);

        //create new user
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword,
        })

        //save user and send response
        const user = await newUser.save();
        res.status(200).json(user._id);

    }catch(err){
        res.status(500).json(er);
    }
})

//login

router.post("/login",async (req,res)=>{
    try{
        //find user
        const user = await User.findOne({username:req.body.username});
        !user && res.status(400).json("Wrong username or password")

        //validate user
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        !validPassword && res.status(400).json("Wrong username or password")

        //send req
        res.status(200).json({_id:user._id,username:user.username})
    }catch(err){
        res.status(500).json(er);
    }
})

//     "username":"Aditya",
//     "title":"Pune",
//     "desc":"Beautiful",
//     "rating":5,
//     "lat":32213,
//     "long":21323
// }


module.exports = router