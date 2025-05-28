import React from 'react'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { CirclePlus } from 'lucide-react';
import { flexRender } from '@tanstack/react-table';

function DropdownView(props: any) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto text-white bg-[#3A57E8] hover:bg-[#304ac8] px-3 py-2 h-10">
                    <CirclePlus size={18} className="mr-2" /> View
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Toggle Kolom</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {props.table
                    .getAllColumns()
                    .filter((column: any) => column.getCanHide())
                    .map((column: any) => {
                        const headerDef = column.columnDef.header;
                        let columnDisplayName = column.id;
                        if (typeof headerDef === 'string') {
                            columnDisplayName = headerDef;
                        } else if (typeof headerDef === 'function') {
                            const headerContext = props.table.getHeaderGroups()[0]?.headers.find((h: any) => h.id === column.id)?.getContext();
                            if (headerContext) {
                                const renderedHeader = flexRender(headerDef, headerContext);
                                if (typeof renderedHeader === 'string') {
                                    columnDisplayName = renderedHeader;
                                } else if (
                                    React.isValidElement(renderedHeader) &&
                                    typeof renderedHeader.props === 'object' &&
                                    renderedHeader.props !== null &&
                                    'children' in renderedHeader.props &&
                                    renderedHeader.props.children
                                ) {
                                    const children = (renderedHeader.props as { children?: React.ReactNode }).children;
                                    if (typeof children === 'string') columnDisplayName = children;
                                    else if (Array.isArray(children) && typeof children[0] === 'string') columnDisplayName = children[0];
                                }
                            }
                        }

                        return (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                className="capitalize"
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                            >
                                {column.id === "kerusakan_utama" ? "Kerusakan" :
                                    column.id === "prod_no_display" ? "Prod No" :
                                        column.id === "no_urut" ? "NO" :
                                            column.id === "waktu_request" ? "Waktu Request" :
                                                column.id.replace(/_/g, ' ')}
                            </DropdownMenuCheckboxItem>
                        );
                    })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropdownView