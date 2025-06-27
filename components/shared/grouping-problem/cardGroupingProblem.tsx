"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GroupingProblem } from "@/types/groupingProblem";
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProblemDetailDialog from "./ProblemDetailDialog";

const sampleProblemData: (GroupingProblem & { editedAt?: string | null })[] = [
    { id: 1, no_urut: 1, judul_kerusakan: "Kerusakan Mesin A", sub_judul: "Sub Judul A", uraian_deskripsi: "Deskripsi kerusakan mesin A yang perlu diperbaiki.", tanggal: "2025-06-01" },
  { id: 2, no_urut: 2, judul_kerusakan: "Kerusakan Mesin B", sub_judul: "Sub Judul B", uraian_deskripsi: "Deskripsi kerusakan mesin B yang perlu diperbaiki.", tanggal: "2025-06-02" },
  { id: 3, no_urut: 3, judul_kerusakan: "Kerusakan Mesin C", sub_judul: "Sub Judul C", uraian_deskripsi: "Deskripsi kerusakan mesin C yang perlu diperbaiki.", tanggal: "2025-06-03" },
  { id: 4, no_urut: 4, judul_kerusakan: "Kerusakan Mesin D", sub_judul: "Sub Judul D", uraian_deskripsi: "Deskripsi kerusakan mesin D seperti suara berisik saat dioperasikan.", tanggal: "2025-06-04" },
  { id: 5, no_urut: 5, judul_kerusakan: "Kerusakan Mesin E", sub_judul: "Sub Judul E", uraian_deskripsi: "Mesin E mengalami panas berlebih dan perlu pengecekan sistem pendingin.", tanggal: "2025-06-05" },
  { id: 6, no_urut: 6, judul_kerusakan: "Kerusakan Mesin F", sub_judul: "Sub Judul F", uraian_deskripsi: "Mesin tidak mau menyala karena gangguan pada sistem kelistrikan.", tanggal: "2025-06-06" },
  { id: 7, no_urut: 7, judul_kerusakan: "Kerusakan Mesin G", sub_judul: "Sub Judul G", uraian_deskripsi: "Terdapat kebocoran oli pada bagian bawah mesin.", tanggal: "2025-06-07" },
  { id: 8, no_urut: 8, judul_kerusakan: "Kerusakan Mesin H", sub_judul: "Sub Judul H", uraian_deskripsi: "Sistem kontrol otomatis tidak merespons perintah.", tanggal: "2025-06-08" },
  { id: 9, no_urut: 9, judul_kerusakan: "Kerusakan Mesin I", sub_judul: "Sub Judul I", uraian_deskripsi: "Sensor suhu tidak berfungsi dengan baik.", tanggal: "2025-06-09" },
  { id: 10, no_urut: 10, judul_kerusakan: "Kerusakan Mesin J", sub_judul: "Sub Judul J", uraian_deskripsi: "Motor penggerak mengeluarkan suara mendengung.", tanggal: "2025-06-10" },
  { id: 11, no_urut: 11, judul_kerusakan: "Kerusakan Mesin K", sub_judul: "Sub Judul K", uraian_deskripsi: "Mesin sering mati mendadak saat digunakan.", tanggal: "2025-06-11" },
  { id: 12, no_urut: 12, judul_kerusakan: "Kerusakan Mesin L", sub_judul: "Sub Judul L", uraian_deskripsi: "Putaran mesin tidak stabil dan bergetar keras.", tanggal: "2025-06-12" },
  { id: 13, no_urut: 13, judul_kerusakan: "Kerusakan Mesin M", sub_judul: "Sub Judul M", uraian_deskripsi: "Pompa air tidak berjalan normal pada sistem pendingin.", tanggal: "2025-06-13" },
  { id: 14, no_urut: 14, judul_kerusakan: "Kerusakan Mesin N", sub_judul: "Sub Judul N", uraian_deskripsi: "Kabel penghubung putus dan perlu penggantian segera.", tanggal: "2025-06-14" },
  { id: 15, no_urut: 15, judul_kerusakan: "Kerusakan Mesin O", sub_judul: "Sub Judul O", uraian_deskripsi: "Komponen gear aus dan menyebabkan kecepatan tidak seimbang.", tanggal: "2025-06-15" },
  { id: 16, no_urut: 16, judul_kerusakan: "Kerusakan Mesin P", sub_judul: "Sub Judul P", uraian_deskripsi: "Sirkuit elektronik mengalami korsleting.", tanggal: "2025-06-16" },
  { id: 17, no_urut: 17, judul_kerusakan: "Kerusakan Mesin Q", sub_judul: "Sub Judul Q", uraian_deskripsi: "Terdapat getaran abnormal pada sumbu utama.", tanggal: "2025-06-17" },
  { id: 18, no_urut: 18, judul_kerusakan: "Kerusakan Mesin R", sub_judul: "Sub Judul R", uraian_deskripsi: "Tegangan listrik tidak stabil dan mempengaruhi kinerja mesin.", tanggal: "2025-06-18" },
  { id: 19, no_urut: 19, judul_kerusakan: "Kerusakan Mesin S", sub_judul: "Sub Judul S", uraian_deskripsi: "Rem darurat tidak berfungsi sebagaimana mestinya.", tanggal: "2025-06-19" },
  { id: 20, no_urut: 20, judul_kerusakan: "Kerusakan Mesin T", sub_judul: "Sub Judul T", uraian_deskripsi: "Terdapat retakan pada body mesin akibat tekanan tinggi.", tanggal: "2025-06-20" },
  { id: 21, no_urut: 21, judul_kerusakan: "Kerusakan Mesin U", sub_judul: "Sub Judul U", uraian_deskripsi: "Display panel mati dan tidak menunjukkan data sensor.", tanggal: "2025-06-21" },
  { id: 22, no_urut: 22, judul_kerusakan: "Kerusakan Mesin V", sub_judul: "Sub Judul V", uraian_deskripsi: "Lubrikasi tidak berjalan lancar sehingga komponen cepat aus.", tanggal: "2025-06-22" },
  { id: 23, no_urut: 23, judul_kerusakan: "Kerusakan Mesin W", sub_judul: "Sub Judul W", uraian_deskripsi: "Rangkaian sensor tidak sinkron dengan pengendali pusat.", tanggal: "2025-06-23" },
  { id: 24, no_urut: 24, judul_kerusakan: "Kerusakan Mesin X", sub_judul: "Sub Judul X", uraian_deskripsi: "Kerusakan pada belt penggerak menyebabkan selip.", tanggal: "2025-06-23" },
  { id: 25, no_urut: 25, judul_kerusakan: "Kerusakan Mesin Y", sub_judul: "Sub Judul Y", uraian_deskripsi: "Pendingin mesin tidak aktif saat suhu tinggi tercapai.", tanggal: "2025-06-22" },
  { id: 26, no_urut: 26, judul_kerusakan: "Kerusakan Mesin Z", sub_judul: "Sub Judul Z", uraian_deskripsi: "Alarm sistem gagal berbunyi saat terjadi kerusakan kritis.", tanggal: "2025-06-21" },
  { id: 27, no_urut: 27, judul_kerusakan: "Kerusakan Mesin AA", sub_judul: "Sub Judul AA", uraian_deskripsi: "Getaran mesin menyebabkan baut-baut longgar.", tanggal: "2025-06-20" },
  { id: 28, no_urut: 28, judul_kerusakan: "Kerusakan Mesin AB", sub_judul: "Sub Judul AB", uraian_deskripsi: "Kalibrasi sensor tidak sesuai standar operasional.", tanggal: "2025-06-19" },
  { id: 29, no_urut: 29, judul_kerusakan: "Kerusakan Mesin AC", sub_judul: "Sub Judul AC", uraian_deskripsi: "Mesin tidak mampu mencapai tekanan maksimum.", tanggal: "2025-06-18" },
  { id: 30, no_urut: 30, judul_kerusakan: "Kerusakan Mesin AD", sub_judul: "Sub Judul AD", uraian_deskripsi: "Frekuensi rotasi tidak sesuai dengan parameter sistem.", tanggal: "2025-06-17" }
];

const formatTanggal = (iso: string) => {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export default function CardGroupingProblem() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const [data, setData] = useState<typeof sampleProblemData>(sampleProblemData);

  const filteredData = data.filter((item) =>
    item.judul_kerusakan.toLowerCase().includes(search.toLowerCase())
  );

  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = filteredData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePageChange = (targetPage: number) => {
    setPage(targetPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-4 mt-6">
      <Input
        placeholder="Cari kerusakan..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:max-w-sm bg-white border border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
      />

      <AnimatePresence mode="wait">
        {paginatedData.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-12 text-center text-sm text-muted-foreground col-span-full"
          >
            No results. Data tidak ditemukan.
          </motion.div>
        ) : (
          <motion.div
            key={page}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"
          >
            {paginatedData.map((item) => (
              <Card key={item.id} className="p-1">
                <CardContent className="p-2 flex flex-col">
                  <h4 className="font-semibold text-base mb-1">
                    {item.judul_kerusakan}
                  </h4>
                  <h2 className="font-medium text-sm mb-1">{item.sub_judul}</h2>
                  <p className="text-xs text-muted-foreground mb-2 flex gap-1">
                    {formatTanggal(item.tanggal)}
                    {item.editedAt && (
                      <span className="block">
                        {" || diubah pada : " + formatTanggal(item.editedAt)}
                      </span>
                    )}
                  </p>
                  <p className="text-xs line-clamp-4">
                    {item.uraian_deskripsi}
                  </p>
                  <ProblemDetailDialog
                    problem={item}
                    onUpdate={(updated) =>
                      setData((prev) =>
                        prev.map((p) =>
                          p.id === updated.id
                            ? {
                                ...updated,
                                editedAt: new Date().toISOString(),
                              }
                            : p
                        )
                      )
                    }
                    onDelete={(deleted) =>
                      setData((prev) => prev.filter((p) => p.id !== deleted.id))
                    }
                  />
                </CardContent>
              </Card>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between items-center pt-4">
        <p className="text-sm text-muted-foreground">
          Menampilkan {(page - 1) * itemsPerPage + 1} -{" "}
          {Math.min(page * itemsPerPage, filteredData.length)} dari{" "}
          {filteredData.length} data
        </p>
        <div className="flex gap-2">
          <Button
            size="icon"
            onClick={() => handlePageChange(1)}
            disabled={page === 1}
            className={`rounded-md transition-colors ${
              page === 1
                ? "bg-blue-300 text-white cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <ChevronsLeft className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            onClick={() => handlePageChange(Math.max(page - 1, 1))}
            disabled={page === 1}
            className={`rounded-md transition-colors ${
              page === 1
                ? "bg-blue-300 text-white cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            onClick={() => handlePageChange(Math.min(page + 1, totalPages))}
            disabled={page === totalPages}
            className={`rounded-md transition-colors ${
              page === totalPages
                ? "bg-blue-300 text-white cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            onClick={() => handlePageChange(totalPages)}
            disabled={page === totalPages}
            className={`rounded-md transition-colors ${
              page === totalPages
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
