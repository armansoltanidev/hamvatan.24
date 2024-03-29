import FastCharge from "./(home)/fast-charge";
import Header from "./(home)/header";
import HeroSection from "./(home)/hero-section";
import Footer from "./(home)/footer";
import InstagramPage from "./(home)/instagram-page";
import TestomonialSection from "./(home)/testomonial-section";

export default function Page() {
  return (
    <div className="px-2 md:px-4">
      <div className="mx-auto h-auto max-w-[1440px]">
        <Header />
        <HeroSection />
        <div className="my-16 rounded-3xl bg-secondary">
          <FastCharge />
        </div>
      </div>

      <TestomonialSection />

      <InstagramPage />

      <Footer />
    </div>
  );
}
