import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  MapPin, 
  Users, 
  Star,
  Building2,
  Filter,
  Briefcase,
  ExternalLink
} from "lucide-react";

interface Company {
  id: string;
  name: string;
  industry: string;
  location: string;
  size: string;
  rating: number;
  internships: number;
  description: string;
  logo?: string;
  tags: string[];
}

const companies: Company[] = [
  {
    id: "1",
    name: "TechStart India",
    industry: "Technology",
    location: "Bangalore",
    size: "50-200",
    rating: 4.5,
    internships: 12,
    description: "Leading software development company focusing on innovative web and mobile solutions.",
    tags: ["Startup", "Innovation", "Remote Work"]
  },
  {
    id: "2",
    name: "GrowthLab Marketing",
    industry: "Marketing",
    location: "Delhi",
    size: "20-50",
    rating: 4.2,
    internships: 8,
    description: "Digital marketing agency helping startups and SMEs grow their online presence.",
    tags: ["Digital Marketing", "Growth", "Creative"]
  },
  {
    id: "3",
    name: "DataPro Solutions",
    industry: "Technology",
    location: "Mumbai",
    size: "100-500",
    rating: 4.6,
    internships: 15,
    description: "Data analytics and AI solutions provider for enterprise clients.",
    tags: ["AI/ML", "Data Science", "Enterprise"]
  },
  {
    id: "4",
    name: "FinanceFirst Corp",
    industry: "Finance",
    location: "Chennai",
    size: "200-1000",
    rating: 4.3,
    internships: 10,
    description: "Financial services company providing banking and investment solutions.",
    tags: ["Banking", "Investment", "Corporate"]
  },
  {
    id: "5",
    name: "Creative Minds Studio",
    industry: "Design",
    location: "Pune",
    size: "10-50",
    rating: 4.4,
    internships: 6,
    description: "Creative agency specializing in branding, content creation, and digital design.",
    tags: ["Creative", "Branding", "Content"]
  },
  {
    id: "6",
    name: "EduTech Innovation",
    industry: "Education",
    location: "Hyderabad",
    size: "50-200",
    rating: 4.7,
    internships: 9,
    description: "EdTech startup creating innovative learning solutions for students.",
    tags: ["EdTech", "Innovation", "Social Impact"]
  }
];

export default function Companies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const industries = [...new Set(companies.map(company => company.industry))];
  const locations = [...new Set(companies.map(company => company.location))];

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === "all" || company.industry === selectedIndustry;
    const matchesLocation = selectedLocation === "all" || company.location === selectedLocation;
    
    return matchesSearch && matchesIndustry && matchesLocation;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "fill-accent text-accent"
            : i < rating
            ? "fill-accent/50 text-accent"
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Partner Companies</h1>
        <p className="text-muted-foreground">
          Discover companies offering internships through our platform
        </p>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filter Companies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger>
                <SelectValue placeholder="All Industries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedIndustry("all");
                setSelectedLocation("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((company) => (
          <Card key={company.id} className="shadow-soft hover:shadow-medium transition-smooth">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{company.name}</CardTitle>
                    <CardDescription>{company.industry}</CardDescription>
                  </div>
                </div>
                
                <Badge variant="secondary">
                  {company.internships} internships
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {company.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{company.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{company.size} employees</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {renderStars(company.rating)}
                    </div>
                    <span className="font-medium">{company.rating}</span>
                    <span className="text-muted-foreground">rating</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {company.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    <Briefcase className="h-4 w-4 mr-2" />
                    View Internships
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCompanies.length === 0 && (
        <Card className="text-center p-12">
          <CardContent>
            <Building2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No companies found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria to find more companies.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedIndustry("all");
                setSelectedLocation("all");
              }}
            >
              Clear All Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}