import { Sidebar } from '@/modules/layout/widgets/sidebar'
import { SidebarProvider } from '@/shared/ui/sidebar'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <SidebarProvider>
      <Sidebar />
      <main className="w-full p-3">
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
