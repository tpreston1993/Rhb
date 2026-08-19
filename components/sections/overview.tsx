"use client"

import { Calendar, MapPin, Clock } from "lucide-react"
import { eventConfig } from "@/config/event"
import { PillLabel } from "@/components/ui/pill-label"

export function Overview() {
  return (
    <section id="overview" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <PillLabel>The Event</PillLabel>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase text-ribe-primary md:text-5xl">
            Two Days of Excellence
          </h2>
        </div>

        {/* Date Cards */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {/* Award Show Card */}
          <div className="group relative overflow-hidden rounded-xl border border-ribe-secondary/20 bg-gradient-to-br from-ribe-primary to-ribe-primary/90 p-8 shadow-lg transition-all hover:shadow-xl">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 translate-y--8 rounded-full bg-ribe-accent/10" />
            <div className="relative">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-ribe-accent">
                <Calendar className="h-7 w-7 text-ribe-primary" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">Award Show</h3>
              <p className="mb-4 font-serif text-xl text-ribe-accent">
                {eventConfig.dates.awardShow}
              </p>
              <p className="text-white/80">
                An evening celebrating the best in the barber industry. Red
                carpet, awards, and networking.
              </p>
            </div>
          </div>

          {/* Expo Day Card */}
          <div className="group relative overflow-hidden rounded-xl border border-ribe-secondary/20 bg-gradient-to-br from-ribe-primary to-ribe-primary/90 p-8 shadow-lg transition-all hover:shadow-xl">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 translate-y--8 rounded-full bg-ribe-secondary/10" />
            <div className="relative">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-ribe-accent">
                <Clock className="h-7 w-7 text-ribe-primary" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">Expo Day</h3>
              <p className="mb-4 font-serif text-xl text-ribe-accent">
                {eventConfig.dates.expo}
              </p>
              <p className="text-white/80">
                Full day of competitions, education, vendors, and community.
                Experience the best of barbering.
              </p>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="rounded-xl border border-ribe-secondary/20 bg-ribe-primary/5 p-8">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-ribe-primary">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="mb-1 text-xl font-bold text-ribe-primary">
                Event Location
              </h3>
              <p className="text-lg text-ribe-gray">{eventConfig.location}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12 text-center">
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-ribe-gray">
            Join hundreds of barbers, stylists, and industry professionals for
            the premier barbering event in Rhode Island. Whether you&apos;re
            competing, learning, or connecting, the Rhode Island Barber Expo
            brings together the best in the business for an unforgettable
            weekend.
          </p>
        </div>
      </div>
    </section>
  )
}
