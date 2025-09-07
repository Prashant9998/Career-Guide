import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
}

const skillCategories = [
  {
    name: "Technical Skills",
    skills: [
      { id: "programming", name: "Programming", category: "technical", description: "Software development and coding" },
      { id: "data_analysis", name: "Data Analysis", category: "technical", description: "Working with data and statistics" },
      { id: "web_development", name: "Web Development", category: "technical", description: "Building websites and web applications" },
      { id: "database", name: "Database Management", category: "technical", description: "Managing and querying databases" }
    ]
  },
  {
    name: "Soft Skills",
    skills: [
      { id: "communication", name: "Communication", category: "soft", description: "Verbal and written communication" },
      { id: "leadership", name: "Leadership", category: "soft", description: "Leading and motivating teams" },
      { id: "problem_solving", name: "Problem Solving", category: "soft", description: "Analytical thinking and solution finding" },
      { id: "teamwork", name: "Teamwork", category: "soft", description: "Collaborating effectively with others" }
    ]
  },
  {
    name: "Creative Skills",
    skills: [
      { id: "design", name: "Design", category: "creative", description: "Visual design and user experience" },
      { id: "writing", name: "Writing", category: "creative", description: "Content creation and copywriting" },
      { id: "marketing", name: "Marketing", category: "creative", description: "Brand promotion and strategy" },
      { id: "video_editing", name: "Video Editing", category: "creative", description: "Video production and editing" }
    ]
  }
];

export default function SkillAssessment() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [skillRatings, setSkillRatings] = useState<Record<string, number>>({});
  const navigate = useNavigate();

  const currentCategory = skillCategories[currentCategoryIndex];
  const progress = ((currentCategoryIndex + 1) / skillCategories.length) * 100;

  const handleSkillRating = (skillId: string, rating: number[]) => {
    setSkillRatings(prev => ({ ...prev, [skillId]: rating[0] }));
  };

  const handleNext = () => {
    if (currentCategoryIndex < skillCategories.length - 1) {
      setCurrentCategoryIndex(currentCategoryIndex + 1);
    } else {
      // Save results and navigate to dashboard
      localStorage.setItem('skillAssessment', JSON.stringify(skillRatings));
      navigate('/dashboard');
    }
  };

  const handlePrevious = () => {
    if (currentCategoryIndex > 0) {
      setCurrentCategoryIndex(currentCategoryIndex - 1);
    }
  };

  const allCurrentSkillsRated = currentCategory.skills.every(skill => 
    skillRatings[skill.id] !== undefined
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">Skill Assessment</h1>
              <span className="text-sm text-muted-foreground">
                Category {currentCategoryIndex + 1} of {skillCategories.length}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{currentCategory.name}</CardTitle>
              <CardDescription>
                Rate your current proficiency level for each skill (0 = No experience, 10 = Expert level)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {currentCategory.skills.map((skill) => (
                <div key={skill.id} className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Beginner</span>
                      <span>Current: {skillRatings[skill.id] || 0}/10</span>
                      <span>Expert</span>
                    </div>
                    <Slider
                      value={[skillRatings[skill.id] || 0]}
                      onValueChange={(value) => handleSkillRating(skill.id, value)}
                      max={10}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>
              ))}

              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentCategoryIndex === 0}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={!allCurrentSkillsRated}
                  className="bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  {currentCategoryIndex === skillCategories.length - 1 ? 'Complete Assessment' : 'Next Category'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}