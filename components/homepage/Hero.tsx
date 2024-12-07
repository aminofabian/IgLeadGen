"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Creative Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid-primary/[0.02] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" />
        
        {/* Animated Circles */}
        <div className="absolute -top-40 -z-10 transform-gpu">
          <div className="circle-pattern circle-1" />
          <div className="circle-pattern circle-2" />
          <div className="circle-pattern circle-3" />
        </div>

        {/* Gradient Mesh */}
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_75%)]" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="floating-element elem-1" />
          <div className="floating-element elem-2" />
          <div className="floating-element elem-3" />
          <div className="floating-element elem-4" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      </div>

      {/* Animated Waves */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-lg sm:-top-80">
          {/* Wave 1 */}
          <div className="wave-line wave-1">
            <svg
              className="w-full h-48 text-primary/20"
              viewBox="0 0 1108 128"
              preserveAspectRatio="none"
            >
              <path
                d="M0 64C166.183 64 166.183 96 332.366 96C498.549 96 498.549 32 664.732 32C830.915 32 830.915 96 997.098 96C1163.28 96 1163.28 64 1329.46 64V128H0V64Z"
                fill="currentColor"
              />
            </svg>
          </div>
          {/* Wave 2 */}
          <div className="wave-line wave-2">
            <svg
              className="w-full h-48 text-primary/10"
              viewBox="0 0 1108 128"
              preserveAspectRatio="none"
            >
              <path
                d="M0 96C166.183 96 166.183 32 332.366 32C498.549 32 498.549 96 664.732 96C830.915 96 830.915 32 997.098 32C1163.28 32 1163.28 96 1329.46 96V128H0V96Z"
                fill="currentColor"
              />
            </svg>
          </div>
          {/* Wave 3 */}
          <div className="wave-line wave-3">
            <svg
              className="w-full h-48 text-orange-500/10"
              viewBox="0 0 1108 128"
              preserveAspectRatio="none"
            >
              <path
                d="M0 32C166.183 32 166.183 96 332.366 96C498.549 96 498.549 32 664.732 32C830.915 32 830.915 96 997.098 96C1163.28 96 1163.28 32 1329.46 32V128H0V32Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Background gradients */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-orange-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-[pulse_4s_ease-in-out_infinite]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative mx-auto max-w-[1400px] px-6 py-16 lg:py-20 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-2 lg:items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center lg:pr-12">
            <div className="animate-in slide-in-from-left duration-1000">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-br from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent pb-2">
                Generate Leads from Instagram Hashtags
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground opacity-0 animate-[fadeIn_0.5s_ease-in_forwards_0.5s]">
                Transform your Instagram hashtag strategy into a powerful lead generation engine. Track engagement, analyze trends, and convert followers into valuable business opportunities.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-x-6 opacity-0 animate-[fadeIn_0.5s_ease-in_forwards_0.75s]">
              <Link href="/auth/register">
                <Button 
                  size="lg" 
                  className={cn(
                    "bg-primary hover:bg-primary/90 h-14 px-8 text-lg",
                    "transition-transform hover:scale-105 active:scale-100",
                    "animate-shimmer bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]",
                    "border border-primary/20"
                  )}
                >
                  Get Started
                </Button>
              </Link>
              <Link 
                href="/features" 
                className="text-lg font-semibold leading-6 text-muted-foreground hover:text-primary transition-colors relative group"
              >
                Learn more{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Stats */}
            <dl className="mt-12 grid grid-cols-3 gap-x-6 gap-y-8">
              {[
                { name: 'Active Users', value: '20K+', delay: '0.9s' },
                { name: 'Hashtags Tracked', value: '500K+', delay: '1.1s' },
                { name: 'Leads Generated', value: '100K+', delay: '1.3s' },
              ].map((stat) => (
                <div 
                  key={stat.name} 
                  className="border-l border-border/50 pl-6 opacity-0"
                  style={{ animation: `fadeIn 0.5s ease-in forwards ${stat.delay}` }}
                >
                  <dt className="text-base leading-6 text-muted-foreground">
                    {stat.name}
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold tracking-tight bg-gradient-to-br from-primary to-orange-500 bg-clip-text text-transparent">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Video Section */}
          <div className="lg:pl-12 opacity-0 animate-[fadeIn_1s_ease-in_forwards_0.5s]">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-border/5 transition-transform hover:scale-[1.01] duration-500">
              <div className="aspect-[16/9]">
                <iframe
                  src="https://player.vimeo.com/video/945399596?autoplay=0&loop=1&byline=0&title=0"
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                  frameBorder="0"
                />
              </div>
            </div>
            {/* Conversion Text */}
            <div className="mt-6 space-y-4 text-center opacity-0 animate-[fadeIn_0.5s_ease-in_forwards_1.5s]">
              <div className="inline-flex items-center gap-x-2 text-sm text-muted-foreground/80">
                <svg
                  className="h-4 w-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span>Secure & Privacy-Focused</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Join <span className="text-primary font-medium">2,500+</span> businesses already using IgLeadGen
              </p>
              <div className="flex justify-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-background"
                      style={{
                        backgroundImage: `url(/avatars/avatar-${i + 1}.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  ))}
                </div>
                <div className="inline-flex items-center gap-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-orange-500 to-primary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] animate-[pulse_4s_ease-in-out_infinite]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
