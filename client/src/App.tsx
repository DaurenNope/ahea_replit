import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Admissions from "@/pages/admissions";
import Institutes from "@/pages/institutes";
import Programs from "@/pages/programs";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

// Institute pages
import PedagogyInstitute from "@/pages/institutes/pedagogy";
import EconomicsInstitute from "@/pages/institutes/economics";
import SymbatInstitute from "@/pages/institutes/symbat";
import College from "@/pages/college";

// About section pages
import VirtualTour from "@/pages/about/virtual-tour";

// Admissions pages
import Apply from "@/pages/apply";
import Tuition from "@/pages/admissions/tuition";

// International section pages
import International from "@/pages/international";
import StudentExchange from "@/pages/international/student-exchange";
import Partners from "@/pages/international/partners";
import InternationalStudents from "@/pages/international/students";
import InternationalFaculty from "@/pages/international/faculty";
import InternationalContact from "@/pages/international/contact";

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
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/about/virtual-tour" component={VirtualTour} />
        <Route path="/admissions" component={Admissions} />
        <Route path="/admissions/tuition" component={Tuition} />
        <Route path="/apply" component={Apply} />
        <Route path="/institutes" component={Institutes} />
        <Route path="/institutes/pedagogy" component={PedagogyInstitute} />
        <Route path="/institutes/economics" component={EconomicsInstitute} />
        <Route path="/institutes/symbat" component={SymbatInstitute} />
        <Route path="/programs" component={Programs} />
        <Route path="/contact" component={Contact} />
        <Route path="/college" component={College} />
        <Route path="/international" component={International} />
        <Route path="/international/student-exchange" component={StudentExchange} />
        <Route path="/international/partners" component={Partners} />
        <Route path="/international/students" component={InternationalStudents} />
        <Route path="/international/faculty" component={InternationalFaculty} />
        <Route path="/international/contact" component={InternationalContact} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
