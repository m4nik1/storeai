import { Table, TableRow, TableHeader, TableHead, TableCell, TableBody } from "@/components/ui/table";

export default function MyFiles() {
  const column_names = [
    "File Name", 
    "Last Modified",
    "Size"
  ]

  const files = [
    { 
      name: "test.py",
      date: "1 day ago",
      size: "200MB",
    }
  ]
  
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
          {files.map((file, index) => {
            return (
              <TableRow>
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
