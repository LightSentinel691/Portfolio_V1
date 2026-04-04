import { SplashManager } from "@/components/layout/SplashManager";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Articles } from "@/components/sections/Articles";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <SplashManager>
      <Navbar />
      <Sidebar />
      <main className="flex min-h-screen flex-col w-full selection:bg-accent selection:text-black">
        <Hero />
        <Skills />
        <Projects />
        <Articles />
        <About />
        <Contact />
      </main>
      <Footer />
    </SplashManager>
  );
}
