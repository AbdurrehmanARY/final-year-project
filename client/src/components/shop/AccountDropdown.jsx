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
import { Link } from "react-router-dom"
import { toast } from "sonner"
  

 function AccountDropdown({trigger}) {
  const dispatch=useDispatch()
  const handleLogout=()=>{
   const data= dispatch(logoutUser())
   data.then((res)=>toast(res.payload.message)) 
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