"use client"

import { Table, TableRow, TableHeader, TableHead, TableCell, TableBody } from "@/components/ui/table";
import { useEffect, useState } from "react";

export default function MyFiles() {
  const column_names = [
    "File Name", 
    "Last Modified",
    "Size"
  ]

  const [files, setFiles] = useState();

  const files2 = [
    { 
      name: "test.py",
      date: "1 day ago",
      size: "200MB",
    }
  ];

  useEffect(() => {
    async function getFiles() {
      const res = await fetch('/api/filesLoad')

      const data = await res.json();
      console.log(data)
      // setFiles(data.data);
    }

    getFiles()
  }, [])
  
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/30">
            {column_names.map((names, index) => {
              return (
                <TableHead key={index}>{ names }</TableHead>
              )
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Now we will populate the data here */}
          {files2.map((file, index) => {
            return (
              <TableRow key={0}>
                <TableCell className="font-medium truncate text-sm">
                  { file.name }
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  { file.size }
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  { file.date }
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  );
}
