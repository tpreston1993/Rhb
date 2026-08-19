export const scheduleConfig = [
  { time: "7:00 AM", label: "Vendor Setup" },
  { time: "9:00 AM", label: "Doors Open" },
  { time: "10:00 AM", label: "Education Segment #1" },
  { time: "11:15 AM", label: "Education Segment #2" },
  { time: "1:00 PM", label: "Opening Remarks" },
  { time: "1:15 PM", label: "Competitions Begin" },
  { time: "7:00 PM", label: "Winner Announcements" },
]

export type ScheduleItem = (typeof scheduleConfig)[number]
