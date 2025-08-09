import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { documents } from "@/lib/data";
import { Download, Eye, FileText } from "lucide-react";

export default function DocumentsPage() {
  return (
    <Card className="glassmorphic-card">
      <CardHeader>
        <CardTitle className="font-headline">Documents Vault</CardTitle>
        <CardDescription>Access all your invoices, estimates, and manuals in one place.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Type</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="font-medium">{doc.type}</span>
                  </div>
                </TableCell>
                <TableCell>{doc.title}</TableCell>
                <TableCell>{doc.date}</TableCell>
                <TableCell>
                   <Badge variant={doc.status === 'Paid' ? 'default' : 'secondary'} className={doc.status === 'Paid' ? 'bg-green-500 hover:bg-green-600' : ''}>{doc.status}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">Preview</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
