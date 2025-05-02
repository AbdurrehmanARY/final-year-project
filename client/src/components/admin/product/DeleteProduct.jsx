import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { deleteProduct, getAllProducts } from '@/store/admin/products-slice'
import { Trash } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'

 function DeleteProduct({id}) {
    // console.log(id)
const dispatch=useDispatch()
    const handleDelete=async()=>{
const response=await dispatch(deleteProduct(id))
console.log(response?.payload.message)
dispatch(getAllProducts())
  return toast(response?.payload.message)
}

  return (
      
      <DropdownMenuItem key={3}   onClick={handleDelete}>
    <Trash />
      
      <span>Delete Product</span>
      </DropdownMenuItem>
  )
}

export default DeleteProduct