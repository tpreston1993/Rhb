"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { ArrowRight, ArrowLeft } from "lucide-react"
import type { VendorFormData } from "@/types/vendor"
import { businessTypes } from "@/types/vendor"

const schema = z.object({
  businessType: z.string().min(1, "Please select a business type"),
  description: z.string().min(20, "Description must be at least 20 characters"),
})

type FormValues = z.infer<typeof schema>

interface Step2Props {
  formData: VendorFormData
  updateFormData: (data: Partial<VendorFormData>) => void
  onNext: () => void
  onBack: () => void
}

export function Step2VendorDetails({ formData, updateFormData, onNext, onBack }: Step2Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      businessType: formData.businessType,
      description: formData.description,
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
          Business Type <span className="text-red-500">*</span>
        </label>
        <select
          {...register("businessType")}
          className="w-full rounded-lg border border-ribe-secondary/30 px-4 py-3 text-ribe-primary focus:border-ribe-accent focus:outline-none focus:ring-2 focus:ring-ribe-accent/20"
        >
          <option value="">Select a category</option>
          {businessTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.businessType && (
          <p className="mt-1 text-sm text-red-500">{errors.businessType.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-ribe-primary">
          Business Description <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("description")}
          rows={4}
          className="w-full rounded-lg border border-ribe-secondary/30 px-4 py-3 text-ribe-primary focus:border-ribe-accent focus:outline-none focus:ring-2 focus:ring-ribe-accent/20"
          placeholder="Tell us about your business and the products/services you'll be showcasing..."
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-ribe-primary">
          Logo Upload <span className="text-ribe-gray">(optional)</span>
        </label>
        <div className="rounded-lg border-2 border-dashed border-ribe-secondary/30 p-6 text-center">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="logo-upload"
          />
          <label
            htmlFor="logo-upload"
            className="cursor-pointer text-ribe-gray hover:text-ribe-primary"
          >
            <span className="block text-sm">Click to upload your logo</span>
            <span className="mt-1 block text-xs text-ribe-gray">
              PNG, JPG up to 5MB
            </span>
          </label>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-ribe-primary">
          Product Images <span className="text-ribe-gray">(optional, max 5)</span>
        </label>
        <div className="rounded-lg border-2 border-dashed border-ribe-secondary/30 p-6 text-center">
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            id="product-upload"
          />
          <label
            htmlFor="product-upload"
            className="cursor-pointer text-ribe-gray hover:text-ribe-primary"
          >
            <span className="block text-sm">Click to upload product images</span>
            <span className="mt-1 block text-xs text-ribe-gray">
              PNG, JPG up to 5MB each
            </span>
          </label>
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
