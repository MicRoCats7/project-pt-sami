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
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Files, RefreshCcw } from 'lucide-react';
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
import Image from 'next/image';
import DropdownStatus from './DropdownStatus';
import DropdownView from './DropdownView';
import { RepairData } from '@/types/repairType';
import DropdownAscDsc from '../DropdownAscDsc';

const repairRequestData: RepairData[] = [
  {
    no_urut: 1,
    carline: "TOYOTA",
    prod_no_display: "ACSPRA-14",
    kerusakan_utama: "C_MAX CUTTER",
    kerusakan_id: "ID: #0001-04072025",
    status: "Belum Ditangani",
    waktu_request: "1 Menit yang lalu",
    pic: "UZI"
  },
  {
    no_urut: 2,
    carline: "TOYOTA",
    prod_no_display: "ACSPRA-14",
    kerusakan_utama: "C.MAX TOOLING",
    kerusakan_id: "ID: #0002-04072025",
    status: "Belum Ditangani",
    waktu_request: "13 Menit yang lalu",
    pic: "DAZ"
  },
  {
    no_urut: 3,
    carline: "TOYOTA",
    prod_no_display: "ACSPRA-24",
    kerusakan_utama: "CACAT CRIMP SISI A+B",
    kerusakan_id: "ID: #0003-04072025",
    status: "Belum Ditangani",
    waktu_request: "12 Menit yang lalu",
    pic: "N/R"
  },
  {
    no_urut: 4,
    carline: "TOYOTA",
    prod_no_display: "BMPRA-07",
    kerusakan_utama: "CACAT STRIP SIDE A DAN B",
    kerusakan_id: "ID: #0004-04072025",
    status: "Selesai",
    waktu_request: "34 Menit yang lalu",
    pic: "UZI"
  },
  {
    no_urut: 5,
    carline: "TOYOTA",
    prod_no_display: "ACSPRA-11",
    kerusakan_utama: "KEGAGALAN PEMOTONGAN WIRE SISI B",
    kerusakan_id: "ID: #0005-04072025",
    status: "Sedang Proses",
    waktu_request: "21 Menit yang lalu",
    pic: "UZI"
  },
  {
    no_urut: 6,
    carline: "TOYOTA",
    prod_no_display: "ACSPRA-11",
    kerusakan_utama: "CACAT CRIMP SISI A BUNYI TERUS",
    kerusakan_id: "ID: #0006-04072025",
    status: "Sedang Proses",
    waktu_request: "90 Menit yang lalu",
    pic: "UZI"
  },
  {
    no_urut: 7,
    carline: "TOYOTA",
    prod_no_display: "ACSPRA-24",
    kerusakan_utama: "q q q",
    kerusakan_id: "ID: #0007-04072025",
    status: "Terlambat (LL Notified)",
    waktu_request: "21 Menit yang lalu",
    pic: "SEP"
  },
  {
    no_urut: 8,
    carline: "TOYOTA",
    prod_no_display: "MCPRA-21",
    kerusakan_utama: "FLASH",
    kerusakan_id: "ID: #0008-04072025",
    status: "Sedang Proses",
    waktu_request: "21 Menit yang lalu",
    pic: "UZI"
  },
  {
    no_urut: 9,
    carline: "TOYOTA",
    prod_no_display: "ACSPRA-15",
    kerusakan_utama: "FLASH",
    kerusakan_id: "ID: #0009-04072025",
    status: "Selesai",
    waktu_request: "44 Menit yang lalu",
    pic: "SEP"
  },
  {
    no_urut: 10,
    carline: "TOYOTA",
    prod_no_display: "ACSPRA-28",
    kerusakan_utama: "BENT DOWN",
    kerusakan_id: "ID: #0010-04072025",
    status: "Selesai",
    waktu_request: "45 Menit yang lalu",
    pic: "EAN"
  }
];

const getStatusDisplay = (status: RepairData['status']) => {
  let iconSrc = "/assets/icon_overview/icon_default_status.svg"; // Ikon default
  let altText = "Status";

  switch (status) {
    case 'Belum Ditangani':
      iconSrc = "/assets/icon_overview/icon_permintaan.svg";
      altText = "Icon Belum Ditangani";
      break;
    case 'Sedang Proses':
      iconSrc = "/assets/icon_overview/icon_progress.svg";
      altText = "Icon Sedang Proses";
      break;
    case 'Selesai':
      iconSrc = "/assets/icon_overview/icon_success.svg";
      altText = "Icon Selesai";
      break;
    case 'Terlambat (LL Notified)':
      iconSrc = "/assets/icon_overview/icon_terlambat.svg";
      altText = "Icon Tertunda";
      break;
    case 'Dibatalkan':
      iconSrc = "/assets/icon_overview/icon_batal.svg";
      altText = "Icon Dibatalkan";
      break;
  }

  return (
    <div className="flex items-center justify-start">
      <Image src={iconSrc} alt={altText} width={27} height={27} />
      <span className={`ml-2 text-xs font-medium`}>{status}</span>
    </div>
  );
};

const getPicBadgeStyle = (pic: string) => {
  const colors: { [key: string]: string } = {
    UZI: 'border-2 border-blue-500 bg-white',
    DAZ: 'border-2 border-blue-500 bg-white',
    "N/R": 'border-2 border-blue-500 bg-white',
    SEP: 'border-2 border-red-300 bg-white',
    EAN: 'border-2 border-blue-500 bg-white',
    SYS: 'border-2 border-gray-500 bg-white',
  };
  const textColors: { [key: string]: string } = {
    UZI: 'text-blue-500',
    DAZ: 'text-blue-500',
    "N/R": 'text-blue-500',
    SEP: 'text-red-300',
    EAN: 'text-blue-500',
    SYS: 'text-gray-500',
  };
  const bgColor = colors[pic.toUpperCase()] || 'bg-gray-400';
  const textColor = textColors[pic.toUpperCase()] || 'text-white';
  return `${bgColor} ${textColor} w-7 h-7 flex items-center justify-center rounded-full text-xs font-medium`;
};



export const columns: ColumnDef<RepairData>[] = [
  {
    accessorKey: 'no_urut',
    header: ({ column }) => (
      <div className="flex items-center justify-center">
        <DropdownAscDsc
          title="NO"
          column={column}
        />
      </div>
    ),
    cell: ({ row }) => <div className="text-center font-medium">{row.getValue('no_urut')}</div>,
    size: 30,
  },
  {
    accessorKey: 'carline',
    header: () => <div className="text-left text-white pl-2">CARLINE</div>,
    cell: ({ row }) => <div className="text-left font-medium pl-2">{row.getValue('carline')}</div>,
  },
  {
    accessorKey: 'prod_no_display',
    header: () => <div className="text-left text-white pl-2">PROD NO</div>,
    cell: ({ row }) => <div className="text-left font-medium pl-2">{row.getValue('prod_no_display')}</div>,
  },
  {
    accessorKey: 'kerusakan_utama',
    header: ({ column }) => (
      <div className="text-left w-full">
        <DropdownAscDsc
          title="KERUSAKAN"
          column={column}
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-left flex items-center gap-4">
        <div className="font-medium">{row.original.kerusakan_utama}</div>
        <div className="text-xs text-gray-500 flex items-center gap-1">
          {row.original.kerusakan_id}
          <Files size={13} />
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: () => <div className="text-left text-white">STATUS</div>,
    cell: ({ row }) => getStatusDisplay(row.getValue('status')),
    filterFn: (row, columnId, filterValue) => {
      if (filterValue == null || (Array.isArray(filterValue) && filterValue.length === 0)) {
        return true;
      }
      if (Array.isArray(filterValue)) {
        const rowValue = row.getValue(columnId);
        return filterValue.includes(rowValue);
      }
      return true;
    },
  },
  {
    accessorKey: 'waktu_request',
    header: ({ column }) => (
      <div className="text-left">
        <DropdownAscDsc
          title="WAKTU REQUEST"
          column={column}
        />
      </div>
    ),
    cell: ({ row }) => <div className="text-left lowercase font-medium">{row.getValue('waktu_request')}</div>,
  },
  {
    accessorKey: 'pic',
    header: () => <div className="text-center text-white pr-2">PIC</div>,
    cell: ({ row }) => (
      <div className="flex justify-center items-center pr-2">
        <div className={getPicBadgeStyle(row.getValue('pic'))}>
          {row.getValue('pic')}
        </div>
      </div>
    ),
    size: 50,
  },
];

export function TableOverview() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: repairRequestData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
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
    },
  });

  return (
    <div className="w-full bg-white mt-6 rounded-xl p-4 font-geist">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Live status permintaan dan perbaikan Hari ini</h2>
          <div className="flex items-center gap-2 mt-1">
            <RefreshCcw color="#3A57E8" size={18} />
            <p className="text-sm text-gray-500 font-normal">
              2 Mesin selesai diperbaiki baru baru ini (Update otomatis setiap 15 detik)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Cari Kerusakan...."
            value={(table.getColumn('kerusakan_utama')?.getFilterValue() as string) ?? ''}
            onChange={(event) => table.getColumn('kerusakan_utama')?.setFilterValue(event.target.value)}
            className="h-10 w-64"
          />
          <DropdownStatus
            table={table}
            repairRequestData={repairRequestData}
          />
          <DropdownView
            table={table}
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
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between items-center pt-4">
        <p className="text-sm text-muted-foreground">
          Menampilkan {table.getPaginationRowModel().rows.length === 0
            ? 0
            : table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}
          {" - "}
          {table.getPaginationRowModel().rows.length === 0
            ? 0
            : table.getState().pagination.pageIndex * table.getState().pagination.pageSize +
              table.getPaginationRowModel().rows.length}
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