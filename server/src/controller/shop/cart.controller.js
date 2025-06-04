import prisma from "../../db/db.config.js";
export const addToCart = async (req, res) => {
    try{
   
        let { userId, productId, quantity } = req.body;
     productId = parseInt(productId, 10);
     userId = parseInt(userId, 10);
     quantity = parseInt(quantity, 10);

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
        //   console.log(cart)
        const cartItem = await prisma.cartItem.upsert({
            where: {
              cartId_productId: {
                cartId: cart.id,
                productId,
                // size: size || null,
                // color: color || null,
              },
            },
            update: {
              quantity: { increment: quantity },
            },
            create: {
              cartId: cart.id,
              productId,
              quantity,
            //   size,
            //   color,
            },
          });

          const product = await prisma.products.findUnique({
            where: { id: productId },
            select: {
              productName: true,
              price: true,
            //   images: true,
            },
          });

          const responseItem = {
            id: cartItem.id,
            productId: cartItem.productId,
            productName: product?.productName,
            price: product?.price,
            // image: product?.images[0],
            // color: cartItem.color,
            // size: cartItem.size,
            quantity: cartItem.quantity,
          };


          res.status(201).json({
            success: true,
            message:"cart added successfully",
            data: responseItem,
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

  try {
    // console.log(req.user)
    let userId = req?.params?.id
   userId=parseInt(userId)
   console.log(userId)


    if (!userId) {
      res.status(401).json({
        success: false,
        message: "Unauthenticated user",
      });

      return;
    }

    const cart = await prisma.cart.findUnique({
      where: { userId },
      include: {
        items: true,
      },
    });

    if (!cart) {
      res.json({
        success: false,
        messaage: "No Item found in cart",
        data: [],
      });

      return;
    }

    const cartItemsWithProducts = await Promise.all(
      cart?.items.map(async (item) => {
        const product = await prisma.products.findUnique({
          where: { id: item.productId },
          select: {
            productName: true,
            price: true,
            image: true,
          },
        });

        return {
          id: item.id,
          productId: item.productId,
          productName: product?.productName,
          price: product?.price,
          image: product?.image[0],
          // color: item.color,
          // size: item.size,
          quantity: item.quantity,
        };
      })
    );

    res.json({
      success: true,
      data: cartItemsWithProducts,
    });
  } catch (e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Failed to fetch cart!",
    });
  }






    // res.status(200).json({
    //     success: true,
    //     message: "Cart items fetched successfully",
    // });
}
export const  updateCart=async (req, res) => {
  try {
    // const userId = req.user?.userId;
    let { id } = req.params;
    let {userId, quantity } = req.body;
    console.log('info',userId,id,quantity)
    id=parseInt(id)
    
    userId=parseInt(userId)
    // console.log()

    // if (!userId) {
    //   res.status(401).json({
    //     success: false,
    //     message: "Unauthenticated user",
    //   });

    //   return;
    // }

    // const updatedItem = await prisma.cartItem.update({
    //   where: {
    //     id,
    //     cart: { userId },
    //   },
    //   data: { quantity },
    // });
    // console.log(updatedItem)


    const item = await prisma.cartItem.findUnique({ where: { id } });
const cart = await prisma.cart.findUnique({ where: { id: item.cartId } });

if (cart.userId !== userId) {
  return res.status(403).json({ success: false, message: "Unauthorized" });
}

const updatedItem = await prisma.cartItem.update({
  where: { id },
  data: { quantity },
});

    const product = await prisma.products.findUnique({
      where: { id: updatedItem.productId },
      select: {
        productName: true,
        price: true,
        image: true,
      },
    });

    const responseItem = {
      id: updatedItem.id,
      productId: updatedItem.productId,
      productName: product?.productName,
      price: product?.price,
      image: product?.image[0],
      // color: updatedItem.color,
      // size: updatedItem.size,
      quantity: updatedItem.quantity,
    };
    // console.log(responseItem)

    res.json({
      success: true,
      message: "Cart item updated successfully",
      data: responseItem,
    });
  } catch (e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Failed to update cart item quantity",
    });
  }
}











// export const deleteCart=async (req, res) => {
//   try {
//     // let userId = req.user?.id;
//     // userId = parseInt(userId, 10);
//     // let {userId } = req.body;
//     // userId=parseInt(userId)
 

//     let { userId,productId } = req.params;
//     userId = parseInt(userId, 10);
//     productId = parseInt(productId, 10);
//     console.log('product id is',productId)


//     const item = await prisma.cartItem.findFirst({
//       where: { productId:productId },
//       include: { cart: true },
//     });
//     console.log("item is",item)
//     if (!item || item.cart.userId !== userId) {
//       return res.status(403).json({ success: false, message: "Unauthorized" });
//     }
    
//     // await prisma.cartItem.delete({ where: { id } });
    
//     return res.status(200).json({
//       success: true,
//       message: "Item deleted from cart",
//     });
    



   
//   } catch (e) {
//     console.log(e)
//     res.status(500).json({
//       success: false,
//       message: "Failed to remove from cart!",
//     });
// }
// }

export const deleteCart = async (req, res) => {
  try {
    let { userId, productId } = req.params;
    userId = parseInt(userId, 10);
    productId = parseInt(productId, 10);

    console.log('product id is', productId);

    const item = await prisma.cartItem.findFirst({
      where: {
        productId: productId,
        cart: {
          userId: userId,
        },
      },
      include: { cart: true },
    });

    console.log("item is", item);
    if (!item) {
     return res.json({
        success:false,
        message: "Item not found in cart",
      })
    }

    if (!item) {
      return res.status(403).json({ success: false, message: "Unauthorized or item not found" });
    }

    // Actually delete the cart item
    const deleteRecord= await prisma.cartItem.delete({ where: { id: item.id } });
if(deleteRecord){
  return res.status(200).json({
    success: true,
    message: "Item deleted from cart",
    deleteRecord
  });
}
else{
  return res.status(200).json({
    success: true,
    message: "some thing went wrong while deleting item from cart",
  });
}   

  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Failed to remove from cart!",
    });
  }
};
