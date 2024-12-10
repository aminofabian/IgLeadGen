"use client";

import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "../ui/card";
import Header from "./Header";
import { Jost } from "next/font/google";
import Social from "./Social";
import BackButton from "./BackButton";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}
const font = Jost({
  subsets: ["latin"],
  weight: ["700"],
});
const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <div className="relative w-full min-h-[400px] flex items-center justify-center py-12 group/card">
      {/* Card Container with Hover Effects */}
      <div className="relative">
        {/* Card Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-lg blur opacity-[0.15] group-hover/card:opacity-25 transition duration-500" />
        
        <Card
          className={cn(
            "w-[400px] shadow-lg mx-5 relative overflow-hidden",
            "bg-card/60 backdrop-blur-[12px] backdrop-saturate-150",
            "border border-primary/10",
            "transition-all duration-500",
            "hover:shadow-[0_0_30px_-5px] hover:shadow-primary/20",
            "animate-in zoom-in-95 duration-500",
            font.className
          )}
        >
          {/* Inner Card Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-primary/[0.03] to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.1),transparent_70%)]" />
          
          {/* Shimmer Effect */}
          <div className="absolute -inset-[100%] animate-[shimmer_4s_linear_infinite] bg-gradient-to-r from-transparent via-primary/[0.05] to-transparent" />
          
          {/* Content */}
          <CardHeader className="relative space-y-6 pb-8">
            <Header label={headerLabel} />
          </CardHeader>

          <CardContent className="relative space-y-6 pb-6">
            {children}
          </CardContent>

          {showSocial && (
            <CardFooter 
              className={cn(
                "relative flex flex-col space-y-4 pb-6",
                "before:absolute before:left-4 before:right-4 before:-top-3 before:h-px",
                "before:bg-gradient-to-r before:from-transparent before:via-primary/20 before:to-transparent"
              )}
            >
              <Social />
            </CardFooter>
          )}

          <CardFooter 
            className={cn(
              "relative flex flex-col space-y-4",
              "before:absolute before:left-4 before:right-4 before:-top-3 before:h-px",
              "before:bg-gradient-to-r before:from-transparent before:via-primary/20 before:to-transparent"
            )}
          >
            <BackButton href={backButtonHref} label={backButtonLabel} />
          </CardFooter>

          {/* Interactive Border Effect */}
          <div className="absolute inset-px rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
        </Card>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -z-10 blur-3xl opacity-20">
        <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-primary/40 animate-pulse" />
        <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-primary/40 animate-pulse [animation-delay:500ms]" />
      </div>
    </div>
  );
};

export default CardWrapper;
