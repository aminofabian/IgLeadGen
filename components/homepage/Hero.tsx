import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <div className="relative isolate">
      {/* Background gradients */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-orange-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-br from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent pb-2">
            Generate Leads from Instagram Hashtags
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Transform your Instagram hashtag strategy into a powerful lead generation engine. Track engagement, analyze trends, and convert followers into valuable business opportunities.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/auth/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
            <Link href="/features" className="text-sm font-semibold leading-6 text-muted-foreground hover:text-primary">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Stats */}
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-3 sm:gap-x-12">
            {[
              { name: 'Active Users', value: '20K+' },
              { name: 'Hashtags Tracked', value: '500K+' },
              { name: 'Leads Generated', value: '100K+' },
            ].map((stat) => (
              <div key={stat.name} className="flex flex-col gap-y-3 border-l border-border/50 pl-6">
                <dt className="text-sm leading-6 text-muted-foreground">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight bg-gradient-to-br from-primary to-orange-500 bg-clip-text text-transparent">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-orange-500 to-primary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
