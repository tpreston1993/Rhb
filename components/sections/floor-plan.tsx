"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, X, Zap, Info } from "lucide-react"
import { PillLabel } from "@/components/ui/pill-label"

const FLOOR_PLAN_IMAGE = "/floor-plan-2026.png"

const boothOptions = [
  {
    id: "standard",
    title: "10x10 Booth",
    badge: "Early Bird",
    badgeColor: "bg-ribe-accent text-ribe-primary",
    price: "$500",
    regularPrice: "Regular — $699",
    features: [
      "Pipe & Drape Included",
      "1 Table Included",
      "2 Chairs Included",
      "Prime Networking Opportunity",
    ],
    buttonText: "Buy 10x10 Booth",
    buttonLink: "https://buy.stripe.com/bJecN67SfglsdA8biqg3600",
    buttonStyle: "bg-ribe-primary text-white hover:bg-ribe-primary/90",
  },
  {
    id: "premium",
    title: "10x20 Premium Booth",
    badge: "Premium Vendor",
    badgeColor: "bg-ribe-secondary text-white",
    price: "$999",
    regularPrice: "Regular — $1,199",
    features: [
      "Pipe & Drape Included",
      "1 Table Included",
      "2 Chairs Included",
      "Larger Premium Placement",
      "Increased Brand Visibility",
    ],
    buttonText: "Buy 10x20 Premium Booth",
    buttonLink: "https://buy.stripe.com/fZudRab4rglsbs04U2g3601",
    buttonStyle: "bg-ribe-accent text-ribe-primary hover:bg-ribe-accent/90",
  },
]

export function FloorPlan() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="floor-plan"
      className="bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <PillLabel>Vendor Floor Plan</PillLabel>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase text-ribe-primary md:text-5xl">
            2026 Floor Plan
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-ribe-gray">
            Explore the official 2026 Rhode Island Barber Expo vendor layout and secure your booth before spots sell out.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left - Floor Plan Image */}
          <div
            className={`transition-all delay-200 duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <button
              onClick={() => setLightboxOpen(true)}
              className="group relative block w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <Image
                src={FLOOR_PLAN_IMAGE}
                alt="Rhode Island Barber Expo 2026 Floor Plan showing booth layouts, stage area, and vendor spaces"
                width={800}
                height={1000}
                className="w-full transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ribe-primary/0 transition-all duration-300 group-hover:bg-ribe-primary/20">
                <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-ribe-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Click to Enlarge
                </span>
              </div>
            </button>
          </div>

          {/* Right - Pricing Cards */}
          <div
            className={`flex flex-col gap-6 transition-all delay-300 duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {boothOptions.map((booth) => (
              <div
                key={booth.id}
                className="group rounded-2xl border border-ribe-primary/10 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Badge */}
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase ${booth.badgeColor}`}
                >
                  {booth.badge}
                </span>

                {/* Title & Price */}
                <h3 className="mt-4 font-display text-2xl font-bold text-ribe-primary">
                  {booth.title}
                </h3>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="font-display text-4xl font-bold text-ribe-accent">
                    {booth.price}
                  </span>
                  <span className="text-sm text-ribe-gray">
                    {booth.regularPrice}
                  </span>
                </div>

                {/* Features */}
                <ul className="mt-4 space-y-2">
                  {booth.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-ribe-gray">
                      <Check className="h-4 w-4 flex-shrink-0 text-ribe-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={booth.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 block w-full rounded-full py-3 text-center font-bold transition-all duration-300 hover:scale-[1.02] ${booth.buttonStyle}`}
                >
                  {booth.buttonText}
                </Link>
              </div>
            ))}

            {/* Info Box */}
            <div className="flex items-start gap-3 rounded-xl bg-ribe-primary/5 p-4">
              <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-ribe-primary" />
              <p className="text-sm text-ribe-gray">
                <strong className="text-ribe-primary">All booth purchases include</strong> Pipe & Drape, one table, and two chairs.
              </p>
            </div>

            {/* Add-on */}
            <div className="flex items-center justify-between rounded-xl border border-ribe-accent/30 bg-ribe-accent/10 p-4">
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-ribe-accent" />
                <span className="font-semibold text-ribe-primary">Electric (Power) Add-On</span>
              </div>
              <span className="font-bold text-ribe-accent">+$100</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-h-[90vh] max-w-4xl overflow-auto">
            <Image
              src={FLOOR_PLAN_IMAGE}
              alt="Rhode Island Barber Expo 2026 Floor Plan"
              width={1200}
              height={1500}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}
