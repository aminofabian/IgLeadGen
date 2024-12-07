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

export function ProfileSettings() {
  return (
    <div className="space-y-6">
      {settingsSections.map((section) => (
        <Card key={section.title} className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <section.icon className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-lg font-medium">{section.title}</h2>
          </div>
          
          <div className="space-y-4">
            {section.fields.map((field) => (
              <div key={field.label} className="grid gap-2">
                <label className="text-sm font-medium">{field.label}</label>
                {field.type === "toggle" ? (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{field.value}</span>
                    <Button variant="outline" size="sm">Toggle</Button>
                  </div>
                ) : field.type === "select" ? (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{field.value}</span>
                    <Button variant="outline" size="sm">Change</Button>
                  </div>
                ) : (
                  <Input
                    type={field.type}
                    defaultValue={field.value}
                    className="max-w-md"
                  />
                )}
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
