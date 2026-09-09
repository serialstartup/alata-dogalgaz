export type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

export const usageTips: FeatureItem[] = [
  {
    icon: "air",
    title: "Havalandırma Menfezlerini Kapatmayın",
    description:
      "Menfezleri asla kapatmayın; cihazınızın sağlıklı çalışması için gereken hava akışını engellemeyin.",
  },
  {
    icon: "block",
    title: "Yetkisiz Müdahale Yapmayın",
    description:
      "Gaz tesisatınıza ve cihazlarınıza yalnızca yetkili ve deneyimli kişiler müdahale etmelidir.",
  },
  {
    icon: "settings_input_component",
    title: "Cihaz ve Baca Bağlantılarına Dikkat Edin",
    description:
      "Baca bağlantılarının sağlam ve doğru şekilde monte edildiğinden emin olun.",
  },
  {
    icon: "sensors",
    title: "Gaz Alarm Cihazı Kullanın",
    description:
      "Yaşam alanlarınızda bir gaz alarm dedektörü bulundurmak, olası kaçakları erken fark etmenizi sağlar.",
  },
];

export const maintenanceReasons: string[] = [
  "Sezon öncesi bakım, cihazınızın verimli ve sorunsuz çalışmasına yardımcı olur.",
  "Düzenli bağlantı ve vana kontrolleri sızdırmazlığı güvence altına alır.",
  "Periyodik bakım, cihazınızın ömrünü uzatır ve beklenmedik arızaların önüne geçer.",
];

export type EmergencyStep = {
  icon: string;
  title: string;
  description: string;
};

export const emergencySteps: EmergencyStep[] = [
  {
    icon: "sensor_window",
    title: "Ortamı Havalandırın",
    description: "Pencere ve kapıları açarak ortamın havalanmasını sağlayın.",
  },
  {
    icon: "propane",
    title: "Ana Gaz Vanasını Kapatın",
    description: "Gaz sayacınızın yanındaki ana vanayı kapalı konuma getirin.",
  },
  {
    icon: "flash_off",
    title: "Elektrik Düğmelerine Dokunmayın",
    description:
      "Açık olan ışıkları kapatmayın, kapalı olanları açmayın; priz ve düğmelere dokunmayın.",
  },
  {
    icon: "local_fire_department",
    title: "Kıvılcım Kaynaklarından Kaçının",
    description:
      "Çakmak, kibrit veya cep telefonu gibi kıvılcım yaratabilecek eşyaları kullanmayın.",
  },
  {
    icon: "phone_disabled",
    title: "Ortamda Telefon Kullanmayın",
    description:
      "Telefon görüşmesini kokuyu hissettiğiniz mahalden uzaklaştıktan sonra yapın.",
  },
  {
    icon: "support_agent",
    title: "187 Doğalgaz Acil Hattını Arayın",
    description:
      "Güvenli bir mesafeden 187 Doğalgaz Acil hattını arayarak durumu bildirin.",
  },
];
