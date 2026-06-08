import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustRow from "@/components/TrustRow";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import EditorialGallery from "@/components/EditorialGallery";
import Dine from "@/components/Dine";
import Facilities from "@/components/Facilities";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustRow />
        <About />
        <Rooms />
        <EditorialGallery />
        <Dine />
        <Facilities />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </>
  );
}
