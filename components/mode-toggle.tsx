"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <div onClick={() => setTheme("light")} className="flex items-center">
            <Sun className="mr-2 h-4 w-4" />
            <span>Light</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <div onClick={() => setTheme("dark")} className="flex items-center">
            <Moon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <div onClick={() => setTheme("system")} className="flex items-center">
            <span className="mr-2 h-4 w-4 flex items-center justify-center">⚙️</span>
            <span>System</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}