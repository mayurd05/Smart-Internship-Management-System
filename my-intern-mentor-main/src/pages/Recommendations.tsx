import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Star, 
  RefreshCw, 
  ArrowRight,
  Building2,
  Calendar,
  Users,
  Target
} from "lucide-react";
import { useState, useEffect } from "react";

interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  stipend: string;
  matchScore: number;
  skills: string[];
  description: string;
  type: string;
  applications: number;
  deadline: string;
  logo?: string;
}

// Simulated AI recommendation engine
const generateRecommendations = (profile: any): Internship[] => {
  const internships: Internship[] = [
    {
      id: "1",
      title: "Software Development Intern",
      company: "TechStart India",
      location: "Bangalore",
      duration: "3 months",
      stipend: "₹15,000/month",
      matchScore: 95,
      skills: ["Programming", "Data Analysis"],
      description: "Work on cutting-edge web applications with our engineering team.",
      type: "Technology",
      applications: 45,
      deadline: "2024-10-15"
    },
    {
      id: "2",
      title: "Digital Marketing Intern",
      company: "GrowthLab",
      location: "Delhi",
      duration: "2 months",
      stipend: "₹12,000/month",
      matchScore: 87,
      skills: ["Digital Marketing", "Communication"],
      description: "Create and execute digital marketing campaigns for startups.",
      type: "Marketing",
      applications: 32,
      deadline: "2024-10-20"
    },
    {
      id: "3",
      title: "Data Science Intern",
      company: "DataPro Solutions",
      location: "Mumbai",
      duration: "4 months",
      stipend: "₹18,000/month",
      matchScore: 82,
      skills: ["Data Analysis", "Programming"],
      description: "Analyze large datasets and build predictive models.",
      type: "Technology",
      applications: 67,
      deadline: "2024-10-25"
    },
    {
      id: "4",
      title: "Content Writing Intern",
      company: "Creative Minds",
      location: "Remote",
      duration: "2 months",
      stipend: "₹10,000/month",
      matchScore: 78,
      skills: ["Content Writing", "Communication"],
      description: "Create engaging content for various digital platforms.",
      type: "Marketing",
      applications: 23,
      deadline: "2024-11-01"
    },
    {
      id: "5",
      title: "Financial Analyst Intern",
      company: "FinanceFirst",
      location: "Chennai",
      duration: "3 months",
      stipend: "₹16,000/month",
      matchScore: 75,
      skills: ["Finance", "Data Analysis"],
      description: "Support financial planning and analysis for growing businesses.",
      type: "Finance",
      applications: 41,
      deadline: "2024-10-30"
    }
  ];

  // Simple matching algorithm based on skills and sectors
  return internships
    .filter(internship => {
      const skillMatch = internship.skills.some(skill => profile.skills.includes(skill));
      const sectorMatch = profile.sectors.includes(internship.type);
      return skillMatch || sectorMatch;
    })
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 5);
};

export default function Recommendations() {
  const location = useLocation();
  const navigate = useNavigate();
  const { profile } = location.state || {};
  const [recommendations, setRecommendations] = useState<Internship[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!profile) {
      navigate("/profile");
      return;
    }

    // Simulate AI processing time
    setTimeout(() => {
      const recs = generateRecommendations(profile);
      setRecommendations(recs);
      setIsLoading(false);
    }, 2000);
  }, [profile, navigate]);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      const recs = generateRecommendations(profile);
      setRecommendations(recs);
      setIsLoading(false);
    }, 1500);
  };

  const getMatchColor = (score: number) => {
    if (score >= 90) return "bg-success text-success-foreground";
    if (score >= 80) return "bg-primary text-primary-foreground";
    if (score >= 70) return "bg-warning text-warning-foreground";
    return "bg-muted text-muted-foreground";
  };

  if (!profile) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Card className="shadow-soft">
          <CardContent className="p-12 text-center">
            <div className="flex flex-col items-center gap-6">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">AI is analyzing your profile...</h2>
                <p className="text-muted-foreground">
                  Our intelligent system is finding the best internships for you
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Your AI-Powered Recommendations</h1>
            <p className="text-muted-foreground">
              Based on your profile, we found {recommendations.length} perfect matches
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" onClick={handleRefresh} className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
            <Button onClick={() => navigate("/profile")} variant="outline">
              Update Profile
            </Button>
          </div>
        </div>
      </div>

      {/* Profile Summary */}
      <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Profile Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="font-medium">Skills:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {profile.skills.map((skill: string) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <span className="font-medium">Interests:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {profile.sectors.map((sector: string) => (
                  <Badge key={sector} variant="outline" className="text-xs">
                    {sector}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <span className="font-medium">Location:</span>
              <p className="mt-1">{profile.location}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recommendations.map((internship, index) => (
          <Card 
            key={internship.id} 
            className={`shadow-soft hover:shadow-medium transition-smooth cursor-pointer ${
              index === 0 ? 'ring-2 ring-primary ring-opacity-50' : ''
            }`}
            onClick={() => navigate(`/internship/${internship.id}`, { state: { internship, profile } })}
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getMatchColor(internship.matchScore)}>
                      {internship.matchScore}% Match
                    </Badge>
                    {index === 0 && (
                      <Badge className="bg-accent text-accent-foreground">
                        <Star className="h-3 w-3 mr-1" />
                        Top Pick
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl mb-1">{internship.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    {internship.company}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {internship.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{internship.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span>{internship.stipend}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{internship.applications} applied</span>
                  </div>
                </div>

                <div>
                  <span className="text-sm font-medium">Matching Skills:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {internship.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant={profile.skills.includes(skill) ? "default" : "outline"}
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Deadline: {new Date(internship.deadline).toLocaleDateString()}</span>
                  </div>
                  
                  <Button size="sm" className="gap-2">
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {recommendations.length === 0 && (
        <Card className="text-center p-12">
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">No recommendations found</h3>
            <p className="text-muted-foreground mb-4">
              Try updating your profile with more skills or different preferences.
            </p>
            <Button onClick={() => navigate("/profile")}>
              Update Profile
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}