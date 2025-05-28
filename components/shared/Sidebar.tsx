import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import React from "react"
import Image from "next/image"
import { Separator } from "../ui/separator";
import Link from "next/link";

// Menu items.
const items = [
    {
        title: 'Dashboard',
        subItems: [
            {
                title: 'Overview',
                url: '/',
                icon: '/assets/icon_sidebar/icon_overview.svg',
            },
        ],
    },
    {
        title: 'MRO Tools',
        subItems: [
            {
                title: 'Permintaan',
                url: '/permintaan',
                icon: '/assets/icon_sidebar/icon_permintaan.svg',
            },
            {
                title: 'Tracking ID',
                url: '/trackingid',
                icon: '/assets/icon_sidebar/icon_trackingId.svg',
            },
        ],
    },
    {
        title: 'Laporan',
        subItems: [
            {
                title: 'Analitik',
                url: '/analitik',
                icon: '/assets/icon_sidebar/icon_analitik.svg',
            },
        ],
    },
    {
        title: 'Pusat Data',
        subItems: [
            {
                title: 'User',
                url: '/users',
                icon: '/assets/icon_sidebar/icon_user.svg',
            },
            {
                title: 'Mesin',
                url: '/mesin',
                icon: '/assets/icon_sidebar/icon_mesin.svg',
            },
            {
                title: 'Spare Part',
                url: '/spare-part',
                icon: '/assets/icon_sidebar/icon_sparePart.svg',
            },
            {
                title: 'Grouping Problem',
                url: '/grouping-problem',
                icon: '/assets/icon_sidebar/icon_groupProblem.svg',
            },
        ],
    },
    {
        title: 'Settings',
        subItems: [
            {
                title: 'Pengaturan',
                url: '/pengaturan',
                icon: '/assets/icon_sidebar/icon_pengaturan.svg',
            },
            {
                title: 'Bantuan / Dukungan',
                url: '/bantuan',
                icon: '/assets/icon_sidebar/icon_bantuan.svg',
            },
        ],
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarContent>
                <SidebarGroup>
                    {items.map((item) => (
                        <React.Fragment key={item.title}>
                            <SidebarGroupLabel className="font-semibold text-base text-[#8A92A6B2]">{item.title}</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {item.subItems?.map((subItem) => (
                                        <SidebarMenuItem key={subItem.title}>
                                            <SidebarMenuButton asChild>
                                                <Link href={subItem.url}>
                                                    <Image
                                                        src={subItem.icon}
                                                        alt={subItem.title}
                                                        width={
                                                            subItem.title === "Mesin" ||
                                                                subItem.title === "User"
                                                                ? 15
                                                                : subItem.title === "Bantuan / Dukungan"
                                                                    ? 20
                                                                    : 24
                                                        }
                                                        height={15}
                                                        className="mr-3"
                                                    />
                                                    <span className="font-normal text-base text-[#8A92A6]">{subItem.title}</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                    <Separator className='mb-3 mt-2 bg-[#E9ECEF]' />
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </React.Fragment>
                    ))}
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
