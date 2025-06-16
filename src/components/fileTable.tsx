import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "./ui/table";

function fileList() {
  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40%]">Name</TableHead>
            <TableHead className="w-[20%]">Last Modified</TableHead>
            <TableHead className="w-[15%]">File Size</TableHead>
            <TableHead className="w-[5%]">File Size</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Create a for each loop for each file */}
          <TableCell></TableCell>
        </TableBody>
      </Table>
    </div>
  );
}

export default fileList;
