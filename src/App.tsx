import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Training from "./pages/Training";
import Consulting from "./pages/Consulting";
import HireMinds from "./pages/HireMinds";
import CloudLabs from "./pages/CloudLabs";
import DiscoverUs from "./pages/DiscoverUs";
import NotFound from "./pages/NotFound";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import CoursePage from "./pages/CoursePage";
import DataAnalytics from "./pages/consulting/DataAnalytics";
import DevOpsMLOps from "./pages/consulting/DevOpsMLOps";
import MultiCloud from "./pages/consulting/MultiCloud";
import CyberSecurity from "./pages/consulting/CyberSecurity";
import MainframesPowerSystems from "./pages/consulting/MainframesPowerSystems";
import Blockchain from "./pages/consulting/Blockchain";
import ApplicationModernization from "./pages/consulting/ApplicationModernization";
import ITSM_ITOM_ITAM from "./pages/consulting/ITSM_ITOM_ITAM";
import Experiences from "./pages/consulting/Experiences";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="relative">
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/training" element={<Training />} />
            <Route path="/training/:slug" element={<CoursePage />} />
            <Route path="/consulting" element={<Consulting />} />
            {/* Consulting subpages */}
            <Route path="/consulting/data-analytics" element={<DataAnalytics />} />
            <Route path="/consulting/devops-mlops" element={<DevOpsMLOps />} />
            <Route path="/consulting/multi-cloud" element={<MultiCloud />} />
            <Route path="/consulting/cyber-security" element={<CyberSecurity />} />
            <Route path="/consulting/mainframes-ibm-powersystems" element={<MainframesPowerSystems />} />
            <Route path="/consulting/blockchain" element={<Blockchain />} />
            <Route path="/consulting/application-modernization" element={<ApplicationModernization />} />
            <Route path="/consulting/itsm-itom-itam" element={<ITSM_ITOM_ITAM />} />
            <Route path="/consulting/experiences" element={<Experiences />} />
            <Route path="/hireminds" element={<HireMinds />} />
            <Route path="/cloud-labs" element={<CloudLabs />} />
            <Route path="/discover-us" element={<DiscoverUs />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
