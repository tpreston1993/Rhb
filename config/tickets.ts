export const ticketConfig = {
  general: {
    name: "General Admission",
    price: 30,
    access: [
      "Full Expo Floor Access",
      "Vendor Marketplace",
      "Live Competitions",
      "Main Stage Demonstrations",
      "Giveaways & Activations",
    ],
  },
  education: {
    name: "Education Pass",
    price: 70,
    access: [
      "Everything in General Admission",
      "Access to All Education Classes",
      "Live Q&A Sessions with Educators",
      "Educational Certificate (Optional)",
    ],
  },
  kulture: {
    name: "Kulture Awards",
    price: 40,
    access: [
      "Admission to the Kulture Awards",
      "Red Carpet Experience",
      "Live Entertainment",
      "Award Ceremony",
      "Networking Opportunities",
    ],
  },
  vip: {
    name: "VIP Experience",
    price: 120,
    access: [
      "Everything Included",
      "Full Expo Access",
      "All Education Classes",
      "Kulture Awards Admission",
      "VIP Check-In",
      "VIP Badge & Lanyard",
      "Exclusive VIP Swag Bag",
      "Premium Sponsor Products",
      "Priority Seating (when available)",
      "Exclusive VIP Giveaways",
    ],
  },
}

export type TicketType = keyof typeof ticketConfig
