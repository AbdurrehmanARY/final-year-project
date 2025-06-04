import React from 'react'
import { Card } from '@/components/ui/card'
function Specification({title,specs}) {
  return (
    <Card className="overflow-hidden">
    <h2 className="bg-gray-100 text-gray-800 font-medium py-3 px-4">{title}</h2>
    <div>
      {specs.map((spec, index) => (
        <div key={index} className="border-b border-gray-100 last:border-0">
          <div className="grid grid-cols-2 py-3 px-4">
            <div className="text-gray-600">{spec.label}</div>
            <div className="text-gray-900 font-medium">{spec.value}</div>
          </div>
        </div>
      ))}
    </div>
  </Card>
  )
}

export default Specification
