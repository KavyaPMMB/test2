
const jwt=require("jsonwebtoken")

const protect = async(req,res,next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token=req.headers.authorization.split(" ")[1];
            jwt.verify(token,"lazeena123");
            next();
            
        }catch(error){
            res.status(401);
            throw new Error("Not authorized, token");
        }
        
    }

    if(!token){
        res.status(401);
        throw new Error("Not authorized,no token");
    }
};
module.exports=protect; 