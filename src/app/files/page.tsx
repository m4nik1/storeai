"use client";

import {
  Table,
  TableRow,
  TableHeader,
  TableHead,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

export default function MyFiles() {
  const column_names = ["File Name", "Last Modified", "Size"];

  const [files, setFiles] = useState([]);

  useEffect(() => {
    async function getFiles() {
      const res = await fetch("/api/filesLoad");

      const data = await res.json();
      console.log(data);
      setFiles(data.data);
    }

    getFiles();
  }, []);

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/30">
            {column_names.map((names, index) => {
              return <TableHead key={index}>{names}</TableHead>;
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Now we will populate the data here */}
          {files.map((file, index) => {
            return (
              <TableRow
                key={index}
                className="hover:bg-muted/50 cursor-pointer group"
              >
                <TableCell className="font-medium">{file.file_name}</TableCell>
                <TableCell className="text-sm">{file.uploaded}</TableCell>
                <TableCell className="text-sm">{file.size}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
