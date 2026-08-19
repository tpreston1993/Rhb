export const competitionConfig = {
  pricePerCategory: 100,
  bundlePrice: 250,
  bundleCount: 3,
  categories: [
    {
      id: "fast-fade",
      name: "Fast Fade",
      description: "Speed and precision in fading techniques",
    },
    {
      id: "traditional",
      name: "Traditional Haircut",
      description: "Classic barbering skills and techniques",
    },
    {
      id: "freestyle",
      name: "Freestyle Design",
      description: "Creative hair artistry and design",
    },
    {
      id: "braiding",
      name: "Braiding",
      description: "Intricate braiding styles and patterns",
    },
    {
      id: "halloween",
      name: "Halloween",
      description: "Costume + Haircut combination",
    },
  ],
}

export type CompetitionCategory = (typeof competitionConfig.categories)[number]
