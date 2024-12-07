"use client"
import { useEffect, useRef } from 'react'
import { TrendingUp, Users, Target, BarChart2 } from 'lucide-react'

const metrics = [
  {
    icon: TrendingUp,
    label: "Average Growth",
    value: "147%",
    detail: "Monthly follower increase"
  },
  {
    icon: Users,
    label: "Lead Generation",
    value: "2.4x",
    detail: "More qualified leads"
  },
  {
    icon: Target,
    label: "Engagement Rate",
    value: "89%",
    detail: "Higher engagement"
  },
  {
    icon: BarChart2,
    label: "ROI Improvement",
    value: "3.2x",
    detail: "Better conversion rate"
  }
]

export function GrowthMetrics() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = sectionRef.current
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden opacity-0 translate-y-8 duration-1000 ease-out">
      {/* Animated background pattern */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,theme(colors.primary/0.05)_50%,transparent_100%)] animate-shimmer"
          style={{
            backgroundSize: '200% 100%',
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Proven Results
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our AI-powered platform consistently delivers exceptional growth metrics
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="metric-card relative group opacity-0 translate-y-8"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative flex flex-col items-center p-8 rounded-3xl bg-background/50 backdrop-blur-sm border border-border/5 hover:border-primary/20 transition-all duration-500">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Metric icon with pulse effect */}
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-primary/10 blur group-hover:animate-pulse" />
                  <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <metric.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Metric value with counting animation */}
                <div className="mt-6 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 counter-value">
                  {metric.value}
                </div>

                <h3 className="mt-2 text-lg font-semibold">{metric.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground text-center">{metric.detail}</p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(var(--tx), var(--ty));
          }
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .animate-shimmer {
          animation: shimmer 8s linear infinite;
        }

        .particle {
          --tx: ${() => (Math.random() * 40 - 20)}px;
          --ty: ${() => (Math.random() * 40 - 20)}px;
          animation: float linear infinite;
        }

        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-in .metric-card {
          animation: slideUp 0.8s ease-out forwards;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
