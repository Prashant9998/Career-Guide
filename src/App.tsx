import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import StudentPortal from './pages/StudentPortal';
import ProfessionalPortal from './pages/ProfessionalPortal';
import Assessment from './pages/Assessment';
import SkillAssessment from './pages/SkillAssessment';
import CareerExplorer from './pages/CareerExplorer';
import Dashboard from './pages/Dashboard';
import Resources from './pages/Resources';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/student" element={<StudentPortal />} />
          <Route path="/professional" element={<ProfessionalPortal />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/skills" element={<SkillAssessment />} />
          <Route path="/careers" element={<CareerExplorer />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;