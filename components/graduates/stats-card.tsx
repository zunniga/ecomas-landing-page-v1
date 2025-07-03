import React from "react"
import { Card, CardContent } from "@/components/ui/card"

interface StatsCardProps {
  number: string
  label: string
}

export function StatsCard({ number, label }: StatsCardProps) {
  return (
    <Card className="bg-[#1e293b]/70 border-0 shadow-lg">
      <CardContent className="p-6 text-center">
        <div className="text-3xl font-bold text-[#CF0072] mb-2">{number}</div>
        <div className="text-gray-300 font-medium">{label}</div>
      </CardContent>
    </Card>
  )
}
