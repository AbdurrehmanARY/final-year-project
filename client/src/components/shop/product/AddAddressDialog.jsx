import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addNewAddress, editAddress, fetchAllAddresses } from '@/store/shop/adress';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

// import { toast } from 'react-hot-toast'; // Ensure you have this or similar

function AddAddressDialog({ trigger,defaultData,isEdited,setIsEdited }) {
    
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
    const {addressList}=useSelector((state)=>state.address)
  const { register, handleSubmit, formState: { isValid }, reset } = useForm({
    defaultValues: {
      addressName: defaultData?.addressName || '',
      phone: defaultData?.phone || '',
      address: defaultData?.address || '',
      city: defaultData?.city || '',
      postelCode: defaultData?.postelCode || ''
    },
    mode: 'onChange'  // enables real-time validation

  });

  const onSubmitForm = async (data) => {
    const userId = user?.id;
    if (!userId) {
      toast("User not authenticated");
      return;
    }
const  addressId=defaultData?.id
// if(addressList.length>=3 && !isEdited){
//     toast("You can't add more than 3 addresses");
//     return;
// }

    if(isEdited){
        const formData={...data,userId}
    const response = await dispatch(editAddress ({  userId ,addressId,formData}));
    if (response?.payload?.success) {
     toast(response.payload.message);
        await dispatch(fetchAllAddresses(userId))
        reset(); // Clear the form after successful submission
        return
      } else {
      return   toast("Failed to add address");
      }
        
    }
    const response = await dispatch(addNewAddress({ ...data, userId }));
    if (response?.payload?.success) {
      toast(response.payload.message);
      await dispatch(fetchAllAddresses(userId))
      
      reset(); // Clear the form after successful submission
      return
    } else {
     return toast("Failed to add address");
    }
  };

  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> {isEdited ?"Edit Address" :"Add Address" } </DialogTitle>
          <DialogDescription>Enter your shipping details below.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6 mt-4">
          <div className="space-y-4">
            <input
              {...register('addressName',{ required: "address name is required" })}
              type="text"
              placeholder="Address name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            <input
              {...register('phone',{ required: "phone is required" })}
              type="tel"
              placeholder="Phone number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />

            <input
              {...register('address',{ required: "address is required" })}
              type="text"
              placeholder="Street address"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />

            <select
              {...register('city',{ required: "city is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="">Select city</option>
              <option value="California">California</option>
              <option value="New York">New York</option>
              <option value="Texas">Texas</option>
              <option value="Florida">Florida</option>
            </select>

            <input
              {...register('postelCode',{ required: "postel code is required" })}
              type="text"
              placeholder="Postal code"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <Button
           disabled={!isValid}
            type="submit"
            className="w-full bg-orange-500 text-white py-3 px-4 rounded-full hover:bg-orange-600 transition-colors"
          >
            {isEdited ?"Edit Address" :"Add Address" }
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddAddressDialog;
