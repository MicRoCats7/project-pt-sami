import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

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

// Menu items.
const items = [
    {
        title: "Dashboard",
        subItems: [
            {
                title: "Overview",
                url: "/",
                icon: "/assets/icon_sidebar/icon_overview.svg",
            },
        ],
    },
    {
        title: "Inbox",
        subItems: [
            {
                title: "All Mail",
                url: "/inbox/all",
                icon: Inbox,
            },
            {
                title: "Starred",
                url: "/inbox/starred",
                icon: Inbox,
            },
        ],
    },
    {
        title: "Search",
        subItems: [
            {
                title: "Search",
                url: "/search",
                icon: Search,
            },
        ],
    },
    {
        title: "Calendar",
        subItems: [
            {
                title: "Events",
                url: "/calendar/events",
                icon: Calendar,
            },
        ],
    },
    {
        title: "Settings",
        subItems: [
            {
                title: "Profile",
                url: "/settings/profile",
                icon: Settings,
            },
            {
                title: "Account",
                url: "/settings/account",
                icon: Settings,
            },
        ],
    },
]

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarContent>
                <SidebarGroup>
                    {items.map((item) => (
                        <React.Fragment key={item.title}>
                            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {item.subItems?.map((subItem) => (
                                        <SidebarMenuItem key={subItem.title}>
                                            <SidebarMenuButton asChild>
                                                <a href={subItem.url}>
                                                    {typeof subItem.icon === "string" ? (
                                                        <Image
                                                            src={subItem.icon}
                                                            alt={subItem.title}
                                                            width={24}
                                                            height={24}
                                                            className="mr-3"
                                                        />
                                                    ) : (
                                                        <subItem.icon className="mr-2 w-6 h-6" aria-label={subItem.title} />
                                                    )}
                                                    <span>{subItem.title}</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </React.Fragment>
                    ))}
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}