"use client"

import { GraduationCap, Clock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import { PillLabel } from "@/components/ui/pill-label"

const educationSegments = [
  {
    id: 1,
    title: "Education Segment #1",
    time: "10:00 AM - 11:00 AM",
    description:
      "Learn cutting-edge techniques from industry leaders. Master the latest trends in fades, textures, and styling.",
    topics: ["Advanced Fading", "Texture Work", "Client Consultation"],
  },
  {
    id: 2,
    title: "Education Segment #2",
    time: "11:15 AM - 12:15 PM",
    description:
      "Business strategies and brand building for modern barbers. Grow your clientele and maximize your income.",
    topics: ["Social Media Marketing", "Brand Building", "Pricing Strategies"],
  },
]

export function Education() {
  return (
    <section id="education" className="bg-ribe-primary/5 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <PillLabel>Education</PillLabel>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase text-ribe-primary md:text-5xl">
            Learn From The Best
          </h2>
          <p className="mt-4 text-lg text-ribe-gray">
            Industry leaders sharing knowledge and expertise
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-8 rounded-xl bg-ribe-primary p-6">
          <div className="flex items-center gap-3 text-white">
            <GraduationCap className="h-8 w-8 text-ribe-accent" />
            <span className="text-lg font-medium">Industry Leaders</span>
          </div>
          <div className="hidden h-8 w-px bg-white/20 sm:block" />
          <div className="flex items-center gap-3 text-white">
            <Clock className="h-8 w-8 text-ribe-accent" />
            <span className="text-lg font-medium">2 Exclusive Segments</span>
          </div>
          <div className="hidden h-8 w-px bg-white/20 sm:block" />
          <div className="flex items-center gap-3 text-white">
            <Users className="h-8 w-8 text-ribe-accent" />
            <span className="text-lg font-medium">Interactive Sessions</span>
          </div>
        </div>

        {/* Education Cards */}
        <div className="mb-10 grid gap-6 md:grid-cols-2">
          {educationSegments.map((segment) => (
            <div
              key={segment.id}
              className="overflow-hidden rounded-xl border border-ribe-secondary/20 bg-white shadow-md transition-all hover:shadow-lg"
            >
              {/* Card Header */}
              <div className="bg-ribe-secondary/10 p-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-ribe-accent px-3 py-1 text-sm font-bold text-ribe-primary">
                    Segment {segment.id}
                  </span>
                  <span className="text-sm font-medium text-ribe-gray">
                    {segment.time}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-ribe-primary">
                  {segment.title}
                </h3>
                <p className="mb-4 text-ribe-gray">{segment.description}</p>
                <div className="flex flex-wrap gap-2">
                  {segment.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full bg-ribe-primary/10 px-3 py-1 text-sm font-medium text-ribe-primary"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="https://www.eventbrite.com/e/rhode-island-barber-expo-tickets-1987287770217?aff=oddtdtcreator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ribe-accent px-8 py-4 text-lg font-bold text-ribe-primary transition-all hover:scale-105"
          >
            Upgrade to Full Experience
            <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="mt-4 text-sm text-ribe-gray">
            Education segments included with Full Experience ticket
          </p>
        </div>
      </div>
    </section>
  )
}
