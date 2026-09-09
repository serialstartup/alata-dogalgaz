import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import NumberedStepCard from "@/components/NumberedStepCard";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import ServiceCardDetailed from "@/components/ServiceCardDetailed";
import { processSteps, services } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Doğalgaz tesisatı, kombi/radyatör/ısı pompası satış ve montajı, periyodik bakım ve revizyon hizmetleri — Erdemli ve Mersin geneli.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        breadcrumbItems={[{ label: "Ana Sayfa", href: "/" }, { label: "Hizmetlerimiz" }]}
        kicker="Doğalgaz ve Isıtma Hizmetleri"
        title="Hizmetlerimiz"
        description="Konut ve iş yerlerinde doğalgaz tesisatından kombi, radyatör ve ısı pompası satış-montajına kadar ihtiyacınıza yönelik çözümler sunuyoruz."
        image="/isler/tesisat-genel-gorunum.jpg"
        imageAlt="Isı pompası ve tesisat bağlantılarının bulunduğu bir kazan dairesi"
      />

      <Section background="surface">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCardDetailed key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section background="surface-dim">
        <div className="mb-8 text-center">
          <span className="text-label-sm font-semibold uppercase tracking-wider text-secondary">
            Hizmet Metodolojimiz
          </span>
          <h2 className="mt-3 text-headline-lg font-heading text-tertiary lg:text-headline-xl">
            Nasıl Çalışıyoruz?
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <NumberedStepCard key={step.title} number={index + 1} {...step} />
          ))}
        </div>
      </Section>

      <CTASection
        title="İhtiyacınız Olan Doğalgaz Çözümü İçin İletişime Geçin"
        description="Uzman ekibimizle görüşmek ve keşif planlamak için hemen arayın veya WhatsApp'tan yazın."
        primary={{ label: "Hemen Ara", href: `tel:${site.phoneTel}`, icon: "call" }}
        secondary={{ label: "WhatsApp'tan Yaz", href: site.whatsappUrl, icon: "chat" }}
      />
    </>
  );
}
