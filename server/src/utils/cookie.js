import jwt from "jsonwebtoken";
 const sendCookie = (user, res, message, statusCode = 200) => {
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);


  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
    //   sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
    //   secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      user,
      message,
      
    });
};

export default sendCookie;