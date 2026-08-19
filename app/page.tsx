import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Overview } from "@/components/sections/overview"
import { Tickets } from "@/components/sections/tickets"
import { Competitions } from "@/components/sections/competitions"
import { KultureAwards } from "@/components/sections/kulture-awards"
import { Education } from "@/components/sections/education"
import { Vendors } from "@/components/sections/vendors"
import { FloorPlan } from "@/components/sections/floor-plan"
import { Schedule } from "@/components/sections/schedule"
import { CompetitionSchedule } from "@/components/sections/competition-schedule"
import { Travel } from "@/components/sections/travel"
import { Media } from "@/components/sections/media"
import { Sponsors } from "@/components/sections/sponsors"
import { FAQ } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Overview />
      <Tickets />
      <Competitions />
      <KultureAwards />
      <Education />
      <Sponsors />
      <Vendors />
      <FloorPlan />
      <Schedule />
      <CompetitionSchedule />
      <Travel />
      <Media />
      <FAQ />
      <Footer />
    </main>
  )
}
