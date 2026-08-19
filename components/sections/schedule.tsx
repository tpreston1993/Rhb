"use client"

import { scheduleConfig } from "@/config/schedule"
import { PillLabel } from "@/components/ui/pill-label"

export function Schedule() {
  return (
    <section id="schedule" className="bg-ribe-primary py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <PillLabel>Schedule — October 4</PillLabel>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase text-white md:text-5xl">
            Expo Day Timeline
          </h2>
          <div className="mt-6">
            <a
              href="#competition-schedule"
              className="inline-flex items-center justify-center rounded-full bg-ribe-accent px-8 py-3 text-base font-bold text-ribe-primary transition-all hover:scale-105 hover:bg-ribe-accent/90"
            >
              View Competition Schedule
            </a>
          </div>
        </div>

        {/* Vendor Setup Day (Day Before) */}
        <div className="mb-10 rounded-2xl border border-ribe-accent/30 bg-ribe-accent/10 p-6 text-center">
          <span className="inline-block rounded-full bg-ribe-accent px-3 py-1 text-xs font-bold uppercase text-ribe-primary">
            Vendor Setup — Saturday, October 3, 2026
          </span>
          <p className="mt-3 text-lg font-bold text-white">
            8:00 AM – 12:00 PM · Vendor Move-In &amp; Booth Setup
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-ribe-secondary/30 md:left-1/2 md:-translate-x-px" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {scheduleConfig.map((item, index) => (
              <div
                key={item.time}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-ribe-primary bg-ribe-accent md:left-1/2">
                  <div className="h-2 w-2 rounded-full bg-ribe-primary" />
                </div>

                {/* Content Card */}
                <div
                  className={`ml-12 flex-1 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"
                  } md:w-1/2`}
                >
                  <div className="rounded-xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm transition-all hover:bg-white/15">
                    <div className="mb-2 inline-block rounded-full bg-ribe-accent px-3 py-1 text-sm font-bold text-ribe-primary">
                      {item.time}
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {item.label}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
