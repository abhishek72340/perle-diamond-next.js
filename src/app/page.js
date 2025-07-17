import MarksCarousel from "../components/MarkCarousel";
import CoreCollection from "../components/CoreCollection";
import PerlShop from "../components/PerlShop";
import HallmarkSection from "../components/HallmarkSection";
import PromoVideo from "../components/PromoVideo";
import JoinCommunity from "../components/JoinCommunity";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import ClassicRingsGallery from "../components/productListing/ClassicRingsGallery";
import SignatureRingsGallery from "../components/productListing/SignatureRingsGallery";
import GemstoneRingsGallery from "../components/productListing/GemstoneRingsGallery"; // This component is not used in the current page

export default function Home() {
  return (
    <main>
      <ClassicRingsGallery />
      <CoreCollection />
      <SignatureRingsGallery />
      <PerlShop />
      <GemstoneRingsGallery />
      <HallmarkSection />
      <PromoVideo />
      <JoinCommunity />
      <TestimonialsCarousel />
      <MarksCarousel />
    </main>
  );
}
