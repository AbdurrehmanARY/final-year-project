import jwt from "jsonwebtoken";
import prisma from "../db/db.config.js";
export const isAuth = async (req, res,next) => {
    const token = req.cookies.token;
    
  if (!token)
    return res.status(401).json({
      success: false,
      message: "login first",
    });
try{
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
    req.user=await prisma.users.findUnique({
      where:{
      id:decoded.id
      }
    })
    next();
}
catch (error) {
    console.log(error)
      res.status(401).json({
        success: false,
        message: "some error occured",
      });
    }
};