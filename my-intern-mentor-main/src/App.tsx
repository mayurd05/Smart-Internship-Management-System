import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/ui/layout";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Recommendations from "./pages/Recommendations";
import InternshipDetails from "./pages/InternshipDetails";
import Companies from "./pages/Companies";
import Help from "./pages/Help";
import Language from "./pages/Language";
import Admin from "./pages/Admin";
import AdminInternships from "./pages/AdminInternships";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/internship/:id" element={<InternshipDetails />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/help" element={<Help />} />
            <Route path="/language" element={<Language />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/internships" element={<AdminInternships />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
