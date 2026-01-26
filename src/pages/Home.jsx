import React from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import Cards from "../components/ui/Cards";
import HeroSection from "../components/ui/HeroSection";
import AboutUsSection from "../components/ui/AboutUs";
import TeamSection from "../components/ui/TeamSection";
import FAQSection from "../components/ui/Faq";
import ProjectsSection from "../components/ui/ProjectsSection";
import Testimonials from "../components/ui/Testimonals";
const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Cards />
      <AboutUsSection />
      <TeamSection />
      <ProjectsSection />
      <Testimonials />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Home;
