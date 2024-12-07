"use client"

import { Instagram, Twitter, Linkedin, Github, Heart } from 'lucide-react'
import Link from 'next/link'

const navigation = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Case Studies', href: '#case-studies' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Community', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#contact' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'License', href: '#' },
  ],
  social: [
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: '#',
      icon: Github,
    },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-24 sm:mt-32">
      {/* Decorative elements */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[200px] w-[400px] rounded-full bg-primary/20 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand section */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/60" />
              <span className="text-2xl font-bold">IgLeadGen</span>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Transform your Instagram presence with AI-powered lead generation. Reach the right audience, engage authentically, and grow your business.
            </p>
            <div className="flex space-x-5">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation sections */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold">Product</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 border-t border-border/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm leading-5 text-muted-foreground">
              &copy; {currentYear} IgLeadGen. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" aria-hidden="true" />
              <span>by</span>
              <Link href="#" className="font-medium hover:text-primary transition-colors">
                Your Company
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
