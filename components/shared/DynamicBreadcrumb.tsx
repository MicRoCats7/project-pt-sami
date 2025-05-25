// components/shared/DynamicBreadcrumb.tsx
'use client'; // Tandai sebagai Client Component

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const items = [
  {
    title: 'Dashboard',
    subItems: [{ title: 'Overview', url: '/' }],
  },
  {
    title: 'MRO Tools',
    subItems: [
      { title: 'Permintaan', url: '/permintaan' },
      { title: 'Tracking ID', url: '/trackingId' },
    ],
  },
  {
    title: 'Laporan',
    subItems: [{ title: 'Analitik', url: '/analitik' }],
  },
  {
    title: 'Pusat Data',
    subItems: [
      { title: 'User', url: '/users' },
      { title: 'Mesin', url: '/mesin' },
      { title: 'Spare Part', url: '/spare-part' },
      { title: 'Grouping Problem', url: '/grouping-problem' },
    ],
  },
  {
    title: 'Settings',
    subItems: [
      { title: 'Pengaturan', url: '/pengaturan' },
      { title: 'Bantuan / Dukungan', url: '/bantuan' },
    ],
  },
];

const findMenuItem = (pathname: string) => {
  for (const group of items) {
    for (const subItem of group.subItems) {
      if (subItem.url === pathname) {
        return { groupTitle: group.title, subItemTitle: subItem.title, url: subItem.url };
      }
    }
  }
  return null;
};

export function DynamicBreadcrumb() {
  const pathname = usePathname();
  const activeMenuItem = findMenuItem(pathname);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {activeMenuItem && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={activeMenuItem.url}>{activeMenuItem.groupTitle}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{activeMenuItem.subItemTitle}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
        {!activeMenuItem && pathname !== '/' && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {pathname
                  .substring(1)
                  .split('-')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
