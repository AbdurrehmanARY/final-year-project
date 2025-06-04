

import { ChevronRight } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

export function NavMain({ items }) {
  return (
  <>
  
            {/* <SidebarGroup>
      <SidebarGroupLabel className="text-orange-600 font-semibold">
        Main Menu
      </SidebarGroupLabel>
      <SidebarGroupContent className="bg-white">
        <SidebarMenu className="space-y-2 bg-white">
          {items.map((item, index) => (
            <SidebarMenuItem
              key={item.title}
              className="animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SidebarMenuButton
                asChild
                className={`
                  transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 
                  hover:scale-105 hover:shadow-md rounded-lg group
                  ${item.isActive ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg' : ''}
                `}
              >
                <Link to={item.url} className="flex items-center gap-3 p-3">
                  {item.icon && (
                    <item.icon
                      className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                        item.isActive ? 'text-white' : 'text-gray-600'
                      }`}
                    />
                  )}
                  <span className={`font-medium ${item.isActive ? 'text-white' : 'text-gray-700'}`}>
                    {item.title}
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup> */}





            <SidebarGroup>
          <SidebarGroupLabel className="text-orange-600 font-semibold">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item, index) => (
                <SidebarMenuItem key={item.title} className="animate-slide-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <SidebarMenuButton 
                    asChild 
                    className={`
                      transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 
                      hover:scale-105 hover:shadow-md rounded-lg group
                      ${item.active ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg' : ''}
                    `}
                  >
                    <Link to={item.url} className="flex items-center gap-3 p-3">
                      <item.icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${item.active ? 'text-white' : 'text-gray-600'}`} />
                      <span className={`font-medium ${item.active ? 'text-white' : 'text-gray-700'}`}>
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
    

    
  
  
  </>
  )
}
