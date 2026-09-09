import { site } from "@/data/site";
import Button from "./Button";

export default function ContactActions({
  className = "",
  emailVariant = "outline",
}: {
  className?: string;
  emailVariant?: "outline" | "secondary";
}) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${className}`}>
      <Button href={`tel:${site.phoneTel}`} variant="primary" icon="call">
        Hemen Ara
      </Button>
      <Button href={site.whatsappUrl} variant="secondary" icon="chat">
        WhatsApp&apos;tan Yaz
      </Button>
      <Button href={`mailto:${site.email}`} variant={emailVariant} icon="mail">
        E-posta Gönder
      </Button>
    </div>
  );
}
