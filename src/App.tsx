import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";  // Exemplo de página de categoria
import ProductPage from "./pages/ProductPage";    // Exemplo de página de produto

// Preload de fontes e scripts essenciais
const preloadResources = () => {
  const head = document.head;
  
  // Preload da fonte do Google Fonts
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap';
  link.as = 'style';
  head.appendChild(link);

  // Preload do script do 'Lucide' caso necessário
  const lucideScript = document.createElement('link');
  lucideScript.rel = 'preload';
  lucideScript.href = 'https://unpkg.com/lucide-icons@latest/dist/lucide.min.js';
  lucideScript.as = 'script';
  head.appendChild(lucideScript);
};

preloadResources();

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Rotas customizadas */}
          <Route path="/" element={<Index />} />
          <Route path="/category/:id" element={<CategoryPage />} />  {/* Rota para página de categoria */}
          <Route path="/product/:id" element={<ProductPage />} />    {/* Rota para página de produto */}
          
          {/* Rota catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
