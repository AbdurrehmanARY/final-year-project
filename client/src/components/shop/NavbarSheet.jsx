import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import { Search, X } from "lucide-react"
import SheetSearch from "./SheetSearch"
import Cart from "./Cart"
import { FaBagShopping } from "react-icons/fa6";
import { useState } from "react"


function NavbarSheet({trigger}) {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <>
     <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
      {trigger}
      </SheetTrigger>
      <SheetContent side="left" className="min-w-full p-7">
        <SheetHeader className="flex flex-row justify-between ">
        <X onClick={()=>setIsOpen(false)}/>
        <div className="font-semibold text-xl flex  justify-end flex-grow">LUX</div>
         
        <div className="flex justify-end flex-grow gap-2">
        <SheetSearch 
             trigger={ <Button className="rounded-full " variant="outline" size="icon"   >
                       <Search className="h-4 w-4 " />
                       <span className="sr-only">Search</span>
                     </Button>}
             />
             <Cart
        
        trigger={
          <FaBagShopping className="h-5 w-5"  />
          } 
        />
        </div>



          <SheetDescription>
            
          </SheetDescription>
        </SheetHeader>
        
<div className="flex flex-col gap-3">
<Link className="text-xl font-normal font-helvetica ">Menu</Link>
<Link className="text-xl font-normal font-helvetica "> Account</Link>
<Link className="text-xl font-normal font-helvetica ">Product</Link>
<Link className="text-xl font-normal font-helvetica ">Contact us</Link>

</div>

        <SheetFooter>
          <SheetClose asChild>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </>
  )
}

export default NavbarSheet