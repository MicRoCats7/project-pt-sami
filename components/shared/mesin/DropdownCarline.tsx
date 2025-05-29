import React from 'react'
import { Table as ReactTableType } from '@tanstack/react-table';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { CirclePlus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { MesinData } from '@/types/mesinType';

interface DropdownCarlineProps {
    table: ReactTableType<MesinData>;
    data: MesinData[];
}

function DropdownCarline(props: DropdownCarlineProps) {
    const { table, data } = props;
    const [carlineSearch, setCarlineSearch] = React.useState('');

    const carlineOptions = React.useMemo(() => {
        if (!data) return [];
        const uniqueCarlines = Array.from(new Set(data.map(item => item.carline).filter(Boolean))); // Filter null/undefined
        return uniqueCarlines.map(carline => ({ value: carline, label: carline }));
    }, [data]);

    const carlineCounts = React.useMemo(() => {
        const counts: { [key: string]: number } = {};
        if (!data) return counts;
        carlineOptions.forEach(option => {
            counts[option.value] = data.filter(
                (item: MesinData) => item.carline === option.value
            ).length;
        });
        return counts;
    }, [data, carlineOptions]);

    // Dapatkan carline yang sedang dipilih dari filter tabel
    const selectedCarlines = (table.getColumn('carline')?.getFilterValue() as string[] | undefined) || [];

    // Handler untuk mengubah filter carline
    const handleCarlineCheckedChange = (carlineValue: string, isChecked: boolean) => {
        let newSelectedCarlines: string[];
        if (isChecked) {
            newSelectedCarlines = [...selectedCarlines, carlineValue];
        } else {
            newSelectedCarlines = selectedCarlines.filter(s => s !== carlineValue);
        }
        table.getColumn('carline')?.setFilterValue(newSelectedCarlines.length > 0 ? newSelectedCarlines : undefined);
    };

    const filteredOptionsForDropdown = carlineOptions.filter(option =>
        option.label.toLowerCase().includes(carlineSearch.toLowerCase())
    );

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="px-3 py-2 h-10 text-sm bg-main text-white">
                    <CirclePlus size={18} className="mr-2" /> Carline
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60 p-3">
                <div className="relative mb-2">
                    <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
                    <Input
                        placeholder="Cari Carline..."
                        value={carlineSearch}
                        onChange={(e) => setCarlineSearch(e.target.value)}
                        className="h-9 pl-8 w-full text-sm"
                    />
                </div>
                <DropdownMenuSeparator className="mb-2" />
                {filteredOptionsForDropdown.map((option) => (
                    <DropdownMenuCheckboxItem
                        key={option.value}
                        checked={selectedCarlines.includes(option.value)}
                        onCheckedChange={(isChecked) => handleCarlineCheckedChange(option.value, !!isChecked)}
                        className="text-sm mb-1 focus:bg-blue-50 cursor-pointer"
                    >
                        <div className="flex items-center justify-between w-full">
                            <span className="font-medium">{option.label}</span>
                            <span className="ml-auto text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-sm">
                                {carlineCounts[option.value] || 0}
                            </span>
                        </div>
                    </DropdownMenuCheckboxItem>
                ))}
                {carlineOptions.length > 0 && filteredOptionsForDropdown.length === 0 && (
                    <div className="text-center text-sm text-gray-500 py-2">
                        Carline tidak ditemukan.
                    </div>
                )}
                {carlineOptions.length === 0 && (
                    <div className="text-center text-sm text-gray-500 py-2">
                        Tidak ada opsi carline.
                    </div>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropdownCarline