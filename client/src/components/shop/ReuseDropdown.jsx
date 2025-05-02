import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"
function ReuseDropdown({trigger,option}) {

    console.log(option)
  return (
    <>
    <DropdownMenu>
    <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
    <DropdownMenuContent  side="bottom" align="end">
{option.map((item)=>(<DropdownMenuItem>
        {item.label}
        
              </DropdownMenuItem>))}

      
    </DropdownMenuContent>
  </DropdownMenu>
    </> )
}

export default ReuseDropdown