import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Check, Home } from "lucide-react";


// import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { OrderList } from "./OrderList";
// import { fetchAllAddresses } from "@/store/shop/adress";
import { useDispatch, useSelector } from "react-redux";
import AddAddressDialog from "./product/AddAddressDialog";
import { getAllOrdersByUser } from "@/store/shop/order";
import {fetchAllAddresses } from '@/store/shop/adress';



export const AddressSection = ({ addresses }) => {
    const [selectedAddress , setSelectedAddress] = useState("");
  
  const [isEdited,setIsEdited]=useState(true)
  const {isAuthenticated,user}=useSelector((state)=>state.auth)
  const [open, setOpen] = useState(false)

  const {addressList}=useSelector((state)=>state.address)
  const {orderList}=useSelector((state)=>state.shopOrder)
  // console.log('order list is',orderList)
  // const {isAuthenticated,user}=isAuth
  // Mock data for addresses
const dispatch=useDispatch()


  useEffect(()=>{
   const getOrder=async()=>{
   const response=await dispatch(getAllOrdersByUser(user?.id))
   }
   getOrder() 
  },[dispatch,user])

  useEffect(()=>{
   dispatch(fetchAllAddresses(user?.id)) 
  },[dispatch,user])

           
  





// useEffect(()=>{
// const getAdress=async()=>{
//   const response=await  dispatch(fetchAllAddresses(user?.id))
//      const addresses = response?.payload?.address || [];
// const defaultAddress = addresses.find(addr => addr.isDefault);
//     if (defaultAddress) {
//       setSelectedAddress(defaultAddress.id);
//     } else if (addresses.length > 0) {
//       setSelectedAddress(addresses[0].id); // fallback
//     }

// }
//    getAdress()
   
// },[dispatch,user])
const handleDefault=()=>{
  
}
  
  

  return (
    <>
    

<Tabs defaultValue="orders" className="w-full mt-9">
      <TabsList className=" w-full  ">
        <TabsTrigger className="px-4 py-4 data-[state=active]:bg-[#E16F3D] text-gray-700" value="orders">Orders</TabsTrigger>
        <TabsTrigger className="px-4 py-4 data-[state=active]:bg-[#E16F3D] text-gray-700" value="address">Address</TabsTrigger>
      </TabsList>
      <TabsContent value="orders">
         <div className="container mx-auto px-4 py-8 max-w-6xl">
              <h2 className="text-3xl font-medium mb-2">Order Tracking</h2>
    
              <OrderList orderList={orderList} user={user} />
            </div>
      </TabsContent>
      <TabsContent value="address">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h2 className="text-3xl font-medium mb-2">Address</h2>
      <div className="text-gray-600 mb-6">Shipping Address</div>

      <RadioGroup value={selectedAddress} onValueChange={setSelectedAddress} className="space-y-4">
  {addressList.map((address) => (
    <RadioGroupItem
      key={address.id}
      value={address.id}
      className="hidden"
      id={`address-${address.id}`}
    />
  ))}

  {addressList.map((address) => (
    <label
      key={address.id}
      htmlFor={`address-${address.id}`}
      className={`border rounded-xl p-6 block cursor-pointer ${
        selectedAddress === address.id ? "border-orange-500" : "border-gray-200"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <Home className="w-5 h-5 text-gray-500 mt-1" />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-medium text-lg mb-1">{address.addressName}</span>
              {address.isDefault && (
                <span className="text-xs text-white bg-orange-500 px-2 py-0.5 rounded-full">
                  Default
                </span>
              )}
            </div>
            <span className="text-gray-700 mb-1 text-start">{address.address}</span>
            <span className="text-gray-500 text-start">{address.phone}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <AddAddressDialog
            isEdited={isEdited}
            setIsEdited={setIsEdited}
            defaultData={address}
            trigger={
              <button className="text-orange-500 hover:text-orange-600 border border-orange-600 px-5 py-1 rounded-3xl">
                Change
              </button>
            }
          />
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center ${
              selectedAddress === address.id
                ? "bg-orange-500"
                : "border-2 border-gray-300"
            }`}
          >
            {selectedAddress === address.id && (
              <Check className="w-4 h-4 text-white" />
            )}
          </div>
        </div>
      </div>
    </label>
  ))}
</RadioGroup>



      <div className="mt-6 flex justify-center">
        <AddAddressDialog
        trigger={
<Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 rounded-full">
          Add New Address
        </Button>

        }
        />
        
      </div>
    </div>
      </TabsContent>
    </Tabs>
    
    </>
  );
};





