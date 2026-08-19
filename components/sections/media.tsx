"use client"

import { useState } from "react"
import Image from "next/image"
import { Instagram, X } from "lucide-react"
import Link from "next/link"
import { eventConfig } from "@/config/event"
import { PillLabel } from "@/components/ui/pill-label"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RIBE%281of24%29-zZ1VM7RT13YDEw8lq0drswDasAa0UF.jpg",
    alt: "Host speaking on stage at Rhode Island Barber Expo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RIBEhair%2825of35%29-r21a8mGvYtuAcqvPSwxP0GwufB5Gjb.jpg",
    alt: "Barbers competing in haircut competition on stage",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RIBEs%26r%28174of175%29-bUMVj8uFljzHnMO100jeRXRUAnQZkK.jpg",
    alt: "Competition winners holding trophies at Rhode Island Barber Expo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RIBEcrowds%286of18%29-7y1MVjY6lnToaBOpvBaWYplVkDZFW7.jpg",
    alt: "Packed crowd watching the stage at Rhode Island Barber Expo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RIBEhair%2817of35%29-dY7umxkvTUFQz8ZGvpgkm5gjyCvXKN.jpg",
    alt: "Barber working on client during competition",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RIBEcrowds%288of18%29-W0FjP7Xu7kapcWrGaOtPAWrXOel7mO.jpg",
    alt: "Busy expo floor with vendors and attendees",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RIBEvendors%289of18%29-KE94eNwldcJfJv4vwwzFvGgv9Pq0SI.jpg",
    alt: "Vendors posing at their booth at Rhode Island Barber Expo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RIBEvendors%2810of18%29-m8XWky8kqw9BbuJCP6MdMCpkwEA61F.jpg",
    alt: "Vendor demonstrating products at HEVIE booth",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RIBEs%26r%28164of175%29-mlzC4VsijboQnYhrYVQxLl4sq4VrrS.jpg",
    alt: "Attendees posing at step and repeat backdrop",
  },
]

export function Media() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
  }

  return (
    <section id="media" className="bg-ribe-primary/5 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <PillLabel>Media</PillLabel>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase text-ribe-primary md:text-5xl">
            Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ribe-gray">
            Highlights from 2025 Rhode Island Barber Expo
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-xl bg-ribe-primary/10"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ribe-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={() => setCurrentImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
              className="absolute left-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              aria-label="Previous image"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 md:right-4"
              style={{ right: "4rem" }}
              aria-label="Next image"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div className="relative h-[80vh] w-full max-w-4xl">
              <Image
                src={galleryImages[currentImage].src}
                alt={galleryImages[currentImage].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        )}

        {/* Instagram CTA */}
        <div className="rounded-xl border border-ribe-secondary/20 bg-white p-8 text-center shadow-md">
          <Instagram className="mx-auto mb-4 h-12 w-12 text-ribe-accent" />
          <h3 className="mb-2 text-xl font-bold text-ribe-primary">
            Follow Us on Instagram
          </h3>
          <p className="mb-6 text-ribe-gray">
            Stay updated with the latest news, sneak peeks, and event highlights
          </p>
          <Link
            href={`https://instagram.com/${eventConfig.instagram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 px-8 py-3 font-bold text-white transition-all hover:scale-105"
          >
            <Instagram className="h-5 w-5" />
            {eventConfig.instagram}
          </Link>
        </div>
      </div>
    </section>
  )
}
