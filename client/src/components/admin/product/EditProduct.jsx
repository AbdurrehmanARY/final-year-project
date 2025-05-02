import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Pencil } from 'lucide-react';
import React, { useState } from 'react';
import AddProductDialog from './AddProductDialog';

function EditProduct({ row }) {
    const [openProductDialog, setOpenProductDialog] = useState(false);

    
    

  const handleEdit = (e) => {
    e.stopPropagation(); // Prevent the dropdown menu from closing
    // setOpenProductDialog(true); // Open the dialog
    setOpenProductDialog(true); // Open the dialog

    console.log(row.original)
  };

  return (
    <>
      {/* Dropdown menu item to trigger the dialog */}
      
      <DropdownMenuItem key={2}  onClick={handleEdit}>
      <div className='flex gap-2'>
        <Pencil />
        <span>Edit product</span>
        </div>

      </DropdownMenuItem>



      
    
    </>
  );
}

export default EditProduct;