"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import DialogAddData from "@/components/shared/grouping-problem/DialogAddData";
import CardGroupingProblem from "@/components/shared/grouping-problem/cardGroupingProblem";
import ExportDialog from "@/components/shared/ExportDialog";

function GroupingProblem() {
  return (
    <section className="font-geist">
      <div className="mb-4 flex items-center justify-between flex-wrap">
        <h1 className="text-2xl text-text-main font-bold font-inter">
          Grouping Problem
        </h1>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <ExportDialog />
          <DialogAddData />
        </div>
      </div>

      {/* Komponen grid */}
      <CardGroupingProblem />
    </section>
  );
}

export default GroupingProblem;
