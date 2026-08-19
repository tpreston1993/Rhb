"use client"

import { useState } from "react"
import {
  Search,
  Filter,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  CreditCard,
  Mail,
  Eye,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data - replace with Supabase query
const mockVendors = [
  {
    id: "1",
    businessName: "Sharp Cuts Supply",
    contactName: "John Smith",
    email: "john@sharpcutssupply.com",
    phone: "(555) 123-4567",
    businessType: "Barber Products",
    status: "pending",
    createdAt: "2026-01-15",
  },
  {
    id: "2",
    businessName: "Barber Apparel Co.",
    contactName: "Sarah Johnson",
    email: "sarah@barberapparel.com",
    phone: "(555) 234-5678",
    businessType: "Apparel",
    status: "approved",
    createdAt: "2026-01-14",
  },
  {
    id: "3",
    businessName: "Pro Clippers",
    contactName: "Mike Williams",
    email: "mike@proclippers.com",
    phone: "(555) 345-6789",
    businessType: "Tools & Equipment",
    status: "paid",
    createdAt: "2026-01-13",
  },
  {
    id: "4",
    businessName: "The Beard Shop",
    contactName: "James Brown",
    email: "james@thebeardshop.com",
    phone: "(555) 456-7890",
    businessType: "Barber Products",
    status: "rejected",
    createdAt: "2026-01-12",
  },
  {
    id: "5",
    businessName: "Fade Masters",
    contactName: "Chris Davis",
    email: "chris@fademasters.com",
    phone: "(555) 567-8901",
    businessType: "Other",
    status: "pending",
    createdAt: "2026-01-11",
  },
]

const statusConfig = {
  pending: { label: "Pending", class: "bg-yellow-100 text-yellow-700" },
  approved: { label: "Approved", class: "bg-blue-100 text-blue-700" },
  paid: { label: "Paid", class: "bg-green-100 text-green-700" },
  rejected: { label: "Rejected", class: "bg-red-100 text-red-700" },
}

type StatusFilter = "all" | "pending" | "approved" | "paid" | "rejected"

export default function AdminVendorsPage() {
  const [filter, setFilter] = useState<StatusFilter>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredVendors = mockVendors.filter((vendor) => {
    const matchesFilter = filter === "all" || vendor.status === filter
    const matchesSearch =
      vendor.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.contactName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.email.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const handleApprove = (id: string) => {
    // TODO: Update status in Supabase
    console.log("Approving vendor:", id)
  }

  const handleReject = (id: string) => {
    // TODO: Update status in Supabase
    console.log("Rejecting vendor:", id)
  }

  const handleSendInvoice = (id: string) => {
    // TODO: Generate Stripe payment link
    console.log("Sending invoice to vendor:", id)
  }

  const handleMarkPaid = (id: string) => {
    // TODO: Update status in Supabase
    console.log("Marking vendor as paid:", id)
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-ribe-primary">
          Vendor Applications
        </h1>
        <p className="text-ribe-gray">
          Manage and review all vendor applications
        </p>
      </div>

      {/* Filters & Search */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Status Tabs */}
        <div className="flex flex-wrap gap-2">
          {(["all", "pending", "approved", "paid", "rejected"] as const).map(
            (status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === status
                    ? "bg-ribe-primary text-white"
                    : "bg-white text-ribe-gray hover:bg-ribe-primary/5"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            )
          )}
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ribe-gray" />
          <input
            type="text"
            placeholder="Search vendors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-ribe-secondary/30 py-2 pl-10 pr-4 text-ribe-primary focus:border-ribe-accent focus:outline-none focus:ring-2 focus:ring-ribe-accent/20 sm:w-64"
          />
        </div>
      </div>

      {/* Vendors Table */}
      <div className="rounded-xl border border-ribe-secondary/20 bg-white shadow-sm">
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
                <th className="hidden px-6 py-4 text-left text-sm font-medium text-ribe-gray md:table-cell">
                  Type
                </th>
                <th className="hidden px-6 py-4 text-left text-sm font-medium text-ribe-gray lg:table-cell">
                  Applied
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-ribe-gray">
                  Status
                </th>
                <th className="px-6 py-4 text-right text-sm font-medium text-ribe-gray">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredVendors.map((vendor) => (
                <tr
                  key={vendor.id}
                  className="border-b border-ribe-secondary/10 transition-colors hover:bg-ribe-primary/5"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-ribe-primary">
                        {vendor.businessName}
                      </p>
                      <p className="text-sm text-ribe-gray">{vendor.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-ribe-primary">{vendor.contactName}</p>
                      <p className="text-sm text-ribe-gray">{vendor.phone}</p>
                    </div>
                  </td>
                  <td className="hidden px-6 py-4 text-ribe-gray md:table-cell">
                    {vendor.businessType}
                  </td>
                  <td className="hidden px-6 py-4 text-ribe-gray lg:table-cell">
                    {vendor.createdAt}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                        statusConfig[vendor.status as keyof typeof statusConfig]
                          .class
                      }`}
                    >
                      {
                        statusConfig[vendor.status as keyof typeof statusConfig]
                          .label
                      }
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="rounded-lg p-2 text-ribe-gray transition-colors hover:bg-ribe-primary/10 hover:text-ribe-primary">
                          <MoreHorizontal className="h-5 w-5" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        {vendor.status === "pending" && (
                          <>
                            <DropdownMenuItem
                              onClick={() => handleApprove(vendor.id)}
                            >
                              <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                              Approve
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleReject(vendor.id)}
                            >
                              <XCircle className="mr-2 h-4 w-4 text-red-600" />
                              Reject
                            </DropdownMenuItem>
                          </>
                        )}
                        {vendor.status === "approved" && (
                          <>
                            <DropdownMenuItem
                              onClick={() => handleSendInvoice(vendor.id)}
                            >
                              <Mail className="mr-2 h-4 w-4" />
                              Send Invoice
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleMarkPaid(vendor.id)}
                            >
                              <CreditCard className="mr-2 h-4 w-4 text-green-600" />
                              Mark as Paid
                            </DropdownMenuItem>
                          </>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredVendors.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12">
            <Filter className="mb-4 h-12 w-12 text-ribe-gray/50" />
            <p className="text-lg font-medium text-ribe-primary">
              No vendors found
            </p>
            <p className="text-sm text-ribe-gray">
              Try adjusting your search or filter
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
