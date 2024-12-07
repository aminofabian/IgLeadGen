"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus } from "lucide-react"

export function AddHashtagButton() {
  return (
    <Card className="p-4 border-dashed">
      <Button
        variant="ghost"
        className="h-[200px] w-full border-2 border-dashed border-muted-foreground/20 hover:border-muted-foreground/40"
      >
        <div className="flex flex-col items-center gap-2">
          <Plus className="h-8 w-8" />
          <div className="text-center">
            <p className="font-medium">Add New Hashtag</p>
            <p className="text-sm text-muted-foreground">
              Track a new hashtag's performance
            </p>
          </div>
        </div>
      </Button>
    </Card>
  )
}
