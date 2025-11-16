import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { ArrowRight, User, GraduationCap, MapPin, Briefcase, Target } from "lucide-react";

interface ProfileData {
  name: string;
  education: string;
  skills: string[];
  sectors: string[];
  location: string;
  experience: string;
  aspirations: string;
}

const skillsList = [
  "Programming", "Data Analysis", "Digital Marketing", "Content Writing", 
  "Design", "Finance", "Sales", "Research", "Communication", "Leadership"
];

const sectorsList = [
  "Technology", "Healthcare", "Finance", "Education", "Marketing", 
  "Government", "NGO", "Startup", "Consulting", "Manufacturing"
];

const locations = [
  "Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", 
  "Pune", "Ahmedabad", "Jaipur", "Remote", "Willing to relocate"
];

export default function Profile() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<ProfileData>({
    name: "",
    education: "",
    skills: [],
    sectors: [],
    location: "",
    experience: "",
    aspirations: ""
  });

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const handleSkillToggle = (skill: string) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleSectorToggle = (sector: string) => {
    setProfile(prev => ({
      ...prev,
      sectors: prev.sectors.includes(sector)
        ? prev.sectors.filter(s => s !== sector)
        : [...prev.sectors, sector]
    }));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Generate recommendations
      navigate("/recommendations", { state: { profile } });
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1: return profile.name && profile.education;
      case 2: return profile.skills.length > 0;
      case 3: return profile.sectors.length > 0;
      case 4: return profile.location;
      case 5: return true;
      default: return false;
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Personal Information</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your full name"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="education">Education Level *</Label>
                <Select value={profile.education} onValueChange={(value) => setProfile(prev => ({ ...prev, education: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12th">12th Grade</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                    <SelectItem value="undergraduate">Undergraduate</SelectItem>
                    <SelectItem value="postgraduate">Postgraduate</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Your Skills</h2>
            </div>
            
            <p className="text-muted-foreground">Select the skills you have or want to develop:</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skillsList.map((skill) => (
                <div key={skill} className="flex items-center space-x-2">
                  <Checkbox
                    id={skill}
                    checked={profile.skills.includes(skill)}
                    onCheckedChange={() => handleSkillToggle(skill)}
                  />
                  <Label htmlFor={skill} className="text-sm font-medium">{skill}</Label>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground">
              Selected: {profile.skills.length} skills
            </p>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Sector Interests</h2>
            </div>
            
            <p className="text-muted-foreground">Which sectors interest you the most?</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {sectorsList.map((sector) => (
                <div key={sector} className="flex items-center space-x-2">
                  <Checkbox
                    id={sector}
                    checked={profile.sectors.includes(sector)}
                    onCheckedChange={() => handleSectorToggle(sector)}
                  />
                  <Label htmlFor={sector} className="text-sm font-medium">{sector}</Label>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground">
              Selected: {profile.sectors.length} sectors
            </p>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Location Preference</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="location">Preferred Location *</Label>
                <Select value={profile.location} onValueChange={(value) => setProfile(prev => ({ ...prev, location: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your preferred location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="experience">Previous Experience</Label>
                <Select value={profile.experience} onValueChange={(value) => setProfile(prev => ({ ...prev, experience: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No experience</SelectItem>
                    <SelectItem value="some">Some projects/freelancing</SelectItem>
                    <SelectItem value="internship">Previous internship</SelectItem>
                    <SelectItem value="parttime">Part-time work</SelectItem>
                    <SelectItem value="fulltime">Full-time work</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Career Aspirations</h2>
            </div>
            
            <div>
              <Label htmlFor="aspirations">What are your career goals? (Optional)</Label>
              <textarea
                id="aspirations"
                value={profile.aspirations}
                onChange={(e) => setProfile(prev => ({ ...prev, aspirations: e.target.value }))}
                placeholder="Tell us about your career aspirations, what you want to achieve..."
                className="w-full mt-1 p-3 border border-border rounded-md min-h-[100px] resize-none"
              />
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Profile Summary</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Name:</strong> {profile.name}</p>
                <p><strong>Education:</strong> {profile.education}</p>
                <p><strong>Skills:</strong> {profile.skills.join(", ")}</p>
                <p><strong>Interests:</strong> {profile.sectors.join(", ")}</p>
                <p><strong>Location:</strong> {profile.location}</p>
                {profile.experience && <p><strong>Experience:</strong> {profile.experience}</p>}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-center">
            Build Your Profile for AI Recommendations
          </CardTitle>
          <CardDescription className="text-center">
            Help us understand your background to find the perfect internships
          </CardDescription>
          
          <div className="mt-6">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>
        
        <CardContent className="min-h-[400px]">
          {renderStepContent()}
          
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={step === 1}
            >
              Previous
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="gap-2"
            >
              {step === totalSteps ? "Get Recommendations" : "Next"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}