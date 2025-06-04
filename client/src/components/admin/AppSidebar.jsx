"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Home,
  Map,
  Package,
  PieChart,
  Settings2,
  ShoppingBag,
  Smartphone,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "./NavMain"

// import { NavProjects } from "@/components/nav-projects"
// import { NavUser } from "@/components/nav-user"
import { NavUser } from "./NavUser"
// import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useNavigate } from "react-router-dom"

// Sample data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: Home,
      isActive: true,
     
    },
    
    {
      title: "Products",
      url: "/admin/product",
      icon: Package,
      isActive: true,
     
    },
    {
        title: "Orders",
        url: "/admin/orders",
        icon: ShoppingBag,
        isActive: true,
       
      },
    
  ],
  projects: [
    { name: "Design Engineering", url: "#", icon: Frame },
    { name: "Sales & Marketing", url: "#", icon: PieChart },
    { name: "Travel", url: "#", icon: Map },
  ],
}

export function AppSidebar(props) {
  const navigate=useNavigate()
  return (
    <Sidebar  className="border-r border-white/20 bg-white/70 backdrop-blur-md" collapsible="icon" {...props}>
      <SidebarHeader  className="p-6">
              <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          {/* <div onClick={()=>navigate('/')} className="flex items-center space-x-2">
              <Smartphone className="w-6 h-6 text-orange-600" />
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-orange-700 bg-clip-text text-transparent">
                MobileHub
              </h1>
            </div> */}
          {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center animate-pulse-slow">
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800">ShopAdmin</h2>
            <p className="text-xs text-gray-600">Pro Dashboard</p>
          </div> */}
        </div>
      </SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
