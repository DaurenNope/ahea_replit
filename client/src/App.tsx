import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";

// Pages
import Landing from "@/pages/landing";
import Home from "@/pages/home";
import About from "@/pages/about";
import Admissions from "@/pages/admissions";
import Institutes from "@/pages/institutes";
import Programs from "@/pages/programs";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

// Institution pages
import InstitutionHome from "@/pages/institutions/InstitutionHome";
import InstitutionAbout from "@/pages/institutions/InstitutionAbout";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        {/* Main AHEU university routes */}
        <Route path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/institutes" component={Institutes} />
        <Route path="/programs" component={Programs} />
        <Route path="/admissions" component={Admissions} />
        <Route path="/contact" component={Contact} />
        
        {/* Institution-specific routes */}
        <Route path="/institutes/:id" component={InstitutionHome} />
        <Route path="/institutions/:id" component={InstitutionHome} />
        <Route path="/institutions/:id/:page" component={InstitutionHome} />
        
        {/* 404 route */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
