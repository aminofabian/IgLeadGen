import LoginForm from "@/components/auth/LoginForm";
import React, { Suspense } from "react";

const LoginPage = () => {
  return (
    <>
      <div className="flex w-4xl h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 text-center border rounded-lg">
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </>
  );
};

export default LoginPage;
