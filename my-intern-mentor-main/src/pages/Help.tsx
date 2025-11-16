import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Phone,
  Mail,
  Bot,
  Target,
  Users,
  Star,
  ArrowRight
} from "lucide-react";

const faqs = [
  {
    question: "How does the AI recommendation system work?",
    answer: "Our AI analyzes your skills, education, interests, and career aspirations using advanced machine learning algorithms. It matches your profile with internship requirements, company culture, and growth opportunities to provide 3-5 highly relevant suggestions."
  },
  {
    question: "What information do I need to provide?",
    answer: "You'll need to share your education level, skills (both existing and desired), sector preferences, location preference, and optionally your career aspirations. The more accurate information you provide, the better our recommendations will be."
  },
  {
    question: "How accurate are the recommendations?",
    answer: "Our AI system has a 95% accuracy rate based on user feedback. The recommendations consider not just keyword matching but also your competence, growth potential, and alignment with company values."
  },
  {
    question: "Can I apply directly through the platform?",
    answer: "LakshyaIntern helps you discover the best opportunities. When you're ready to apply, we redirect you to the official PM Internship Scheme portal where you can submit your application."
  },
  {
    question: "Is the platform available in regional languages?",
    answer: "Yes! We support multiple Indian languages including Hindi, Tamil, Bengali, and more. You can switch languages from the top navigation bar or the Language Settings page."
  },
  {
    question: "What if I don't have much work experience?",
    answer: "No problem! Our system is designed for students and fresh graduates. We focus on your potential, learning ability, and interest areas rather than just prior experience."
  },
  {
    question: "How often are new internships added?",
    answer: "New internships are added daily as we partner with more companies. We recommend checking back regularly or enabling notifications to stay updated."
  },
  {
    question: "Can I update my profile later?",
    answer: "Absolutely! You can update your profile anytime to get fresh recommendations. As you learn new skills or change interests, updating your profile will improve recommendation accuracy."
  }
];

const supportChannels = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    action: "Start Chat",
    availability: "24/7 Available"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us your questions and we'll respond within 24 hours",
    action: "Send Email",
    availability: "support@lakshyaintern.com"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our support specialists",
    action: "Call Now",
    availability: "Mon-Fri, 9 AM - 6 PM"
  }
];

const guides = [
  {
    title: "Getting Started Guide",
    description: "Complete walkthrough of creating your profile and getting recommendations",
    duration: "5 min read",
    category: "Beginner"
  },
  {
    title: "Optimizing Your Profile",
    description: "Tips to improve your profile for better AI recommendations",
    duration: "3 min read",
    category: "Tips"
  },
  {
    title: "Understanding Match Scores",
    description: "How we calculate compatibility between you and internships",
    duration: "4 min read",
    category: "Advanced"
  },
  {
    title: "Application Best Practices",
    description: "How to write compelling applications that stand out",
    duration: "7 min read",
    category: "Applications"
  }
];

export default function Help() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <HelpCircle className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Help & Support</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions and get the help you need to make the most of LakshyaIntern
        </p>
      </div>

      {/* Quick Help Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="shadow-soft hover:shadow-medium transition-smooth cursor-pointer">
          <CardHeader className="text-center">
            <Bot className="h-12 w-12 text-primary mx-auto mb-2" />
            <CardTitle>AI Guide</CardTitle>
            <CardDescription>
              Get instant answers about how our AI recommendation system works
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              Ask AI Assistant
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-soft hover:shadow-medium transition-smooth cursor-pointer">
          <CardHeader className="text-center">
            <Target className="h-12 w-12 text-secondary mx-auto mb-2" />
            <CardTitle>Profile Help</CardTitle>
            <CardDescription>
              Learn how to optimize your profile for better recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="secondary" className="w-full">
              Profile Tips
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-soft hover:shadow-medium transition-smooth cursor-pointer">
          <CardHeader className="text-center">
            <Users className="h-12 w-12 text-accent mx-auto mb-2" />
            <CardTitle>Community</CardTitle>
            <CardDescription>
              Connect with other students and get peer support
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Join Community
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Support & Guides */}
        <div className="space-y-8">
          {/* Contact Support */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Support</h2>
            <div className="space-y-4">
              {supportChannels.map((channel, index) => (
                <Card key={index} className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <channel.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{channel.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {channel.description}
                        </p>
                        <p className="text-xs text-muted-foreground mb-3">
                          {channel.availability}
                        </p>
                        <Button size="sm">
                          {channel.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Helpful Guides */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Helpful Guides</h2>
            <div className="space-y-4">
              {guides.map((guide, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4">
                        <BookOpen className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">{guide.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {guide.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {guide.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {guide.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Still Need Help */}
      <Card className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-8 text-center">
          <Star className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Still Need Help?</h3>
          <p className="text-muted-foreground mb-6">
            Our support team is here to help you succeed. Don't hesitate to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Contact Support
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Call
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}