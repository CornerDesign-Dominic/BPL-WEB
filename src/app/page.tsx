import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CompanyPreview } from "@/components/sections/CompanyPreview";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TransportRequestForm } from "@/components/transport-request/TransportRequestForm";

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main id="inhalt">
        <Hero />
        <TransportRequestForm />
        <Industries />
        <ServicesOverview />
        <CompanyPreview />
      </main>
      <Footer />
    </div>
  );
}
