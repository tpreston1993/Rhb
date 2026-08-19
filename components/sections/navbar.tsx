"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const homeNavLinks = [
  { href: "/#overview", label: "Overview" },
  { href: "/#tickets", label: "Tickets" },
  { href: "/#competitions", label: "Competitions" },
  { href: "/#competition-schedule", label: "Competition Schedule" },
  { href: "/#kulture-awards", label: "Kulture Awards" },
  { href: "/#education", label: "Education" },
  { href: "/#vendors", label: "Vendors" },
  { href: "/#schedule", label: "Schedule" },
  { href: "/#faq", label: "FAQ" },
]

interface NavbarProps {
  variant?: "transparent" | "solid"
}

export function Navbar({ variant = "transparent" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const showSolidBg = variant === "solid" || isScrolled

  return (
    <>
      <nav
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          showSolidBg
            ? "bg-ribe-primary py-3 shadow-lg"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RIBE%20Wordmark-05-snoEmEHNCn26O6tLJptQYSxT7Qx136.png"
              alt="Rhode Island Barber Expo"
              width={200}
              height={50}
              className="h-10 w-auto md:h-12"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex">
            {homeNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white transition-colors hover:text-ribe-accent"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#floor-plan"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname.startsWith("/vendor")
                  ? "text-ribe-accent"
                  : "text-white hover:text-ribe-accent"
              )}
            >
              Become a Vendor
            </Link>
            <Link
              href="/#tickets"
              className="rounded-full bg-ribe-accent px-6 py-2.5 text-sm font-bold text-ribe-primary transition-all hover:scale-105 hover:shadow-lg"
            >
              Buy Tickets
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50 text-white lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden",
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed right-0 top-0 z-40 h-full w-[280px] transform bg-ribe-primary shadow-xl transition-transform duration-300 lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col pt-20">
          <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
            {homeNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-white transition-colors hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 border-t border-white/10" />
            <Link
              href="/#floor-plan"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "rounded-lg px-4 py-3 transition-colors",
                pathname.startsWith("/vendor")
                  ? "bg-white/10 text-ribe-accent"
                  : "text-white hover:bg-white/10"
              )}
            >
              Become a Vendor
            </Link>
            <div className="mt-4">
              <Link
                href="/#tickets"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-full bg-ribe-accent px-6 py-3 text-center font-bold text-ribe-primary"
              >
                Buy Tickets
              </Link>
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="border-t border-white/10 p-4">
            <p className="text-center text-sm text-white/60">
              Rhode Island Barber Expo 2026
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
