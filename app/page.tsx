import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Theraphy from "./components/Theraphy";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Theraphy />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
