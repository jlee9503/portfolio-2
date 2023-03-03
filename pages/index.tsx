import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-slate-200 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-cyan-400/50">
      <Head>
        <title>Portfolio Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section id="banner" className="snap-start">
        <Banner />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}
