import { Clock } from "lucide-react"
import { competitionScheduleConfig } from "@/config/competition-schedule"
import { PillLabel } from "@/components/ui/pill-label"

export function CompetitionSchedule() {
  return (
    <section id="competition-schedule" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <PillLabel>Competition Schedule — October 4</PillLabel>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase text-ribe-primary md:text-5xl">
            Competition Schedule
          </h2>
          <p className="mt-4 text-lg text-ribe-gray">
            The full lineup of live competitions on Expo Day
          </p>
        </div>

        {/* Schedule List */}
        <ol className="space-y-4">
          {competitionScheduleConfig.map((item) => (
            <li
              key={item.time}
              className="flex flex-col gap-3 rounded-xl border border-ribe-secondary/20 bg-ribe-primary/5 p-5 transition-all hover:border-ribe-accent hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ribe-primary text-white">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-ribe-primary">
                  {item.label}
                </h3>
              </div>
              <div className="flex items-center gap-3 pl-14 sm:pl-0">
                <span className="rounded-full bg-ribe-accent px-3 py-1 text-sm font-bold text-ribe-primary">
                  {item.time}
                </span>
                {item.duration && (
                  <span className="text-sm font-medium text-ribe-gray">
                    {item.duration}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
