"use client"

import Link from "next/link"
import { Store, Users, MapPin, ArrowRight } from "lucide-react"
import { vendorConfig } from "@/config/vendor"
import { PillLabel } from "@/components/ui/pill-label"

const vendorBenefits = [
  "Prime exposure to 1,000–1,500+ attendees",
  "Connect with industry professionals",
  "Build brand awareness",
  "Network with top barbers",
  "Showcase your products",
  "Generate leads and sales",
]

export function Vendors() {
  return (
    <section id="vendors" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <PillLabel>Vendors</PillLabel>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase text-ribe-primary md:text-5xl">
            Join Our Vendor Floor
          </h2>
          <p className="mt-4 text-lg text-ribe-gray">
            Be part of Rhode Island&apos;s premier barber expo
          </p>
        </div>

        {/* Stats */}
        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center rounded-xl border border-ribe-secondary/20 bg-gradient-to-br from-ribe-primary to-ribe-primary/90 p-6 text-center">
            <Store className="mb-3 h-10 w-10 text-ribe-accent" />
            <p className="text-4xl font-bold text-white">
              {vendorConfig.maxVendors}
            </p>
            <p className="text-white/70">Vendor Spaces</p>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-ribe-secondary/20 bg-gradient-to-br from-ribe-primary to-ribe-primary/90 p-6 text-center">
            <Users className="mb-3 h-10 w-10 text-ribe-accent" />
            <p className="text-4xl font-bold text-white">1,500+</p>
            <p className="text-white/70">Expected Attendees</p>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-ribe-secondary/20 bg-gradient-to-br from-ribe-primary to-ribe-primary/90 p-6 text-center">
            <MapPin className="mb-3 h-10 w-10 text-ribe-accent" />
            <p className="text-4xl font-bold text-white">10x10</p>
            <p className="text-white/70">Booth Size</p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-12 rounded-xl border border-ribe-secondary/20 bg-ribe-primary/5 p-8">
          <h3 className="mb-6 text-center text-xl font-bold text-ribe-primary">
            Why Become a Vendor?
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {vendorBenefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ribe-accent">
                  <svg
                    className="h-4 w-4 text-ribe-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-ribe-gray">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/#floor-plan"
            className="inline-flex items-center gap-2 rounded-full bg-ribe-primary px-10 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-ribe-primary/90"
          >
            Become a Vendor
            <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="mt-4 text-sm text-ribe-gray">
            Limited spaces available — Apply now to secure your booth
          </p>
        </div>
      </div>
    </section>
  )
}
