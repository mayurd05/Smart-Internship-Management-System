import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  DollarSign, 
  Calendar,
  Users,
  Building2,
  ExternalLink,
  Star,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Award
} from "lucide-react";

export default function InternshipDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const { internship, profile } = location.state || {};

  if (!internship) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardContent className="p-12 text-center">
            <AlertCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Internship Not Found</h2>
            <p className="text-muted-foreground mb-4">
              The internship you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate("/recommendations")}>
              Back to Recommendations
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getMatchColor = (score: number) => {
    if (score >= 90) return "bg-success text-success-foreground";
    if (score >= 80) return "bg-primary text-primary-foreground";
    if (score >= 70) return "bg-warning text-warning-foreground";
    return "bg-muted text-muted-foreground";
  };

  const matchingSkills = internship.skills.filter((skill: string) => 
    profile?.skills?.includes(skill)
  );

  const missingSkills = internship.skills.filter((skill: string) => 
    !profile?.skills?.includes(skill)
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Back Button */}
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)}
        className="mb-6 gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Recommendations
      </Button>

      {/* Header Card */}
      <Card className="shadow-soft mb-8">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge className={getMatchColor(internship.matchScore)}>
                  {internship.matchScore}% Match
                </Badge>
                <Badge variant="outline">{internship.type}</Badge>
              </div>
              
              <CardTitle className="text-3xl mb-2">{internship.title}</CardTitle>
              <CardDescription className="flex items-center gap-2 text-lg">
                <Building2 className="h-5 w-5" />
                {internship.company}
              </CardDescription>
            </div>
            
            <div className="text-right">
              <div className="text-2xl font-bold text-primary mb-1">
                {internship.stipend}
              </div>
              <div className="text-sm text-muted-foreground">
                {internship.duration}
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Internship Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {internship.description}
              </p>
            </CardContent>
          </Card>

          {/* Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle>Key Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 shrink-0" />
                  <span>Collaborate with experienced professionals on real-world projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 shrink-0" />
                  <span>Contribute to product development and feature implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 shrink-0" />
                  <span>Participate in team meetings and learning sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 shrink-0" />
                  <span>Present your work and findings to stakeholders</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card>
            <CardHeader>
              <CardTitle>Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Education</h4>
                  <p className="text-muted-foreground">
                    Undergraduate or Postgraduate in relevant field
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-3">Skills</h4>
                  <div className="space-y-3">
                    {matchingSkills.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-success mb-2">✓ Skills you have:</p>
                        <div className="flex flex-wrap gap-2">
                          {matchingSkills.map((skill: string) => (
                            <Badge key={skill} className="bg-success/10 text-success border-success/20">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {missingSkills.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-warning mb-2">○ Skills to develop:</p>
                        <div className="flex flex-wrap gap-2">
                          {missingSkills.map((skill: string) => (
                            <Badge key={skill} variant="outline" className="border-warning/50 text-warning">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                What You'll Gain
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span>Hands-on experience with industry-standard tools and practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span>Mentorship from experienced professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span>Certificate of completion and recommendation letter</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span>Potential for full-time offer based on performance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Info */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">{internship.location}</div>
                  <div className="text-sm text-muted-foreground">Location</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">{internship.duration}</div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">{internship.stipend}</div>
                  <div className="text-sm text-muted-foreground">Stipend</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">
                    {new Date(internship.deadline).toLocaleDateString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Application Deadline</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">{internship.applications} applicants</div>
                  <div className="text-sm text-muted-foreground">Applied so far</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Apply Button */}
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold mb-2">Ready to Apply?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                This will redirect you to the PM Internship Scheme portal
              </p>
              <Button size="lg" className="w-full gap-2">
                Apply Now
                <ExternalLink className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Match Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Why This Match?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Skills alignment: {Math.round((matchingSkills.length / internship.skills.length) * 100)}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Sector match: {profile?.sectors?.includes(internship.type) ? 'Perfect' : 'Good'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Competition level: {internship.applications < 50 ? 'Low' : 'Medium'}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}