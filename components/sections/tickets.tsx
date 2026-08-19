"use client"

import Link from "next/link"
import { Check, Star } from "lucide-react"
import { ticketConfig } from "@/config/tickets"
import { PillLabel } from "@/components/ui/pill-label"

const EVENTBRITE_URL = "https://www.eventbrite.com/e/rhode-island-barber-expo-tickets-1987287770217?aff=oddtdtcreator"

const ticketOrder = ["general", "education", "kulture", "vip"] as const

export function Tickets() {
  return (
    <section id="tickets" className="bg-ribe-primary py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <PillLabel>Tickets</PillLabel>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase text-white md:text-5xl">
            Choose Your Experience
          </h2>
          <p className="mt-2 font-display text-2xl font-bold uppercase text-ribe-accent md:text-3xl">
            (Early Bird Pricing)
          </p>
          <p className="mt-4 text-lg text-white/70">
            Select the ticket that fits your expo journey
          </p>
        </div>

        {/* Ticket Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ticketOrder.map((key, index) => {
            const ticket = ticketConfig[key]
            const isFeatured = key === "vip"
            return (
              <div
                key={key}
                className={`relative flex flex-col overflow-hidden rounded-xl border transition-all hover:-translate-y-1 hover:shadow-2xl ${
                  isFeatured
                    ? "border-ribe-accent bg-white"
                    : "border-white/20 bg-white/10"
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="flex items-center justify-center gap-1 bg-ribe-accent py-2 text-sm font-bold text-ribe-primary">
                    <Star className="h-4 w-4" fill="currentColor" />
                    Best Value
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  {/* Ticket Name */}
                  <h3
                    className={`mb-2 text-xl font-bold ${isFeatured ? "text-ribe-primary" : "text-white"}`}
                  >
                    {ticket.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-6">
                    <span
                      className={`text-4xl font-bold ${isFeatured ? "text-ribe-primary" : "text-ribe-accent"}`}
                    >
                      ${ticket.price}
                    </span>
                  </div>

                  {/* Access List */}
                  <ul className="mb-6 flex-1 space-y-3">
                    {ticket.access.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check
                          className={`mt-0.5 h-5 w-5 shrink-0 ${isFeatured ? "text-ribe-primary" : "text-ribe-accent"}`}
                        />
                        <span
                          className={
                            isFeatured ? "text-ribe-gray" : "text-white/80"
                          }
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href={EVENTBRITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full rounded-full py-3 text-center font-bold transition-all hover:scale-105 ${
                      isFeatured
                        ? "bg-ribe-primary text-white hover:bg-ribe-primary/90"
                        : "bg-ribe-accent text-ribe-primary hover:bg-ribe-accent/90"
                    }`}
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stripe Note */}
        <p className="mt-8 text-center text-sm text-white/50">
          Powered by Stripe — Secure payment processing
        </p>
      </div>
    </section>
  )
}
