import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import CareerCard from '@/components/CareerCard';
import Navbar from '@/components/Navbar';
import { Search, Filter } from 'lucide-react';

interface Career {
  id: string;
  title: string;
  description: string;
  salary: string;
  growth: string;
  skills: string[];
  category: string;
  education: string;
  workEnvironment: string;
  responsibilities: string[];
  prospects: string;
}

const careers: Career[] = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    description: "Design, develop, and maintain software applications and systems.",
    salary: "$70k - $150k",
    growth: "22%",
    skills: ["Programming", "Problem Solving", "Algorithms", "Teamwork"],
    category: "technology",
    education: "Bachelor's in Computer Science or related field",
    workEnvironment: "Office or remote, collaborative team environment",
    responsibilities: [
      "Write clean, efficient, and maintainable code",
      "Collaborate with cross-functional teams",
      "Debug and troubleshoot software issues",
      "Participate in code reviews and technical discussions"
    ],
    prospects: "Excellent job prospects with high demand across industries"
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Analyze complex data to help organizations make informed decisions.",
    salary: "$80k - $160k",
    growth: "31%",
    skills: ["Python", "Statistics", "Machine Learning", "Data Visualization"],
    category: "technology",
    education: "Bachelor's/Master's in Data Science, Statistics, or related field",
    workEnvironment: "Office or remote, analytical and research-focused",
    responsibilities: [
      "Collect and analyze large datasets",
      "Build predictive models and algorithms",
      "Create data visualizations and reports",
      "Communicate insights to stakeholders"
    ],
    prospects: "Very high demand with excellent growth opportunities"
  },
  {
    id: "ux-designer",
    title: "UX/UI Designer",
    description: "Create intuitive and engaging user experiences for digital products.",
    salary: "$60k - $120k",
    growth: "13%",
    skills: ["Design Thinking", "Prototyping", "User Research", "Figma"],
    category: "creative",
    education: "Bachelor's in Design, HCI, or related field",
    workEnvironment: "Creative studio or office, collaborative with developers",
    responsibilities: [
      "Conduct user research and usability testing",
      "Create wireframes and prototypes",
      "Design user interfaces and experiences",
      "Collaborate with development teams"
    ],
    prospects: "Growing demand as digital products become more important"
  },
  {
    id: "marketing-manager",
    title: "Marketing Manager",
    description: "Develop and execute marketing strategies to promote products and services.",
    salary: "$55k - $110k",
    growth: "10%",
    skills: ["Marketing Strategy", "Analytics", "Communication", "Leadership"],
    category: "business",
    education: "Bachelor's in Marketing, Business, or related field",
    workEnvironment: "Office environment, client meetings, campaign management",
    responsibilities: [
      "Develop marketing campaigns and strategies",
      "Analyze market trends and consumer behavior",
      "Manage marketing budgets and resources",
      "Lead marketing teams and projects"
    ],
    prospects: "Stable demand with opportunities across all industries"
  },
  {
    id: "nurse",
    title: "Registered Nurse",
    description: "Provide patient care and support in healthcare settings.",
    salary: "$55k - $85k",
    growth: "7%",
    skills: ["Patient Care", "Medical Knowledge", "Communication", "Empathy"],
    category: "healthcare",
    education: "Associate or Bachelor's degree in Nursing",
    workEnvironment: "Hospitals, clinics, healthcare facilities",
    responsibilities: [
      "Assess and monitor patient health",
      "Administer medications and treatments",
      "Educate patients and families",
      "Collaborate with healthcare teams"
    ],
    prospects: "Strong job security with consistent demand"
  },
  {
    id: "financial-analyst",
    title: "Financial Analyst",
    description: "Analyze financial data to guide business investment decisions.",
    salary: "$60k - $100k",
    growth: "6%",
    skills: ["Financial Modeling", "Excel", "Analytics", "Communication"],
    category: "business",
    education: "Bachelor's in Finance, Economics, or related field",
    workEnvironment: "Corporate offices, financial institutions",
    responsibilities: [
      "Analyze financial statements and market trends",
      "Create financial models and forecasts",
      "Prepare investment recommendations",
      "Present findings to management"
    ],
    prospects: "Steady demand in corporate and financial sectors"
  }
];

export default function CareerExplorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);

  const categories = ['all', 'technology', 'business', 'healthcare', 'creative'];

  const filteredCareers = careers.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || career.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Explore Career Opportunities</h1>
          <p className="text-muted-foreground mb-6">
            Discover detailed information about various career paths, including requirements, salary ranges, and growth prospects.
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search careers, skills, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="creative">Creative</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Showing {filteredCareers.length} career{filteredCareers.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Career Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map((career) => (
            <CareerCard
              key={career.id}
              title={career.title}
              description={career.description}
              salary={career.salary}
              growth={career.growth}
              skills={career.skills}
              onLearnMore={() => setSelectedCareer(career)}
            />
          ))}
        </div>

        {filteredCareers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No careers found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Career Detail Modal */}
        <Dialog open={!!selectedCareer} onOpenChange={() => setSelectedCareer(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            {selectedCareer && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedCareer.title}</DialogTitle>
                  <DialogDescription className="text-base">
                    {selectedCareer.description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Salary Range</h4>
                      <p className="text-muted-foreground">{selectedCareer.salary}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Job Growth</h4>
                      <p className="text-muted-foreground">{selectedCareer.growth} expected growth</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Education Requirements</h4>
                    <p className="text-muted-foreground">{selectedCareer.education}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Work Environment</h4>
                    <p className="text-muted-foreground">{selectedCareer.workEnvironment}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Key Skills Required</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCareer.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Typical Responsibilities</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {selectedCareer.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Career Prospects</h4>
                    <p className="text-muted-foreground">{selectedCareer.prospects}</p>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}