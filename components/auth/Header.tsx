import { Jost } from "next/font/google";
import { cn } from "@/lib/utils";
import { FaInstagram } from "react-icons/fa";

const font = Jost({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-6 items-center justify-center">
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
        
        {/* Logo container */}
        <div className="relative flex items-center gap-4 px-4">
          {/* Instagram icon */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-2xl blur opacity-25" />
            <div className="relative p-3 text-2xl text-primary border-2 border-primary/20 rounded-2xl backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
              <FaInstagram />
            </div>
          </div>

          {/* Text */}
          <h1 className={cn(
            "text-4xl sm:text-5xl font-bold",
            "bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent",
            "relative transition-all duration-300 group-hover:scale-[1.02]",
            font.className
          )}>
            IgLeadGen
          </h1>
        </div>
      </div>

      {/* Subtitle */}
      <p className={cn(
        "text-lg sm:text-xl text-muted-foreground/90 max-w-md text-center leading-relaxed",
        "animate-in slide-in-from-bottom-2 duration-500 delay-200",
        font.className
      )}>
        {label}
      </p>
    </div>
  );
};

export default Header;
