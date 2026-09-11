import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import FeatureCard from "@/components/FeatureCard";
import MaterialIcon from "@/components/MaterialIcon";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { site } from "@/data/site";
import { coreValues, mission, vision } from "@/data/values";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Alata Doğalgaz, Erdemli'deki Alata Mahallesi'nden yola çıkarak Mersin genelinde doğalgaz, kombi ve ısıtma çözümleri sunar.",
  alternates: {
    canonical: "/hakkimizda",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumbItems={[{ label: "Ana Sayfa", href: "/" }, { label: "Hakkımızda" }]}
        kicker="Kurumsal Kimlik"
        title="Hakkımızda"
        description="Adımızı, hizmet verdiğimiz Alata Mahallesi'nden alıyoruz; güven ve özenli işçilikle doğalgaz ve ısıtma çözümleri sunuyoruz."
        image="/isler/ekip-kombi-montaji.jpg"
        imageAlt="Alata Doğalgaz ekibi sahada kombi montajı yaparken"
      />

      <Section background="surface">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
            <span className="text-label-sm font-semibold uppercase tracking-wider text-secondary">
              Hikayemiz
            </span>
            <h2 className="text-headline-lg font-heading text-tertiary lg:text-headline-xl">
              Alata Mahallesi&apos;nden Mersin Geneline
            </h2>
            <p className="text-left text-body-md text-neutral">
              Alata Doğalgaz ismini, Erdemli&apos;deki hizmet üssümüz olan
              Alata Mahallesi&apos;nden alıyor. Bölgemizde doğalgaz tesisatı,
              kombi, radyatör ve ısı pompası satış, montaj ve bakım
              hizmetleri sunuyor; Vaillant, Viessmann, Bosch, Demirdöküm gibi
              güvenilir markalarla çalışıyoruz.
            </p>
            <p className="text-left text-body-md text-neutral">
              Küçük bir mahalle işletmesi olarak başladığımız bu yolda,
              müşterilerimizle kurduğumuz doğrudan ve şeffaf iletişimi en
              değerli önceliğimiz olarak görüyoruz.
            </p>
            <div className="mt-2 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { icon: "location_on", label: site.region },
                { icon: "handshake", label: "Şeffaf ve Doğrudan İletişim" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 rounded-lg border border-border p-3">
                  <MaterialIcon name={item.icon} className="text-xl text-primary" />
                  <span className="text-body-sm text-tertiary">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-card-hover">
            <Image
              src="/isler/muhendislik-kombi-montaji.jpg"
              alt="Balkonda monte edilmiş Viessmann kombi ve tesisat bağlantıları"
              width={800}
              height={900}
              className="h-[380px] w-full object-cover lg:h-[440px]"
            />
          </div>
        </div>
      </Section>

      <Section background="surface-dim">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-8 shadow-card">
            <span className="text-label-sm font-semibold uppercase tracking-wider text-primary">
              Temel Görevimiz
            </span>
            <h3 className="mt-3 text-headline-md font-heading text-tertiary">
              Misyonumuz
            </h3>
            <p className="mt-3 text-body-md text-neutral">{mission}</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8 shadow-card">
            <span className="text-label-sm font-semibold uppercase tracking-wider text-secondary">
              Gelecek Hedefimiz
            </span>
            <h3 className="mt-3 text-headline-md font-heading text-tertiary">
              Vizyonumuz
            </h3>
            <p className="mt-3 text-body-md text-neutral">{vision}</p>
          </div>
        </div>
      </Section>

      <Section background="surface">
        <div className="mb-8 text-center">
          <span className="text-label-sm font-semibold uppercase tracking-wider text-secondary">
            Vazgeçmediğimiz Kurallarımız
          </span>
          <h2 className="mt-3 text-headline-lg font-heading text-tertiary lg:text-headline-xl">
            Kurumsal Değerlerimiz
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Projeniz İçin Bize Ulaşın"
        description="Doğalgaz tesisatı, kombi veya ısıtma sisteminiz için hemen arayın ya da WhatsApp'tan yazın."
        primary={{ label: "Hemen Ara", href: `tel:${site.phoneTel}`, icon: "call" }}
        secondary={{ label: "WhatsApp'tan Yaz", href: site.whatsappUrl, icon: "chat" }}
      />
    </>
  );
}
