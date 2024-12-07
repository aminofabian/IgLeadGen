import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    content: "IgLeadGen transformed our Instagram strategy. We've seen a 300% increase in qualified leads since using their hashtag analytics. The real-time insights have been game-changing for our campaigns.",
    author: "Sarah Chen",
    role: "Marketing Director",
    company: "TechStart Inc.",
    image: "/testimonials/sarah.jpg",
    stats: {
      metric: "3x",
      label: "Lead Generation"
    }
  },
  {
    content: "The insights we get from IgLeadGen are incredible. It's like having a data scientist dedicated to our Instagram growth. We've optimized our content strategy and doubled our conversion rate.",
    author: "Marcus Rodriguez",
    role: "Social Media Manager",
    company: "Growth Labs",
    image: "/testimonials/marcus.jpg",
    stats: {
      metric: "2x",
      label: "Conversion Rate"
    }
  },
  {
    content: "Finally, a tool that actually delivers on the promise of Instagram lead generation. Our ROI has never been better, and the automated lead scoring has saved us countless hours.",
    author: "Emma Thompson",
    role: "Founder & CEO",
    company: "Digital Edge",
    image: "/testimonials/emma.jpg",
    stats: {
      metric: "85%",
      label: "Time Saved"
    }
  }
]

export function Testimonials() {
  return (
    <section className="relative py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-muted/50" />
        <div 
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.01]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-primary">Testimonials</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Growth-Focused Teams
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how businesses are transforming their Instagram presence and generating quality leads with IgLeadGen
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative group rounded-2xl bg-background/60 backdrop-blur-sm p-8 shadow-sm ring-1 ring-border/5 hover:bg-background/80 transition-colors duration-300"
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-primary/10" />

              {/* Testimonial content */}
              <blockquote className="mt-6">
                <p className="text-base leading-7 text-muted-foreground">
                  {testimonial.content}
                </p>
              </blockquote>

              {/* Stats highlight */}
              <div className="mt-8 border-t border-border/5 pt-8">
                <div className="font-display text-4xl font-bold text-primary">
                  {testimonial.stats.metric}
                </div>
                <div className="mt-1 text-base text-muted-foreground">
                  {testimonial.stats.label}
                </div>
              </div>

              {/* Author info */}
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div className="relative h-12 w-12 rounded-full ring-2 ring-background">
                  <Image
                    className="rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </figcaption>

              {/* Decorative gradient */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
