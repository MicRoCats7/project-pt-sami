import React from 'react'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { CirclePlus, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

function DropdownStatus(props: any) {
    const [statusSearch, setStatusSearch] = React.useState('');

    const statusFilterOptions = [
        { value: 'Belum Ditangani', label: 'Belum Ditangani', icon: "/assets/icon_overview/icon_permintaan.svg" },
        { value: 'Selesai', label: 'Selesai', icon: "/assets/icon_overview/icon_success.svg" },
        { value: 'Sedang Proses', label: 'Sedang Proses', icon: "/assets/icon_overview/icon_progress.svg" },
        { value: 'Terlambat (LL Notified)', label: 'Terlambat', icon: "/assets/icon_overview/icon_terlambat.svg" },
        { value: 'Dibatalkan', label: 'Dibatalkan', icon: "/assets/icon_overview/icon_batal.svg" },
    ];

    const statusCounts = React.useMemo(() => {
        const counts: { [key: string]: number } = {};
        statusFilterOptions.forEach(option => {
            counts[option.value] = props.repairRequestData.filter((item: any) => item.status === option.value).length;
        });
        return counts;
    }, []);

    const selectedStatuses = (props.table.getColumn('status')?.getFilterValue() as string[] | undefined) || [];

    const handleStatusCheckedChange = (statusValue: string, isChecked: boolean) => {
        let newSelectedStatuses: string[];
        if (isChecked) {
            newSelectedStatuses = [...selectedStatuses, statusValue];
        } else {
            newSelectedStatuses = selectedStatuses.filter(s => s !== statusValue);
        }
        props.table.getColumn('status')?.setFilterValue(newSelectedStatuses.length > 0 ? newSelectedStatuses : undefined);
    };

    const filteredStatusOptionsForDropdown = statusFilterOptions.filter(option =>
        option.label.toLowerCase().includes(statusSearch.toLowerCase())
    );

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto px-3 py-2 h-10 bg-main text-white">
                    <CirclePlus size={18} className="mr-2" /> Status
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72 p-3">
                <div className="relative mb-2">
                    <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                        placeholder="Status"
                        value={statusSearch}
                        onChange={(e) => setStatusSearch(e.target.value)}
                        className="h-9 pl-8 w-full text-sm"
                    />
                </div>
                <DropdownMenuSeparator className="mb-2" />
                {filteredStatusOptionsForDropdown.map((option) => (
                    <DropdownMenuCheckboxItem
                        key={option.value}
                        checked={selectedStatuses.includes(option.value)}
                        onCheckedChange={(isChecked) => handleStatusCheckedChange(option.value, !!isChecked)}
                        className="text-sm mb-1 focus:bg-blue-50"
                    >
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center">
                                <Image src={option.icon} alt={option.label} width={22} height={22} className="mr-2.5" />
                                <span className="font-medium">{option.label}</span>
                            </div>
                            <span className="ml-auto text-xs text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded-sm">
                                {statusCounts[option.value]}
                            </span>
                        </div>
                    </DropdownMenuCheckboxItem>
                ))}
                {filteredStatusOptionsForDropdown.length === 0 && (
                    <div className="text-center text-sm text-gray-500 py-2">
                        Status tidak ditemukan.
                    </div>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropdownStatus