import type { Metadata } from "next";
import ContactActions from "@/components/ContactActions";
import MaterialIcon from "@/components/MaterialIcon";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Alata Doğalgaz iletişim bilgileri: telefon, WhatsApp, e-posta, adres ve çalışma saatleri.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        breadcrumbItems={[{ label: "Ana Sayfa", href: "/" }, { label: "İletişim" }]}
        kicker="Bize Ulaşın"
        title="İletişim"
        description="Doğalgaz tesisatı, kombi, radyatör veya ısı pompası talepleriniz için dilediğiniz zaman bize ulaşabilirsiniz."
        image="/isler/montaj-genel.jpg"
        imageAlt="Balkonda kombi ve doğalgaz tesisatı montajı"
      />

      <Section background="surface">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-xl border border-border bg-surface-dim p-8">
            <div>
              <span className="text-label-sm font-semibold uppercase tracking-wider text-secondary">
                En Hızlı Yöntem
              </span>
              <h2 className="mt-3 text-headline-md font-heading text-tertiary">
                Bizi Arayın veya Yazın
              </h2>
              <p className="mt-2 text-body-md text-neutral">
                Taleplerinizin büyük çoğunluğuna telefon veya WhatsApp
                üzerinden en kısa sürede dönüş yapıyoruz.
              </p>
            </div>
            <ContactActions />
          </div>

          <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-8 shadow-card">
            <h2 className="text-headline-md font-heading text-tertiary">
              İletişim Bilgileri
            </h2>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MaterialIcon name="location_on" className="mt-0.5 text-xl text-primary" />
                <span className="text-body-md text-tertiary">{site.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <MaterialIcon name="call" className="text-xl text-primary" />
                <a href={`tel:${site.phoneTel}`} className="text-body-md text-tertiary hover:text-primary">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MaterialIcon name="mail" className="text-xl text-primary" />
                <a href={`mailto:${site.email}`} className="text-body-md text-tertiary hover:text-primary">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MaterialIcon name="schedule" className="text-xl text-primary" />
                <span className="text-body-md text-tertiary">
                  Çalışma Saatleri: {site.workingHours}
                </span>
              </li>
            </ul>
            <div className="mt-2 flex items-start gap-3 rounded-lg bg-alert-bg p-4">
              <MaterialIcon name="emergency" className="mt-0.5 text-xl text-alert-text" />
              <p className="text-body-sm text-alert-text">
                Acil durumlarda {site.emergency.number} Doğalgaz Acil hattını
                arayınız.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="surface-dim">
        <h2 className="mb-4 text-headline-md font-heading text-tertiary">
          Merkez Ofis Haritası
        </h2>
        <div className="overflow-hidden rounded-xl border border-border shadow-card">
          <iframe
            src={site.mapEmbedUrl}
            title="Alata Doğalgaz Konum Haritası"
            className="h-[360px] w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </>
  );
}
