import LoginForm from "@/components/auth/LoginForm";
import React, { Suspense } from "react";

const LoginPage = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background gradients and patterns */}
      <div className="fixed inset-0 -z-10 h-full w-full">
        <div className="absolute h-full w-full" />
        <div className="absolute inset-0" />
      </div>

      {/* Animated background shapes */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full opacity-20 blur-[100px] animate-pulse" />
        <div className="absolute -right-[10%] top-[60%] h-[500px] w-[500px] rounded-full bg-primary/30 opacity-20 blur-[100px] animate-pulse [animation-delay:1s]" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen w-full items-center justify-center p-4">
        <Suspense 
          fallback={
            <div className="flex items-center justify-center space-x-2">
              <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-primary"></div>
              <span className="text-muted-foreground/80">Loading...</span>
            </div>
          }
        >
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
};

export default LoginPage;
