const jwt=require("jsonwebtoken");
require("dotenv").config();
const authenticator= async(req,res,next)=>{
    const token = req.headers.authorization ? req.headers.authorization.split(" ")[1] : null;
    
    const email = req.headers.email
    
    if(token){
        jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
            if(err){
                console.log(err,"Please Login again")
                return res.status(401).json({ message: "Please Login again" })
            }else{
                req.user = decoded;
                next()
            }
        })
        
    }else{
        console.log("Please Login First")
        return res.status(401).json({ message: "Please Login again" })
    }
}  
module.exports={authenticator}