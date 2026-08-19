"use client"

import { useState } from "react"
import { ArrowRight, ArrowLeft, ScrollText } from "lucide-react"
import type { VendorFormData } from "@/types/vendor"

interface Step4Props {
  formData: VendorFormData
  updateFormData: (data: Partial<VendorFormData>) => void
  onNext: () => void
  onBack: () => void
}

const termsContent = `
RHODE ISLAND BARBER EXPO 2026 - VENDOR AGREEMENT

1. BOOTH ASSIGNMENT
Vendor booth assignments are at the discretion of Rhode Island Barber Expo organizers. While we will make every effort to accommodate location preferences, we cannot guarantee specific booth locations.

2. SETUP AND BREAKDOWN
- Setup begins at 7:00 AM on October 4, 2026
- All booths must be ready by 9:00 AM when doors open
- Breakdown may not begin until 7:00 PM after winner announcements
- Vendors must vacate the premises by 10:00 PM

3. PRODUCTS AND SERVICES
Vendors may only sell products and services as described in their application. Any changes must be approved in writing by event organizers.

4. CONDUCT
All vendors and their representatives must conduct themselves professionally. Harassment, discrimination, or disruptive behavior will not be tolerated and may result in immediate removal without refund.

5. LIABILITY
Rhode Island Barber Expo is not responsible for loss, theft, or damage to vendor property. Vendors are encouraged to maintain their own insurance coverage.

6. CANCELLATION POLICY
- Cancellations 60+ days before event: Full refund minus $50 processing fee
- Cancellations 30-59 days before event: 50% refund
- Cancellations less than 30 days before event: No refund

7. PAYMENT
Full payment is required to confirm your booth. Payment links will be sent upon application approval.

8. AGREEMENT
By checking the box below, you acknowledge that you have read, understood, and agree to abide by these terms and conditions.
`

export function Step4Agreement({ formData, updateFormData, onNext, onBack }: Step4Props) {
  const [showTerms, setShowTerms] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.agreedToTerms) {
      setError("You must agree to the terms and conditions to continue")
      return
    }
    onNext()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Terms Preview */}
      <div className="rounded-xl border border-ribe-secondary/20 bg-ribe-primary/5 p-6">
        <div className="mb-4 flex items-center gap-3">
          <ScrollText className="h-6 w-6 text-ribe-primary" />
          <h3 className="text-lg font-bold text-ribe-primary">
            Vendor Terms & Conditions
          </h3>
        </div>
        <p className="mb-4 text-sm text-ribe-gray">
          Please review and accept our vendor agreement before proceeding.
        </p>
        <button
          type="button"
          onClick={() => setShowTerms(true)}
          className="text-sm font-medium text-ribe-secondary underline hover:text-ribe-primary"
        >
          Read Full Terms & Conditions
        </button>
      </div>

      {/* Terms Modal */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[80vh] w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-xl">
            <div className="border-b border-ribe-secondary/20 p-4">
              <h3 className="text-lg font-bold text-ribe-primary">
                Vendor Terms & Conditions
              </h3>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-6">
              <pre className="whitespace-pre-wrap font-sans text-sm text-ribe-gray">
                {termsContent}
              </pre>
            </div>
            <div className="border-t border-ribe-secondary/20 p-4">
              <button
                type="button"
                onClick={() => setShowTerms(false)}
                className="w-full rounded-full bg-ribe-primary py-3 font-bold text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Agreement Checkbox */}
      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={formData.agreedToTerms}
            onChange={(e) => {
              updateFormData({ agreedToTerms: e.target.checked })
              setError("")
            }}
            className="mt-1 h-5 w-5 rounded border-ribe-secondary/30 text-ribe-accent focus:ring-ribe-accent"
          />
          <span className="text-sm text-ribe-gray">
            I have read and agree to the{" "}
            <button
              type="button"
              onClick={() => setShowTerms(true)}
              className="font-medium text-ribe-primary underline"
            >
              Vendor Terms & Conditions
            </button>
          </span>
        </label>
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
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
