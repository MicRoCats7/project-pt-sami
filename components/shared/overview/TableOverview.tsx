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
import { ArrowUpDown, CirclePlus, Files, RefreshCcw } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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

export type RepairData = {
  no_urut: number;
  carline: string;
  prod_no_display: string;
  kerusakan_utama: string;
  kerusakan_id: string;
  status: 'Belum Ditangani' | 'Sedang Proses' | 'Selesai' | 'Terlambat (LL Notified)' | 'Dibatalkan';
  waktu_request: string;
  pic: string;
};

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
  };
  const textColors: { [key: string]: string } = {
    UZI: 'text-blue-500',
    DAZ: 'text-blue-500',
    "N/R": 'text-blue-500',
    SEP: 'text-red-300',
    EAN: 'text-blue-500',
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
        <Button variant="ghost" className="text-white hover:bg-blue-700 hover:text-white p-1 h-auto" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          NO
          <ArrowUpDown className="ml-2 h-3 w-3" />
        </Button>
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
      <div className="text-left">
        <Button variant="ghost" className="text-white hover:bg-blue-700 hover:text-white p-1 h-auto text-left justify-start w-full" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          KERUSAKAN
          <ArrowUpDown className="ml-2 h-3 w-3" />
        </Button>
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
    cell: ({ row }) => {
      return getStatusDisplay(row.getValue('status'));
    },
  },
  {
    accessorKey: 'waktu_request',
    header: ({ column }) => (
      <div className="text-left">
        <Button
          variant="ghost"
          className="text-white hover:bg-blue-700 hover:text-white p-1 h-auto text-left justify-start w-full"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          WAKTU REQUEST
          <ArrowUpDown className="ml-2 h-3 w-3" />
        </Button>
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto text-white bg-[#3A57E8] hover:bg-[#304ac8] px-3 py-2 h-10">
                <CirclePlus size={18} className="mr-2" /> Status
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Toggle Kolom</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  const headerDef = column.columnDef.header;
                  let columnDisplayName = column.id;
                  if (typeof headerDef === 'string') {
                    columnDisplayName = headerDef;
                  } else if (typeof headerDef === 'function') {
                    const headerContext = table.getHeaderGroups()[0]?.headers.find(h => h.id === column.id)?.getContext();
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
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-[#3A57E8]">
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
                  className="hover:bg-gray-50 border-b border-gray-200"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={
                        `py-3 text-sm align-middle` + // align-middle ditambahkan
                        (cell.column.id === 'no_urut' ? ' pl-2' : ' pl-1') +
                        (cell.column.id === 'pic' || cell.column.id === 'status' ? '' : ' pr-1') + // Hapus pr-1 untuk pic dan status agar justify-center bekerja baik
                        (cell.column.id === 'status' ? ' text-left' : '') // Status dibuat rata kiri di dalam sel nya
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
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-gray-500">
          {table.getFilteredSelectedRowModel().rows.length} dari {table.getFilteredRowModel().rows.length} baris dipilih.
        </div>
        <div className="space-x-2">
          <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Sebelumnya
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Berikutnya
          </Button>
        </div>
      </div>
    </div>
  );
}