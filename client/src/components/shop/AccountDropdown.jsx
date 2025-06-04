import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { logoutUser } from "@/store/auth"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import LoginDialog from "../auth/LoginDialog"
import { Button } from "../ui/button"

 function AccountDropdown({trigger,open,onOpenChange, openRegister,openForgotPassword,}) {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogout=async()=>{
   const response=await dispatch(logoutUser())
   if(response?.payload?.success){
    toast.success(response?.payload?.message)
    navigate("/")
return(
  <>
  <LoginDialog
            open={open}
            onOpenChange={onOpenChange}
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
          />
  </>
)
    
   }
  
  
  
  
  
  //  data.then((res)=>toast(res.payload.message)) 
  }
  return (
    <DropdownMenu>
    <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
    <DropdownMenuContent  side="bottom" align="end">
      <DropdownMenuItem>
<Link to='/account'>
My Account
</Link>

      </DropdownMenuItem>
      <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  
  )
}

export default AccountDropdown