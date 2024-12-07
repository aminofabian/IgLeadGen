import { Instagram } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={cn(
        "group relative flex items-center transition-all duration-300",
        className
      )}
    >
      {/* Icon with geometric pattern effect */}
      <div className="relative shrink-0">
        {/* Geometric background pattern */}
        <div className="absolute -inset-1">
          <div className="absolute inset-0 rotate-45 group-hover:rotate-[225deg] transition-transform duration-700">
            <div className="absolute inset-px bg-primary/20" />
            <div className="absolute inset-0 border-2 border-primary/30" />
            <div className="absolute inset-[3px] border border-primary/20" />
          </div>
          <div className="absolute inset-0 -rotate-45 group-hover:rotate-[135deg] transition-transform duration-700">
            <div className="absolute inset-px bg-primary/10" />
            <div className="absolute inset-0 border-2 border-primary/20" />
            <div className="absolute inset-[3px] border border-primary/10" />
          </div>
        </div>

        {/* Icon container with floating effect */}
        <div className="relative bg-background rounded-lg p-2 shadow-lg backdrop-blur-sm overflow-hidden animate-float">
          <div className="relative z-10">
            <Instagram className="h-4 w-4 text-primary group-hover:scale-110 transition-all duration-300" />
          </div>
          
          {/* Shine effect */}
          <div className="absolute inset-0 translate-x-full group-hover:translate-x-[-180%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t-2 border-l-2 border-primary/50" />
          <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t-2 border-r-2 border-primary/50" />
          <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b-2 border-l-2 border-primary/50" />
          <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-2 border-r-2 border-primary/50" />
        </div>
      </div>

      {showText && (
        <div className="relative font-outfit flex items-baseline -space-x-1 ml-3">
          {/* Ig with floating effect */}
          <div className="relative">
            <span className="text-2xl font-black bg-gradient-to-br from-primary via-orange-500 to-primary bg-clip-text text-transparent animate-gradient bg-300">
              Ig
            </span>
            <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-transparent" />
          </div>

          {/* Lead with perspective */}
          <div className="relative -skew-x-12 px-1.5 group-hover:-skew-x-3 transition-transform duration-300">
            <span className="text-[1.35rem] font-black text-foreground/70">
              Lead
            </span>
            {/* Perspective lines */}
            <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
          </div>

          {/* Gen with glow effect */}
          <div className="relative">
            <span className="text-2xl font-black bg-gradient-to-br from-orange-500 via-primary to-orange-500 bg-clip-text text-transparent animate-gradient bg-300">
              Gen
            </span>
            {/* Glowing dot */}
            <span className="absolute -right-2 top-0 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary group-hover:bg-orange-500 transition-colors duration-300" />
            </span>
            {/* Bottom glow */}
            <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover:via-orange-500/50 transition-colors duration-300" />
          </div>
        </div>
      )}

      {/* Background shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-full transition-transform duration-1000" />
    </Link>
  )
}
