import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GroupingProblem } from "@/types/groupingProblem";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CopyIcon, PencilIcon, SaveIcon } from "lucide-react";

interface Props {
  problem: GroupingProblem;
  onUpdate: (updated: GroupingProblem) => void;
}

export default function ProblemDetailDialog({ problem, onUpdate }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(problem);

  const handleCopy = () => {
    const fullText = `${form.judul_kerusakan} | ${form.sub_judul} | ${form.tanggal} | ${form.uraian_deskripsi}`;
    navigator.clipboard.writeText(fullText);
    alert("Data lengkap disalin ke clipboard!");
  };

  const handleSave = () => {
    onUpdate(form);
    setIsEditing(false);
    setEditedAt(new Date().toISOString()); // simpan waktu edit
  };

  const formatTanggal = (iso: string) => {
    return new Date(iso).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const [editedAt, setEditedAt] = useState<string | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="mt-3 w-full text-sm text-blue-600 border-blue-600 hover:bg-blue-50"
        >
          Lihat Detail
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{form.judul_kerusakan}</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Sub Judul: {form.sub_judul}
          </DialogDescription>
          <DialogDescription className="text-sm text-muted-foreground flex gap-1">
            {formatTanggal(form.tanggal)}
            {editedAt && (
              <span className="block">
                {"|| diubah pada : " + formatTanggal(editedAt)}
              </span>
            )}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {isEditing ? (
            <>
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
                  onChange={(e) =>
                    setForm({ ...form, sub_judul: e.target.value })
                  }
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
            </>
          ) : (
            <p className="text-sm whitespace-pre-line">
              {form.uraian_deskripsi}
            </p>
          )}

          <div className="flex justify-end gap-2 pt-2">
            {!isEditing && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                <CopyIcon className="w-4 h-4 mr-1" />
                Salin
              </Button>
            )}

            {isEditing ? (
              <Button
                size="sm"
                onClick={handleSave}
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                <SaveIcon className="w-4 h-4 mr-1" />
                Simpan
              </Button>
            ) : (
              <Button
                size="sm"
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                <PencilIcon className="w-4 h-4 mr-1" />
                Edit
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
