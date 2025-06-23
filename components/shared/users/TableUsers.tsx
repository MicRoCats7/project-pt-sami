'use client';

import * as React from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import DropdownAscDsc from '../DropdownAscDsc';
import DropdownStatus from './DropdownStatus ';
import DropdownLevel from './DropdownLevel';
import { UserData } from '@/types/userDataType';
import DropdownAction from './DropdownAction';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const sampleUserData: UserData[] = [
  { id: 1, no_urut: 1, nik: '00046', nama: 'Indra Hermawan', status_user: 'Aktif', kode: 'JHN', level: 'SUPERVISOR' },
  { id: 2, no_urut: 2, nik: '00046', nama: 'M.Syafiq', status_user: 'Aktif', kode: 'MS', level: 'SUPERVISOR' },
  { id: 3, no_urut: 3, nik: '00046', nama: 'Nurul Imam Rifai', status_user: 'Aktif', kode: 'NIR', level: 'LINE LEADER' },
  { id: 4, no_urut: 4, nik: '00046', nama: 'Agung Dani Syahida', status_user: 'Aktif', kode: 'ADS', level: 'LINE LEADER' },
  { id: 5, no_urut: 5, nik: '00047', nama: 'Idho Najib', status_user: 'Aktif', kode: 'IN', level: 'LINE LEADER' },
  { id: 6, no_urut: 6, nik: '00048', nama: 'Sidik Waluyo', status_user: 'Aktif', kode: 'SW', level: 'TEKNISI' },
  { id: 7, no_urut: 7, nik: '00049', nama: 'Ariyanto', status_user: 'Aktif', kode: 'AR', level: 'TEKNISI' },
  { id: 8, no_urut: 8, nik: '00050', nama: 'Ijazul Arrafi', status_user: 'Aktif', kode: 'IA', level: 'TEKNISI' },
  { id: 9, no_urut: 9, nik: '00051', nama: 'Jerico Nicola S', status_user: 'Tidak Aktif', kode: 'JNS', level: 'TEKNISI' },
  { id: 10, no_urut: 10, nik: '00052', nama: 'Abdul Aziz', status_user: 'Tidak Aktif', kode: 'AA', level: 'TEKNISI' },
];

const UserStatusDisplay = ({ status }: { status: UserData['status_user'] }) => {
  const colorClass = status === 'Aktif' ? 'text-green-700' : 'text-red-700';
  return <span className={`font-medium ${colorClass}`}>{status}</span>;
};

const kodeColorMapping: { [key: string]: string } = {
  JHN: 'border-2 border-blue-500 bg-white text-blue-500',
  MS: 'border-2 border-green-500 bg-white text-green-500',
  NIR: 'border-2 border-yellow-500 bg-white text-yellow-500',
  ADS: 'border-2 border-purple-500 bg-white text-purple-500',
  IN: 'border-2 border-orange-500 bg-white text-orange-500',
  SW: 'border-2 border-gray-500 bg-white text-gray-500',
  AR: 'border-2 border-pink-500 bg-white text-pink-500',
  IA: 'border-2 border-teal-500 bg-white text-teal-500',
  JNS: 'border-2 border-red-500 bg-white text-red-500',
  AA: 'border-2 border-indigo-500 bg-white text-indigo-500',
};
const getKodeBadgeClasses = (kode: string): string => {
  return kodeColorMapping[kode.toUpperCase()] || kodeColorMapping.DEFAULT;
};

const KodeDisplay = ({ kode }: { kode: string }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center pr-2">
        <div className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-medium ${getKodeBadgeClasses(kode)}`}>
          {kode}
        </div>
      </div>
    </div>
  );
};

export const userColumns: ColumnDef<UserData>[] = [
  {
    accessorKey: 'no_urut',
    header: ({ column }) =>
      <div className="flex items-center justify-center">
        <DropdownAscDsc
          title="NO"
          column={column}
        />
      </div>,
    cell: ({ row }) => <div className="text-center font-medium">{row.getValue('no_urut')}</div>,
    size: 60,
  },
  {
    accessorKey: 'nik',
    header: ({ column }) =>
      <div className="flex items-center justify-center">
        <DropdownAscDsc
          title="NIK"
          column={column}
        />
      </div>,
    cell: ({ row }) => <div className="pl-2 font-medium">{row.getValue('nik')}</div>,
    size: 120,
  },
  {
    accessorKey: 'nama',
    header: () => <div className="pl-2">Nama</div>,
    cell: ({ row }) => <div className="pl-2 font-medium">{row.getValue('nama')}</div>,
    minSize: 200,
    size: 250,
  },
  {
    accessorKey: 'status_user',
    header: () => <div className="pl-2">Status</div>,
    cell: ({ row }) => <div className="pl-2"><UserStatusDisplay status={row.getValue('status_user')} /></div>,
    size: 120,
    filterFn: (row, columnId, filterValue) => {
      if (!filterValue || (Array.isArray(filterValue) && filterValue.length === 0)) return true;
      if (Array.isArray(filterValue)) return filterValue.includes(row.getValue(columnId));
      return row.getValue(columnId) === filterValue;
    },
  },
  {
    accessorKey: 'kode',
    header: () => <div className="text-center">Kode</div>,
    cell: ({ row }) => <KodeDisplay kode={row.getValue('kode')} />,
    size: 100,
  },
  {
    accessorKey: 'level',
    header: () => <div className="pl-2">Level</div>,
    cell: ({ row }) => <div className="pl-2 font-medium">{row.getValue('level')}</div>,
    size: 150,
    filterFn: (row, columnId, filterValue) => {
      if (!filterValue || (Array.isArray(filterValue) && filterValue.length === 0)) return true;
      if (Array.isArray(filterValue)) return filterValue.includes(row.getValue(columnId));
      return row.getValue(columnId) === filterValue;
    },
  },
  {
    id: 'password',
    header: () => <div className="pl-2">Password</div>,
    cell: () => <div className="pl-2 font-mono tracking-wider">•••••••</div>,
    size: 120,
  },
  {
    id: 'actions',
    header: () => <span className="sr-only">Actions</span>,
    cell: () => (
      <div className="text-center">
        <DropdownAction />
      </div>
    ),
    size: 60,
  },
];

export function TableUsers() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState('');

  const table = useReactTable({
    data: sampleUserData,
    columns: userColumns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
  });

  return (
    <div className="w-full bg-white mt-6 rounded-xl p-4 font-geist">
      <div className="flex items-center mb-4">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Cari User, NIK, Level, Status...."
            value={globalFilter ?? ''}
            onChange={(event) => setGlobalFilter(event.target.value)}
            className="h-10 w-full sm:w-64 md:w-72 lg:w-80 text-sm"
          />
          <DropdownStatus
            table={table}
            data={sampleUserData}
          />
          <DropdownLevel
            table={table}
            data={sampleUserData}
          />
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-main">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-b-0">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      style={{ width: header.getSize() !== 150 ? `${header.getSize()}px` : undefined }}
                      className={
                        `text-white font-semibold text-sm py-3` +
                        (header.index === 0 ? ' rounded-tl-lg pl-2' : ' pl-1') +
                        (header.index === headerGroup.headers.length - 1 ? ' rounded-tr-lg pr-2' : ' pr-1')
                      }
                    >
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className={
                    `border-b border-gray-200 ` +
                    (row.index % 2 === 0 ? 'bg-white' : 'bg-[#E2E5F5]')
                  }
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={
                        `py-3 text-sm align-middle` +
                        (cell.column.id === 'no_urut' ? ' pl-2' : ' pl-1') +
                        (cell.column.id === 'pic' || cell.column.id === 'status' ? '' : ' pr-1') +
                        (cell.column.id === 'status' ? ' text-left' : '')
                      }
                      style={{ width: cell.column.getSize() !== 150 ? `${cell.column.getSize()}px` : undefined }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={userColumns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between items-center pt-4">
        <p className="text-sm text-muted-foreground">
          Menampilkan {table.getRowModel().rows.length === 0
            ? 0
            : table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}
          {" - "}
          {table.getRowModel().rows.length === 0
            ? 0
            : Math.min(
              (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
              table.getFilteredRowModel().rows.length
            )}
          {" dari "}
          {table.getFilteredRowModel().rows.length} data
        </p>
        <div className="flex gap-2">
          <Button
            size="icon"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            className={`rounded-md transition-colors ${!table.getCanPreviousPage()
              ? "bg-blue-300 text-white cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
          >
            <ChevronsLeft className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className={`rounded-md transition-colors ${!table.getCanPreviousPage()
              ? "bg-blue-300 text-white cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className={`rounded-md transition-colors ${!table.getCanNextPage()
              ? "bg-blue-300 text-white cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            className={`rounded-md transition-colors ${!table.getCanNextPage()
              ? "bg-blue-300 text-white cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
          >
            <ChevronsRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}