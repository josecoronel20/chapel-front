import Hero from "./homeComponents/Hero/Hero";
import AboutUs from "./homeComponents/AboutUs/AboutUs";
import ConectionsSection from "./homeComponents/Conections/ConectionsSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Hero />
      <AboutUs />
      <ConectionsSection />
    </main>
  );
}
