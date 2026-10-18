import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import Projects from "../components/Projects.jsx";
import Competencies from "../components/Competencies.jsx";
import Clients from "../components/Clients.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Picture from "../components/Picture.jsx";
import Awards from "../components/Awards.jsx";
import Blog from "../components/Blog.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Projects />
      <Competencies />
      <Clients />
      <Testimonials />
      <Picture />
      <Awards />
      <Blog />
      <Contact />
    </>
  );
}
