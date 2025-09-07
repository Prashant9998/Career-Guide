import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import CareerCard from '@/components/CareerCard';
import { TrendingUp, Target, BookOpen, User, Star } from 'lucide-react';

interface AssessmentResults {
  business: number;
  technology: number;
  healthcare: number;
  creative: number;
  science: number;
}

interface SkillRatings {
  [key: string]: number;
}

const careerRecommendations = {
  technology: [
    {
      title: "Software Engineer",
      description: "Design and develop software applications",
      salary: "$70k - $150k",
      growth: "22%",
      skills: ["Programming", "Problem Solving", "Algorithms", "Teamwork"],
      match: 95
    },
    {
      title: "Data Scientist",
      description: "Analyze complex data for business insights",
      salary: "$80k - $160k",
      growth: "31%",
      skills: ["Python", "Statistics", "Machine Learning", "Analytics"],
      match: 88
    }
  ],
  business: [
    {
      title: "Marketing Manager",
      description: "Develop and execute marketing strategies",
      salary: "$55k - $110k",
      growth: "10%",
      skills: ["Marketing Strategy", "Analytics", "Communication", "Leadership"],
      match: 92
    },
    {
      title: "Financial Analyst",
      description: "Analyze financial data for investment decisions",
      salary: "$60k - $100k",
      growth: "6%",
      skills: ["Financial Modeling", "Excel", "Analytics", "Communication"],
      match: 85
    }
  ],
  healthcare: [
    {
      title: "Registered Nurse",
      description: "Provide patient care in healthcare settings",
      salary: "$55k - $85k",
      growth: "7%",
      skills: ["Patient Care", "Medical Knowledge", "Communication", "Empathy"],
      match: 90
    }
  ],
  creative: [
    {
      title: "UX/UI Designer",
      description: "Create intuitive user experiences",
      salary: "$60k - $120k",
      growth: "13%",
      skills: ["Design Thinking", "Prototyping", "User Research", "Figma"],
      match: 87
    }
  ],
  science: [
    {
      title: "Research Scientist",
      description: "Conduct scientific research and experiments",
      salary: "$65k - $120k",
      growth: "8%",
      skills: ["Research Methods", "Data Analysis", "Critical Thinking", "Writing"],
      match: 83
    }
  ]
};

const skillCategories = {
  programming: "Technical Skills",
  data_analysis: "Technical Skills",
  web_development: "Technical Skills",
  database: "Technical Skills",
  communication: "Soft Skills",
  leadership: "Soft Skills",
  problem_solving: "Soft Skills",
  teamwork: "Soft Skills",
  design: "Creative Skills",
  writing: "Creative Skills",
  marketing: "Creative Skills",
  video_editing: "Creative Skills"
};

export default function Dashboard() {
  const [assessmentResults, setAssessmentResults] = useState<AssessmentResults | null>(null);
  const [skillRatings, setSkillRatings] = useState<SkillRatings | null>(null);
  const [topCareerCategory, setTopCareerCategory] = useState<string>('');

  useEffect(() => {
    // Load assessment results
    const savedResults = localStorage.getItem('assessmentResults');
    if (savedResults) {
      const results = JSON.parse(savedResults);
      setAssessmentResults(results);
      
      // Find top career category
      const topCategory = Object.entries(results).reduce((a, b) => 
        results[a[0]] > results[b[0]] ? a : b
      )[0];
      setTopCareerCategory(topCategory);
    }

    // Load skill ratings
    const savedSkills = localStorage.getItem('skillAssessment');
    if (savedSkills) {
      setSkillRatings(JSON.parse(savedSkills));
    }
  }, []);

  const getTopSkills = () => {
    if (!skillRatings) return [];
    return Object.entries(skillRatings)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([skill, rating]) => ({ skill, rating }));
  };

  const getSkillsToImprove = () => {
    if (!skillRatings) return [];
    return Object.entries(skillRatings)
      .filter(([,rating]) => rating < 5)
      .sort(([,a], [,b]) => a - b)
      .slice(0, 3)
      .map(([skill, rating]) => ({ skill, rating }));
  };

  const getRecommendedCareers = () => {
    if (!topCareerCategory || !careerRecommendations[topCareerCategory as keyof typeof careerRecommendations]) {
      return [];
    }
    return careerRecommendations[topCareerCategory as keyof typeof careerRecommendations];
  };

  if (!assessmentResults && !skillRatings) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto space-y-6">
            <User className="h-16 w-16 text-muted-foreground mx-auto" />
            <h1 className="text-2xl font-bold">Welcome to Your Dashboard</h1>
            <p className="text-muted-foreground">
              Take our assessments to get personalized career recommendations and insights.
            </p>
            <div className="flex flex-col gap-3">
              <Link to="/assessment">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                  Take Career Assessment
                </Button>
              </Link>
              <Link to="/skills">
                <Button variant="outline" className="w-full">
                  Take Skill Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Career Dashboard</h1>
          <p className="text-muted-foreground">
            Personalized insights and recommendations based on your assessments
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Career Recommendations */}
            {topCareerCategory && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Recommended Careers
                  </CardTitle>
                  <CardDescription>
                    Based on your career assessment, here are your top matches
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {getRecommendedCareers().map((career, index) => (
                      <CareerCard
                        key={index}
                        title={career.title}
                        description={career.description}
                        salary={career.salary}
                        growth={career.growth}
                        skills={career.skills}
                        matchPercentage={career.match}
                        onLearnMore={() => {}}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Skill Analysis */}
            {skillRatings && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Skill Analysis
                  </CardTitle>
                  <CardDescription>
                    Your current skill levels and areas for improvement
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Your Top Skills</h4>
                    <div className="space-y-3">
                      {getTopSkills().map(({ skill, rating }, index) => (
                        <div key={skill} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              #{index + 1}
                            </Badge>
                            <span className="capitalize">{skill.replace('_', ' ')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Progress value={rating * 10} className="w-20 h-2" />
                            <span className="text-sm text-muted-foreground">{rating}/10</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {getSkillsToImprove().length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3">Skills to Develop</h4>
                      <div className="space-y-3">
                        {getSkillsToImprove().map(({ skill, rating }) => (
                          <div key={skill} className="flex items-center justify-between">
                            <span className="capitalize">{skill.replace('_', ' ')}</span>
                            <div className="flex items-center gap-2">
                              <Progress value={rating * 10} className="w-20 h-2" />
                              <span className="text-sm text-muted-foreground">{rating}/10</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Assessment Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Assessment Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Career Assessment</span>
                  <Badge variant={assessmentResults ? "default" : "secondary"}>
                    {assessmentResults ? "Complete" : "Pending"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Skill Assessment</span>
                  <Badge variant={skillRatings ? "default" : "secondary"}>
                    {skillRatings ? "Complete" : "Pending"}
                  </Badge>
                </div>
                
                {(!assessmentResults || !skillRatings) && (
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground mb-3">
                      Complete all assessments for better recommendations
                    </p>
                    {!assessmentResults && (
                      <Link to="/assessment">
                        <Button size="sm" className="w-full mb-2">
                          Career Assessment
                        </Button>
                      </Link>
                    )}
                    {!skillRatings && (
                      <Link to="/skills">
                        <Button size="sm" variant="outline" className="w-full">
                          Skill Assessment
                        </Button>
                      </Link>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/careers">
                  <Button variant="outline" className="w-full justify-start">
                    <Target className="mr-2 h-4 w-4" />
                    Explore Careers
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Learning Resources
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => {
                    localStorage.removeItem('assessmentResults');
                    localStorage.removeItem('skillAssessment');
                    window.location.reload();
                  }}
                >
                  <Star className="mr-2 h-4 w-4" />
                  Retake Assessments
                </Button>
              </CardContent>
            </Card>

            {/* Career Match Score */}
            {assessmentResults && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Career Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(assessmentResults).map(([category, score]) => (
                      <div key={category} className="flex items-center justify-between">
                        <span className="capitalize text-sm">{category}</span>
                        <div className="flex items-center gap-2">
                          <Progress value={(score / 5) * 100} className="w-16 h-2" />
                          <span className="text-xs text-muted-foreground">{score}/5</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}