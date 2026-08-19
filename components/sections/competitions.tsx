"use client"

import Link from "next/link"
import { Scissors, Award, Palette, Sparkles, Ghost } from "lucide-react"
import { competitionConfig } from "@/config/competitions"
import { PillLabel } from "@/components/ui/pill-label"

const EVENTBRITE_URL = "https://www.eventbrite.com/e/rhode-island-barber-expo-tickets-1987287770217?aff=oddtdtcreator"

const categoryIcons: Record<string, React.ElementType> = {
  "fast-fade": Scissors,
  traditional: Award,
  freestyle: Palette,
  braiding: Sparkles,
  halloween: Ghost,
}

export function Competitions() {
  return (
    <section id="competitions" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <PillLabel>Competitions</PillLabel>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase text-ribe-primary md:text-5xl">
            Show Your Skills
          </h2>
          <p className="mt-4 text-lg text-ribe-gray">
            Compete against the best barbers in Rhode Island and the country!
          </p>
        </div>

        {/* Category Cards */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {competitionConfig.categories.map((category) => {
            const Icon = categoryIcons[category.id] || Scissors
            return (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-xl border border-ribe-secondary/20 bg-gradient-to-br from-ribe-primary/5 to-transparent p-6 transition-all hover:border-ribe-accent hover:shadow-lg"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-ribe-secondary/10 transition-all group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-ribe-primary text-white transition-all group-hover:bg-ribe-accent group-hover:text-ribe-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-ribe-primary">
                    {category.name}
                  </h3>
                  <p className="text-ribe-gray">{category.description}</p>
                </div>
              </div>
            )
          })}

          {/* Bundle Card */}
          <div className="relative overflow-hidden rounded-xl border-2 border-ribe-accent bg-ribe-accent/10 p-6">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-ribe-accent/20" />
            <div className="relative">
              <div className="mb-4 inline-block rounded-full bg-ribe-accent px-3 py-1 text-sm font-bold text-ribe-primary">
                Bundle & Save
              </div>
              <h3 className="mb-2 text-xl font-bold text-ribe-primary">
                3-Category Bundle
              </h3>
              <p className="mb-4 text-ribe-gray">
                Enter any 3 competitions and save $50
              </p>
              <p className="text-3xl font-bold text-ribe-primary">
                ${competitionConfig.bundlePrice}
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Info */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-6 rounded-xl bg-ribe-primary/5 p-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-ribe-gray">
              Per Category
            </p>
            <p className="text-2xl font-bold text-ribe-primary">
              ${competitionConfig.pricePerCategory}
            </p>
          </div>
          <div className="hidden h-12 w-px bg-ribe-secondary/30 sm:block" />
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-ribe-gray">
              Bundle (3 Categories)
            </p>
            <p className="text-2xl font-bold text-ribe-accent">
              ${competitionConfig.bundlePrice}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={EVENTBRITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-ribe-primary px-10 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-ribe-primary/90 sm:w-auto"
          >
            Register Now
          </Link>
          <a
            href="#competition-schedule"
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-ribe-primary px-10 py-4 text-lg font-bold text-ribe-primary transition-all hover:scale-105 hover:bg-ribe-primary hover:text-white sm:w-auto"
          >
            View Competition Schedule
          </a>
        </div>
      </div>
    </section>
  )
}
