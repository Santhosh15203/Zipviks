const registerformodal = require("../models/registerform")

exports.registerformController=async(req,res,next)=>{

    try{
        const {firstname,lastname,email,
            password,mobile,gender,
            address,city,state,zipcode,country} = req.body
            
        const registerformdetails=await registerformodal.create({
            firstname,
            lastname,
            email,
            password,
            mobile,
            gender,
            address,
            city,
            state,
            zipcode,
            country
        })
        res.json({
            message:"registeration successful",
            registerformdetails
        })

    }
    catch(error){
        console.log("registeration error",error)
    }

}