import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {  TrendingUp } from 'lucide-react'

function TotalCard({title,value, change,  icon: Icon,index}) {
  return (
     <Card className="relative overflow-hidden bg-white/70 backdrop-blur-sm border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50"></div>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
      <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
      <Icon className="h-5 w-5 text-purple-600 animate-pulse-slow" />
    </CardHeader>
    <CardContent className="relative z-10">
      <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        {value}
      </div>
      <p className="text-xs text-green-600 font-medium flex items-center gap-1 mt-1">
        <TrendingUp className="h-3 w-3" />
        {change} from last month
      </p>
    </CardContent>
  </Card>
  )
}

export default TotalCard
