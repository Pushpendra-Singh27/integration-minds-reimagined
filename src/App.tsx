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
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/hireminds" element={<HireMinds />} />
            <Route path="/cloud-labs" element={<CloudLabs />} />
            <Route path="/discover-us" element={<DiscoverUs />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
