import { handlers } from "@/auth"
import { NextResponse } from "next/server"

export const runtime = "experimental-edge" 
export const dynamic = "force-dynamic"

export const { GET, POST } = handlers
