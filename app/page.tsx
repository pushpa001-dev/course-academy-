import Hero from "@/components/hero";
import Course from "@/components/course";
import Mission from "@/components/mission";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <Course />
      <Mission />
      <Contact />
      <Footer />
    </div>
  );
}
