"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PillLabel } from "@/components/ui/pill-label"

const faqItems = [
  {
    question: "Who can attend the Rhode Island Barber Expo?",
    answer:
      "The Rhode Island Barber Expo is open to everyone! Whether you're a licensed barber, stylist, student, industry professional, or simply a fan of the barber culture, you're welcome to attend. Different ticket options are available based on what you'd like to experience.",
  },
  {
    question: "Where is the event located?",
    answer:
      "The expo is held at Bally's Twin River Casino in Lincoln, Rhode Island. The venue offers ample parking, on-site hotel accommodations, and is conveniently located about 15-20 minutes from T.F. Green International Airport (PVD).",
  },
  {
    question: "How do the competitions work?",
    answer:
      "We offer five competition categories: Fast Fade, Traditional Haircut, Freestyle Design, Braiding, and Halloween (Costume + Haircut). Each category costs $100 to enter, or you can save with our 3-category bundle for $250. Competitions take place during the expo day, and winners are announced at 7:00 PM.",
  },
  {
    question: "Is there a hotel on-site?",
    answer:
      "Yes! Bally's Twin River Casino has on-site hotel accommodations. We recommend booking early to secure your room and enjoy the convenience of staying at the venue. Contact the hotel directly for room reservations and mention the Rhode Island Barber Expo.",
  },
  {
    question: "Can I be a vendor at the expo?",
    answer:
      "Absolutely! We welcome vendors selling barber products, apparel, tools and equipment, food and beverage, and more. Vendor spaces are limited to 50 booths, so we encourage early applications. Visit our vendor portal to submit your application and learn about booth details.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <PillLabel>FAQ</PillLabel>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase text-ribe-primary md:text-5xl">
            Questions & Answers
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="overflow-hidden rounded-xl border border-ribe-secondary/20 bg-ribe-primary/5 px-6"
            >
              <AccordionTrigger className="py-5 text-left text-lg font-bold text-ribe-primary hover:no-underline [&[data-state=open]>svg]:text-ribe-accent">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-ribe-gray">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
