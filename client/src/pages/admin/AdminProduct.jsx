
import ProductDataTable from "@/components/admin/product/ProductDataTable";
import { columns } from "@/components/admin/product/column";
import AddProductDialog from "@/components/admin/product/AddProductDialog";
import { stockStatus } from "@/config";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "@/store/admin/products-slice";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

function AdminProduct() {
  const dispatch=useDispatch()
  const products=useSelector((state)=>state.adminProducts)
 const {isLoading,listOfProduct}=products

 useEffect(()=>{
  
      dispatch(getAllProducts())
     
 },[dispatch])

 

 

  return (
    <>

      
      <ProductDataTable columns={columns} data={listOfProduct} ></ProductDataTable>

    </>

  )
}

export default AdminProduct