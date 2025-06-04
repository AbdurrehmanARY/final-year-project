import jwt from "jsonwebtoken";

const sendCookie = (user, res, message, statusCode = 200) => {
  const token = jwt.sign({id: user.id,
        role: user.role,
        email: user.email,
        userName: user.userName, }, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });

  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      sameSite: 'None',
      secure: true // 'None' requires HTTPS + secure

    })
  // console.log('cookie is in send cookie',req.cookies)
    res.json({
      success: true,
      user: {
        id: user.id,
        userName: user.userName,
        email: user.email,
       role:user.role},
      message,
    });
};

export default sendCookie;
