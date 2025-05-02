
import { useState } from "react"
import { Search, X } from "lucide-react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Navbar from "./Navbar"
function SheetSearch({trigger}) {

    const [isOpen, setIsOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [recentSearches, setRecentSearches] = useState([
      "Shirts",
      "Skirts",
      "Jeans",
      "Casual",
      "Pants",
      "Coats",
      "Sneakers",
    ])
  
    const handleRemoveTag = (tag) => {
      setRecentSearches(recentSearches.filter((item) => item !== tag))
    }
  
    const handleClose = () => {
      setIsOpen(false)
    }
  return (
   <>
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
       {trigger}
      </SheetTrigger>
      <SheetContent side="top" className="w-full mx-auto rounded-b-lg h-auto max-h-[90vh]  ">
      <Navbar/>
        <div className="space-y-6 px-8 pb-8  ">
          <div className="relative flex items-center gap-2">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 rounded-3xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>
            <Button variant="ghost" size="icon" className="flex-shrink-0 border rounded-full" onClick={handleClose}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Recent Search</h3>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((tag) => (
                <div key={tag} className="flex items-center bg-background border rounded-full px-3 py-1 text-sm">
                  <span>{tag}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 ml-1 p-0"
                    onClick={() => handleRemoveTag(tag)}
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove {tag}</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>









   
   
   
   
   </>
  )
}

export default SheetSearch