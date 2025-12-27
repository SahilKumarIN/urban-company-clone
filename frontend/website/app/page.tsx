import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen items-center ">
      <main className="w-full md:w-6xl bg-white mx-auto min-h-screen">
        <Navbar />
        <HeroSection />
        <Footer />
      </main>
    </div>
  );
}
