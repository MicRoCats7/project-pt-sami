import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import React from "react"
import Image from "next/image"
import { Separator } from "../ui/separator";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

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
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem className="flex items-center gap-2">
                        <Image
                            src="/assets/icon_sidebar/logo.svg"
                            alt="Logo"
                            width={32}
                            height={32}
                        />
                        <div className="flex flex-col">
                            <span className="font-semibold text-lg text-black leading-4">MRO PT SAMI</span>
                            <span className="font-normal text-xs text-black">Enterprise</span>
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
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
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src="https://github.com/shadcn.png" alt="name" />
                                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold text-sm text-black">Rangga Alrasya</span>
                                <span className="text-normal text-[#FEBD01] truncate text-xs">
                                    Supervisor
                                </span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
