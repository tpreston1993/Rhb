"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail } from "lucide-react"
import { eventConfig } from "@/config/event"

export function Footer() {
  return (
    <footer className="bg-ribe-primary py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RIBE%20Wordmark-05-snoEmEHNCn26O6tLJptQYSxT7Qx136.png"
            alt="Rhode Island Barber Expo"
            width={250}
            height={60}
            className="mb-4 h-14 w-auto"
          />

          {/* Tagline */}
          <p className="mb-8 font-serif text-lg text-ribe-secondary">
            {eventConfig.tagline}
          </p>

          {/* Social & Contact Links */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`https://instagram.com/${eventConfig.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-white transition-all hover:bg-ribe-accent hover:text-ribe-primary"
            >
              <Instagram className="h-5 w-5" />
              <span className="font-medium">{eventConfig.instagram}</span>
            </Link>
            <Link
              href={`mailto:${eventConfig.email}`}
              className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-white transition-all hover:bg-ribe-accent hover:text-ribe-primary"
            >
              <Mail className="h-5 w-5" />
              <span className="font-medium">{eventConfig.email}</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mb-8 flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="#overview"
              className="text-white/70 transition-colors hover:text-white"
            >
              Overview
            </Link>
            <Link
              href="#tickets"
              className="text-white/70 transition-colors hover:text-white"
            >
              Tickets
            </Link>
            <Link
              href="#competitions"
              className="text-white/70 transition-colors hover:text-white"
            >
              Competitions
            </Link>
            <Link
              href="#floor-plan"
              className="text-white/70 transition-colors hover:text-white"
            >
              Vendors
            </Link>
            <Link
              href="#faq"
              className="text-white/70 transition-colors hover:text-white"
            >
              FAQ
            </Link>
          </div>

          {/* Divider */}
          <div className="mb-6 h-px w-full max-w-md bg-white/10" />

          {/* Copyright */}
          <p className="text-sm text-white/50">
            &copy; 2026 Rhode Island Barber Expo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
