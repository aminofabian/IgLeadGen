"use client"
import { UserPlus, Instagram, Target, MessageCircle, ArrowRight, Hash, Search, Bot } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account in less than 2 minutes"
  },
  {
    icon: Instagram,
    title: "Connect Instagram",
    description: "Link your Instagram business profile securely"
  },
  {
    icon: Hash,
    title: "Enter Industry",
    description: "Tell us your business niche or target market"
  },
  {
    icon: Search,
    title: "Get Hashtags",
    description: "AI generates or finds trending hashtags in your industry"
  },
  {
    icon: Bot,
    title: "Auto-Track",
    description: "System starts tracking hashtags and analyzing engagement"
  },
  {
    icon: MessageCircle,
    title: "Generate Leads",
    description: "Receive qualified leads from engaged Instagram users"
  }
]

export function HowItWorks() {
  return (
    <section className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.01]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get started in minutes and let our AI find your perfect leads
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Steps */}
          <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="group relative">
                {/* Step content */}
                <div className="relative flex flex-col items-center">
                  {/* Icon circle */}
                  <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-md ring-1 ring-border/5 group-hover:bg-primary/5 transition-colors duration-300">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  
                  {/* Step number */}
                  <div className="absolute top-0 -translate-y-1/2 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                    Step {index + 1}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-center">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground text-center">
                    {step.description}
                  </p>
                </div>

                {/* Horizontal arrow (except last in row) */}
                {index % 3 !== 2 && index < steps.length - 1 && (
                  <div className="absolute top-[40px] -right-4 w-40 hidden lg:block">
                    <svg width="100%" height="60" className="overflow-visible">
                      {/* Double Helix Effect */}
                      <path
                        d="M0,30 C20,30 30,10 50,10 S80,30 100,30 S130,10 150,10"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="1.5"
                        className="animate-flow-top"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0,30 C20,30 30,50 50,50 S80,30 100,30 S130,50 150,50"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="1.5"
                        className="animate-flow-bottom"
                        strokeLinecap="round"
                      />
                      
                      {/* Connecting lines */}
                      {[0, 25, 50, 75, 100, 125].map((x) => (
                        <line
                          key={x}
                          x1={x}
                          y1="10"
                          x2={x}
                          y2="50"
                          stroke="hsl(var(--primary))"
                          strokeWidth="1"
                          className="animate-connect"
                          strokeDasharray="2 3"
                        />
                      ))}

                      {/* Floating particles */}
                      {[1, 2, 3].map((i) => (
                        <circle
                          key={i}
                          r="2"
                          fill="hsl(var(--primary))"
                          className={`animate-particle-${i}`}
                        >
                          <animateMotion
                            dur={`${1.5 + i * 0.5}s`}
                            repeatCount="indefinite"
                            path="M0,30 C20,30 30,10 50,10 S80,30 100,30 S130,10 150,10"
                          />
                        </circle>
                      ))}

                      {/* Energy pulses */}
                      <circle r="3" fill="hsl(var(--primary))" opacity="0.5">
                        <animateMotion
                          dur="2s"
                          repeatCount="indefinite"
                          path="M0,30 C20,30 30,50 50,50 S80,30 100,30 S130,50 150,50"
                        />
                        <animate
                          attributeName="r"
                          values="2;4;2"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Arrow tip */}
                      <path
                        d="M140,25 L150,30 L140,35"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        className="animate-arrow-tip"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.3;1;0.3"
                          dur="1.5s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </svg>
                  </div>
                )}

                {/* Vertical arrow (for end of row) */}
                {index % 3 === 2 && index < steps.length - 3 && (
                  <div className="hidden lg:block absolute left-1/2 -bottom-24 w-40 -translate-x-1/2">
                    <svg width="100%" height="120" className="overflow-visible">
                      {/* Spiral path */}
                      <path
                        d="M80,0 C90,30 70,60 80,90 S90,120 80,150"
                        id={`spiral-${index}`}
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="1.5"
                        className="animate-spiral"
                      />
                      
                      {/* Energy rings */}
                      {[0, 1, 2].map((i) => (
                        <ellipse
                          key={i}
                          cx="80"
                          cy={40 + i * 40}
                          rx="15"
                          ry="5"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="1"
                          className={`animate-ring-${i}`}
                        />
                      ))}

                      {/* Floating orbs */}
                      {[1, 2, 3].map((i) => (
                        <g key={i} className={`animate-orb-${i}`}>
                          <circle
                            r="3"
                            fill="hsl(var(--primary))"
                            opacity="0.6"
                          >
                            <animateMotion
                              dur={`${2 + i * 0.5}s`}
                              repeatCount="indefinite"
                              path="M80,0 C90,30 70,60 80,90 S90,120 80,150"
                            />
                          </circle>
                        </g>
                      ))}

                      {/* Arrow tip with glow */}
                      <path
                        d="M75,135 L80,145 L85,135"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        className="animate-arrow-tip"
                      >
                        <animate
                          attributeName="stroke-width"
                          values="2;3;2"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flowTop {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes flowBottom {
          0% { stroke-dashoffset: -50; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes connect {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }

        @keyframes spiral {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes ring {
          0%, 100% { transform: scaleX(1); opacity: 0.3; }
          50% { transform: scaleX(1.2); opacity: 0.8; }
        }

        .animate-flow-top {
          stroke-dasharray: 5 3;
          animation: flowTop 2s linear infinite;
        }

        .animate-flow-bottom {
          stroke-dasharray: 5 3;
          animation: flowBottom 2s linear infinite;
        }

        .animate-connect {
          animation: connect 1.5s ease-in-out infinite;
        }

        .animate-spiral {
          stroke-dasharray: 5 3;
          animation: spiral 3s linear infinite;
        }

        .animate-ring-0 { animation: ring 2s ease-in-out infinite; }
        .animate-ring-1 { animation: ring 2s ease-in-out infinite 0.3s; }
        .animate-ring-2 { animation: ring 2s ease-in-out infinite 0.6s; }

        .animate-arrow-tip {
          filter: drop-shadow(0 0 2px hsl(var(--primary)));
        }

        .dark .animate-arrow-tip {
          filter: drop-shadow(0 0 3px hsl(var(--primary)));
        }
      `}</style>
    </section>
  )
}
