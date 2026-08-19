export interface VendorFormData {
  // Step 1: Business Info
  businessName: string
  contactName: string
  email: string
  phone: string
  website?: string
  instagram?: string

  // Step 2: Vendor Details
  businessType: string
  description: string
  logoFile?: File
  productImages?: File[]

  // Step 3: Booth Selection
  boothSize: string
  addons: {
    powerOutlet: boolean
    tableRental: boolean
    extraChairs: boolean
  }

  // Step 4: Agreement
  agreedToTerms: boolean
}

export const businessTypes = [
  "Barber Products",
  "Apparel",
  "Tools & Equipment",
  "Food & Beverage",
  "Other",
] as const

export type BusinessType = (typeof businessTypes)[number]

export type VendorStatus = "pending" | "approved" | "rejected" | "paid"

export interface Vendor extends VendorFormData {
  id: string
  logoUrl?: string
  productImageUrls?: string[]
  status: VendorStatus
  stripePaymentLink?: string
  createdAt: string
}
