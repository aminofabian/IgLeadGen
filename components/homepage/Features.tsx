import { 
  BarChart3, 
  Hash, 
  Target, 
  Users2, 
  Zap, 
  TrendingUp,
  MessageSquareMore,
  Filter,
  LineChart
} from "lucide-react"

const features = [
  {
    name: "Advanced Hashtag Analytics",
    description: "Track and analyze hashtag performance with real-time metrics and engagement data.",
    icon: Hash,
  },
  {
    name: "Lead Generation",
    description: "Convert Instagram engagement into qualified business leads automatically.",
    icon: Target,
  },
  {
    name: "Audience Insights",
    description: "Deep dive into your audience demographics and behavior patterns.",
    icon: Users2,
  },
  {
    name: "Performance Metrics",
    description: "Comprehensive analytics dashboard with actionable insights.",
    icon: BarChart3,
  },
  {
    name: "Real-time Monitoring",
    description: "Track hashtag trends and engagement as they happen.",
    icon: Zap,
  },
  {
    name: "Growth Analytics",
    description: "Monitor your account growth and engagement rates over time.",
    icon: TrendingUp,
  },
  {
    name: "Sentiment Analysis",
    description: "Analyze comments and engagement sentiment for better insights.",
    icon: MessageSquareMore,
  },
  {
    name: "Smart Filtering",
    description: "Advanced filters to identify and focus on high-value leads.",
    icon: Filter,
  },
  {
    name: "Competitor Tracking",
    description: "Monitor and analyze competitor performance and strategies.",
    icon: LineChart,
  },
]

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Powerful Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to generate leads from Instagram
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our comprehensive suite of tools helps you identify, track, and convert Instagram engagement into valuable business opportunities.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className="relative group rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm transition-all hover:bg-accent/50 hover:shadow-lg hover:shadow-accent/5"
              >
                <dt className="flex items-center gap-x-4 text-base font-semibold leading-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-foreground">{feature.name}</span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7">
                  <p className="flex-auto text-muted-foreground">{feature.description}</p>
                </dd>
                {/* Decorative gradient border */}
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
