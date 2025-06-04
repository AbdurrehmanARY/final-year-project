import React, { useEffect } from 'react'
import { AddressSection } from '../../../components/shop/AdressSection';
import { Briefcase, Home } from 'lucide-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAddresses } from '@/store/shop/adress';
function Account() {
    // const [selectedAddress, setSelectedAddress] = useState("");
   
    
const addresses = [
    {
      id: 1,
      name: "My Home",
      address: "1536 Stellar Dr, Kenai, Alaska...",
      phone: "(907) 283-6173",
      icon: Home,
      isDefault: true
    }
  ];
  
  return (
  <>
   <AddressSection 
        addresses={addresses}
        // selectedAddress={selectedAddress}
        // setSelectedAddress={setSelectedAddress}
      />
  </>
  )
}

export default Account