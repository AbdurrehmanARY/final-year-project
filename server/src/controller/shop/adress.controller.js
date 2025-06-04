import prisma from "../../db/db.config.js";

export const addAddress = async (req, res) => {
      try {
    const { userId,addressName, address, city, postelCode, phone ,isDefault } = req.body;
console.log(userId, address, city, postelCode, phone ,isDefault)
console.log("req.user is",req.user)

    if ( !addressName, !userId || !address || !city || !postelCode || !phone ) {
      return res.status(400).json({
        success: false,
        message: "fill all field ",
      });
    }
    // if (isDefault) {
    //     await prisma.address.updateMany({
    //       where: { userId },
    //       data: {
    //         isDefault: false,
    //       },
    //     });
    //   }
    
 const adressDetail=await prisma.address.create({
    data:{
        userId,addressName,address,city,postelCode,phone,isDefault
        
    }
 })
 if(adressDetail){
    res.json({
        success: true,
        message:"address added successfully",
        data:adressDetail
    })
 }else{
    res.json({
        success: false,
        message:"something went wrong"
    })
 }
 

  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error",
    });
  }

};

export const fetchAllAddress = async (req, res) => {
    try {
       
        let  userId=parseInt(req.params.userId)   
        if (!userId) {
          res.status(401).json({
            success: false,
            message: "Unauthenticated user",
          });
    
          return;
        }
    
        const fetchAllAddresses = await prisma.address.findMany({
          where: { userId },
          orderBy: { createdAt: "desc" },
        });

        if (!fetchAllAddresses) {
          return res.status(404).json({
            success: false,
            message: "No address found",
          });
        }
    
      return  res.status(200).json({
          success: true,
          address: fetchAllAddresses,
        });
      } catch (e) {
        console.log(e);
        res.status(500).json({
          success: false,
          message: "Some error occured",
        });
      }
};

export const editAddress = async (req, res) => {
  try {
    
    let { userId, addressId } = req.params;
     const { AddressName,address, city,  postelCode, phone, isDefault } =
      req.body;
        userId=parseInt(userId)
        addressId=parseInt(addressId)   
       

    if (!userId || !addressId) {
      return res.status(400).json({
        success: false,
        message: "User and address id is required!",
      });
    }


    const existingAddress = await prisma.address.findFirst({
        where: { id:addressId, userId },
      });
  
      if (!existingAddress) {
        return res.status(404).json({
          success: false,
          message: "Address not found!",
        });
      }

     

    // if (isDefault) {
    //   await prisma.address.updateMany({
    //     where: { userId },
    //     data: {
    //       isDefault: false,
    //     },
    //   });
    // }

//     const address = await Address.findOneAndUpdate(
//       {
//         _id: addressId,
//         userId,
//       },
//       formData,
//       { new: true }
//     );

//     if (!address) {
//       return res.status(404).json({
//         success: false,
//         message: "Address not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: address,
//     });


const updatedAddress = await prisma.address.update({
    where: { id:addressId },
    data: {
      AddressName,
      address,
      city,
      postelCode,
      phone,
      isDefault: isDefault || false,
    },
  });
if(updatedAddress){
   return  res.status(200).json({
        success: true,
        message:"address updated successfully",
        address: updatedAddress,
      });

}else{
    res.status(200).json({
        success: false,
        message:"error occur while updating address",
      
      });
}
  




} catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error",
    });
  }
res.send("edit adress")
};

export const deleteAddress = async (req, res) => {
  try {
    let { userId, addressId } = req.params;
    userId=parseInt(userId)
    addressId=parseInt(addressId)   
    if (!userId || !addressId) {
    return res.status(400).json({
    success: false,
    message: "User and address id is required!",
  });
}
const existingAddress = await prisma.address.findFirst({
    where: { id:addressId, userId },
  });

  if (!existingAddress) {
    return res.status(404).json({
      success: false,
      message: "Address not found!",
    });
  }


  const deleteRecord=await prisma.address.delete({
    where: { id:addressId },
  });
  if(!deleteRecord){
    res.status(200).json({
        success: false,
        message: "error while deleting address",
      });
  }
  res.status(200).json({
    success: true,
    message: "Address deleted successfully!",
    deleteRecord
  });


//     const address = await Address.findOneAndDelete({ _id: addressId, userId });

//     if (!address) {
//       return res.status(404).json({
//         success: false,
//         message: "Address not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Address deleted successfully",
//     });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error",
    });
  }
// res.send("delte adress")
};
