import Link from "next/link";
import Button from "@/components/Button";
import MaterialIcon from "@/components/MaterialIcon";
import Section from "@/components/Section";

export default function NotFound() {
  return (
    <Section background="surface" className="min-h-[60vh]">
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <MaterialIcon name="local_fire_department" className="text-6xl text-primary" />
        <h1 className="text-headline-lg font-heading text-tertiary">
          Aradığınız Sayfa Bulunamadı
        </h1>
        <p className="max-w-md text-body-md text-neutral">
          Bu sayfa taşınmış veya kaldırılmış olabilir. Ana sayfaya dönerek
          hizmetlerimize göz atabilirsiniz.
        </p>
        <Button href="/">Ana Sayfaya Dön</Button>
        <Link href="/iletisim" className="text-label-md font-semibold text-primary">
          Bize Ulaşın
        </Link>
      </div>
    </Section>
  );
}
