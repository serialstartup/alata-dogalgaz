import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FeatureCard from "@/components/FeatureCard";
import MaterialIcon from "@/components/MaterialIcon";
import NumberedStepCard from "@/components/NumberedStepCard";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { emergencySteps, maintenanceReasons, usageTips } from "@/data/safety";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Güvenli Doğalgaz",
  description:
    "Doğalgaz kullanımında dikkat edilmesi gerekenler, periyodik bakımın önemi ve gaz kokusu durumunda izlenmesi gereken adımlar.",
};

export default function SafetyPage() {
  return (
    <>
      <PageHeader
        breadcrumbItems={[{ label: "Ana Sayfa", href: "/" }, { label: "Güvenli Doğalgaz" }]}
        kicker="Doğalgaz Güvenliği Rehberi"
        title="Güvenli Doğalgaz Kullanımı ve Standartlar"
        description="Doğru projelendirilmiş bir tesisat ve bilinçli kullanım, doğalgazı temiz, konforlu ve güvenli enerji kaynağına dönüştürür."
        image="/isler/dogalgaz-acil-187-vana.jpg"
        imageAlt="Doğalgaz Acil 187 etiketli ana kesme vanası"
      />

      <Section background="surface-dim">
        <div className="mb-8 text-center">
          <span className="text-label-sm font-semibold uppercase tracking-wider text-secondary">
            Güvenlik Prensipleri
          </span>
          <h2 className="mt-3 text-headline-lg font-heading text-tertiary lg:text-headline-xl">
            Doğalgaz Kullanırken Dikkat Edilmesi Gerekenler
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {usageTips.map((tip) => (
            <FeatureCard key={tip.title} {...tip} />
          ))}
        </div>
      </Section>

      <Section background="surface">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-left">
            <span className="text-label-sm font-semibold uppercase tracking-wider text-secondary">
              Mühendislik Yaklaşımı
            </span>
            <h2 className="mt-3 text-headline-lg font-heading text-tertiary lg:text-headline-xl">
              Düzenli Bakım ve Periyodik Kontrollerin Önemi
            </h2>
          </div>
          <ul className="flex flex-col gap-3">
            {maintenanceReasons.map((reason) => (
              <li
                key={reason}
                className="flex items-start gap-3 rounded-lg border border-border p-4 text-body-md text-tertiary"
              >
                <MaterialIcon name="check_circle" className="mt-0.5 text-xl text-primary" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section background="surface-dim">
        <div className="mb-8 text-center">
          <span className="text-label-sm font-semibold uppercase tracking-wider text-alert-text">
            Önemli Acil Durum Protokolü
          </span>
          <h2 className="mt-3 text-headline-lg font-heading text-tertiary lg:text-headline-xl">
            Gaz Kokusu Hissederseniz Sakin Olun ve Şu Adımları Uygulayın
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {emergencySteps.map((step, index) => (
            <NumberedStepCard key={step.title} number={index + 1} {...step} />
          ))}
        </div>
      </Section>

      <Section background="surface">
        <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface-dim p-6">
          <div className="flex items-center gap-2">
            <MaterialIcon name="info" className="text-xl text-secondary" />
            <h3 className="text-headline-sm font-heading text-tertiary">
              Bölgesel Dağıtım Bilgisi
            </h3>
          </div>
          <p className="text-body-sm text-neutral">
            {site.region} bölgesinde doğalgaz dağıtımı {site.distributor}{" "}
            tarafından sağlanmaktadır. Acil durumlarda güvenli bir mesafeden{" "}
            {site.emergency.number} Doğalgaz Acil hattını arayabilirsiniz.
          </p>
        </div>
      </Section>

      <CTASection
        title="Tesisat Güvenliği ve Periyodik Kontrol İçin Bizi Arayın"
        description="Mevcut tesisatınızın kontrolü veya bakımı için uzman ekibimizle iletişime geçin."
        primary={{ label: "Hemen Ara", href: `tel:${site.phoneTel}`, icon: "call" }}
        secondary={{ label: "WhatsApp'tan Yaz", href: site.whatsappUrl, icon: "chat" }}
      />
    </>
  );
}
