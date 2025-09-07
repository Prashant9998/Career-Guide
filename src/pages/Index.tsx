import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import FloatingNavbar from '@/components/ui/floating-navbar';
import StatsCounter from '@/components/ui/stats-counter';
import ParticleBackground from '@/components/ui/particle-background';
import FeatureShowcase from '@/components/ui/feature-showcase';
import { 
  ArrowRight, 
  Target, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Lightbulb, 
  CheckCircle, 
  Sparkles, 
  Zap, 
  Award,
  Brain,
  Heart,
  GraduationCap,
  Briefcase,
  BarChart3,
  Network,
  Shield,
  Rocket
} from 'lucide-react';

export default function Index() {
  const studentFeatures = [
    {
      id: 'wellness',
      icon: Brain,
      title: "AI Mental Wellness Coach",
      description: "Advanced AI-powered mental health support with personalized stress management and crisis intervention.",
      gradient: "from-green-500 to-emerald-600",
      badge: "AI-Powered",
      demo: "Real-time mood analysis and personalized wellness recommendations"
    },
    {
      id: 'assessment',
      icon: Target,
      title: "Smart Career Assessment",
      description: "Comprehensive personality and aptitude analysis using machine learning algorithms.",
      gradient: "from-blue-500 to-cyan-600",
      demo: "Interactive assessment with instant career matching"
    },
    {
      id: 'planning',
      icon: GraduationCap,
      title: "Academic Path Optimizer",
      description: "AI-driven course planning and academic milestone tracking for optimal career preparation.",
      gradient: "from-purple-500 to-violet-600",
      demo: "Personalized academic roadmap with real-time progress tracking"
    },
    {
      id: 'community',
      icon: Users,
      title: "Peer Learning Network",
      description: "Connect with like-minded students and access collaborative learning opportunities.",
      gradient: "from-pink-500 to-rose-600",
      demo: "Smart peer matching based on interests and goals"
    }
  ];

  const professionalFeatures = [
    {
      id: 'advancement',
      icon: TrendingUp,
      title: "Career Acceleration Engine",
      description: "Strategic career planning with AI-powered market analysis and opportunity identification.",
      gradient: "from-blue-500 to-indigo-600",
      demo: "Predictive career trajectory modeling with market insights"
    },
    {
      id: 'skills',
      icon: BarChart3,
      title: "Skills Intelligence Platform",
      description: "Advanced skill gap analysis with personalized development recommendations.",
      gradient: "from-purple-500 to-violet-600",
      demo: "Real-time skill demand analysis and learning path optimization"
    },
    {
      id: 'networking',
      icon: Network,
      title: "Executive Network Hub",
      description: "AI-curated professional networking with industry leaders and decision makers.",
      gradient: "from-green-500 to-emerald-600",
      demo: "Smart networking recommendations based on career goals"
    },
    {
      id: 'leadership',
      icon: Award,
      title: "Leadership Development Suite",
      description: "Comprehensive leadership training with personalized coaching and mentorship.",
      gradient: "from-orange-500 to-red-600",
      demo: "360-degree leadership assessment with development roadmap"
    }
  ];

  const benefits = [
    "AI-powered personalized recommendations based on advanced machine learning",
    "Real-time industry insights and salary benchmarking with market predictions",
    "Comprehensive skill development roadmaps with progress tracking",
    "Access to premium educational resources and expert mentorship",
    "Advanced analytics dashboard with career progression insights"
  ];

  const stats = [
    { number: 50000, label: "Students & Professionals Helped", icon: Users, suffix: "+" },
    { number: 1200, label: "Career Paths Analyzed", icon: Target, suffix: "+" },
    { number: 98, label: "Success Rate", icon: Award, suffix: "%" },
    { number: 24, label: "AI-Powered Support", icon: Zap, suffix: "/7" }
  ];

  return (
    <div className="min-h-screen">
      <FloatingNavbar />
      
      {/* Hero Section with Particle Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <ParticleBackground />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 text-white/90 animate-bounce-in">
                <Rocket className="h-5 w-5" />
                <span className="text-sm font-medium">Next-Generation AI Career Platform</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight animate-slide-in-top">
                Your Future Career
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-shimmer">
                  Powered by AI
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
                Revolutionary AI-powered career guidance platform combining advanced machine learning, 
                mental wellness support, and personalized development paths for students and professionals.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in-up animate-delay-400">
              <Link to="/student">
                <Button size="lg" className="text-xl px-12 py-8 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/25">
                  <GraduationCap className="mr-3 h-6 w-6" />
                  Student Platform
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/professional">
                <Button size="lg" className="text-xl px-12 py-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25">
                  <Briefcase className="mr-3 h-6 w-6" />
                  Professional Suite
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up animate-delay-600">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <StatsCounter end={stat.number} suffix={stat.suffix} />
                  <div className="text-white/70 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Features Showcase */}
      <FeatureShowcase
        features={studentFeatures}
        title="Student Success Platform"
        subtitle="Comprehensive AI-powered tools designed specifically for student success, mental wellness, and career preparation"
      />

      {/* Professional Features Showcase */}
      <FeatureShowcase
        features={professionalFeatures}
        title="Professional Excellence Suite"
        subtitle="Advanced career acceleration tools powered by AI for ambitious professionals and executives"
      />

      {/* Benefits Section with Enhanced Design */}
      <section className="py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.3\"%3E%3Cpath d=\"M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white/90 mb-8">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">Enterprise-Grade Platform</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-10 text-white leading-tight">
                Why Choose 
                <span className="block bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
                  CareerGuide?
                </span>
              </h2>
              
              <div className="space-y-8">
                {benefits.map((benefit, index) => {
                  const delayClass = `animate-delay-${(index + 1) * 100}`;
                  
                  return (
                    <div key={index} className={`flex items-start gap-6 animate-fade-in-left ${delayClass}`}>
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mt-1">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-white/90 text-xl leading-relaxed">{benefit}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="bg-white/10 backdrop-blur-xl p-12 rounded-3xl border border-white/20 hover-lift shadow-2xl">
                <div className="text-center space-y-10">
                  <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto animate-bounce-in">
                    <Lightbulb className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-white">Ready to Transform Your Career?</h3>
                  <p className="text-white/80 text-xl leading-relaxed">
                    Join thousands of students and professionals who have accelerated their careers with our AI-powered platform
                  </p>
                  <div className="space-y-6">
                    <Link to="/student">
                      <Button size="lg" className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-semibold px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl">
                        <GraduationCap className="mr-2 h-6 w-6" />
                        Student Platform
                        <ArrowRight className="ml-2 h-6 w-6" />
                      </Button>
                    </Link>
                    <Link to="/professional">
                      <Button size="lg" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl">
                        <Briefcase className="mr-2 h-6 w-6" />
                        Professional Suite
                        <ArrowRight className="ml-2 h-6 w-6" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Dynamic Background */}
      <section className="py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 text-white/90 mb-8">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium">Start Your Journey Today</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Transform Your Career with AI
            </h2>
            <p className="text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Take the first step towards your dream career with our revolutionary AI-powered platform
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
              <Link to="/assessment">
                <Button size="lg" className="text-xl px-12 py-8 bg-white text-blue-600 hover:bg-gray-100 font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  <Target className="mr-3 h-6 w-6" />
                  Start Assessment
                </Button>
              </Link>
              <Link to="/careers">
                <Button size="lg" variant="outline" className="text-xl px-12 py-8 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold transform hover:scale-105 transition-all duration-300">
                  <BookOpen className="mr-3 h-6 w-6" />
                  Explore Careers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}