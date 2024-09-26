"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type PatientColumns = {
  id: number;
  name: string;
  age: number;
  sex: number;
  cp: number;
  trestbps: number;
  chol: number;
  fbs: number;
  restecg: number;
  thalach: number;
  exang: number;
  oldpeak: number;
  slope: number;
  ca: number;
  thal: number;
  target: number;
};

export const columns: ColumnDef<PatientColumns>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "age",
    header: "age",
  },
  {
    accessorKey: "sex",
    header: "sex",
  },
  {
    accessorKey: "cp",
    header: "cp",
  },
  {
    accessorKey: "trestbps",
    header: "trestbps",
  },
  {
    accessorKey: "chol",
    header: "chol",
  },
  {
    accessorKey: "fbs",
    header: "fbs",
  },
  {
    accessorKey: "restecg",
    header: "restecg",
  },
  {
    accessorKey: "thalach",
    header: "thalach",
  },
  {
    accessorKey: "exang",
    header: "exang",
  },
  {
    accessorKey: "oldpeak",
    header: "oldpeak",
  },
  {
    accessorKey: "slope",
    header: "slope",
  },
  {
    accessorKey: "ca",
    header: "ca",
  },
  {
    accessorKey: "thal",
    header: "thal",
  },
  {
    accessorKey: "target",
    header: "Resultado",
  },
  {
    header: "Ações",
    id: "actions",
    cell: ({ row }) => {
      const item = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Deletar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
