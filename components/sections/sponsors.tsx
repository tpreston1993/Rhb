import Image from "next/image"
import Link from "next/link"
import { Mail } from "lucide-react"
import { PillLabel } from "@/components/ui/pill-label"
import { eventConfig } from "@/config/event"

const sponsors = [
  {
    name: "Boppr",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boppr%20Primary%20Logo-02-ebytWM4K5Zhz4WNxBr5H7r0EB80bus.png",
    url: "https://boppr.com",
  },
  {
    name: "focalfuse",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c0de4e9a-8ecb-4eea-a24a-354d86ef8145.jpeg",
    url: null,
  },
  {
    name: "Bally's Twin River Lincoln",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1084.PNG-qq1WgRDZTyySEftNt9jTnrTVUIeOzU.png",
    url: null,
  },
  {
    name: "L3VEL3",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5585.PNG-dp4xhkOcFTfgAgkYdzSo6puGLEkytn.png",
    url: null,
  },
  {
    name: "Gold Label Inflatables",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5212.JPG-PCcI5Q9Sx7BDV5eOpoDGfamAeOetrc.jpeg",
    url: null,
  },
  {
    name: "Hope Cutz",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000010834-KGm3iRQWKdDa5Wk4YR7wA5nxzYKOwj.jpg",
    url: null,
  },
  {
    name: "Gibbs Screenprinting",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0812-hdhUWSQw1pbBUYSRrWbGvhEb7OerHL.jpg",
    url: null,
  },
  {
    name: "Only Braids RI",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0401.PNG-gsoOx9SwUvBb3kGF9bAkkMPZ80dg6u.jpeg",
    url: null,
  },
  {
    name: "Mariana Giraldo Barber Supplies",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bf9d0ddb-298d-4ddf-a3f7-ca873b895d9b-ZNpHkbkklptXlFKOwqDh9jAfm9s8bY.jpeg",
    url: null,
  },
  {
    name: "D'Mayra Beauty Supply",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000079662-ciZHKYzF7lWfI4GWVM4mEM6azQligj.png",
    url: "https://dmayrasupply.com",
  },
  {
    name: "Shear Excellence Sharpening",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4486.PNG-5cIrW4xay4bkA4c6IxuGFJa0irpU1x.png",
    url: null,
  },
  {
    name: "Barbershop Love",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3246.PNG-7BVW7TMcUPuR8iC9CLkYqxRnYWGI6v.jpeg",
    url: null,
  },
]

export function Sponsors() {
  return (
    <section id="sponsors" className="rounded-[68px] bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <PillLabel>Partners</PillLabel>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase text-ribe-primary md:text-5xl">
            Our Sponsors
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ribe-gray">
            Thank you to our amazing sponsors who help make RIBE possible
          </p>
        </div>

        {/* Sponsor Logos */}
        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {sponsors.map((sponsor) => {
            const card = (
              <div
                className={`flex h-32 items-center justify-center rounded-2xl border p-6 transition-all group-hover:scale-105 group-hover:shadow-lg ${
                  sponsor.dark
                    ? "border-ribe-primary/20 bg-ribe-primary group-hover:border-ribe-primary/40"
                    : "border-ribe-primary/10 bg-ribe-primary/5 group-hover:border-ribe-primary/20"
                }`}
              >
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  width={220}
                  height={110}
                  className="max-h-full w-auto object-contain"
                />
              </div>
            )

            return sponsor.url ? (
              <Link
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label={sponsor.name}
              >
                {card}
              </Link>
            ) : (
              <div key={sponsor.name} className="group">
                {card}
              </div>
            )
          })}
        </div>

        {/* Become a Sponsor CTA */}
        <div className="text-center">
          <p className="mb-4 text-ribe-gray">
            Interested in partnering with Rhode Island Barber Expo?
          </p>
          <Link
            href={`mailto:${eventConfig.email}?subject=Sponsor`}
            className="inline-flex items-center gap-2 rounded-full border-2 border-ribe-primary bg-transparent px-8 py-3 font-bold text-ribe-primary transition-all hover:bg-ribe-primary hover:text-white"
          >
            <Mail className="h-5 w-5" />
            Become a Sponsor
          </Link>
        </div>
      </div>
    </section>
  )
}
