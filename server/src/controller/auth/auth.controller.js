import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import prisma from "../../db/db.config.js";
import sendCookie from "../../utils/cookie.js";

//register
export const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;
// process.stdout.write("working\n");
  try {
    if(!userName || !email || !password){
      return res.status(400).json({
        success: false,
        message: "please enter all field",

      })
    }
    const checkUser=await prisma.users.findUnique({
      where:{
        email
      }
    })
    if (checkUser)
      return res.status(409).json({
        success: false,
        message: "User Already exists with the same email! Please try again",
      });

    const hashPassword = await bcrypt.hash(password, 12);

  const user = await prisma.users.create({
  data: {
    userName,
    email,
    role:'USER',
    password:hashPassword
  },
});
// console.log(user)
sendCookie(user, res, "Register successfully", 202);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

//login
export const loginUser = async (req, res) => {
const { email, password } = req.body;
  try {
    if( !email || !password){
      return res.json({
        success: false,
        message: "please enter all field",

      })
    }
   
      const user=await prisma.users.findUnique({
        where:{
          email
        }
      })
    if (!user)
      return res.json({
        success: false,
        message: "User doesn't exists! Please register first",
      });

    const checkPasswordMatch = await bcrypt.compare(
      password,
      user.password
    );
    if (!checkPasswordMatch)
      return res.json({
        success: false,
        message: "Incorrect password! Please try again",
      });
      sendCookie(user, res, "login successfully", 202);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

//logout

export const logoutUser = (req, res) => {
  console.log('cookie is',req.cookies)
  console.log('logout working')
//  return res.clearCookie("token", {
//     httpOnly: true,
//    sameSite: 'Lax',
// secure: true

//   }).json({
//     success: true,
//     message: "Logged out successfully!",
//   });

  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite:  "lax" ,
      secure: false ,
    })
    .json({
      success: true,
      message:'Logout Successfully'
      // user: req.user,
    });
};

//auth middleware
// const authMiddleware = async (req, res, next) => {



 
  export const myProfile = async (req, res,next) => {
  if(!req.user){
res.status(401).json({
  success: false,
    message: "login please",
    // user: req.user,
  });
  }
  
  res.json({
    success: true,
    message: "my profile",
     user: req.user,
  });
};

