import { Jost } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Jost({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <h1 className={cn(
          "text-3xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent",
          "relative transition-all duration-300 group-hover:scale-[1.02]",
          font.className
        )}>
          <span className="mr-2">🔐</span>
          Auth
        </h1>
      </div>
      <p className="text-muted-foreground/80 text-sm max-w-sm text-center">
        {label}
      </p>
    </div>
  );
};

export default Header;
