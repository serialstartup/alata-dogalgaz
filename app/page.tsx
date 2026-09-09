import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import FeatureCard from "@/components/FeatureCard";
import MaterialIcon from "@/components/MaterialIcon";
import Section from "@/components/Section";
import ServiceCardDetailed from "@/components/ServiceCardDetailed";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { whyUs } from "@/data/values";

const fieldVideos = ["/videos/saha-1.mp4", "/videos/saha-2.mp4", "/videos/saha-3.mp4"];

export default function HomePage() {
  const previewServices = services.slice(0, 4);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-surface-dim py-12 lg:py-16">
        <div className="mx-auto grid w-full max-w-[75rem] grid-cols-1 items-center gap-10 px-4 lg:grid-cols-12 lg:gap-12 lg:px-6">
          <div className="flex flex-col items-center gap-5 text-center lg:col-span-7 lg:items-start lg:text-left">
            <Badge tone="secondary">{site.region} Doğalgaz Hizmetleri</Badge>
            <h1 className="text-display-hero-mobile font-heading text-tertiary lg:text-display-hero">
              Doğalgazda{" "}
              <span className="text-primary">Güvenilir Çözüm Ortağınız</span>
            </h1>
            <p className="max-w-xl text-body-lg text-neutral">
              {site.tagline}. Doğalgaz tesisatından kombi, radyatör ve ısı
              pompası satış-montajına kadar Erdemli ve Mersin genelinde
              yanınızdayız.
            </p>
            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <Button href="/hizmetlerimiz" variant="primary" icon="arrow_forward">
                Hizmetlerimizi İnceleyin
              </Button>
              <Button href="/iletisim" variant="outline">
                Bize Ulaşın
              </Button>
            </div>
            <div className="mt-2 grid w-full max-w-xl grid-cols-1 justify-items-center gap-3 sm:grid-cols-3 lg:justify-items-start">
              {[
                { icon: "verified_user", label: "Deneyimli Saha Ekibi" },
                { icon: "workspace_premium", label: "Kaliteli Marka ve Malzeme" },
                { icon: "support_agent", label: "Yerinde Keşif ve Teklif" },
              ].map((chip) => (
                <div key={chip.label} className="inline-flex items-center gap-2">
                  <MaterialIcon name={chip.icon} className="text-xl text-primary" />
                  <span className="text-body-sm text-tertiary">{chip.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-xl bg-surface shadow-card-hover">
              <Image
                src="/isler/ekip-kombi-montaji.jpg"
                alt="Alata Doğalgaz ekibi bir balkonda kombi montajı yaparken"
                width={800}
                height={1000}
                className="h-[420px] w-full object-cover"
                priority
              />
              <div className="absolute inset-x-4 bottom-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 rounded-lg bg-surface/95 p-3 shadow-card backdrop-blur-sm">
                  <MaterialIcon name="engineering" className="text-xl text-primary" />
                  <span className="text-label-md font-semibold text-tertiary">
                    Sahada Deneyimli Ekip
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-surface/95 p-3 shadow-card backdrop-blur-sm">
                  <MaterialIcon name="verified" className="text-xl text-secondary" />
                  <span className="text-label-md font-semibold text-tertiary">
                    Güvenli Montaj Standartları
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section background="surface">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="text-label-sm font-semibold uppercase tracking-wider text-secondary">
            Kurumsal Değerlerimiz
          </span>
          <h2 className="mt-3 text-headline-lg font-heading text-tertiary lg:text-headline-xl">
            Neden Alata Doğalgaz?
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section background="surface-dim">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:items-end sm:text-left">
          <div>
            <span className="text-label-sm font-semibold uppercase tracking-wider text-secondary">
              Uzmanlık Alanlarımız
            </span>
            <h2 className="mt-3 text-headline-lg font-heading text-tertiary lg:text-headline-xl">
              Konut ve İş Yerleri İçin Hizmetlerimiz
            </h2>
          </div>
          <Link
            href="/hizmetlerimiz"
            className="inline-flex items-center gap-1 text-label-lg font-semibold text-primary"
          >
            Tüm Hizmetlerimizi Görüntüleyin
            <MaterialIcon name="arrow_forward" className="text-base" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {previewServices.map((service) => (
            <ServiceCardDetailed
              key={service.slug}
              service={service}
              href={`/hizmetlerimiz#${service.slug}`}
            />
          ))}
        </div>
      </Section>

      <Section background="surface">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
            <Badge tone="secondary">Hayati Uyarı ve Güvenlik Kılavuzu</Badge>
            <h2 className="text-headline-lg font-heading text-tertiary lg:text-headline-xl">
              Güvenliğiniz Bizim İçin İlk Sırada
            </h2>
            <p className="text-left text-body-md text-neutral">
              Doğalgaz konforlu ve ekonomik bir enerjidir; ancak doğru
              tesisat ve bilinçli kullanımla güvenlidir. Havalandırma
              menfezlerinin kapatılmaması ve şüpheli kokularda vakit
              kaybetmeden 187 Doğalgaz Acil hattının aranması önemlidir.
            </p>
            <Link
              href="/guvenli-dogalgaz"
              className="inline-flex w-fit items-center gap-1 text-label-lg font-semibold text-primary"
            >
              Güvenlik Rehberini İnceleyin
              <MaterialIcon name="arrow_forward" className="text-base" />
            </Link>
          </div>
          <div className="rounded-xl border border-border bg-surface-dim p-6">
            <h3 className="mb-4 text-headline-sm font-heading text-tertiary">
              Dikkat Edilmesi Gerekenler
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "Sertifikalı malzeme ve doğru montaj",
                "Düzenli bağlantı ve vana kontrolü",
                "Yıllık periyodik bakım",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-body-md text-tertiary">
                  <MaterialIcon name="check_circle" className="text-xl text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section background="surface-dim">
        <div className="mb-8">
          <span className="text-label-sm font-semibold uppercase tracking-wider text-secondary">
            Sahadan Görüntüler
          </span>
          <h2 className="mt-3 text-headline-lg font-heading text-tertiary lg:text-headline-xl">
            İşimizi Yaparken
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {fieldVideos.map((src) => (
            <div
              key={src}
              className="overflow-hidden rounded-xl border border-border bg-surface shadow-card"
            >
              <video
                src={src}
                className="aspect-[3/4] w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        variant="card"
        kicker="Hızlı İletişim"
        title="Doğalgaz, Kombi veya Isıtma İhtiyacınız mı Var?"
        description="Size en uygun çözüm için hemen arayın ya da WhatsApp'tan yazın, en kısa sürede dönüş yapalım."
        primary={{ label: "Hemen Ara", href: `tel:${site.phoneTel}`, icon: "call" }}
        secondary={{
          label: "WhatsApp'tan Yaz",
          href: site.whatsappUrl,
          icon: "chat",
        }}
      />
    </>
  );
}
