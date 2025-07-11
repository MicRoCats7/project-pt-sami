import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GroupingProblem } from "@/types/groupingProblem";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SaveIcon } from "lucide-react";
import { useState, useEffect } from "react";

interface Props {
  problem: GroupingProblem;
}

export default function ProblemEditDialog({ problem }: Props) {
  const [form, setForm] = useState(problem);
  const [open, setOpen] = useState(false);

  // Cek apakah ada perubahan
  const isChanged =
    form.judul_kerusakan !== problem.judul_kerusakan ||
    form.sub_judul !== problem.sub_judul ||
    form.uraian_deskripsi !== problem.uraian_deskripsi;

  const handleSave = () => {
    console.log("Data disimpan:", form);
    setOpen(false);
  };

  const handleOpenChange = (isOpen: boolean) => {
    // Jika ingin menutup dialog & ada perubahan → konfirmasi
    if (!isOpen && isChanged) {
      const confirmClose = confirm(
        "Perubahan belum disimpan. Yakin ingin keluar?"
      );
      if (!confirmClose) return; // Batal keluar
    }

    setOpen(isOpen);
    if (isOpen) {
      setForm(problem); // reset saat dibuka
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
          <SaveIcon className="w-4 h-4 mr-1" />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Data</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium">Judul</label>
            <Input
              value={form.judul_kerusakan}
              onChange={(e) =>
                setForm({ ...form, judul_kerusakan: e.target.value })
              }
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Sub Judul</label>
            <Input
              value={form.sub_judul}
              onChange={(e) => setForm({ ...form, sub_judul: e.target.value })}
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Deskripsi</label>
            <Textarea
              rows={5}
              value={form.uraian_deskripsi}
              onChange={(e) =>
                setForm({ ...form, uraian_deskripsi: e.target.value })
              }
            />
          </div>
          <div className="flex justify-end pt-2">
            <Button
              onClick={handleSave}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Simpan Perubahan
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
