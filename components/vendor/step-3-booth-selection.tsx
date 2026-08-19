"use client"

import { ArrowRight, ArrowLeft, Check, Zap, Table2, Armchair } from "lucide-react"
import type { VendorFormData } from "@/types/vendor"

interface Step3Props {
  formData: VendorFormData
  updateFormData: (data: Partial<VendorFormData>) => void
  onNext: () => void
  onBack: () => void
}

const addons = [
  {
    id: "powerOutlet",
    name: "Power Outlet",
    description: "Dedicated power for your booth",
    icon: Zap,
  },
  {
    id: "tableRental",
    name: "Table Rental",
    description: "6ft table for display",
    icon: Table2,
  },
  {
    id: "extraChairs",
    name: "Extra Chairs",
    description: "2 additional chairs",
    icon: Armchair,
  },
] as const

export function Step3BoothSelection({ formData, updateFormData, onNext, onBack }: Step3Props) {
  const toggleAddon = (addonId: keyof VendorFormData["addons"]) => {
    updateFormData({
      addons: {
        ...formData.addons,
        [addonId]: !formData.addons[addonId],
      },
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Booth Size */}
      <div>
        <label className="mb-4 block text-sm font-medium text-ribe-primary">
          Booth Size
        </label>
        <div className="rounded-xl border-2 border-ribe-accent bg-ribe-accent/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-ribe-primary">10x10 Booth</h3>
              <p className="text-ribe-gray">Standard vendor booth space</p>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ribe-accent">
              <Check className="h-5 w-5 text-ribe-primary" />
            </div>
          </div>
        </div>
        <p className="mt-2 text-sm text-ribe-gray">
          All vendors receive a 10x10 ft booth space
        </p>
      </div>

      {/* Add-ons */}
      <div>
        <label className="mb-4 block text-sm font-medium text-ribe-primary">
          Booth Add-ons <span className="text-ribe-gray">(optional)</span>
        </label>
        <div className="space-y-3">
          {addons.map((addon) => {
            const Icon = addon.icon
            const isSelected = formData.addons[addon.id]
            return (
              <button
                key={addon.id}
                type="button"
                onClick={() => toggleAddon(addon.id)}
                className={`flex w-full items-center gap-4 rounded-xl border-2 p-4 text-left transition-all ${
                  isSelected
                    ? "border-ribe-accent bg-ribe-accent/10"
                    : "border-ribe-secondary/30 hover:border-ribe-secondary"
                }`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                    isSelected ? "bg-ribe-accent" : "bg-ribe-secondary/20"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${isSelected ? "text-ribe-primary" : "text-ribe-gray"}`}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-ribe-primary">{addon.name}</h4>
                  <p className="text-sm text-ribe-gray">{addon.description}</p>
                </div>
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                    isSelected ? "border-ribe-accent bg-ribe-accent" : "border-ribe-secondary/30"
                  }`}
                >
                  {isSelected && <Check className="h-4 w-4 text-ribe-primary" />}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-ribe-secondary/30 px-8 py-3 font-bold text-ribe-primary transition-all hover:bg-ribe-primary/5"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-ribe-primary px-8 py-3 font-bold text-white transition-all hover:bg-ribe-primary/90"
        >
          Continue
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  )
}
