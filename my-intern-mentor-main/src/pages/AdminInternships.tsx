import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Search, 
  Plus, 
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Filter,
  Download,
  Calendar,
  Building2,
  MapPin
} from "lucide-react";

interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  status: "active" | "draft" | "expired" | "paused";
  applications: number;
  deadline: string;
  stipend: string;
  createdAt: string;
}

const mockInternships: Internship[] = [
  {
    id: "1",
    title: "Software Development Intern",
    company: "TechStart India",
    location: "Bangalore",
    type: "Technology",
    status: "active",
    applications: 45,
    deadline: "2024-10-15",
    stipend: "₹15,000/month",
    createdAt: "2024-09-01"
  },
  {
    id: "2",
    title: "Digital Marketing Intern",
    company: "GrowthLab",
    location: "Delhi",
    type: "Marketing",
    status: "active",
    applications: 32,
    deadline: "2024-10-20",
    stipend: "₹12,000/month",
    createdAt: "2024-09-05"
  },
  {
    id: "3",
    title: "Data Science Intern",
    company: "DataPro Solutions",
    location: "Mumbai",
    type: "Technology",
    status: "paused",
    applications: 67,
    deadline: "2024-10-25",
    stipend: "₹18,000/month",
    createdAt: "2024-08-28"
  },
  {
    id: "4",
    title: "Content Writing Intern",
    company: "Creative Minds",
    location: "Remote",
    type: "Marketing",
    status: "draft",
    applications: 0,
    deadline: "2024-11-01",
    stipend: "₹10,000/month",
    createdAt: "2024-09-10"
  },
  {
    id: "5",
    title: "Financial Analyst Intern",
    company: "FinanceFirst",
    location: "Chennai",
    type: "Finance",
    status: "expired",
    applications: 41,
    deadline: "2024-09-30",
    stipend: "₹16,000/month",
    createdAt: "2024-08-15"
  }
];

export default function AdminInternships() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [internships, setInternships] = useState(mockInternships);

  const filteredInternships = internships.filter(internship => {
    const matchesSearch = 
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || internship.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-success text-success-foreground";
      case "draft": return "bg-warning text-warning-foreground";
      case "paused": return "bg-muted text-muted-foreground";
      case "expired": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active": return "Active";
      case "draft": return "Draft";
      case "paused": return "Paused";
      case "expired": return "Expired";
      default: return status;
    }
  };

  const handleStatusChange = (id: string, newStatus: string) => {
    setInternships(internships.map(internship => 
      internship.id === id ? { ...internship, status: newStatus as any } : internship
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Manage Internships</h1>
          <p className="text-muted-foreground">
            Add, edit, and manage internship listings on the platform
          </p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Internship
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Internships</p>
                <p className="text-2xl font-bold">{internships.length}</p>
              </div>
              <Building2 className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active</p>
                <p className="text-2xl font-bold text-success">
                  {internships.filter(i => i.status === "active").length}
                </p>
              </div>
              <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-success rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Draft</p>
                <p className="text-2xl font-bold text-warning">
                  {internships.filter(i => i.status === "draft").length}
                </p>
              </div>
              <div className="w-8 h-8 bg-warning/10 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-warning rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Applications</p>
                <p className="text-2xl font-bold">
                  {internships.reduce((sum, i) => sum + i.applications, 0)}
                </p>
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Calendar className="h-4 w-4 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search internships or companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2">
              {["all", "active", "draft", "paused", "expired"].map((status) => (
                <Button
                  key={status}
                  variant={statusFilter === status ? "default" : "outline"}
                  size="sm"
                  onClick={() => setStatusFilter(status)}
                >
                  {status === "all" ? "All" : getStatusLabel(status)}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Internships Table */}
      <Card>
        <CardHeader>
          <CardTitle>Internships ({filteredInternships.length})</CardTitle>
          <CardDescription>
            Manage all internship listings and their current status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Internship</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Applications</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Stipend</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInternships.map((internship) => (
                <TableRow key={internship.id}>
                  <TableCell className="font-medium">
                    {internship.title}
                  </TableCell>
                  <TableCell>{internship.company}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      {internship.location}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{internship.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(internship.status)}>
                      {getStatusLabel(internship.status)}
                    </Badge>
                  </TableCell>
                  <TableCell>{internship.applications}</TableCell>
                  <TableCell>
                    {new Date(internship.deadline).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{internship.stipend}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="gap-2">
                          <Eye className="h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Edit className="h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        {internship.status === "active" && (
                          <DropdownMenuItem 
                            className="gap-2"
                            onClick={() => handleStatusChange(internship.id, "paused")}
                          >
                            Pause
                          </DropdownMenuItem>
                        )}
                        {internship.status === "paused" && (
                          <DropdownMenuItem 
                            className="gap-2"
                            onClick={() => handleStatusChange(internship.id, "active")}
                          >
                            Activate
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem className="gap-2 text-destructive">
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {filteredInternships.length === 0 && (
            <div className="text-center py-12">
              <Building2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No internships found</h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm || statusFilter !== "all" 
                  ? "Try adjusting your search or filters"
                  : "Start by adding your first internship listing"
                }
              </p>
              {!searchTerm && statusFilter === "all" && (
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add Internship
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}