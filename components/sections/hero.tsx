"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { eventConfig } from "@/config/event"

const VIDEO_URL = "https://ad3o2fzj62ucafkc.public.blob.vercel-storage.com/Rhode%20island%20barber%20expo%20hero%20%202.mp4"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(false)

  const attemptPlay = async () => {
    const video = videoRef.current
    if (!video) return

    try {
      video.muted = true
      await video.play()
      setIsPlaying(true)
      setShowPlayButton(false)
      console.log("[v0] Video playing successfully")
    } catch (error) {
      console.log("[v0] Autoplay failed, showing play button", error)
      setShowPlayButton(true)
    }
  }

  const handleManualPlay = () => {
    const video = videoRef.current
    if (video) {
      video.muted = true
      video.play().then(() => {
        setIsPlaying(true)
        setShowPlayButton(false)
      }).catch(console.error)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Set required attributes for mobile autoplay
    video.muted = true
    video.playsInline = true
    video.setAttribute('muted', '')
    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', 'true')

    // Try to play when video can play
    const handleCanPlay = () => {
      console.log("[v0] Video can play, attempting autoplay")
      attemptPlay()
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadedmetadata', handleCanPlay)

    // Also try immediately if video is already ready
    if (video.readyState >= 3) {
      attemptPlay()
    }

    // Intersection Observer - play when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isPlaying) {
            attemptPlay()
          }
        })
      },
      { threshold: 0.5 }
    )
    observer.observe(video)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadedmetadata', handleCanPlay)
      observer.disconnect()
    }
  }, [isPlaying])

  return (
    <section className="relative h-[85vh] overflow-hidden lg:h-screen">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        // @ts-expect-error - webkit-playsinline is needed for older iOS
        webkit-playsinline="true"
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover object-center"
        src={VIDEO_URL}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Play Button Fallback for Mobile */}
      {showPlayButton && (
        <button
          onClick={handleManualPlay}
          className="absolute inset-0 z-20 flex items-center justify-center bg-black/50"
          aria-label="Play video"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform hover:scale-110">
            <Play className="h-10 w-10 text-white" fill="white" />
          </div>
        </button>
      )}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Emblem Logo */}
        <div className="mb-6 flex justify-center md:mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RIBE%20Primary%20Emblem%20Logo-9sux7HmAtqnnSP1FwQ21GtBHwTBTIr.png"
            alt="Rhode Island Barber Expo Emblem"
            width={200}
            height={200}
            className="h-32 w-32 md:h-44 md:w-44 lg:h-52 lg:w-52 mt-[150px]"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="mb-4 font-display text-4xl font-bold uppercase tracking-tight text-white drop-shadow-lg md:mb-6 md:text-6xl lg:text-7xl xl:text-8xl">
          Rhode Island Barber Expo
        </h1>

        {/* Subheadline - Date */}
        <p className="mb-4 text-xl font-medium text-white drop-shadow-md md:mb-6 md:text-2xl lg:text-3xl">
          October 3-4, 2026
        </p>

        {/* Location */}
        <p className="mb-8 text-base text-white/90 drop-shadow-sm md:mb-10 md:text-lg">
          {eventConfig.location}
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://www.eventbrite.com/e/rhode-island-barber-expo-tickets-1987287770217?aff=oddtdtcreator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-ribe-accent px-8 py-4 text-lg font-bold text-ribe-primary shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            Get Tickets
          </Link>
          <Link
            href="#competitions"
            className="inline-flex min-w-[200px] items-center justify-center rounded-full border-2 border-white bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-ribe-primary"
          >
            Enter Competition
          </Link>
          <Link
            href="https://twinriver.book.pegsbe.com/promo?offerCode=RIBE&hotel=TWCRI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[200px] items-center justify-center rounded-full border-2 border-white bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-ribe-primary"
          >
            Book Your Hotel
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce md:bottom-8">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/60 p-1">
          <div className="h-2 w-1 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  )
}
