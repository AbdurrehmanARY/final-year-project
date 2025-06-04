import prisma from "../../db/db.config.js";

export  const searchProducts = async (req, res) => {
  try {
    let { keyword,brand,category,color,priceRange, sortBy = "price-lowtohigh"
      , page, limit
     } = req.query;
     console.log('brand', brand)
    if (!keyword || typeof keyword !== "string") {
      return res.status(400).json({
        success: false,
        message: "Keyword is required and must be in string format",
      });
    }

    let filters = {
  OR: [
    { productName: { contains: keyword, mode: 'insensitive' } },
    { description: { contains: keyword, mode: 'insensitive' } },
    { category: { contains: keyword, mode: 'insensitive' } },
    { brand: { contains: keyword, mode: 'insensitive' } },
  ]
};
if (brand) filters.brand = { in: brand.split(",") };
if (category) filters.category = { in: category.split(",") };
if (color) filters.colors = { hasSome: color.split(",") };
if (priceRange) {
  const [min, max] = priceRange.split(",");
  filters.price = { gte: Number(min), lte: Number(max) };
}

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

const skip = (Number(page) - 1) * Number(limit);

const searchResults = await prisma.products.findMany({
  where: filters,
  skip,
  take: Number(limit),
  orderBy,
});

    res.status(200).json({
      success: true,
      data: searchResults,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};
