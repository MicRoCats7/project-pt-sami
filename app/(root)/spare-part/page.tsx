import DialogAddData from "@/components/shared/spare-part/DialogAddData";
import { TableSparePart } from "@/components/shared/spare-part/TableSparePart";
import { Button } from "@/components/ui/button";
import React from "react";
import ExportDialog from "@/components/shared/ExportDialog";
function SparePart() {
    
  return (
    <section className="font-geist">
      <div className="mb-4 flex items-center justify-between flex-wrap">
        <h1 className="text-2xl text-text-main font-bold font-inter">
          Spare Part
        </h1>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <ExportDialog />
          <DialogAddData />
        </div>
      </div>
      <TableSparePart />
    </section>
  );
}

export default SparePart;
