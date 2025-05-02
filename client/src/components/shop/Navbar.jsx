import { Moon, Search, ShoppingCart, UserRound } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import LoginDialog from '../auth/LoginDialog'
import RegisterDialog from '../auth/RegisterDialog'
import ForgotPasswordDialog from '../auth/ForgotPasswordDialog'
import ChangePasswordDialog from '../auth/ChangePasswordDialog'
import SuccessDialog from '../auth/SuccessDialog'
import { FaBagShopping, FaUser } from "react-icons/fa6";
import Cart from './Cart'
import SheetSearch from './SheetSearch'
import { FiMenu } from "react-icons/fi";
import NavbarSheet from './NavbarSheet'
import AccountDropdown from './AccountDropdown'
import { RiAccountCircleFill } from "react-icons/ri";
import { myProfile } from '@/store/auth'
import { useDispatch, useSelector } from 'react-redux'


function Navbar() {

  const dispatch=useDispatch() 
  const isAuth=useSelector((state)=>state.auth)
  const {isAuthenticated,user}=isAuth
  console.log('isAuth is',isAuthenticated)
  console.log('user is',user)

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const openRegister = () => {
    setIsLoginOpen(false); // Close Login Dialog
    setTimeout(() => setIsRegisterOpen(true), 300); // Open Register Dialog after a delay
  };

  const openLogin = () => {
    setIsRegisterOpen(false); // Close Register Dialog
    setIsForgotPasswordOpen(false); // Close Forgot Password Dialog
    setTimeout(() => setIsLoginOpen(true), 300); // Open Login Dialog after a delay
  };

  const openForgotPassword = () => {
    setIsLoginOpen(false); // Close Login Dialog
    setIsForgotPasswordOpen(true)
    // setTimeout(() => setIsForgotPasswordOpen(true), 300); // Open Forgot Password Dialog after a delay
  };
  
  
  
  
  return (
   <>
   <header className="bg-white py-4 px-4 md:px-12 flex items-center justify-between ">
   
           <div className="flex items-center space-x-8">
           
           
           <NavbarSheet
           trigger={
            <Button className=" block md:hidden text-black bg-transparent  ">
           <FiMenu />

           </Button>
           }
           />

             <nav className="hidden md:flex items-center space-x-6">
             
               <Link to="/home" className="text-sm font-medium text-black hover:text-gray-600">
                 Home
               </Link>
               <Link to="/listing" className="text-sm font-medium text-gray-500 hover:text-gray-600">
                 Product
               </Link>
               <Link to="/blog" className="text-sm font-medium text-gray-500 hover:text-gray-600">
                 Blog
               </Link>
               <Link to="/contact" className="text-sm font-medium text-gray-500 hover:text-gray-600">
                 Contact Us
               </Link>
             </nav>
           </div>
          
           
           <div className="flex items-center">
             <div className="font-semibold text-xl">LUX</div>
           </div>
   
           <div className="flex items-center space-x-2">
            

             <SheetSearch 
             trigger={ <Button className="rounded-full " variant="outline" size="icon"  >
                       <Search className="h-4 w-4 " />
                       <span className="sr-only">Search</span>
                     </Button>}
             />
             <Cart
        
        trigger={
          <FaBagShopping className="h-5 w-5"  />
          } 
        />


          {!isAuthenticated ? <LoginDialog
            open={isLoginOpen}
            onOpenChange={setIsLoginOpen}
            openRegister={openRegister}
            openForgotPassword={openForgotPassword}
            trigger={
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex border border-[#E16F3D] text-[#E16F3D] hover:text-[#E16F3D] rounded-[20px]"
              >
                Login
              </Button>
            }
          /> :
          <AccountDropdown

        trigger={<Button className="w-10 h-10 rounded-full bg-transparent hover:bg-transparent border flex justify-center items-center">
          <FaUser className=" text-black" />
        </Button>

        }
        />}
          {/* Login Dialog */}
          

          {/* Register Dialog */}
          <RegisterDialog
            open={isRegisterOpen}
            onOpenChange={setIsRegisterOpen}
            openLogin={openLogin}
          />

          {/* Forgot Password Dialog */}
          <ForgotPasswordDialog
            open={isForgotPasswordOpen}
            onOpenChange={setIsForgotPasswordOpen}
            openLogin={openLogin}
          />
       
        




           </div>
         </header>
   </>
  )
}

export default Navbar