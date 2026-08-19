import Image from "next/image"
import Link from "next/link"
import { LayoutDashboard, Users, Settings, LogOut } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-ribe-primary/5">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-full w-64 border-r border-ribe-secondary/20 bg-white lg:block">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="border-b border-ribe-secondary/20 p-6">
            <Link href="/admin">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RIBE%20Wordmark-06-VV1iL0YQBvA0AYCBcrmvefQ59UHRJw.png"
                alt="Rhode Island Barber Expo"
                width={160}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-2 text-sm text-ribe-gray">Admin Dashboard</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/admin"
                  className="flex items-center gap-3 rounded-lg bg-ribe-primary/5 px-4 py-3 text-ribe-primary transition-colors hover:bg-ribe-primary/10"
                >
                  <LayoutDashboard className="h-5 w-5" />
                  <span className="font-medium">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/vendors"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-ribe-gray transition-colors hover:bg-ribe-primary/5 hover:text-ribe-primary"
                >
                  <Users className="h-5 w-5" />
                  <span className="font-medium">Vendors</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/settings"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-ribe-gray transition-colors hover:bg-ribe-primary/5 hover:text-ribe-primary"
                >
                  <Settings className="h-5 w-5" />
                  <span className="font-medium">Settings</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Footer */}
          <div className="border-t border-ribe-secondary/20 p-4">
            <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-ribe-gray transition-colors hover:bg-red-50 hover:text-red-600">
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64">{children}</main>
    </div>
  )
}
