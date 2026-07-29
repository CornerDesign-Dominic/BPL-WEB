import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BenefitsBar } from "@/components/sections/BenefitsBar";
import { CompanyPreview } from "@/components/sections/CompanyPreview";
import { ContactCta } from "@/components/sections/ContactCta";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TransportRequestForm } from "@/components/transport-request/TransportRequestForm";

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main id="inhalt">
        <Hero />
        <TransportRequestForm />
        <BenefitsBar />
        <ServicesOverview />
        <Process />
        <CompanyPreview />
        <Industries />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
