import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function RecentSale({recentOrders}) {
  return (
    <>
     <div className="space-y-8">
      
     {recentOrders.map((order,index)=>(
<div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Olivia Martin</p>
          <p className="text-sm text-muted-foreground">{order?.users?.email}</p>
        </div>
        <div className="ml-auto font-medium">+{order?.total}</div>
      </div>
     ))}
    </div>
    </>
  )
}

export default RecentSale