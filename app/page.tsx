import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Therapy from "./components/Therapy";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Recommendation from "./components/Recommendation";

export const metadata: Metadata = {
  title: "Terapia el Fin | Terapia Psicologica Profesional",
  description:
    "Servicios profesionales de psicología para ayudarle a lograr el bienestar mental.",
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Terapia el Fin | Terapia Psicologica Profesional",
  description:
    "Servicios profesionales de psicología para ayudarle a lograr el bienestar mental.",
  provider: {
    "@type": "Person",
    name: "Lilia Aguilar",
    jobTitle: "Psicoterapeuta",
  },
  serviceType: [
    "Terapia Psicologica Profesional",
    "Terapia de pareja",
    "Terapia infantil",
    "Terapia para adultos",
    "Atencion integral",
  ],
  areaServed: {
    "@type": "Country",
    name: "Mexico",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Terapia el Fin",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Terapia Psicologica Profesional",
          description: "Servicios profesionales de psicología para ayudarle a lograr el bienestar mental.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Consulta online",
          description: "Servicios profesionales de psicología para ayudarle a lograr el bienestar mental.",
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Therapy />
      <Recommendation />
      <Contact />
      <Footer />
    </>
  );
}
