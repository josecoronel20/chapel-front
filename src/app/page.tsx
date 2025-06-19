import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import ConectionsSection from "./components/Conections/ConectionsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutUs />
      <ConectionsSection />
    </main>
  );
}
