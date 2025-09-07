import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import { 
  ArrowRight, 
  Brain, 
  Heart, 
  GraduationCap, 
  BookOpen, 
  Users, 
  MessageCircle,
  Sparkles,
  Target,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

export default function StudentPortal() {
  const studentFeatures = [
    {
      icon: Brain,
      title: "AI Mental Wellness Coach",
      description: "Get personalized mental health support and stress management techniques powered by AI.",
      gradient: "from-green-500 to-emerald-600",
      badge: "New"
    },
    {
      icon: Target,
      title: "Student Career Assessment",
      description: "Discover your strengths and ideal career paths with assessments designed for students.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: GraduationCap,
      title: "Academic Planning",
      description: "Plan your courses and academic journey aligned with your career goals.",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: MessageCircle,
      title: "Peer Support Network",
      description: "Connect with fellow students and share experiences in a supportive community.",
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  const mentalWellnessFeatures = [
    {
      title: "Stress Management",
      description: "AI-powered techniques to manage academic stress and anxiety"
    },
    {
      title: "Mood Tracking",
      description: "Track your daily mood and get personalized wellness insights"
    },
    {
      title: "Mindfulness Exercises",
      description: "Guided meditation and mindfulness practices for students"
    },
    {
      title: "Crisis Support",
      description: "24/7 AI support with professional referrals when needed"
    }
  ];

  const quickActions = [
    {
      title: "Take Career Assessment",
      description: "Discover your ideal career path",
      link: "/assessment",
      icon: Target,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Mental Wellness Check",
      description: "Start your wellness journey",
      link: "/wellness",
      icon: Heart,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Explore Careers",
      description: "Browse career opportunities",
      link: "/careers",
      icon: BookOpen,
      color: "from-purple-500 to-violet-600"
    },
    {
      title: "Join Community",
      description: "Connect with peers",
      link: "/community",
      icon: Users,
      color: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-teal-900 to-blue-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white/90 animate-bounce-in">
                <GraduationCap className="h-4 w-4" />
                <span className="text-sm font-medium">Student Success Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight animate-slide-in-top">
                Your Academic Journey
                <span className="block bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent animate-shimmer">
                  Starts Here
                </span>
              </h1>
              
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
                Comprehensive support for students including AI-powered mental wellness coaching, 
                career guidance, and academic planning tools.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animate-delay-400">
              <Link to="/assessment">
                <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  Start Career Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/wellness">
                <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  <Heart className="mr-2 h-5 w-5" />
                  Mental Wellness
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Student Features */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-6 py-2 text-green-700 mb-6 animate-bounce-in">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Student-Focused Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools and support designed specifically for student success and wellbeing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentFeatures.map((feature, index) => {
              const delayClass = `animate-delay-${(index + 1) * 100}`;
              const animationDelay = `${index * 0.5}s`;
              
              return (
                <Card key={index} className={`text-center hover-lift glass-effect border-0 animate-scale-in ${delayClass}`}>
                  <CardHeader>
                    <div className="relative">
                      <div 
                        className={`mx-auto w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 animate-float`} 
                        style={{animationDelay: animationDelay}}
                      >
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      {feature.badge && (
                        <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white animate-pulse">
                          {feature.badge}
                        </Badge>
                      )}
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

      {/* Mental Wellness Section */}
      <section className="py-24 bg-gradient-to-br from-green-900 via-teal-900 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.3\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center gap-2 bg-green-100/20 backdrop-blur-sm rounded-full px-6 py-2 text-green-200 mb-6">
                <Brain className="h-4 w-4" />
                <span className="text-sm font-medium">AI-Powered Mental Wellness</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Your Mental Health
                <span className="block bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  Matters Most
                </span>
              </h2>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Our AI-powered mental wellness coach provides personalized support, 
                helping you manage stress, anxiety, and maintain emotional wellbeing throughout your academic journey.
              </p>
              
              <div className="space-y-4">
                {mentalWellnessFeatures.map((feature, index) => (
                  <div key={index} className={`flex items-start gap-4 animate-fade-in-left animate-delay-${(index + 1) * 100}`}>
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mt-1">
                      <Heart className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-white/70">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/20 hover-lift">
                <div className="text-center space-y-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto animate-bounce-in">
                    <Brain className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Start Your Wellness Journey</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Get personalized mental health support designed specifically for students
                  </p>
                  <div className="space-y-4">
                    <Button size="lg" className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-semibold px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                      <Heart className="mr-2 h-5 w-5" />
                      Start Wellness Assessment
                    </Button>
                    <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
                      <Shield className="h-4 w-4" />
                      <span>100% Private & Confidential</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Quick Actions</h2>
            <p className="text-muted-foreground">Get started with these essential tools for your success</p>
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