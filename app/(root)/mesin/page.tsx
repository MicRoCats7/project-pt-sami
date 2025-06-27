import React from "react";
import DialogAddData from "@/components/shared/mesin/DialogAddData";
import { Button } from "@/components/ui/button";
import { TableMesin } from "@/components/shared/mesin/TableMesin";
import ExportDialog from "@/components/shared/ExportDialog";

function Mesin() {
  return (
    <section className="font-geist">
      <div className="mb-4 flex items-center justify-between flex-wrap">
        <h1 className="text-2xl text-text-main font-bold font-inter">
          Data Mesin
        </h1>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <ExportDialog />
          <DialogAddData />
        </div>
      </div>
      <TableMesin />
    </section>
  );
}

export default Mesin;
