"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { ArrowRight } from "lucide-react"
import type { VendorFormData } from "@/types/vendor"

const schema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  website: z.string().url().optional().or(z.literal("")),
  instagram: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

interface Step1Props {
  formData: VendorFormData
  updateFormData: (data: Partial<VendorFormData>) => void
  onNext: () => void
}

export function Step1BusinessInfo({ formData, updateFormData, onNext }: Step1Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      businessName: formData.businessName,
      contactName: formData.contactName,
      email: formData.email,
      phone: formData.phone,
      website: formData.website || "",
      instagram: formData.instagram || "",
    },
  })

  const onSubmit = (data: FormValues) => {
    updateFormData(data)
    onNext()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium text-ribe-primary">
          Business Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          {...register("businessName")}
          className="w-full rounded-lg border border-ribe-secondary/30 px-4 py-3 text-ribe-primary focus:border-ribe-accent focus:outline-none focus:ring-2 focus:ring-ribe-accent/20"
          placeholder="Your Business Name"
        />
        {errors.businessName && (
          <p className="mt-1 text-sm text-red-500">{errors.businessName.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-ribe-primary">
          Contact Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          {...register("contactName")}
          className="w-full rounded-lg border border-ribe-secondary/30 px-4 py-3 text-ribe-primary focus:border-ribe-accent focus:outline-none focus:ring-2 focus:ring-ribe-accent/20"
          placeholder="Full Name"
        />
        {errors.contactName && (
          <p className="mt-1 text-sm text-red-500">{errors.contactName.message}</p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-ribe-primary">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full rounded-lg border border-ribe-secondary/30 px-4 py-3 text-ribe-primary focus:border-ribe-accent focus:outline-none focus:ring-2 focus:ring-ribe-accent/20"
            placeholder="email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-ribe-primary">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            {...register("phone")}
            className="w-full rounded-lg border border-ribe-secondary/30 px-4 py-3 text-ribe-primary focus:border-ribe-accent focus:outline-none focus:ring-2 focus:ring-ribe-accent/20"
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-ribe-primary">
            Website <span className="text-ribe-gray">(optional)</span>
          </label>
          <input
            type="url"
            {...register("website")}
            className="w-full rounded-lg border border-ribe-secondary/30 px-4 py-3 text-ribe-primary focus:border-ribe-accent focus:outline-none focus:ring-2 focus:ring-ribe-accent/20"
            placeholder="https://yourwebsite.com"
          />
          {errors.website && (
            <p className="mt-1 text-sm text-red-500">{errors.website.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-ribe-primary">
            Instagram <span className="text-ribe-gray">(optional)</span>
          </label>
          <input
            type="text"
            {...register("instagram")}
            className="w-full rounded-lg border border-ribe-secondary/30 px-4 py-3 text-ribe-primary focus:border-ribe-accent focus:outline-none focus:ring-2 focus:ring-ribe-accent/20"
            placeholder="@yourbusiness"
          />
        </div>
      </div>

      <div className="flex justify-end pt-4">
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
