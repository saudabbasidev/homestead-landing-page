import AboutSection from "./components/about";
import FAQSection from "./components/faq";
import FooterSection from "./components/footer";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import ProjectSection from "./components/project";

export default function App() {
  return (
    <>
      <section className=" bg-[#014DFE]">
        <Navbar/>
        <HeroSection />
      </section>
      <main className="max-w-400 mx-auto">
        <AboutSection />
        <ProjectSection />
        <FAQSection />
        <FooterSection />
      </main>
    </>
  );
}
