"use client";

import * as z from "zod";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FormError from "../common/FormError";
import FormSuccess from "../common/FormSuccess";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import CardWrapper from "./CardWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormField,
  FormMessage,
} from "../ui/form";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const urLError =
  searchParams.get("error") === "OAuthAccountNotLinked"
  ? "Email Already in Use with a Different Provider"
  : "";
  
  const [isPending, startTransition] = useTransition();
  
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    
    startTransition(() => {
      login(values)
      .then((data) => {
        if (data?.error) {
          form.reset();
          setError(data?.error);
        }
        
        if (data?.success) {
          form.reset();
          setSuccess(data?.success);
        }
        
        // if (data?.twoFactor) {
        //   setShowTwoFactor(true);
        // }
      })
      .catch(() => setError("Something went wrong"));
    });
  };
  return (
    <div className="text-slate-50">
    <CardWrapper
    headerLabel="Welcome Back"
    backButtonLabel="Don't Have an Account?"
    backButtonHref="/auth/register"
    showSocial
    >
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
    <div className="space-y-4">
    <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
      <FormLabel className="text-foreground/70">Email</FormLabel>
      <FormControl>
      <Input
      disabled={isPending}
      {...field}
      placeholder="john.doe@example.com"
      type="email"
      className={cn(
        "transition-all duration-300",
        "bg-background/50 border border-primary/10",
        "placeholder:text-muted-foreground/50",
        "focus:border-primary/30 focus:ring-primary/30",
        "hover:bg-background/70 cursor-text"
      )}
      />
      </FormControl>
      <FormMessage className="text-sm text-destructive font-light animate-in slide-in-from-left-1" />
      </FormItem>
    )}
    />
    <FormField
    control={form.control}
    name="password"
    render={({ field }) => (
      <FormItem>
      <FormLabel className="text-foreground/70">Password</FormLabel>
      <FormControl>
      <Input
      {...field}
      placeholder="••••••••"
      disabled={isPending}
      type="password"
      className={cn(
        "transition-all duration-300",
        "bg-background/50 border border-primary/10",
        "placeholder:text-muted-foreground/50",
        "focus:border-primary/30 focus:ring-primary/30",
        "hover:bg-background/70 cursor-text"
      )}
      />
      </FormControl>
      <FormMessage className="text-sm text-destructive font-light animate-in slide-in-from-left-1" />
      </FormItem>
    )}
    />
    </div>
    <FormError message={error || urLError} />
    <FormSuccess message={success} />
    <div className="flex items-center justify-between">
    <Button 
    size="sm" 
    variant="link" 
    className={cn(
      "px-0 font-normal text-primary/70",
      "hover:text-primary transition-colors",
      "cursor-pointer"
    )}
    asChild
    >
    <Link href='/auth/reset'>
    Forgot Password?
    </Link>
    </Button>
    </div>
    <Button
    variant="default"
    type="submit"
    disabled={isPending}
    className={cn(
      "w-full font-medium",
      "bg-gradient-to-r from-primary/90 to-primary/80",
      "hover:from-primary hover:to-primary/90",
      "transition-all duration-300",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "group relative overflow-hidden"
    )}
    >
    {/* Button Shimmer Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    
    {isPending ? (
      <div className="flex items-center justify-center gap-x-2">
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
      <span>Logging in...</span>
      </div>
    ) : (
      "Login into Your Account"
    )}
    </Button>
    </form>
    </Form>
    </CardWrapper>
    </div>
  );
};

export default LoginForm;
