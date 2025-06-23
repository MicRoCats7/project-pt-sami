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
import DropdownAction from './DropdownAction';
import { MesinData } from '@/types/mesinType';
import DropdownCarline from './DropdownCarline';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const sampleMesinData: MesinData[] = [
  { id: 'm1', no_urut: 1, nama_mesin: 'AC90', no_mesin: '2321', location: 'AC9BIG-01', carline: 'TOYOTA' },
  { id: 'm2', no_urut: 2, nama_mesin: 'AC90', no_mesin: '2254', location: 'AC9BIG-01', carline: 'BIG SIZE' },
  { id: 'm3', no_urut: 3, nama_mesin: 'AC90', no_mesin: '1605', location: 'AC9HCM-02', carline: 'HCM' },
  { id: 'm4', no_urut: 4, nama_mesin: 'AC90', no_mesin: '1623', location: 'AC9HCM-01', carline: 'HCM' },
  { id: 'm5', no_urut: 5, nama_mesin: 'AC90', no_mesin: '1605', location: 'AC9HCM-01', carline: 'HCM' },
  { id: 'm6', no_urut: 6, nama_mesin: 'AC90', no_mesin: '2321', location: 'AC9HCM-01', carline: 'HCM' },
  { id: 'm7', no_urut: 7, nama_mesin: 'AC90', no_mesin: '2254', location: 'AC9HCM-01', carline: 'HCM' },
  { id: 'm8', no_urut: 8, nama_mesin: 'AC90', no_mesin: '1605', location: 'AC9HCM-01', carline: 'HCM' },
  { id: 'm9', no_urut: 9, nama_mesin: 'AC90', no_mesin: '1623', location: 'AC9HCM-01', carline: 'HCM' },
  { id: 'm10', no_urut: 10, nama_mesin: 'AC90', no_mesin: '1605', location: 'AC9HCM-01', carline: 'HCM' },
];

export const mesinColumns: ColumnDef<MesinData>[] = [
  {
    accessorKey: 'no_urut',
    header: ({ column }) =>
      <div className="flex items-center justify-center">
        <DropdownAscDsc
          title="NO"
          column={column}
        />
      </div>,
    cell: ({ row }) => <div className="text-start font-medium">{row.getValue('no_urut')}</div>,
    size: 60,
  },
  {
    accessorKey: 'nama_mesin',
    header: () => <div className="pl-2">Nama Mesin</div>,
    cell: ({ row }) => <div className="pl-2 font-semibold text-gray-800">{row.getValue('nama_mesin')}</div>, // Teks tebal
    size: 150,
  },
  {
    accessorKey: 'no_mesin',
    header: () => <div className="pl-2">No. Mesin</div>,
    cell: ({ row }) => <div className="pl-2 font-medium">{row.getValue('no_mesin')}</div>,
    size: 150,
  },
  {
    accessorKey: 'location',
    header: () => <div className="pl-2">Lokasi</div>,
    cell: ({ row }) => <div className="pl-2 font-medium">{row.getValue('location')}</div>,
    minSize: 180,
    size: 200,
  },
  {
    accessorKey: 'carline',
    header: () => <div className="pl-2">Carline</div>,
    cell: ({ row }) => <div className="pl-2 font-medium">{row.getValue('carline')}</div>,
    size: 150,
    filterFn: (row, columnId, filterValue) => {
      if (!filterValue || (Array.isArray(filterValue) && filterValue.length === 0)) return true;
      if (Array.isArray(filterValue)) return filterValue.includes(row.getValue(columnId));
      return row.getValue(columnId) === filterValue;
    },
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

export function TableMesin() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState('');

  const table = useReactTable({
    data: sampleMesinData,
    columns: mesinColumns,
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
            placeholder="Cari User, Nama Mesin, No. Mesin, Lokasi, Carline..."
            value={globalFilter ?? ''}
            onChange={(event) => setGlobalFilter(event.target.value)}
            className="h-10 w-full sm:w-64 md:w-72 lg:w-96 text-sm"
          />
          <DropdownCarline
            table={table}
            data={sampleMesinData}
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
                <TableCell colSpan={mesinColumns.length} className="h-24 text-center">
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