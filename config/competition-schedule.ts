export const competitionScheduleConfig = [
  {
    time: "1:20 PM – 2:05 PM",
    label: "Fade & Beard Competition",
    duration: "45 Minutes",
  },
  {
    time: "2:30 PM – 3:30 PM",
    label: "Braiding Competition",
    duration: "60 Minutes",
  },
  {
    time: "3:45 PM – 4:00 PM",
    label: "2 in 15 Competition",
    duration: "15 Minutes",
  },
  {
    time: "4:20 PM – 4:35 PM",
    label: "Fast Fade Competition",
    duration: "15 Minutes",
  },
  {
    time: "5:00 PM – 6:00 PM",
    label: "Freestyle Design Competition",
    duration: "60 Minutes",
  },
  {
    time: "6:20 PM – 7:20 PM",
    label: "Halloween Transformation Competition",
    duration: "60 Minutes",
  },
  {
    time: "7:20 PM – 7:45 PM",
    label: "Final Judge Deliberation",
    duration: null,
  },
  {
    time: "7:45 PM",
    label: "Winner Announcements, Awards Ceremony & Closing",
    duration: null,
  },
]

export type CompetitionScheduleItem = (typeof competitionScheduleConfig)[number]
