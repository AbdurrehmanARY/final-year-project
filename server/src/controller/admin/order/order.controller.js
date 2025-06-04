import prisma from "../../../db/db.config.js";
export const getAllOrdersByAdmin = async (req, res) => {
  try {
  let {userId}=req.params
userId=parseInt(userId,10)  
    if (!userId) {
     return res.status(401).json({
        success: false,
        message: "Unauthenticated user",
      });
      
    }

    const orders = await prisma.order.findMany({
      include: {
        // items: true,
        // address: true,
        users: {
          select: {
            id: true,
            // name: true,
            email: true,
          },
        },
      },
    });
  res.json({
    success:true,
    message:"order get succfully",
    data:orders
})
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

export const getOrderDetailsForAdmin = async (req, res) => {
  try {
   const {id}=req.params
   console.log(id)
   res.send('order fetch successfully')

    // if (!userId) {
    //  return res.status(401).json({
    //     success: false,
    //     message: "Unauthenticated user",
    //   });

      
    // }

    // const orders = await prisma.order.findMany({
    //   include: {
    //     items: true,
    //     address: true,
    //     user: {
    //       select: {
    //         id: true,
    //         name: true,
    //         email: true,
    //       },
    //     },
    //   },
    // });

    // res.status(200).json(orders);
  
} catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
//    const userId = req.user?.userId;
    let {userId, orderId } = req.params;
    let { status } = req.body;
    userId=parseInt(userId,10)
    orderId=parseInt(orderId,10)
    console.log(status)
    // const orderStatus=status
    console.log('order status is',status)


    if (!userId) {
    return  res.status(401).json({
        success: false,
        message: "Unauthenticated user",
      });
    }

    await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        status
      },
    });

    res.status(200).json({
      success: true,
      message: "Order status updated successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

