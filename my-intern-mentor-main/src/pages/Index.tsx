import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Target,
  Users,
  Globe,
  Sparkles,
  CheckCircle,
  Star,
  Award,
  TrendingUp,
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description:
        "Our intelligent algorithm analyzes your skills, interests, and goals to find perfect internship matches.",
    },
    {
      icon: Target,
      title: "Personalized Recommendations",
      description:
        "Get 3-5 carefully curated internship suggestions instead of overwhelming lists.",
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description:
        "Access the platform in your preferred language with voice input/output support.",
    },
    {
      icon: Users,
      title: "Inclusive Design",
      description:
        "Built for first-generation learners with simple visuals and minimal digital complexity.",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Students Helped" },
    { number: "500+", label: "Partner Companies" },
    { number: "95%", label: "Match Accuracy" },
    { number: "24/7", label: "AI Support" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Powered Internship Discovery
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Find Your Perfect
              <span className="block text-gradient bg-gradient-to-r from-white to-white/80">
                Internship Match
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              LakshyaIntern uses advanced AI to match your skills, interests,
              and aspirations with the best internship opportunities. Get
              personalized recommendations in minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate("/profile")}
                className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-4 h-auto"
              >
                Find My Internship
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                style={{ backgroundColor: "skyblue" }}
                variant="outline"
                size="lg"
                onClick={() => navigate("/help")}
                className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 h-auto"
              >
                Learn How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why Choose LakshyaIntern</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Intelligent Internship Discovery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI system goes beyond keyword matching to understand your
              competence, aspirations, and potential for the perfect internship
              fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-medium transition-smooth p-6"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Get matched with your ideal internship in 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Build Your Profile</h3>
              <p className="text-muted-foreground">
                Share your education, skills, interests, and career aspirations
                through our simple form.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your competence and matches you with relevant
                opportunities using advanced algorithms.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Get Recommendations
              </h3>
              <p className="text-muted-foreground">
                Receive 3-5 personalized internship recommendations with
                detailed match explanations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="shadow-strong bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-12">
              <Award className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Find Your Perfect Internship?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of students who have discovered their ideal
                internships through AI-powered matching.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => navigate("/profile")}
                  className="font-semibold text-lg px-8 py-4 h-auto"
                >
                  Start Your Journey
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate("/companies")}
                  className="font-semibold text-lg px-8 py-4 h-auto"
                >
                  Browse Companies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
