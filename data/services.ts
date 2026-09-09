export type ProcessStep = {
  icon: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    icon: "search",
    title: "Keşif",
    description:
      "Mekanınızı yerinde inceleyerek ihtiyacınıza en uygun çözümü belirliyoruz.",
  },
  {
    icon: "request_quote",
    title: "Teklif",
    description: "İşin kapsamını ve maliyetini net şekilde sizinle paylaşıyoruz.",
  },
  {
    icon: "handyman",
    title: "Uygulama ve Montaj",
    description:
      "Onay sonrası işi uygun malzeme ve doğru işçilikle uyguluyoruz.",
  },
  {
    icon: "task_alt",
    title: "Test ve Teslim",
    description:
      "Sızdırmazlık ve çalışma testlerini yapıp sistemi güvenle teslim ediyoruz.",
  },
];

export type Service = {
  slug: string;
  title: string;
  icon: string;
  image: string;
  shortDescription: string;
  description: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "dogalgaz-tesisati",
    title: "Doğalgaz Tesisatı",
    icon: "plumbing",
    image: "/isler/gaz-acimi-ocak.jpg",
    shortDescription:
      "Yeni hat çekimi, tesisat revizyonu ve gaz açım işlemleri.",
    description:
      "Konut ve iş yerlerinde yeni doğalgaz hattı çekiminden mevcut tesisatın revizyonuna, gaz açım işlemlerine kadar tüm doğalgaz tesisat sürecini uçtan uca yürütüyoruz.",
    highlights: [
      "Yeni doğalgaz hattı çekimi",
      "Mevcut tesisatın revizyonu",
      "Gaz açım işlemleri ve takibi",
      "Uygun malzeme ve ekipman kullanımı",
    ],
  },
  {
    slug: "kombi-satis-montaj",
    title: "Kombi Satış ve Montajı",
    icon: "local_fire_department",
    image: "/isler/kombi-montaji.jpg",
    shortDescription:
      "Vaillant, Viessmann, Bosch, Demirdöküm, Buderus, Baymak ve Copa kombi satış ve montajı.",
    description:
      "İhtiyacınıza uygun kombi modelinin seçiminden montajına kadar süreci birlikte yürütüyoruz. Vaillant, Viessmann, Bosch, Demirdöküm, Buderus, Baymak ve Copa markalarıyla çalışıyoruz.",
    highlights: [
      "Doğru kapasitede kombi seçimi",
      "Hermetik ve yoğuşmalı kombi montajı",
      "Balkon ve iç mekan kurulumları",
      "Güvenilir marka seçenekleri",
    ],
  },
  {
    slug: "radyator-isitma-sistemleri",
    title: "Radyatör ve Isıtma Sistemleri",
    icon: "thermostat",
    image: "/isler/radyator-montaji.jpg",
    shortDescription:
      "Demirdöküm ve ECA panel radyatör satış ve montaj hizmetleri.",
    description:
      "Konutlarda ve iş yerlerinde Demirdöküm ve ECA panel radyatör satış ve montaj hizmeti sunuyoruz; mevcut kalorifer tesisatının yenilenmesinde de destek oluyoruz.",
    highlights: [
      "Panel radyatör satış ve montajı",
      "Kalorifer tesisatı yenileme",
      "Oda bazlı ısı dengesi gözetimi",
      "Temiz ve düzenli montaj işçiliği",
    ],
  },
  {
    slug: "isi-pompasi-sistemleri",
    title: "Isı Pompası Sistemleri",
    icon: "heat_pump",
    image: "/isler/isi-pompasi-montaji.jpg",
    shortDescription: "GCHV ve ECA ısı pompası satış ve montaj hizmetleri.",
    description:
      "Daha verimli ısıtma ve sıcak su üretimi isteyen müşterilerimiz için GCHV ve ECA ısı pompası sistemlerinin satış ve montajını gerçekleştiriyoruz.",
    highlights: [
      "Monoblok inverter ısı pompası montajı",
      "Dış ünite yerleşimi ve boru bağlantıları",
      "Mevcut sistemle entegrasyon",
      "Termosifon ve tank bağlantı desteği",
    ],
  },
  {
    slug: "bakim-revizyon",
    title: "Periyodik Bakım ve Revizyon",
    icon: "build",
    image: "/isler/muhendislik-kombi-montaji.jpg",
    shortDescription:
      "Kombi ve tesisatınız için periyodik bakım ve revizyon hizmeti.",
    description:
      "Kombi ve doğalgaz tesisatınızın güvenli ve verimli çalışması için periyodik bakım ve gerektiğinde revizyon hizmeti sağlıyoruz.",
    highlights: [
      "Periyodik kombi bakımı",
      "Tesisat kontrolü ve revizyonu",
      "Arıza tespiti ve giderilmesi",
      "Yedek parça değişimi",
    ],
  },
];
