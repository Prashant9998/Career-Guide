import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, DollarSign, Clock, Star } from 'lucide-react';

interface CareerCardProps {
  title: string;
  description: string;
  salary: string;
  growth: string;
  skills: string[];
  matchPercentage?: number;
  onLearnMore: () => void;
}

export default function CareerCard({
  title,
  description,
  salary,
  growth,
  skills,
  matchPercentage,
  onLearnMore
}: CareerCardProps) {
  return (
    <Card className="h-full hover-lift glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group animate-scale-in">
      <CardHeader className="relative overflow-hidden">
        {matchPercentage && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg animate-bounce-in">
              <Star className="h-3 w-3 mr-1" />
              {matchPercentage}% match
            </Badge>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
          <CardTitle className="text-xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6 relative">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 px-3 py-2 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors duration-300">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <DollarSign className="h-4 w-4 text-green-600" />
            <span className="font-medium text-green-700">{salary}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
            <TrendingUp className="h-4 w-4 text-blue-600" />
            <span className="font-medium text-blue-700">{growth} growth</span>
          </div>
        </div>
        
        <div>
          <p className="text-sm font-semibold mb-3 text-gray-700">Key Skills Required:</p>
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 4).map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className={`text-xs border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 animate-fade-in-up`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {skill}
              </Badge>
            ))}
            {skills.length > 4 && (
              <Badge variant="outline" className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 animate-fade-in-up animate-delay-400">
                +{skills.length - 4} more
              </Badge>
            )}
          </div>
        </div>
        
        <Button 
          onClick={onLearnMore} 
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Clock className="mr-2 h-4 w-4" />
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}