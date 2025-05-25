import { DynamicBreadcrumb } from '@/components/shared/DynamicBreadcrumb';
import { AppSidebar } from '@/components/shared/Sidebar';
import { Separator } from '@/components/ui/separator';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="bg-gray-200 w-full h-full min-h-screen">
        <div className="fixed flex items-center bg-gray-200 w-full h-16 px-4">
          <SidebarTrigger />
          <div className="flex items-center h-4">
            <Separator orientation="vertical" className="mx-4 bg-black" />
          </div>
          <DynamicBreadcrumb />
        </div>
        <div className="pt-16 p-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
