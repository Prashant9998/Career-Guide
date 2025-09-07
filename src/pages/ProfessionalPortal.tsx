import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import { 
  ArrowRight, 
  Briefcase, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Target,
  Sparkles,
  Award,
  Zap,
  BarChart3,
  Network,
  Lightbulb
} from 'lucide-react';

export default function ProfessionalPortal() {
  const professionalFeatures = [
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description: "Strategic guidance for climbing the corporate ladder and achieving your professional goals.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: BarChart3,
      title: "Skills Gap Analysis",
      description: "Identify skill gaps and get personalized recommendations for professional development.",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: Network,
      title: "Professional Networking",
      description: "Connect with industry leaders and expand your professional network strategically.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Award,
      title: "Leadership Development",
      description: "Develop leadership skills and prepare for management and executive roles.",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const careerServices = [
    {
      title: "Executive Coaching",
      description: "One-on-one coaching for senior professionals and executives"
    },
    {
      title: "Career Transition",
      description: "Strategic support for changing industries or roles"
    },
    {
      title: "Salary Negotiation",
      description: "Expert guidance on negotiating compensation packages"
    },
    {
      title: "Personal Branding",
      description: "Build a strong professional brand and online presence"
    }
  ];

  const quickActions = [
    {
      title: "Career Assessment",
      description: "Evaluate your career trajectory",
      link: "/assessment",
      icon: Target,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Skill Analysis",
      description: "Identify development areas",
      link: "/skills",
      icon: BarChart3,
      color: "from-purple-500 to-violet-600"
    },
    {
      title: "Industry Insights",
      description: "Stay ahead of trends",
      link: "/careers",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Executive Resources",
      description: "Leadership development",
      link: "/resources",
      icon: Award,
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white/90 animate-bounce-in">
                <Briefcase className="h-4 w-4" />
                <span className="text-sm font-medium">Professional Development Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight animate-slide-in-top">
                Advance Your Career
                <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-shimmer">
                  To New Heights
                </span>
              </h1>
              
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
                Strategic career guidance for professionals seeking advancement, leadership development, 
                and industry expertise to excel in their careers.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animate-delay-400">
              <Link to="/assessment">
                <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  Career Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/skills">
                <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Skills Analysis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Features */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-6 py-2 text-blue-700 mb-6 animate-bounce-in">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Professional Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Accelerate Your Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools and insights designed for ambitious professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {professionalFeatures.map((feature, index) => {
              const delayClass = `animate-delay-${(index + 1) * 100}`;
              const animationDelay = `${index * 0.5}s`;
              
              return (
                <Card key={index} className={`text-center hover-lift glass-effect border-0 animate-scale-in ${delayClass}`}>
                  <CardHeader>
                    <div 
                      className={`mx-auto w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 animate-float`} 
                      style={{animationDelay: animationDelay}}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Services Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.3\"%3E%3Cpath d=\"M30 30l15-15v30z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center gap-2 bg-blue-100/20 backdrop-blur-sm rounded-full px-6 py-2 text-blue-200 mb-6">
                <Briefcase className="h-4 w-4" />
                <span className="text-sm font-medium">Executive Services</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Premium Career
                <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Access premium career services designed for executives and senior professionals 
                looking to make strategic career moves and maximize their potential.
              </p>
              
              <div className="space-y-4">
                {careerServices.map((service, index) => (
                  <div key={index} className={`flex items-start gap-4 animate-fade-in-left animate-delay-${(index + 1) * 100}`}>
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mt-1">
                      <Zap className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{service.title}</h4>
                      <p className="text-white/70">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/20 hover-lift">
                <div className="text-center space-y-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto animate-bounce-in">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Ready to Excel?</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Take your career to the next level with our professional development platform
                  </p>
                  <div className="space-y-4">
                    <Button size="lg" className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                      <Briefcase className="mr-2 h-5 w-5" />
                      Start Professional Assessment
                    </Button>
                    <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
                      <Award className="h-4 w-4" />
                      <span>Trusted by 10,000+ Professionals</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Professional Tools</h2>
            <p className="text-muted-foreground">Essential resources for your professional development</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.link}>
                <Card className="hover-lift glass-effect border-0 h-full animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <action.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}