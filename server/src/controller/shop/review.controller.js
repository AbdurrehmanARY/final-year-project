import prisma from "../../db/db.config.js";
export const addProductReview = async (req, res) => {
  try {
console.log("addProductReview")
    const { productId, userId, name,email, reviewMessage, rating,images } =
      req.body;

      console.log("req.body",productId, userId, name,email, reviewMessage, rating,images)
  
   const order = await prisma.order.findFirst({
  where: {
    userId,
    status: {
      in: [ 'DELIVERED'],
    },
    items: {
      some: {
        productId: productId,
      },
    },
  },
});
console.log("order",order)

    if (!order) {
      console.log("order not found")
      return res.status(403).json({
        success: false,
        message: "You need to purchase product to review it.",
      });
    }

    // 2. Check if user already reviewed the product
   //  const existingReview = await prisma.productReview.findFirst({
   //    where: {
   //      productId,
   //      userId,
   //    },
   //  });

   //  if (existingReview) {
   //  res.status(400).json({
   //      success: false,
   //      message: "You already reviewed this product!",
   //    })}

        const newReview = await prisma.productReview.create({
   data: {
      productId,
      userId,
      name,
      email,
      reviewMessage,
      rating,
      images
      },
   
})
    
      // 4. Recalculate average rating
    const allReviews = await prisma.productReview.findMany({
      where: { productId },
      select: { rating: true },
    })

    console.log("allReviews",allReviews)
        const totalReviews = allReviews.length;
    const averageRating = allReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews;
    console.log("average",averageRating)

     const average=await prisma.products.update({
      where: { id: productId },
      data: { averageRating: averageRating },
    });

    

  



    res.status(201).json({
      success: true,
      message: "Review added successfully",
    });
    
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};

export const getProductReviews = async (req, res) => {
   
  try {
    const { productId } = req.params;
    console.log("id in controller",productId)
    let { page , limit } = req.query;
    if(!productId){
      return res.status(403).json({
      success: false,
      message: "productId is required",
    });
    }
   
 
    page = Number(page) || 1;
    limit = Number(limit) || 10;
    const skip =(page - 1) * limit || 0;

    



    const reviews = await prisma.productReview.findMany(
{
  where: {
  productId: Number(productId),
},  
  skip:Number(skip),
      take: limit,
      orderBy: { createdAt: "desc" }, // optional: newest first

}
    )

    if (!reviews) {
      return res.status(404).json({
        success: false,
        message: "No reviews found",
      });
    }

    const total = await prisma.productReview.count({
      where: {
        productId: Number(productId),
      },
    });
    
   

    res.status(200).json({
      success: true,
      data: reviews,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};