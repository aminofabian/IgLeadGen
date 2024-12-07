"use client"

import { useRef, useState } from 'react'
import { ArrowRight, Sparkles, Bot, Lock, Zap, Clock, HeartHandshake } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface FAQItem {
  icon: LucideIcon
  question: string
  answer: string
  color: string
}

const FAQ_ITEMS: FAQItem[] = [
  {
    icon: Sparkles,
    question: "How does the AI-powered hashtag generation work?",
    answer: "Our AI analyzes millions of Instagram posts to identify trending and high-performing hashtags in your industry. It considers engagement rates, reach, and relevance to ensure you get the most effective hashtags for your content.",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    icon: Bot,
    question: "What makes your lead generation different?",
    answer: "We use advanced algorithms to identify and engage with highly qualified potential leads based on their behavior, interests, and engagement patterns. This automated approach is more efficient and targeted than manual outreach, saving you time while delivering better results.",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Clock,
    question: "How long does it take to see results?",
    answer: "Most clients see initial results within the first 2-3 weeks. This includes increased engagement, follower growth, and initial lead generation. However, the best results typically come after 2-3 months of consistent use and strategy optimization.",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: Zap,
    question: "Can I integrate with existing tools?",
    answer: "Yes! Our platform is designed to work seamlessly with most popular Instagram marketing tools. We provide API integration capabilities and can complement your existing workflow without disruption.",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    icon: Lock,
    question: "Is it compliant with Instagram's TOS?",
    answer: "Absolutely. We've built our platform to strictly adhere to Instagram's terms of service and API guidelines. We use official API endpoints and maintain safe engagement rates to ensure your account's safety and compliance.",
    color: "from-teal-500/20 to-cyan-500/20"
  },
  {
    icon: HeartHandshake,
    question: "What kind of support do you provide?",
    answer: "We offer comprehensive support including 24/7 email assistance, live chat during business hours, detailed documentation, video tutorials, and monthly strategy calls for premium users. Our success team is always ready to help optimize your campaigns.",
    color: "from-pink-500/20 to-rose-500/20"
  }
]

interface FAQProps extends React.HTMLAttributes<HTMLDivElement> {}

export function FAQ({ className, ...props }: FAQProps) {
  const [selectedFaq, setSelectedFaq] = useState<number>(0)
  const [isAnswerVisible, setIsAnswerVisible] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const handleSelect = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    if (selectedFaq === index) return

    setIsAnswerVisible(false)
    timeoutRef.current = setTimeout(() => {
      setSelectedFaq(index)
      setIsAnswerVisible(true)
    }, 300)
  }

  const selectedItem = FAQ_ITEMS[selectedFaq]

  return (
    <div className={`py-24 relative ${className}`} {...props}>
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
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about our Instagram lead generation platform
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Split view container */}
          <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8 items-start">
            {/* Questions list */}
            <div className="relative space-y-3">
              {FAQ_ITEMS.map((faq, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  className={`group w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    selectedFaq === index
                      ? 'bg-primary/5 hover:bg-primary/10'
                      : 'hover:bg-muted'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${faq.color}`}>
                      <faq.icon className="w-4 h-4 text-foreground" />
                    </div>
                    <span className="font-medium">{faq.question}</span>
                    <ArrowRight className={`ml-auto w-4 h-4 transition-transform duration-300 ${
                      selectedFaq === index ? 'translate-x-1 text-primary' : 'text-muted-foreground'
                    }`} />
                  </div>
                </button>
              ))}
            </div>

            {/* Answer panel */}
            <div className="relative lg:h-[400px]">
              <div className="lg:sticky lg:top-4 w-full rounded-2xl border border-border/5 bg-background/50 backdrop-blur-sm p-8">
                {/* Decorative gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${selectedItem.color} opacity-20 transition-opacity duration-500 ${
                  isAnswerVisible ? 'opacity-20' : 'opacity-0'
                }`} />

                {/* Icon */}
                <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedItem.color} w-fit transition-colors duration-500`}>
                  <selectedItem.icon className="w-6 h-6 text-foreground" />
                </div>

                {/* Content */}
                <div className={`mt-6 transition-all duration-300 ${
                  isAnswerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <h3 className="text-xl font-semibold mb-4">{selectedItem.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedItem.answer}</p>
                </div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
              </div>
            </div>
          </div>

          {/* Support CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              Still have questions?{' '}
              <a 
                href="#contact" 
                className="font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
