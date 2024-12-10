import RegisterForm from "@/components/auth/RegisterForm";
import { Suspense } from "react";

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen w-full items-stretch sm:items-center justify-center">
      <Suspense 
        fallback={
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full border-2 border-primary animate-spin border-t-transparent" />
          </div>
        }
      >
        <RegisterForm />
      </Suspense>
    </div>
  );
};

export default RegisterPage;
