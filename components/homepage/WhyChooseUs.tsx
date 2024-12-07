import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Target, Clock } from "lucide-react"
import Link from "next/link"

export function WhyChooseUs() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-right skew-x-[-30deg] bg-muted/10 shadow-xl shadow-primary/10 ring-1 ring-primary/5" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Clients Love Us
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Say goodbye to manual lead generation and the headaches of spending hours scraping leads. 
              Say hello to peace of mind, more sales, and more time for your business.
            </p>
            <p className="mt-4 text-2xl font-semibold text-primary">
              Say hello to IG Lead Gen
            </p>
          </div>

          <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-3">
            {/* Stats Cards */}
            <div className="flex flex-col items-center rounded-2xl bg-background/60 backdrop-blur-sm px-8 py-10 text-center ring-1 ring-border/5 hover:bg-background/80 transition-colors duration-300">
              <Target className="h-12 w-12 text-primary mb-6" />
              <div className="order-first">
                <div className="text-4xl font-bold tracking-tight text-foreground">100,000+</div>
                <div className="text-base text-muted-foreground mt-1">Leads per month</div>
              </div>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">
                Generate unlimited high-quality Instagram leads from any niche and increase your daily cold DMs with endless leads at the click of a button.
              </p>
            </div>

            <div className="flex flex-col items-center rounded-2xl bg-background/60 backdrop-blur-sm px-8 py-10 text-center ring-1 ring-border/5 hover:bg-background/80 transition-colors duration-300">
              <MessageCircle className="h-12 w-12 text-primary mb-6" />
              <div className="order-first">
                <div className="text-4xl font-bold tracking-tight text-foreground">100+</div>
                <div className="text-base text-muted-foreground mt-1">DMs per day</div>
              </div>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">
                We guarantee that with our instant high-quality Instagram leads, you will see 100+ daily replies to your cold DMs.
              </p>
            </div>

            <div className="flex flex-col items-center rounded-2xl bg-background/60 backdrop-blur-sm px-8 py-10 text-center ring-1 ring-border/5 hover:bg-background/80 transition-colors duration-300">
              <Clock className="h-12 w-12 text-primary mb-6" />
              <div className="order-first">
                <div className="text-4xl font-bold tracking-tight text-foreground">10x</div>
                <div className="text-base text-muted-foreground mt-1">More meetings</div>
              </div>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">
                Get more meetings booked per month than ever before with our automated lead generation and engagement tools.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 flex justify-center">
            <Link href="/auth/register">
              <Button size="lg" className="group bg-primary hover:bg-primary/90">
                Try Out For Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
