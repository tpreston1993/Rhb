"use client"

import { Hotel, Plane, Car, ParkingCircle } from "lucide-react"
import { PillLabel } from "@/components/ui/pill-label"

const travelInfo = [
  {
    icon: Hotel,
    title: "Hotel",
    description: "Bally's Twin River Casino",
    detail: "Stay on-site for maximum convenience",
  },
  {
    icon: Plane,
    title: "Airport",
    description: "T.F. Green International (PVD)",
    detail: "15–20 min drive to venue",
  },
  {
    icon: Car,
    title: "Rideshare",
    description: "Uber & Lyft Available",
    detail: "Easy pickup from airport & downtown",
  },
  {
    icon: ParkingCircle,
    title: "Parking",
    description: "Free On-Site Parking",
    detail: "Ample parking at the casino",
  },
]

export function Travel() {
  return (
    <section id="travel" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <PillLabel>Travel</PillLabel>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase text-ribe-primary md:text-5xl">
            Getting Here
          </h2>
          <p className="mt-4 text-lg text-ribe-gray">
            Conveniently located at Bally&apos;s Twin River Casino in Lincoln, Rhode Island
          </p>
        </div>

        {/* Travel Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {travelInfo.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group rounded-xl border border-ribe-secondary/20 bg-gradient-to-br from-ribe-primary/5 to-transparent p-6 transition-all hover:border-ribe-accent hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-ribe-primary text-white transition-all group-hover:bg-ribe-accent group-hover:text-ribe-primary">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-1 text-lg font-bold text-ribe-primary">
                  {item.title}
                </h3>
                <p className="mb-1 font-medium text-ribe-secondary">
                  {item.description}
                </p>
                <p className="text-sm text-ribe-gray">{item.detail}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
