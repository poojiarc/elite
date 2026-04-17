import { BrowserRouter, Outlet, Route, Routes, useLocation } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProductsPage from "@/pages/ProductsPage";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import ServicesPage from "@/pages/ServicesPage";

function AppLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className={isHome ? "" : "pt-16 md:pt-20"}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
