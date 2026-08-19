"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const KULTURE_LOGO =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/48A435C4-D290-41D5-B222-202C64DD95CD.PNG-a4h1YANnFWFk73ffV6oMp7T1iKw3qk.png"

const LEARN_MORE_URL = "https://m.shortstack.page/m6n7Fp"

export function KultureAwards() {
  return (
    <section id="kulture-awards" className="bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Image
            src={KULTURE_LOGO || "/placeholder.svg"}
            alt="The Kulture Awards — October 3, 2026"
            width={420}
            height={420}
            className="h-auto w-56 md:w-72"
          />

          {/* Tagline */}
          <h2 className="mt-8 font-display text-3xl font-bold uppercase tracking-tight text-[#e6b64c] text-balance md:text-4xl lg:text-5xl">
            Where Culture, Skill, and Community Collide
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 text-pretty">
            The Kulture Awards celebrate the barbers, stylists, and creatives
            shaping the industry — an unforgettable night of recognition,
            entertainment, and community on October 3, 2026.
          </p>

          {/* CTA */}
          <Link
            href={LEARN_MORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#e6b64c] px-10 py-4 text-lg font-bold text-black transition-all hover:scale-105 hover:bg-[#f0c869]"
          >
            Learn More
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
