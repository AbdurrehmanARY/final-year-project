// import { uploadOnCloudinary } from "../../utils/cloudinary.js";
import { Prisma } from "@prisma/client";
import prisma from "../../db/db.config.js";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";
import { json } from "express";


export const handleImageUpload = async (req, res) => {
   
    try {
      const b64 = Buffer.from(req.file.buffer).toString("base64");
      
      const url = "data:" + req.file.mimetype + ";base64," + b64;
      const resultUrl = await uploadOnCloudinary(url);
      if(!resultUrl) {
        return res.json({
          success: false,
          message: "Image upload failed",
          resultUrl
        });
      }
    const result=resultUrl.url
      res.json({
        success: true,
        result,
      });
    } 
    catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "Error occured",
       
      });
    }
  };


// add product
  export const addProduct = async (req, res) => {   
  
    try {
      const {
        productName,
        description,
        brand,
        category,
        sku,        
        price,
        salePrice,
        specs,
        stock,
        stockStatus,
        image,
        colors,
      } = req.body;


      if (
        !productName ||
        !description ||
        !brand ||
        !category ||
        !sku ||
        !price ||
        isNaN(price) || // Ensure price is a number
        !salePrice ||
        isNaN(salePrice) || // Ensure salePrice is a number
        !stock ||
        isNaN(stock) || // Ensure stock is a number
        !stockStatus ||
        
        !image ||
        !colors
      ) {
        return res.status(400).json({
          success: false,
          message: "All required fields must be provided.",
        });
      }
    
      
      const newProduct=await prisma.products.create({
        data:{
          productName,
          description,
          brand,
          category,
          sku,
          specs,
          price,
          salePrice,
          stock,
          stockStatus,
          image,
          colors,
        }
        
        })
        if(!newProduct){
          return res.status(400).json({
            success: false,
            message:'product addition failed',
         
          });
        }
        return res.status(201).json({
            success: true,
            message:'product added  successfully ',
            data: newProduct,
          })
        
        
    
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Error occured",
      });
    }
  
  
  
  };
  
  //edit a product
   export const editProduct = async (req, res) => {
   
  
    try {
      const {id} = req.params;
      const {
        productName,
        description,
        brand,
        category,
        sku,
        displaySize,
        displaytype,
        resolution,
        refreshRate,
        backCamera,
        frontCamera,
        storage,
        battery,
        charging,
        usbPort,
        network,
        sim,
        os,
        processor,
        untututu,
        price,
        salePrice,
        stock,
        stockStatus,
        image,
        colors,
      } = req.body;
    // Convert id to an integer
    const productId = parseInt(id, 10);
      const findProduct=await prisma.products.findUnique({
        where:{
         id: productId
        }
      })
      if (!findProduct)
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
const updatedProduct = await prisma.products.update({
  where: {
    id:productId
  },
  data:{
   productName,
        description,
        brand,
        category,
        sku,
        displaySize,
        displaytype,
        resolution,
        refreshRate,
        backCamera,
        frontCamera,
        storage,
        battery,
        charging,
        usbPort,
        network,
        sim,
        os,
        processor,
        untututu,
        price,
        salePrice,
        stock,
        stockStatus,
        image,
        colors,
  }
})

      if(updatedProduct){
        return res.status(200).json({
        success: true,
        message: "Product updated successfully",
        data: updatedProduct,
      });
      }
      else {
        return res.status(500).json({
          success:'false',
          message:'error while updating product'
        })
      }

    } 
    catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Error occured",
      });
    }
  };

  //delete a product
  export const deleteProduct = async (req, res) => {
    
    try {
      const { id } = req.params;
     
    const productId = parseInt(id, 10);
 

    if(!productId){
      res.json({
        message:"product id not found"
      })
    }

      const product = await prisma.products.findUnique({
        where: {
          id: productId,
        },
      })
      
  
      if (!product)
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      const response= await prisma.products.delete({
          where: {
            id: productId,
          },
        });
  
      res.status(200).json({
        success: true,
        message: "Product delete successfully",
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Error occured",
      });
    }
  }

  // //fetch all products
  
  export const fetchAllProducts = async (req, res) => {

        try {
      const listOfProducts = await prisma.products.findMany({})
      res.status(200).json({
        success: true,
        message: "Products fetched successfully",
        data: listOfProducts,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Error occured",
      });
    }
  }


  export const getProductDetail=async(req,res)=>{
    try{
if(!req.params){
  res.json({
    message:'product id not found'
  })
}
const product= await prisma.products.findUnique({
  where:{
    id:parseInt(req.params.id)
  }
})
      if(product){
        res.json({
          message :"product get successfully",
          product
        })
      }
      else{
        res.json({
          message :"product not found",
        })
      }
    }
    catch(e){
      console.log(e)

    }
  }