import prisma from "../../db/db.config.js";
export const addToCart = async (req, res) => {
    try{
        let { userId, productId, quantity } = req.body;
     productId = parseInt(productId, 10);
     userId = parseInt(userId, 10);
        if (!userId || !productId || quantity <= 0) {
          return res.status(400).json({
            success: false,
            message: "Invalid data provided!",
          });
        }


        const cart = await prisma.cart.upsert({
            where: { userId },
            create: { userId },
            update: {},
          });
          console.log(cart)






        res.status(200).json({
            userId, productId, quantity,
            success: true,
            message: "Cart item added successfully",
        });


    }
    catch(e){
        console.log(e)
        res.status(500).json({
            success: false,
            message: "Some error occured",
        });
    }
    
    
    
}
export const fetchCart=async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Cart items fetched successfully",
    });
}
export const  updateCart=async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Cart item updated successfully",
    });
}
export const deleteCart=async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Cart item deleted successfully",
    });
}