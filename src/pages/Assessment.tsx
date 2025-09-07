import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';
import { ArrowLeft, ArrowRight, Brain, Target } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: { value: string; label: string; category: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "What type of work environment do you prefer?",
    options: [
      { value: "office", label: "Traditional office setting", category: "business" },
      { value: "remote", label: "Remote/flexible work", category: "technology" },
      { value: "outdoors", label: "Outdoor or field work", category: "science" },
      { value: "creative", label: "Creative studio or workshop", category: "creative" }
    ]
  },
  {
    id: 2,
    question: "Which activities do you find most engaging?",
    options: [
      { value: "problem_solving", label: "Solving complex problems", category: "technology" },
      { value: "helping_others", label: "Helping and supporting others", category: "healthcare" },
      { value: "creating", label: "Creating and designing things", category: "creative" },
      { value: "analyzing", label: "Analyzing data and trends", category: "business" }
    ]
  },
  {
    id: 3,
    question: "What motivates you most in your work?",
    options: [
      { value: "impact", label: "Making a positive impact on society", category: "healthcare" },
      { value: "innovation", label: "Innovation and cutting-edge technology", category: "technology" },
      { value: "financial", label: "Financial success and stability", category: "business" },
      { value: "expression", label: "Creative expression and artistic freedom", category: "creative" }
    ]
  },
  {
    id: 4,
    question: "How do you prefer to work with others?",
    options: [
      { value: "team_leader", label: "Leading and managing teams", category: "business" },
      { value: "collaborative", label: "Collaborative teamwork", category: "technology" },
      { value: "independent", label: "Working independently", category: "creative" },
      { value: "one_on_one", label: "One-on-one interactions", category: "healthcare" }
    ]
  },
  {
    id: 5,
    question: "What type of challenges excite you?",
    options: [
      { value: "technical", label: "Technical and analytical challenges", category: "technology" },
      { value: "interpersonal", label: "Interpersonal and communication challenges", category: "healthcare" },
      { value: "strategic", label: "Strategic and business challenges", category: "business" },
      { value: "artistic", label: "Artistic and creative challenges", category: "creative" }
    ]
  }
];

export default function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const navigate = useNavigate();

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleNext = () => {
    if (selectedAnswer) {
      setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: selectedAnswer }));
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer('');
      } else {
        // Calculate results and store in localStorage
        const categories = { business: 0, technology: 0, healthcare: 0, creative: 0, science: 0 };
        
        Object.values(answers).forEach(answer => {
          const question = questions.find(q => q.options.some(opt => opt.value === answer));
          const option = question?.options.find(opt => opt.value === answer);
          if (option) {
            categories[option.category as keyof typeof categories]++;
          }
        });

        // Add the final answer
        const finalQuestion = questions[currentQuestion];
        const finalOption = finalQuestion.options.find(opt => opt.value === selectedAnswer);
        if (finalOption) {
          categories[finalOption.category as keyof typeof categories]++;
        }

        localStorage.setItem('assessmentResults', JSON.stringify(categories));
        navigate('/dashboard');
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[questions[currentQuestion - 1].id] || '');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-6 py-2 text-blue-700 mb-6 animate-bounce-in">
              <Brain className="h-5 w-5" />
              <span className="font-medium">AI-Powered Assessment</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Career Assessment
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover your ideal career path through personalized questions
            </p>
          </div>

          {/* Progress Section */}
          <div className="mb-10 animate-fade-in-up animate-delay-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Question Progress</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Target className="h-4 w-4" />
                <span>Question {currentQuestion + 1} of {questions.length}</span>
              </div>
            </div>
            <div className="relative">
              <Progress value={progress} className="h-3 bg-gray-200" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* Question Card */}
          <Card className="glass-effect border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-scale-in animate-delay-300">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float">
                <span className="text-2xl font-bold text-white">{currentQuestion + 1}</span>
              </div>
              <CardTitle className="text-2xl mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                {questions[currentQuestion].question}
              </CardTitle>
              <CardDescription className="text-lg">
                Choose the option that best describes your preference
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                {questions[currentQuestion].options.map((option, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center space-x-4 p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer hover-lift animate-fade-in-up ${
                      selectedAnswer === option.value 
                        ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg' 
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-25 hover:to-purple-25'
                    }`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <RadioGroupItem value={option.value} id={option.value} className="text-blue-600" />
                    <Label 
                      htmlFor={option.value} 
                      className="flex-1 cursor-pointer text-base font-medium leading-relaxed"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="px-8 py-3 font-medium hover:bg-gray-50 transition-all duration-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={!selectedAnswer}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next Question'}
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