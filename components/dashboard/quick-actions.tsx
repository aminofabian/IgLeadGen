"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle, FileText, BarChart2, Download } from "lucide-react"

const actions = [
  {
    title: "Add Hashtag",
    description: "Start tracking a new hashtag",
    icon: PlusCircle,
    variant: "default" as const
  },
  {
    title: "Generate Report",
    description: "Create a detailed analysis",
    icon: FileText,
    variant: "outline" as const
  },
  {
    title: "View Analytics",
    description: "See detailed insights",
    icon: BarChart2,
    variant: "outline" as const
  },
  {
    title: "Export Data",
    description: "Download as CSV",
    icon: Download,
    variant: "outline" as const
  }
]

export function QuickActions() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {actions.map((action) => (
        <Card key={action.title} className="p-4">
          <Button
            variant={action.variant}
            className="w-full h-auto flex-col space-y-2 py-4"
          >
            <action.icon className="h-6 w-6" />
            <div className="space-y-1">
              <h3 className="font-medium">{action.title}</h3>
              <p className="text-xs text-muted-foreground">
                {action.description}
              </p>
            </div>
          </Button>
        </Card>
      ))}
    </div>
  )
}
