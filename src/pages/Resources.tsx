import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import { Search, BookOpen, Video, FileText, ExternalLink, Clock, User } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'course' | 'guide';
  category: string;
  duration: string;
  author: string;
  url: string;
  tags: string[];
}

const resources: Resource[] = [
  {
    id: "1",
    title: "Complete Guide to Software Engineering Career Path",
    description: "Everything you need to know about becoming a software engineer, from learning to code to landing your first job.",
    type: "guide",
    category: "technology",
    duration: "15 min read",
    author: "Tech Career Guide",
    url: "#",
    tags: ["programming", "career-change", "beginner"]
  },
  {
    id: "2",
    title: "Data Science Fundamentals Course",
    description: "Learn the basics of data science including Python, statistics, and machine learning concepts.",
    type: "course",
    category: "technology",
    duration: "6 weeks",
    author: "DataLearn Academy",
    url: "#",
    tags: ["data-science", "python", "statistics"]
  },
  {
    id: "3",
    title: "How to Ace Your Job Interview",
    description: "Professional tips and strategies for succeeding in job interviews across different industries.",
    type: "video",
    category: "general",
    duration: "25 min",
    author: "Career Coach Pro",
    url: "#",
    tags: ["interview", "job-search", "communication"]
  },
  {
    id: "4",
    title: "UX Design Portfolio Building Guide",
    description: "Step-by-step guide to creating a compelling UX design portfolio that gets you hired.",
    type: "article",
    category: "creative",
    duration: "12 min read",
    author: "Design Career Hub",
    url: "#",
    tags: ["ux-design", "portfolio", "creative"]
  },
  {
    id: "5",
    title: "Financial Planning for Your Career",
    description: "Learn how to manage your finances and plan for career transitions and growth.",
    type: "guide",
    category: "business",
    duration: "20 min read",
    author: "Finance Pro",
    url: "#",
    tags: ["finance", "planning", "career-growth"]
  },
  {
    id: "6",
    title: "Healthcare Career Opportunities in 2024",
    description: "Explore emerging opportunities in healthcare and what skills are in demand.",
    type: "article",
    category: "healthcare",
    duration: "10 min read",
    author: "Health Career Insights",
    url: "#",
    tags: ["healthcare", "trends", "opportunities"]
  },
  {
    id: "7",
    title: "Networking Strategies for Professionals",
    description: "Build meaningful professional relationships and expand your career network effectively.",
    type: "video",
    category: "general",
    duration: "18 min",
    author: "Professional Network",
    url: "#",
    tags: ["networking", "relationships", "career-growth"]
  },
  {
    id: "8",
    title: "Remote Work Skills Masterclass",
    description: "Essential skills and tools for succeeding in remote work environments.",
    type: "course",
    category: "general",
    duration: "4 weeks",
    author: "Remote Work Academy",
    url: "#",
    tags: ["remote-work", "productivity", "communication"]
  }
];

const categories = [
  { value: "all", label: "All Resources" },
  { value: "technology", label: "Technology" },
  { value: "business", label: "Business" },
  { value: "healthcare", label: "Healthcare" },
  { value: "creative", label: "Creative" },
  { value: "general", label: "General" }
];

const resourceTypes = [
  { value: "all", label: "All Types" },
  { value: "article", label: "Articles" },
  { value: "video", label: "Videos" },
  { value: "course", label: "Courses" },
  { value: "guide", label: "Guides" }
];

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'article': return <FileText className="h-4 w-4" />;
      case 'video': return <Video className="h-4 w-4" />;
      case 'course': return <BookOpen className="h-4 w-4" />;
      case 'guide': return <BookOpen className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article': return 'bg-blue-100 text-blue-800';
      case 'video': return 'bg-red-100 text-red-800';
      case 'course': return 'bg-green-100 text-green-800';
      case 'guide': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Learning Resources</h1>
          <p className="text-muted-foreground mb-6">
            Curated educational content to help you advance your career and develop new skills.
          </p>
          
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search resources, topics, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Filters */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-6">
          <TabsList className="grid w-full grid-cols-6">
            {categories.map((category) => (
              <TabsTrigger key={category.value} value={category.value} className="text-xs">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <Tabs value={selectedType} onValueChange={setSelectedType} className="mb-8">
          <TabsList className="grid w-full grid-cols-5">
            {resourceTypes.map((type) => (
              <TabsTrigger key={type.value} value={type.value} className="text-xs">
                {type.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Results */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Showing {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 mb-2">
                    {getResourceIcon(resource.type)}
                    <Badge className={`text-xs ${getTypeColor(resource.type)}`}>
                      {resource.type}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                <CardDescription className="text-sm">{resource.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{resource.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{resource.author}</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {resource.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {resource.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{resource.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
                
                <Button className="w-full" variant="outline">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Access Resource
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">No resources found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => { 
                setSearchTerm(''); 
                setSelectedCategory('all'); 
                setSelectedType('all'); 
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Featured Learning Paths */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Featured Learning Paths</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl">Tech Career Starter</CardTitle>
                <CardDescription>
                  Complete roadmap for breaking into the technology industry
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Programming fundamentals</li>
                  <li>• Portfolio development</li>
                  <li>• Interview preparation</li>
                  <li>• Industry networking</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Start Learning Path
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-xl">Career Transition Guide</CardTitle>
                <CardDescription>
                  Essential resources for changing careers successfully
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Skills assessment</li>
                  <li>• Resume optimization</li>
                  <li>• Networking strategies</li>
                  <li>• Financial planning</li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Start Learning Path
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}