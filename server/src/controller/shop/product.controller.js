import prisma from "../../db/db.config.js";
export const getFilteredProducts = async (req, res) => {
  try {
    let { brand,category,color,priceRange, sortBy 
      , page, limit
     } = req.query;

     
    page = Number(page);
    
    const skip =(page - 1) * limit || 0;
    // brand will be a comma-separated string or empty
    // Build Prisma filters
    let filters = {};
  if (brand) filters.brand = { in: brand.split(",") };
if (category) filters.category = { in: category.split(",") };
if (color) filters.colors = { hasSome: color.split(",") };
if (priceRange) {
  const [min, max] = priceRange.split(",");
  filters.price = { gte: Number(min), lte: Number(max) };
}
    // Build Prisma orderBy
    let orderBy = {};

    switch (sortBy) {
      case "price-lowtohigh":
        orderBy = { price: "asc" };
        break;
      case "price-hightolow":
        orderBy = { price: "desc" };
        break;
      case "title-atoz":
        orderBy = { productName: "asc" };
        break;
      case "title-ztoa":
        orderBy = { productName: "desc" };
        break;
      default:
        orderBy = { price: "asc" };
        break;
    }

    const products = await prisma.products.findMany({
      where: filters,
      skip:Number(skip),
      take: Number(limit) || 10, // default limit to 10 if not provided
      orderBy
    });
    console.log("products",products)

    const total = await prisma.products.count({ where: filters });

    res.status(200).json({
      success: true,
      data: products,
      total,
  page,
  totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};