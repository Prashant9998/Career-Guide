import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, LucideIcon } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  badge?: string;
  demo?: string;
}

interface FeatureShowcaseProps {
  features: Feature[];
  title: string;
  subtitle: string;
}

export default function FeatureShowcase({ features, title, subtitle }: FeatureShowcaseProps) {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white/90 mb-6 animate-bounce-in">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Advanced Features</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            {title}
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Interactive Feature Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Feature List */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={feature.id}
                  className={`cursor-pointer transition-all duration-500 border-0 ${
                    activeFeature === index
                      ? 'bg-white/20 backdrop-blur-xl scale-105 shadow-2xl'
                      : 'bg-white/5 backdrop-blur-sm hover:bg-white/10'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center flex-shrink-0 transform transition-all duration-300 ${
                        activeFeature === index ? 'scale-110' : ''
                      }`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                          {feature.badge && (
                            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs">
                              {feature.badge}
                            </Badge>
                          )}
                        </div>
                        <p className="text-white/70 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Feature Demo */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Demo Content */}
                <div className="text-center space-y-6 z-10">
                  <div className={`w-20 h-20 bg-gradient-to-r ${features[activeFeature].gradient} rounded-2xl flex items-center justify-center mx-auto animate-bounce-in`}>
                    {(() => {
                      const IconComponent = features[activeFeature].icon;
                      return <IconComponent className="h-10 w-10 text-white" />;
                    })()}
                  </div>
                  <h4 className="text-2xl font-bold text-white">{features[activeFeature].title}</h4>
                  <p className="text-white/80">{features[activeFeature].demo || 'Interactive demo coming soon'}</p>
                  <Button className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm">
                    Try Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Animated Background */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full animate-float"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-300 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-300 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}