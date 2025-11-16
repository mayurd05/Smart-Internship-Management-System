import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Users, 
  Building2, 
  Briefcase,
  TrendingUp,
  TrendingDown,
  Activity,
  Target,
  Calendar,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const stats = [
  {
    title: "Total Students",
    value: "12,847",
    change: "+12%",
    trend: "up",
    icon: Users
  },
  {
    title: "Active Internships",
    value: "1,234",
    change: "+8%",
    trend: "up",
    icon: Briefcase
  },
  {
    title: "Partner Companies",
    value: "456",
    change: "+15%",
    trend: "up",
    icon: Building2
  },
  {
    title: "Successful Matches",
    value: "89%",
    change: "-2%",
    trend: "down",
    icon: Target
  }
];

const recentActivity = [
  {
    type: "New Registration",
    description: "45 new students registered today",
    time: "2 hours ago",
    status: "positive"
  },
  {
    type: "Company Partnership",
    description: "TechCorp India added 15 new internships",
    time: "4 hours ago",
    status: "positive"
  },
  {
    type: "System Alert",
    description: "AI recommendation engine optimized",
    time: "6 hours ago",
    status: "neutral"
  },
  {
    type: "Application Surge",
    description: "300% increase in applications this week",
    time: "1 day ago",
    status: "positive"
  }
];

const quickActions = [
  {
    title: "Manage Internships",
    description: "Add, edit, or remove internship listings",
    icon: Briefcase,
    action: "/admin/internships"
  },
  {
    title: "View Analytics",
    description: "Detailed platform usage and performance metrics",
    icon: BarChart3,
    action: "#"
  },
  {
    title: "User Management",
    description: "Manage student and company accounts",
    icon: Users,
    action: "#"
  },
  {
    title: "AI Configuration",
    description: "Configure recommendation algorithm parameters",
    icon: Activity,
    action: "#"
  }
];

export default function Admin() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor platform performance and manage the LakshyaIntern system
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {stat.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-success" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-destructive" />
                    )}
                    <span className={`text-sm ${
                      stat.trend === "up" ? "text-success" : "text-destructive"
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-muted-foreground">vs last month</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common administrative tasks and system management
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {quickActions.map((action, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-smooth cursor-pointer"
                  onClick={() => navigate(action.action)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <action.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{action.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {action.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Latest system events and notifications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === "positive" ? "bg-success" :
                    activity.status === "negative" ? "bg-destructive" :
                    "bg-primary"
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-sm">{activity.type}</h4>
                      <Badge variant="outline" className="text-xs">
                        {activity.time}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full mt-4">
              View All Activity
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card className="mt-8 shadow-soft">
        <CardHeader>
          <CardTitle>System Status</CardTitle>
          <CardDescription>
            Current status of platform services and components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
              </div>
              <h3 className="font-medium">AI Engine</h3>
              <p className="text-sm text-muted-foreground">Operational</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
              </div>
              <h3 className="font-medium">Database</h3>
              <p className="text-sm text-muted-foreground">Healthy</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <div className="w-3 h-3 bg-warning rounded-full"></div>
              </div>
              <h3 className="font-medium">Email Service</h3>
              <p className="text-sm text-muted-foreground">Degraded</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}