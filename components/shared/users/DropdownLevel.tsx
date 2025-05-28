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
import { UserData } from '@/types/userDataType';

interface DropdownUserLevelProps {
    table: ReactTableType<UserData>;
    data: UserData[];
}

function DropdownLevel(props: DropdownUserLevelProps) {
    const { table, data } = props;
    const [levelSearch, setLevelSearch] = React.useState('');

    const userLevelOptions: { value: UserData['level']; label: string }[] = [
        { value: 'SUPERVISOR', label: 'Supervisor' },
        { value: 'LINE LEADER', label: 'Line Leader' },
        { value: 'TEKNISI', label: 'Teknisi' },
    ];

    const levelCounts = React.useMemo(() => {
        const counts: { [key: string]: number } = {};
        userLevelOptions.forEach(option => {
            counts[option.value] = data.filter(
                (item: UserData) => item.level === option.value
            ).length;
        });
        return counts;
    }, [data]);

    const selectedUserLevels = (table.getColumn('level')?.getFilterValue() as UserData['level'][] | undefined) || [];

    const handleLevelCheckedChange = (levelValue: UserData['level'], isChecked: boolean) => {
        let newSelectedLevels: UserData['level'][];
        if (isChecked) {
            newSelectedLevels = [...selectedUserLevels, levelValue];
        } else {
            newSelectedLevels = selectedUserLevels.filter(s => s !== levelValue);
        }
        table.getColumn('level')?.setFilterValue(newSelectedLevels.length > 0 ? newSelectedLevels : undefined);
    };

    const filteredOptionsForDropdown = userLevelOptions.filter(option =>
        option.label.toLowerCase().includes(levelSearch.toLowerCase())
    );

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="px-3 py-2 h-10 text-sm bg-main text-white">
                    <CirclePlus size={18} className="mr-2" /> Level
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60 p-3">
                <div className="relative mb-2">
                    <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
                    <Input
                        placeholder="Cari Level..."
                        value={levelSearch}
                        onChange={(e) => setLevelSearch(e.target.value)}
                        className="h-9 pl-8 w-full text-sm"
                    />
                </div>
                <DropdownMenuSeparator className="mb-2" />
                {filteredOptionsForDropdown.map((option) => (
                    <DropdownMenuCheckboxItem
                        key={option.value}
                        checked={selectedUserLevels.includes(option.value)}
                        onCheckedChange={(isChecked) => handleLevelCheckedChange(option.value, !!isChecked)}
                        className="text-sm mb-1 focus:bg-blue-50 cursor-pointer"
                    >
                        <div className="flex items-center justify-between w-full">
                            <span className="font-medium">{option.label}</span>
                            <span className="ml-auto text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-sm">
                                {levelCounts[option.value]}
                            </span>
                        </div>
                    </DropdownMenuCheckboxItem>
                ))}
                {filteredOptionsForDropdown.length === 0 && (
                    <div className="text-center text-sm text-gray-500 py-2">
                        Level tidak ditemukan.
                    </div>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropdownLevel