import * as React from 'react';
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

interface DropdownUserStatusProps {
    table: ReactTableType<UserData>;
    data: UserData[];
}

const userStatusOptions: { value: UserData['status_user']; label: string }[] = [
    { value: 'Aktif', label: 'Aktif' },
    { value: 'Tidak Aktif', label: 'Tidak Aktif' },
];

function DropdownStatus(props: DropdownUserStatusProps) {
    const { table, data } = props;
    const [statusSearch, setStatusSearch] = React.useState('');

    const statusCounts = React.useMemo(() => {
        const counts: { [key: string]: number } = {};
        userStatusOptions.forEach(option => {
            counts[option.value] = data.filter(
                (item: UserData) => item.status_user === option.value
            ).length;
        });
        return counts;
    }, [data]);

    const selectedUserStatuses = (table.getColumn('status_user')?.getFilterValue() as UserData['status_user'][] | undefined) || [];

    const handleStatusCheckedChange = (statusValue: UserData['status_user'], isChecked: boolean) => {
        let newSelectedStatuses: UserData['status_user'][];
        if (isChecked) {
            newSelectedStatuses = [...selectedUserStatuses, statusValue];
        } else {
            newSelectedStatuses = selectedUserStatuses.filter(s => s !== statusValue);
        }
        table.getColumn('status_user')?.setFilterValue(newSelectedStatuses.length > 0 ? newSelectedStatuses : undefined);
    };

    const filteredOptionsForDropdown = userStatusOptions.filter(option =>
        option.label.toLowerCase().includes(statusSearch.toLowerCase())
    );

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="px-3 py-2 h-10 text-sm bg-main text-white">
                    <CirclePlus size={18} className="mr-2" /> Status
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60 p-3">
                <div className="relative mb-2">
                    <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
                    <Input
                        placeholder="Cari Status..."
                        value={statusSearch}
                        onChange={(e) => setStatusSearch(e.target.value)}
                        className="h-9 pl-8 w-full text-sm"
                    />
                </div>
                <DropdownMenuSeparator className="mb-2" />
                {filteredOptionsForDropdown.map((option) => (
                    <DropdownMenuCheckboxItem
                        key={option.value}
                        checked={selectedUserStatuses.includes(option.value)}
                        onCheckedChange={(isChecked) => handleStatusCheckedChange(option.value, !!isChecked)}
                        className="text-sm mb-1 focus:bg-blue-50 cursor-pointer"
                    >
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center">
                                <span className={`w-2.5 h-2.5 rounded-full mr-2.5 ${option.value === 'Aktif' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                <span className="font-medium">{option.label}</span>
                            </div>
                            <span className="ml-auto text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-sm">
                                {statusCounts[option.value]}
                            </span>
                        </div>
                    </DropdownMenuCheckboxItem>
                ))}
                {filteredOptionsForDropdown.length === 0 && (
                    <div className="text-center text-sm text-gray-500 py-2">
                        Status tidak ditemukan.
                    </div>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropdownStatus;