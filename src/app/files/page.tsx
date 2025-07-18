import { Table, TableRow, TableHeader, TableHead } from "@/components/ui/table";

export default function MyFiles() {
  const column_names = [
    "File Name", 
    "Last Modified",
    "Size"
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
      </Table>
    </div>
  );
}
