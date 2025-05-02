
import ProductDataTable from "@/components/admin/product/ProductDataTable";
import { columns } from "@/components/admin/product/column";
import AddProductDialog from "@/components/admin/product/AddProductDialog";
import { stockStatus } from "@/config";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "@/store/admin/products-slice";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
function getData() {
  return [

    {
      id: "PROD-1234",
      productName: "Premium Wireless Headphones",
      category: "Electronics",
      brand: "Infinix",
      price: 129.99,
      stock: 45,
      stockStatus: "In Stock",
      action: "...",
      productImage: "http://res.cloudinary.com/dxdekhki3/image/upload/v1746009160/gnkv3ud3wpanvoka7efy.png",
      // details: {
      //   description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
      //   specs:
      //     "Bluetooth 5.0, 40mm drivers, Active Noise Cancellation, 30-hour battery life, USB-C charging, Built-in microphone",
      //   colors: ["Black", "White", "Blue", "Red"],
      //   dimensions: "7.5 × 6.5 × 3.2 inches",
      //   weight: "0.55 lbs",
      //   sku: "HDP-BT500-BLK",
      //   warranty: "1 Year Limited",
      //   shipping: "Worldwide",
      //   manufacturer: "AudioTech",
      //   images: [
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //   ],
      // },
    },
    {
      id: "PROD-2345",
      productName: "Organic Cotton T-Shirt",
      category: "Apparel",
      brand: "Techno",

      price: 24.99,
      stock: 120,
      stockStatus: "In Stock",
      productImage: "http://res.cloudinary.com/dxdekhki3/image/upload/v1746009160/gnkv3ud3wpanvoka7efy.png",
      // details: {
      //   description: "Comfortable and eco-friendly organic cotton t-shirt.",
      //   specs: "100% organic cotton, Pre-shrunk, Medium weight (5.3 oz/yd²), Seamless collar, Double-needle stitching",
      //   colors: ["White", "Black", "Gray", "Navy", "Green"],
      //   dimensions: "Standard sizing (S, M, L, XL, XXL)",
      //   weight: "0.3 lbs",
      //   sku: "APP-TS100-WHT",
      //   warranty: "30-day return policy",
      //   shipping: "Domestic & International",
      //   manufacturer: "EcoWear",
      //   images: [
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //   ],
      // },
    },
    {
      id: "PROD-3456",
      productName: "Stainless Steel Water Bottle",
      category: "Home Goods",
      brand: "Xiom",

      price: 19.99,
      stock: 78,
      stockStatus: "In Stock",
      productImage: "http://res.cloudinary.com/dxdekhki3/image/upload/v1746009160/gnkv3ud3wpanvoka7efy.png",
      // details: {
      //   description:
      //     "Double-walled insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
      //   specs: "18/8 food-grade stainless steel, Double-wall vacuum insulation, BPA-free, Leak-proof cap, 24oz capacity",
      //   colors: ["Silver", "Black", "Blue", "Red", "Green"],
      //   dimensions: "10.5 × 2.9 inches",
      //   weight: "0.7 lbs",
      //   sku: "HG-WB240-SLV",
      //   warranty: "Lifetime guarantee against manufacturing defects",
      //   shipping: "Worldwide",
      //   manufacturer: "HydroLife",
      //   images: [
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //   ],
      // },
    },
    {
      id: "PROD-3456",
      productName: "Stainless Steel Water Bottle",
      category: "Home Goods",
      brand: "Xiom",

      price: 19.99,
      stock: 78,
      stockStatus: "In Stock",
      productImage: "http://res.cloudinary.com/dxdekhki3/image/upload/v1746009160/gnkv3ud3wpanvoka7efy.png",
      // details: {
      //   description:
      //     "Double-walled insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
      //   specs: "18/8 food-grade stainless steel, Double-wall vacuum insulation, BPA-free, Leak-proof cap, 24oz capacity",
      //   colors: ["Silver", "Black", "Blue", "Red", "Green"],
      //   dimensions: "10.5 × 2.9 inches",
      //   weight: "0.7 lbs",
      //   sku: "HG-WB240-SLV",
      //   warranty: "Lifetime guarantee against manufacturing defects",
      //   shipping: "Worldwide",
      //   manufacturer: "HydroLife",
      //   images: [
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //   ],
      // },
    }, {
      id: "PROD-3456",
      productName: "Stainless Steel Water Bottle",
      category: "Home Goods",
      brand: "Xiom",

      price: 19.99,
      stock: 78,
      stockStatus: "In Stock",
      productImage: "http://res.cloudinary.com/dxdekhki3/image/upload/v1746009160/gnkv3ud3wpanvoka7efy.png",
      // details: {
      //   description:
      //     "Double-walled insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
      //   specs: "18/8 food-grade stainless steel, Double-wall vacuum insulation, BPA-free, Leak-proof cap, 24oz capacity",
      //   colors: ["Silver", "Black", "Blue", "Red", "Green"],
      //   dimensions: "10.5 × 2.9 inches",
      //   weight: "0.7 lbs",
      //   sku: "HG-WB240-SLV",
      //   warranty: "Lifetime guarantee against manufacturing defects",
      //   shipping: "Worldwide",
      //   manufacturer: "HydroLife",
      //   images: [
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //   ],
      // },
    }, {
      id: "PROD-3456",
      productName: "Stainless Steel Water Bottle",
      category: "Home Goods",
      brand: "Xiom",

      price: 19.99,
      stock: 78,
      stockStatus: "In Stock",
      productImage: "http://res.cloudinary.com/dxdekhki3/image/upload/v1746009160/gnkv3ud3wpanvoka7efy.png",
      // details: {
      //   description:
      //     "Double-walled insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
      //   specs: "18/8 food-grade stainless steel, Double-wall vacuum insulation, BPA-free, Leak-proof cap, 24oz capacity",
      //   colors: ["Silver", "Black", "Blue", "Red", "Green"],
      //   dimensions: "10.5 × 2.9 inches",
      //   weight: "0.7 lbs",
      //   sku: "HG-WB240-SLV",
      //   warranty: "Lifetime guarantee against manufacturing defects",
      //   shipping: "Worldwide",
      //   manufacturer: "HydroLife",
      //   images: [
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //   ],
      // },
    }, {
      id: "PROD-3456",
      productName: "Stainless Steel Water Bottle",
      category: "Home Goods",
      brand: "Xiom",

      price: 19.99,
      stock: 78,
      stockStatus: "In Stock",
      productImage: "http://res.cloudinary.com/dxdekhki3/image/upload/v1746009160/gnkv3ud3wpanvoka7efy.png",
      // details: {
      //   description:
      //     "Double-walled insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
      //   specs: "18/8 food-grade stainless steel, Double-wall vacuum insulation, BPA-free, Leak-proof cap, 24oz capacity",
      //   colors: ["Silver", "Black", "Blue", "Red", "Green"],
      //   dimensions: "10.5 × 2.9 inches",
      //   weight: "0.7 lbs",
      //   sku: "HG-WB240-SLV",
      //   warranty: "Lifetime guarantee against manufacturing defects",
      //   shipping: "Worldwide",
      //   manufacturer: "HydroLife",
      //   images: [
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //   ],
      // },
    }, {
      id: "PROD-3456",
      productName: "Stainless Steel Water Bottle",
      category: "Home Goods",
      brand: "Xiom",

      price: 19.99,
      stock: 78,
      stockStatus: "In Stock",
      productImage: "http://res.cloudinary.com/dxdekhki3/image/upload/v1746009160/gnkv3ud3wpanvoka7efy.png",
      // details: {
      //   description:
      //     "Double-walled insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
      //   specs: "18/8 food-grade stainless steel, Double-wall vacuum insulation, BPA-free, Leak-proof cap, 24oz capacity",
      //   colors: ["Silver", "Black", "Blue", "Red", "Green"],
      //   dimensions: "10.5 × 2.9 inches",
      //   weight: "0.7 lbs",
      //   sku: "HG-WB240-SLV",
      //   warranty: "Lifetime guarantee against manufacturing defects",
      //   shipping: "Worldwide",
      //   manufacturer: "HydroLife",
      //   images: [
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //   ],
      // },
    }, {
      id: "PROD-3456",
      productName: "Stainless Steel Water Bottle",
      category: "Home Goods",
      brand: "Xiom",

      price: 19.99,
      stock: 78,
      stockStatus: "In Stock",
      productImage: "http://res.cloudinary.com/dxdekhki3/image/upload/v1746009160/gnkv3ud3wpanvoka7efy.png",
      // details: {
      //   description:
      //     "Double-walled insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
      //   specs: "18/8 food-grade stainless steel, Double-wall vacuum insulation, BPA-free, Leak-proof cap, 24oz capacity",
      //   colors: ["Silver", "Black", "Blue", "Red", "Green"],
      //   dimensions: "10.5 × 2.9 inches",
      //   weight: "0.7 lbs",
      //   sku: "HG-WB240-SLV",
      //   warranty: "Lifetime guarantee against manufacturing defects",
      //   shipping: "Worldwide",
      //   manufacturer: "HydroLife",
      //   images: [
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //   ],
      // },
    }, {
      id: "PROD-3456",
      productName: "Stainless Steel Water Bottle",
      category: "Home Goods",
      brand: "Xiom",

      price: 19.99,
      stock: 78,
      stockStatus: "In Stock",
      productImage: "http://res.cloudinary.com/dxdekhki3/image/upload/v1746009160/gnkv3ud3wpanvoka7efy.png",
      // details: {
      //   description:
      //     "Double-walled insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
      //   specs: "18/8 food-grade stainless steel, Double-wall vacuum insulation, BPA-free, Leak-proof cap, 24oz capacity",
      //   colors: ["Silver", "Black", "Blue", "Red", "Green"],
      //   dimensions: "10.5 × 2.9 inches",
      //   weight: "0.7 lbs",
      //   sku: "HG-WB240-SLV",
      //   warranty: "Lifetime guarantee against manufacturing defects",
      //   shipping: "Worldwide",
      //   manufacturer: "HydroLife",
      //   images: [
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //   ],
      // },
    }, {
      id: "PROD-3456",
      productName: "Stainless Steel Water Bottle",
      category: "Home Goods",
      brand: "Xiom",

      price: 19.99,
      stock: 78,
      stockStatus: "In Stock",
      productImage: "http://res.cloudinary.com/dxdekhki3/image/upload/v1746009160/gnkv3ud3wpanvoka7efy.png",
      // details: {
      //   description:
      //     "Double-walled insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
      //   specs: "18/8 food-grade stainless steel, Double-wall vacuum insulation, BPA-free, Leak-proof cap, 24oz capacity",
      //   colors: ["Silver", "Black", "Blue", "Red", "Green"],
      //   dimensions: "10.5 × 2.9 inches",
      //   weight: "0.7 lbs",
      //   sku: "HG-WB240-SLV",
      //   warranty: "Lifetime guarantee against manufacturing defects",
      //   shipping: "Worldwide",
      //   manufacturer: "HydroLife",
      //   images: [
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //     "/placeholder.svg?height=200&width=200",
      //   ],
      // },
    },
    // {
    //   id: "PROD-4567",
    //   name: "Bluetooth Smart Speaker",
    //   category: "Electronics",
    //   price: 89.99,
    //   stock: 12,
    //   status: "Low Stock",
    //   image: "/placeholder.svg?height=40&width=40",
    //   details: {
    //     description: "Portable Bluetooth speaker with smart assistant integration and premium sound quality.",
    //     specs:
    //       "Bluetooth 5.1, 20W output, 12-hour battery life, IPX7 waterproof, Voice assistant compatible, USB-C charging",
    //     colors: ["Black", "Gray", "Blue"],
    //     dimensions: "7.0 × 2.8 × 2.8 inches",
    //     weight: "1.2 lbs",
    //     sku: "EL-SPK200-BLK",
    //     warranty: "2 Year Limited",
    //     shipping: "Worldwide",
    //     manufacturer: "SoundWave",
    //     images: [
    //       "/placeholder.svg?height=200&width=200",
    //       "/placeholder.svg?height=200&width=200",
    //       "/placeholder.svg?height=200&width=200",
    //     ],
    //   },
    // },
    // {
    //   id: "PROD-5678",
    //   name: "Leather Wallet",
    //   category: "Accessories",
    //   price: 49.99,
    //   stock: 35,
    //   status: "In Stock",
    //   image: "/placeholder.svg?height=40&width=40",
    //   details: {
    //     description: "Genuine leather bifold wallet with RFID blocking technology.",
    //     specs: "Full-grain leather, RFID blocking, 8 card slots, 2 bill compartments, ID window, Handcrafted",
    //     colors: ["Brown", "Black", "Tan"],
    //     dimensions: "4.5 × 3.5 × 0.75 inches",
    //     weight: "0.25 lbs",
    //     sku: "ACC-WLT100-BRN",
    //     warranty: "5 Year Limited",
    //     shipping: "Worldwide",
    //     manufacturer: "LeatherCraft",
    //     images: [
    //       "/placeholder.svg?height=200&width=200",
    //       "/placeholder.svg?height=200&width=200",
    //       "/placeholder.svg?height=200&width=200",
    //     ],
    //   },
    // },
    // {
    //   id: "PROD-6789",
    //   product: "Fitness Tracker Watch",
    //   category: "Electronics",
    //   price: 79.99,
    //   stock: 0,
    //   status: "Out of Stock",
    //   image: "/placeholder.svg?height=40&width=40",
    //   details: {
    //     description: "Advanced fitness tracker with heart rate monitoring, GPS, and smartphone notifications.",
    //     specs:
    //       "Heart rate monitor, GPS tracking, Sleep tracking, Water resistant (50m), 7-day battery life, Color touchscreen",
    //     colors: ["Black", "Blue", "Pink"],
    //     dimensions: "1.5 × 0.9 × 0.4 inches",
    //     weight: "0.1 lbs",
    //     sku: "EL-FTW300-BLK",
    //     warranty: "1 Year Limited",
    //     shipping: "Worldwide",
    //     manufacturer: "FitTech",
    //     images: [
    //       "/placeholder.svg?height=200&width=200",
    //       "/placeholder.svg?height=200&width=200",
    //       "/placeholder.svg?height=200&width=200",
    //     ],
    //   },
    // },
  ];
}
function AdminProduct() {
  const dispatch=useDispatch()
  const products=useSelector((state)=>state.adminProducts)
 const {isLoading,listOfProduct}=products
 const [isEdited,setIsEdited]=useState(false)
 useEffect(()=>{
  
      dispatch(getAllProducts())
     
 },[dispatch])

 

 console.log(listOfProduct)
 
  const data = getData();

  return (
    <>

      <AddProductDialog
      default={{}}
      setIsEdited={setIsEdited}
      isEdited={isEdited}

      trigger={
      
        <Button>
          Add Product
        </Button>
      }
      />
      <ProductDataTable columns={columns} data={listOfProduct} ></ProductDataTable>

    </>

  )
}

export default AdminProduct