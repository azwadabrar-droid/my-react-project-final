import { Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Blog from "./pages/Blog.jsx";
import ServiceDetails from "./pages/ServiceDetails.jsx";
import About from "./pages/About.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services/details" element={<ServiceDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/details" element={<BlogDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
