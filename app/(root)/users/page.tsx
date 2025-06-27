import DialogAddData from "@/components/shared/users/DialogAddData";
import { TableUsers } from "@/components/shared/users/TableUsers";
import { Button } from "@/components/ui/button";
import React from "react";
import ExportDialog from "@/components/shared/ExportDialog";

function UserData() {
  return (
    <section className="font-geist">
      <div className="mb-4 flex items-center justify-between flex-wrap">
        <h1 className="text-2xl text-text-main font-bold font-inter">
          Data User
        </h1>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <ExportDialog />
          <DialogAddData />
        </div>
      </div>
      <TableUsers />
    </section>
  );
}

export default UserData;
