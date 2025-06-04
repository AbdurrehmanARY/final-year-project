import prisma from "../../db/db.config.js";
import Stripe from "stripe";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createOrder=async(req,res)=>{
    try{   
 const { userId,items, addressId,  total,paymentMethod,paymentStatus } = req.body;
  

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthenticated user",
      });

     
    }

// create order 
    const newOrder = await prisma.order.create({
        data: {
          userId,
          addressId,
        //   couponId,
          total,
          paymentMethod: "CREDIT_CARD",
          paymentStatus: "COMPLETED",
        //   paymentId,
         items: {
  create: items.map((item) => ({
    productId: item.productId,
    productName: item.productName,
    image: item.image && item.image !== "" ? item.image : "",
    productCategory: '',
    quantity: item.quantity,
    price: item.price,
  })),
},
        },
        include: {
          items: true,
        },
      });

      // console.log("new order",newOrder)


const lineItems= items.map((item) => ({
price_data: {
    currency: 'usd',
    product_data: {
      name: item.productName,
      images: [item.image],
    },
    unit_amount: item.price , // Convert to cents
  },
  quantity: item.quantity,
}))

lineItems.push({
    price_data: {
        currency: 'usd',
        product_data: {
          name: "Shipping"
        },
        unit_amount: 1000, // Convert to cents
        },
        quantity: 1,
      })

const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: lineItems,
  mode: 'payment',
  success_url: `http://localhost:5173/payment?success=true&orderId=${newOrder.id}&session_id={CHECKOUT_SESSION_ID}`,
  cancel_url: 'http://localhost:5173/payment',
});


if(newOrder){
    return res.json({
       success:true,
      message: "Order created successfully"
      , sessionUrl:session.url
     });

    }else
{
res.json({
    success:false,
    message:"some error occur"
}) 
}

res.json({
       success:true,
      message: "Order created successfully"
      , sessionUrl:session.url
     });

    }
    catch(e){
console.log(e)
    }

}


export const confirmPayment = async (req, res) => {
  try {
    const { paymentId, payerId, orderId } = req.body;
    if (!paymentId || !payerId || !orderId) {
      return res.status(400).json({
        success: false,
        message: "Invalid input provided",
      });
    }

    // Find the order by ID
    const orderExist = await prisma.order.findUnique({
      where: { id: Number(orderId) },
    });

    if (!orderExist) {
      return res.status(404).json({
        success: false,
        message: "Order can not be found",
      });
    }

    // Update the order with payment info
    const order = await prisma.order.update({
      where: { id: Number(orderId) },
      data: {
        paymentStatus: "COMPLETED",
        status: "PROCESSING",
        paymentId: Number(paymentId),
        payerId: Number(payerId),
      },
      include: {
        items: true,
        address: true,
        },
    });
    console.log("order", order);


    // as order create so decrease the product stock
      for (const item of order.items) {
        await prisma.products.update({
          where: { id: item.productId },
          data: {
            stock: { decrement: item.quantity },
            // soldCount: { increment: item.quantity },
          },
        });
      }

      await prisma.cartItem.deleteMany({
        where: {
          cart: { userId:payerId },
        },
      });

      await prisma.cart.delete({
        where: { userId:payerId },
      });


    res.status(200).json({
      success: true,
      message: "Order confirmed",
      order,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};






export const  getOrderDetail=async(req,res)=>{

    try{
let {userId, orderId } = req.params;
 userId=parseInt(userId,10)
 orderId=parseInt(orderId,10)
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthenticated user",
      });
    }
    const order = await prisma.order.findFirst({
      where: {
        id: orderId,
        userId,
      },
      include: {
        items: true,
        address: true,
        // coupon: true,
      },
    });
    if(!order){
        res.status(200).json(
     {
        success:false,
        message:"something went wrong"
     })
    }
    return res.status(200).json(
     {
        success:true,
        order
     })
    }
    catch(e){
        console.log(e)
    }
    }


    export const  getAllOrderByUser=async(req,res)=>{
        try{
    const {id} = req.params;
    const userId=parseInt(id,10)
    if (!userId) {
     return res.status(401).json({
        success: false,
        message: "Unauthenticated user",
      });
    }
   
    const orders = await prisma.order.findMany({
      where: {
        userId: userId,
      },
      include: {
        items: true,
        address: true,
        users: {
          select: {
            id: true,
            userName: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(orders);
            // res.send('order fetch successfully')
            
        }
        catch(e){
        console.log(e)
        }
          
        }

    