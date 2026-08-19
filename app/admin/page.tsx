"use client"

import { Users, Clock, CheckCircle, CreditCard, XCircle } from "lucide-react"
import Link from "next/link"

// Mock data - replace with Supabase query
const stats = [
  {
    label: "Total Applications",
    value: 24,
    icon: Users,
    color: "bg-ribe-primary",
  },
  {
    label: "Pending Review",
    value: 8,
    icon: Clock,
    color: "bg-yellow-500",
  },
  {
    label: "Approved",
    value: 12,
    icon: CheckCircle,
    color: "bg-ribe-secondary",
  },
  {
    label: "Paid",
    value: 4,
    icon: CreditCard,
    color: "bg-green-500",
  },
]

const recentApplications = [
  {
    id: "1",
    businessName: "Sharp Cuts Supply",
    contactName: "John Smith",
    status: "pending",
    date: "2026-01-15",
  },
  {
    id: "2",
    businessName: "Barber Apparel Co.",
    contactName: "Sarah Johnson",
    status: "approved",
    date: "2026-01-14",
  },
  {
    id: "3",
    businessName: "Pro Clippers",
    contactName: "Mike Williams",
    status: "paid",
    date: "2026-01-13",
  },
  {
    id: "4",
    businessName: "The Beard Shop",
    contactName: "James Brown",
    status: "rejected",
    date: "2026-01-12",
  },
]

const statusConfig = {
  pending: { label: "Pending", class: "bg-yellow-100 text-yellow-700" },
  approved: { label: "Approved", class: "bg-blue-100 text-blue-700" },
  paid: { label: "Paid", class: "bg-green-100 text-green-700" },
  rejected: { label: "Rejected", class: "bg-red-100 text-red-700" },
}

export default function AdminDashboard() {
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-ribe-primary">Dashboard</h1>
        <p className="text-ribe-gray">
          Welcome back! Here&apos;s an overview of vendor applications.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className="rounded-xl border border-ribe-secondary/20 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-ribe-gray">{stat.label}</p>
                  <p className="mt-1 text-3xl font-bold text-ribe-primary">
                    {stat.value}
                  </p>
                </div>
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${stat.color}`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Applications */}
      <div className="rounded-xl border border-ribe-secondary/20 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-ribe-secondary/20 p-6">
          <h2 className="text-xl font-bold text-ribe-primary">
            Recent Applications
          </h2>
          <Link
            href="/admin/vendors"
            className="text-sm font-medium text-ribe-secondary hover:text-ribe-primary"
          >
            View All
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-ribe-secondary/20 bg-ribe-primary/5">
                <th className="px-6 py-4 text-left text-sm font-medium text-ribe-gray">
                  Business
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-ribe-gray">
                  Contact
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-ribe-gray">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-ribe-gray">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {recentApplications.map((app) => (
                <tr
                  key={app.id}
                  className="border-b border-ribe-secondary/10 transition-colors hover:bg-ribe-primary/5"
                >
                  <td className="px-6 py-4 font-medium text-ribe-primary">
                    {app.businessName}
                  </td>
                  <td className="px-6 py-4 text-ribe-gray">{app.contactName}</td>
                  <td className="px-6 py-4 text-ribe-gray">{app.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                        statusConfig[app.status as keyof typeof statusConfig].class
                      }`}
                    >
                      {statusConfig[app.status as keyof typeof statusConfig].label}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
