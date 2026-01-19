import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AllEvents from "./pages/AllEvents";
import NotFound from "./pages/NotFound";
import Sponsors from "./pages/Sponsors";
import SponsorshipRates from "./pages/SponsorshipRates";
import Donate from "./pages/Donate";
import RabindraJayanti from "./pages/RabindraJayanti";
import DurgaPujaDetails from "./pages/DurgaPujaDetails";
import SaraswatiPujaDetails from "./pages/SaraswatiPujaDetails";
import ByLaws from "./pages/ByLaws";
import ExecutiveCommittee from "./pages/ExecutiveCommittee";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<AllEvents />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/sponsorship-rates" element={<SponsorshipRates />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/durga-puja-details" element={<DurgaPujaDetails />} />
          <Route path="/saraswati-puja-details" element={<SaraswatiPujaDetails />} />
          <Route path="/by-laws" element={<ByLaws />} />
          <Route path="/exec-committee" element={<ExecutiveCommittee />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
