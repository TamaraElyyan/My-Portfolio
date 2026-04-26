import { Router, Switch, Route } from "wouter";
import { useBrowserLocation } from "wouter/use-browser-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Portfolio from "@/pages/portfolio";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

const routerBase =
  import.meta.env.BASE_URL === "/"
    ? undefined
    : (import.meta.env.BASE_URL.replace(/\/$/, "") || undefined);

function RouterComponent() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <Router base={routerBase} hook={useBrowserLocation}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark">
          <TooltipProvider>
            <Toaster />
            <RouterComponent />
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
