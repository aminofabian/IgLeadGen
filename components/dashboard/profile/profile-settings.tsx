"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FaGlobe, FaBell, FaShieldAlt, FaKey } from "react-icons/fa"

const settingsSections = [
  {
    title: "Personal Information",
    icon: FaGlobe,
    fields: [
      { label: "Full Name", value: "John Doe", type: "text" },
      { label: "Email", value: "john@example.com", type: "email" },
      { label: "Username", value: "@johndoe", type: "text" },
      { label: "Bio", value: "Instagram growth expert & digital marketer", type: "text" }
    ]
  },
  {
    title: "Notifications",
    icon: FaBell,
    fields: [
      { label: "Email Notifications", value: "On", type: "toggle" },
      { label: "Push Notifications", value: "Off", type: "toggle" }
    ]
  },
  {
    title: "Privacy",
    icon: FaShieldAlt,
    fields: [
      { label: "Profile Visibility", value: "Public", type: "select" },
      { label: "Data Sharing", value: "Limited", type: "select" }
    ]
  },
  {
    title: "Security",
    icon: FaKey,
    fields: [
      { label: "Two-Factor Authentication", value: "Enabled", type: "toggle" },
      { label: "Password", value: "••••••••", type: "password" }
    ]
  }
]

export function getFieldDescription(label: string): string {
  const descriptions: Record<string, string> = {
    "Full Name": "Your display name visible to other users",
    "Email": "Your primary contact email for notifications",
    "Username": "Your unique @handle for your profile",
    "Bio": "A brief description about yourself",
    "Email Notifications": "Receive updates and alerts via email",
    "Push Notifications": "Get instant notifications on your device",
    "Profile Visibility": "Control who can see your profile",
    "Data Sharing": "Manage how your data is shared",
    "Two-Factor Authentication": "Add an extra layer of security",
    "Password": "Secure your account with a strong password"
  }
  return descriptions[label] || ""
}

export function ProfileSettings() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {settingsSections.map((section) => (
        <Card key={section.title} className="p-6 transition-all duration-300 hover:shadow-md">
          <div className="flex items-center gap-3 mb-6 pb-2 border-b">
            <div className="p-2 rounded-lg bg-primary/5 text-primary">
              <section.icon className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold tracking-tight">{section.title}</h2>
          </div>
          
          <div className="space-y-5">
            {section.fields.map((field) => (
              <div key={field.label} className="group">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative">
                  <div className="space-y-1 flex-1">
                    <label className="text-sm font-medium text-foreground/90">{field.label}</label>
                    <p className="text-xs text-muted-foreground/70">
                      {getFieldDescription(field.label)}
                    </p>
                  </div>
                  <div className="flex-1">
                    {field.type === "toggle" ? (
                      <div className="flex items-center justify-end gap-3">
                        <span className="text-sm text-muted-foreground/80">{field.value}</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="transition-all duration-300 hover:bg-primary/5 hover:text-primary hover:border-primary/20"
                        >
                          Toggle
                        </Button>
                      </div>
                    ) : field.type === "select" ? (
                      <div className="flex items-center justify-end gap-3">
                        <span className="text-sm text-muted-foreground/80">{field.value}</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="transition-all duration-300 hover:bg-primary/5 hover:text-primary hover:border-primary/20"
                        >
                          Change
                        </Button>
                      </div>
                    ) : (
                      <div className="relative group/input">
                        <Input
                          type={field.type}
                          defaultValue={field.value}
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 hover:border-primary/20"
                        />
                        {field.type === "password" && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute right-2 top-1/2 -translate-y-1/2 h-7 text-xs text-muted-foreground/70 hover:text-primary"
                          >
                            Change
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
