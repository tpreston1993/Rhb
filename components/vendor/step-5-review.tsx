"use client"

import { ArrowLeft, Send, Building, User, Mail, Phone, Globe, Instagram, FileText, LayoutGrid, Check } from "lucide-react"
import type { VendorFormData } from "@/types/vendor"

interface Step5Props {
  formData: VendorFormData
  onSubmit: () => void
  onBack: () => void
}

export function Step5Review({ formData, onSubmit, onBack }: Step5Props) {
  const selectedAddons = Object.entries(formData.addons)
    .filter(([, selected]) => selected)
    .map(([key]) => {
      const labels: Record<string, string> = {
        powerOutlet: "Power Outlet",
        tableRental: "Table Rental",
        extraChairs: "Extra Chairs",
      }
      return labels[key]
    })

  return (
    <div className="space-y-6">
      <p className="text-ribe-gray">
        Please review your application details before submitting.
      </p>

      {/* Business Info Section */}
      <div className="rounded-xl border border-ribe-secondary/20 bg-ribe-primary/5 p-5">
        <h3 className="mb-4 flex items-center gap-2 font-bold text-ribe-primary">
          <Building className="h-5 w-5" />
          Business Information
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-ribe-gray" />
            <span className="text-sm text-ribe-gray">Contact:</span>
            <span className="text-sm font-medium text-ribe-primary">
              {formData.contactName}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Building className="h-4 w-4 text-ribe-gray" />
            <span className="text-sm text-ribe-gray">Business:</span>
            <span className="text-sm font-medium text-ribe-primary">
              {formData.businessName}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-ribe-gray" />
            <span className="text-sm text-ribe-gray">Email:</span>
            <span className="text-sm font-medium text-ribe-primary">
              {formData.email}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-ribe-gray" />
            <span className="text-sm text-ribe-gray">Phone:</span>
            <span className="text-sm font-medium text-ribe-primary">
              {formData.phone}
            </span>
          </div>
          {formData.website && (
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-ribe-gray" />
              <span className="text-sm text-ribe-gray">Website:</span>
              <span className="text-sm font-medium text-ribe-primary">
                {formData.website}
              </span>
            </div>
          )}
          {formData.instagram && (
            <div className="flex items-center gap-2">
              <Instagram className="h-4 w-4 text-ribe-gray" />
              <span className="text-sm text-ribe-gray">Instagram:</span>
              <span className="text-sm font-medium text-ribe-primary">
                {formData.instagram}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Vendor Details Section */}
      <div className="rounded-xl border border-ribe-secondary/20 bg-ribe-primary/5 p-5">
        <h3 className="mb-4 flex items-center gap-2 font-bold text-ribe-primary">
          <FileText className="h-5 w-5" />
          Vendor Details
        </h3>
        <div className="space-y-3">
          <div>
            <span className="text-sm text-ribe-gray">Business Type:</span>
            <span className="ml-2 text-sm font-medium text-ribe-primary">
              {formData.businessType}
            </span>
          </div>
          <div>
            <span className="text-sm text-ribe-gray">Description:</span>
            <p className="mt-1 text-sm text-ribe-primary">{formData.description}</p>
          </div>
        </div>
      </div>

      {/* Booth Selection Section */}
      <div className="rounded-xl border border-ribe-secondary/20 bg-ribe-primary/5 p-5">
        <h3 className="mb-4 flex items-center gap-2 font-bold text-ribe-primary">
          <LayoutGrid className="h-5 w-5" />
          Booth Selection
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-sm text-ribe-gray">Booth Size:</span>
            <span className="text-sm font-medium text-ribe-primary">
              10x10 ft (Standard)
            </span>
          </div>
          {selectedAddons.length > 0 && (
            <div>
              <span className="text-sm text-ribe-gray">Add-ons:</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {selectedAddons.map((addon) => (
                  <span
                    key={addon}
                    className="inline-flex items-center gap-1 rounded-full bg-ribe-accent/20 px-3 py-1 text-sm font-medium text-ribe-primary"
                  >
                    <Check className="h-3 w-3" />
                    {addon}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Agreement Confirmation */}
      <div className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 p-4">
        <Check className="h-5 w-5 text-green-600" />
        <span className="text-sm text-green-700">
          You have agreed to the Vendor Terms & Conditions
        </span>
      </div>

      {/* Submit Buttons */}
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
          type="button"
          onClick={onSubmit}
          className="inline-flex items-center gap-2 rounded-full bg-ribe-accent px-8 py-3 font-bold text-ribe-primary transition-all hover:scale-105 hover:shadow-lg"
        >
          Submit Application
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
