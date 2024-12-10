import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-background relative overflow-hidden">
      {/* Gradient background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 to-background -z-10" />
      
      {/* Animated orbs */}
      <div className="fixed inset-0 -z-5">
        <div className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-primary/20 opacity-20 blur-[100px] animate-pulse" />
        <div className="absolute -right-[10%] top-[60%] h-[500px] w-[500px] rounded-full bg-primary/30 opacity-20 blur-[100px] animate-pulse [animation-delay:1s]" />
      </div>
      
      {/* Content */}
      <main className="relative flex items-center justify-center w-full">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
