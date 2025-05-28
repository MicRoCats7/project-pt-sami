import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpDown } from 'lucide-react'
import { IoIosArrowRoundDown, IoIosArrowRoundForward, IoIosArrowRoundUp } from 'react-icons/io'

function DropdownAscDsc({
    title,
    column,
}: {
    title: string;
    column: any;
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className="text-white hover:bg-blue-700 p-1 h-auto flex items-center justify-start px-2 rounded-md w-full"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                {title}
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className='text-black font-medium'
                >
                    <IoIosArrowRoundUp size={24} color='black' />
                    Asc
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'dsc')}
                    className='text-black font-medium'
                >
                    <IoIosArrowRoundDown color='black' size={24} />
                    Desc
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => column.toggleSorting(false)}
                    className='text-black font-medium'
                >
                    <IoIosArrowRoundForward color='black' size={24} />
                    Default
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropdownAscDsc