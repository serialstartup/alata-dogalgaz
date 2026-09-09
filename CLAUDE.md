# CLAUDE.md
# Alata Doğalgaz Web Projesi — Claude Code Kuralları

## 01 — PROJE KİMLİĞİ

- Proje, Alata Doğalgaz için geliştirilen kurumsal web sitesidir.
- Marka adı: Alata Doğalgaz.
- Logo altındaki slogan: DOĞALGAZ.
- Web sitesi dili: Türkçe.
- Hedef kullanıcı kitlesi: Türkiye'deki bireysel ve kurumsal doğalgaz kullanıcılarıdır.
- Ana amaç: Kullanıcıya güven vermek, hizmetleri anlaşılır biçimde sunmak ve iletişimi kolaylaştırmaktır.
- İkincil amaç: Marka bilinirliğini ve dijital kurumsal görünümü güçlendirmektir.
- Site hızlı, modern, güvenilir ve profesyonel görünmelidir.
- Tasarım kesinlikle amatör, karmaşık veya aşırı renkli olmamalıdır.
- Marka iletişiminde güven, enerji, doğa ve teknoloji temaları öne çıkarılmalıdır.
- Kullanıcıların önemli bilgilere mümkün olduğunca az tıklamayla ulaşması hedeflenmelidir.
- Web sitesi mobil cihazlarda kusursuz çalışmalıdır.
- Masaüstü deneyimi de aynı derecede profesyonel olmalıdır.
- Tüm içerikler gerçek bir doğalgaz şirketinin kurumsal iletişim diline uygun hazırlanmalıdır.

## 02 — CLAUDE CODE ÇALIŞMA PRENSİPLERİ

- Kod yazmadan önce mevcut proje yapısını incele.
- Mevcut component'leri kullanmadan önce tekrar component oluşturma.
- Projede zaten kullanılan kütüphaneleri önceliklendir.
- Gereksiz yeni dependency ekleme.
- Bir problemi çözmek için önce mevcut kodu anlamaya çalış.
- Çalışan kodu gereksiz yere yeniden yazma.
- Büyük refactor işlemlerini kullanıcı istemedikçe yapma.
- Bir dosyada küçük bir değişiklik gerekiyorsa yalnızca gerekli kısmı değiştir.
- Tasarım değişikliklerinde mevcut responsive davranışı bozma.
- Her değişiklikten sonra ilgili sayfayı ve component'i kontrol et.
- Build hatalarını çözmeden işi tamamlanmış kabul etme.
- TypeScript kullanılıyorsa `any` kullanımını mümkün olduğunca engelle.
- Console error bırakma.
- Kullanılmayan import bırakma.
- Kullanılmayan component veya değişken bırakma.
- Kullanılmayan CSS kuralları ekleme.
- Kullanıcı tarafından sağlanan marka varlıklarını önceliklendir.
- Logo, ikon ve görselleri kendin yeniden çizme.
- Gerçek logo mevcutsa placeholder logo kullanma.
- Tasarım kararlarını marka kimliğine göre ver.
- Bir özellik gereksizse sırf modern görünmek için ekleme.
- "Daha fazla özellik" yerine "daha iyi kullanıcı deneyimi" tercih edilir.

## 03 — MARKA KİMLİĞİ

- Marka adı her yerde tutarlı biçimde "Alata Doğalgaz" olarak kullanılmalıdır.
- Logo, sitenin en önemli marka varlığıdır.
- Logo oranları kesinlikle bozulmamalıdır.
- Logo yatayda veya dikeyde sıkıştırılmamalıdır.
- Logo üzerine CSS transform ile agresif ölçekleme uygulanmamalıdır.
- Logo mümkün olduğunca orijinal oranlarında kullanılmalıdır.
- Logo çevresinde yeterli boşluk bırakılmalıdır.
- Logo başka grafiklerle çakıştırılmamalıdır.
- Logo üzerine metin bindirilmemelidir.
- Logo düşük kaliteli şekilde büyütülmemelidir.
- SVG logo varsa raster görsel yerine SVG tercih edilmelidir.
- JPEG logo yalnızca gerekli durumlarda kullanılmalıdır.
- Logo dosyası proje içinde merkezi bir asset konumunda tutulmalıdır.

## 04 — MARKA RENKLERİ

- Ana marka rengi yeşildir.
- İkincil marka rengi mavidir.
- Yeşil; doğa, enerji, sürdürülebilirlik ve güven temasını temsil eder.
- Mavi; teknoloji, güven, enerji ve profesyonellik temasını destekler.
- Tasarımda yeşil ve mavi birlikte kullanılmalıdır.
- Yeşil ana aksiyonlarda kullanılabilir.
- Mavi bilgi ve destek alanlarında kullanılabilir.
- Kırmızı yalnızca hata ve kritik uyarılar için kullanılmalıdır.
- Turuncu yalnızca dikkat gerektiren ikincil durumlarda kullanılmalıdır.
- Marka dışı neon renklerden kaçınılmalıdır.
- Gradient kullanılacaksa çok kontrollü kullanılmalıdır.
- Aşırı parlak gradient kullanılmamalıdır.
- Arka planların büyük bölümü beyaz veya çok açık nötr tonlarda olmalıdır.
- Koyu metin için çok açık arka plan tercih edilmelidir.
- Yaklaşık ana yeşil: `#2FA447`.
- Yaklaşık ana mavi: `#0874BE`.
- Renk değerleri gerçek kurumsal brand guideline geldiğinde onunla değiştirilmelidir.
- Renklerin kontrast oranı erişilebilirlik açısından kontrol edilmelidir.

## 05 — TASARIM DİLİ

- Tasarım modern kurumsal teknoloji şirketi hissi vermelidir.
- Tasarım aynı zamanda enerji sektörüne ait olduğunu hissettirmelidir.
- Fazla kurumsal ve soğuk görünmekten kaçınılmalıdır.
- Fazla eğlenceli veya startup benzeri görünmekten kaçınılmalıdır.
- Bol miktarda whitespace kullanılmalıdır.
- İçerik blokları nefes almalıdır.
- Kartlar gerektiğinde hafif border ve shadow kullanabilir.
- Çok koyu ve ağır box-shadow kullanılmamalıdır.
- Border radius modern fakat abartısız olmalıdır.
- Genel radius sistemi tutarlı olmalıdır.
- Önerilen küçük radius: `8px`.
- Önerilen orta radius: `12px`.
- Önerilen büyük radius: `20px`.
- Butonlar belirgin fakat agresif görünmemelidir.
- Hover durumları yumuşak transition ile yapılmalıdır.
- Animation süreleri genellikle `150ms–300ms` aralığında tutulmalıdır.
- Her element animasyonlu olmamalıdır.
- Scroll sırasında aşırı parallax kullanılmamalıdır.
- Kullanıcıyı yoran sürekli hareketli elementlerden kaçınılmalıdır.
- Tasarım "premium ama sade" hissi vermelidir.

## 06 — TYPOGRAPHY

- Türkçe karakter desteği tam olmalıdır.
- Font seçimi modern ve yüksek okunabilirlik sağlayan bir sans-serif olmalıdır.
- Inter, Manrope, Geist veya benzeri fontlar değerlendirilebilir.
- Mevcut projede font tanımlıysa değiştirmeden önce incele.
- Çok fazla font ailesi kullanma.
- Maksimum iki font ailesi kullanılmalıdır.
- Başlıklar güçlü fakat aşırı kalın olmamalıdır.
- Body text rahat okunmalıdır.
- Uzun paragraflar çok geniş satırlara yayılmamalıdır.
- Ana içerik maksimum okunabilir genişlikte tutulmalıdır.
- `line-height` okunabilirlik için yeterli olmalıdır.
- Küçük metinler 12px altına indirilmemelidir.
- Normal body text tercihen 16px civarında olmalıdır.
- Büyük başlıklar responsive şekilde küçülmelidir.
- Mobil cihazlarda heading taşması engellenmelidir.
- Türkçe büyük harf dönüşümlerinde locale sorunlarına dikkat edilmelidir.
- "İ", "I", "Ş", "Ğ", "Ü", "Ö", "Ç" karakterleri doğru gösterilmelidir.

## 07 — LAYOUT

- Sayfanın ana içerik genişliği tutarlı olmalıdır.
- Önerilen maksimum container genişliği `1200px–1280px` aralığındadır.
- Çok geniş ekranlarda içerik sonsuza kadar büyümemelidir.
- Masaüstünde yeterli yatay padding kullanılmalıdır.
- Tablet breakpoint'leri ayrıca düşünülmelidir.
- Mobilde içerik ekran kenarına yapışmamalıdır.
- Grid yapıları responsive olmalıdır.
- Sabit piksel genişliklerden mümkün olduğunca kaçınılmalıdır.
- Flex ve Grid tercih edilmelidir.
- İçerik akışı doğal responsive davranmalıdır.
- Absolute positioning yalnızca gerçekten gerektiğinde kullanılmalıdır.
- Hero section farklı ekran boyutlarında kontrol edilmelidir.
- Navigation mobilde kullanılabilir olmalıdır.
- Footer mobilde okunabilir olmalıdır.
- Büyük görseller layout shift oluşturmamalıdır.

## 08 — HEADER

- Header markanın güven veren yüzü olarak tasarlanmalıdır.
- Logo header içinde yeterli büyüklükte görünmelidir.
- Header gereksiz kalabalıklaştırılmamalıdır.
- Ana navigasyon açık ve anlaşılır olmalıdır.
- Navigasyon isimleri kullanıcı dilinde olmalıdır.
- Önerilen ana navigasyon:
  - Ana Sayfa
  - Hakkımızda
  - Hizmetlerimiz
  - Güvenli Doğalgaz
  - Duyurular
  - İletişim
- Gerçek sayfalar farklıysa mevcut sitemap esas alınmalıdır.
- Header sticky olacaksa içerik header altında gizlenmemelidir.
- Sticky header çok yüksek olmamalıdır.
- Mobilde hamburger menü erişilebilir olmalıdır.
- Hamburger butonu gerçek button elementi olmalıdır.
- Mobil menü açık/kapalı durumu erişilebilir şekilde belirtilmelidir.
- Header hover efektleri sade olmalıdır.
- Aktif sayfa görsel olarak belli olmalıdır.
- Logo tıklandığında ana sayfaya dönmelidir.

## 09 — HERO SECTION

- Ana sayfanın hero alanı ilk izlenimi oluşturur.
- Hero alanı doğalgaz, enerji, güven veya sürdürülebilirlik hissi vermelidir.
- Hero'da gereksiz uzun metin kullanılmamalıdır.
- Ana başlık mümkün olduğunca kısa tutulmalıdır.
- Hero başlığı kullanıcıya şirketin ne yaptığını hızlıca anlatmalıdır.
- Alt açıklama bir veya iki kısa paragraftan oluşabilir.
- Ana CTA görünür olmalıdır.
- İkinci CTA gerekiyorsa görsel olarak ikincil tutulmalıdır.
- CTA metinleri eylem odaklı olmalıdır.
- Örnek CTA: "Hizmetlerimizi İnceleyin".
- Örnek CTA: "Bize Ulaşın".
- Örnek CTA: "Daha Fazla Bilgi".
- Hero görseli metnin okunabilirliğini engellememelidir.
- Hero görselinde doğalgaz altyapısı, enerji veya modern şehir temaları kullanılabilir.
- Stok fotoğraf kullanılacaksa kaliteli ve doğal görünmelidir.
- Yapay görünen aşırı parlak enerji görsellerinden kaçınılmalıdır.

## 10 — ANA SAYFA

- Ana sayfa şirketi birkaç saniye içinde tanıtmalıdır.
- Kullanıcı şirketin ne yaptığını hızlıca anlamalıdır.
- Ana sayfada hizmetler özetlenmelidir.
- Şirket hakkında kısa bir güven alanı bulunabilir.
- Değerler veya avantajlar sade kartlarla anlatılabilir.
- Güvenlik konusu görünür olmalıdır.
- İletişim CTA'sı kullanıcıyı yönlendirmelidir.
- Gerekliyse duyurular ana sayfada listelenebilir.
- Gereksiz carousel kullanımından kaçınılmalıdır.
- Hero carousel kullanılacaksa otomatik hareket zorunlu olmamalıdır.
- Ana sayfa SEO açısından güçlü heading hiyerarşisine sahip olmalıdır.
- Ana sayfada tek bir ana `h1` kullanılmalıdır.
- `h2` ve `h3` başlıkları mantıksal sırayı takip etmelidir.

## 11 — HAKKIMIZDA

- Hakkımızda sayfası güven oluşturmalıdır.
- Şirketin kuruluşu, faaliyet alanı ve yaklaşımı anlatılmalıdır.
- Gerçek bilgi yoksa içerik uydurulmamalıdır.
- Tarih, sayı, çalışan sayısı veya proje sayısı doğrulanmadan yazılmamalıdır.
- "Türkiye'nin lider..." gibi doğrulanmamış iddialar kullanılmamalıdır.
- Vizyon ve misyon gerçek bilgilerle doldurulmalıdır.
- Kurumsal fotoğraflar tercih edilmelidir.
- Şirket değerleri sade şekilde sunulabilir.
- Sayfa aşırı metin yoğun olmamalıdır.

## 12 — HİZMETLER

- Her hizmet kolay anlaşılır biçimde anlatılmalıdır.
- Teknik jargon gerekiyorsa açıklaması verilmelidir.
- Hizmet kartları birbirinden net biçimde ayrılmalıdır.
- Her hizmetin faydası kullanıcı açısından anlatılmalıdır.
- Sadece teknik özellik listesi yazılmamalıdır.
- Hizmet detay sayfaları SEO dostu olmalıdır.
- Hizmet sayfalarında uygun CTA bulunmalıdır.
- Hizmet isimleri tutarlı yazılmalıdır.
- Gerçekte sunulmayan hizmetler eklenmemelidir.
- Placeholder hizmetler production ortamında bırakılmamalıdır.

## 13 — DOĞALGAZ GÜVENLİĞİ

- Güvenlik içerikleri özellikle dikkatli hazırlanmalıdır.
- Teknik güvenlik bilgileri doğrulanmadan uydurulmamalıdır.
- Tehlikeli veya hatalı uygulama talimatları verilmemelidir.
- Acil durum iletişim bilgileri varsa görünür tutulmalıdır.
- Acil numaralar doğrulanmadan yazılmamalıdır.
- Kullanıcıya gaz kokusu gibi durumlarda profesyonel yardım alması gerektiği açıkça anlatılabilir.
- Güvenlik sayfasında resmi ve doğrulanabilir bilgiler tercih edilmelidir.
- Güvenlik içerikleri görsel olarak kolay taranabilir olmalıdır.
- Kritik uyarılar renk, ikon ve metinle birlikte aktarılmalıdır.
- Güvenlik sayfası tasarım uğruna gereksiz şekilde sadeleştirilmemelidir.

## 14 — DUYURULAR

- Duyurular tarih bilgisiyle gösterilmelidir.
- Yeni duyurular eski duyurulardan ayırt edilebilmelidir.
- Duyuru kartları tutarlı tasarlanmalıdır.
- Duyuru başlıkları çok uzun olmamalıdır.
- Tarihler Türkçe formatta gösterilebilir.
- Örnek format: `9 Eylül 2026`.
- Duyuru detay sayfası paylaşılabilir URL yapısına sahip olmalıdır.
- Duyuru bulunmadığında boş ekran gösterilmemelidir.
- "Henüz duyuru bulunmamaktadır." gibi anlaşılır bir durum gösterilebilir.

## 15 — İLETİŞİM

- İletişim sayfası mümkün olduğunca basit olmalıdır.
- Telefon bilgisi tıklanabilir olmalıdır.
- E-posta bilgisi tıklanabilir olmalıdır.
- Adres varsa harita ile desteklenebilir.
- Harita kullanımı performans açısından kontrol edilmelidir.
- İletişim formu gereksiz alanlarla doldurulmamalıdır.
- Form alanları açık ve anlaşılır etiketlere sahip olmalıdır.
- Zorunlu alanlar belirtilmelidir.
- Form gönderiminden sonra net başarı mesajı gösterilmelidir.
- Hata mesajları kullanıcıya ne yapması gerektiğini söylemelidir.
- Form validasyonu hem frontend hem backend tarafında yapılmalıdır.
- Spam koruması gerekiyorsa uygulanmalıdır.
- Kullanıcıdan gereksiz kişisel veri istenmemelidir.

## 16 — CTA KURALLARI

- Ana CTA rengi marka yeşili veya marka mavisi olabilir.
- Aynı sayfada gereğinden fazla primary CTA kullanılmamalıdır.
- Primary ve secondary button ayrımı net olmalıdır.
- Button metinleri "Gönder" yerine mümkünse daha açıklayıcı olabilir.
- Örneğin "İletişim Formunu Gönder".
- CTA'lar kullanıcıyı yanlış yönlendirmemelidir.
- Disabled butonlar disabled görseline sahip olmalıdır.
- Loading sırasında buton tekrar tıklanamamalıdır.
- Button içinde sadece ikon varsa erişilebilir label bulunmalıdır.

## 17 — ICON KURALLARI

- İkon seti proje genelinde tutarlı olmalıdır.
- Aynı ekranda farklı ikon stilleri karıştırılmamalıdır.
- Lucide veya mevcut projedeki ikon sistemi kullanılabilir.
- Marka logosu ikon yerine kullanılmamalıdır.
- Dekoratif ikonlar ekran okuyucudan gizlenebilir.
- Anlam taşıyan ikonların yanında metin bulunması tercih edilir.
- İkon boyutları tutarlı olmalıdır.
- Gereksiz ikon kalabalığından kaçınılmalıdır.

## 18 — GÖRSELLER

- Görseller yüksek kaliteli olmalıdır.
- Görseller marka hissine uygun olmalıdır.
- Doğalgaz, enerji, altyapı, şehir ve sürdürülebilirlik görselleri tercih edilebilir.
- Aşırı klişe stok görsellerinden kaçınılmalıdır.
- Görsel üzerinde okunamayan metin kullanılmamalıdır.
- Hero görselleri optimize edilmelidir.
- WebP veya AVIF uygun olduğunda kullanılmalıdır.
- `alt` metinleri anlamlı olmalıdır.
- Dekoratif görseller için boş alt kullanılabilir.
- Her görselin `width` ve `height` bilgileri mümkünse belirlenmelidir.
- Lazy loading ekranın altındaki görsellerde kullanılabilir.
- Above-the-fold ana görsel gereksiz şekilde lazy-load edilmemelidir.

## 19 — ACCESSIBILITY

- WCAG prensiplerine mümkün olduğunca uyulmalıdır.
- Tüm interaktif elementler klavye ile kullanılabilmelidir.
- Focus state kesinlikle kaldırılmamalıdır.
- Focus görünür olmalıdır.
- Renk tek başına anlam taşımamalıdır.
- Form alanlarının label'ları olmalıdır.
- Image alt metinleri doğru kullanılmalıdır.
- Heading hiyerarşisi düzgün olmalıdır.
- Linkler link, aksiyonlar button olmalıdır.
- `div` elementi button yerine kullanılmamalıdır.
- Modal'lar klavye erişimine uygun olmalıdır.
- Escape tuşu modal kapatmada kullanılabilir.
- Mobil touch target'lar yeterince büyük olmalıdır.
- Küçük metinlerde kontrast kontrol edilmelidir.

## 20 — RESPONSIVE TASARIM

- Önce mobil deneyim düşünülmelidir.
- Site 320px genişliğinde dahi temel işlevlerini korumalıdır.
- 360px genişlik ayrıca kontrol edilmelidir.
- 390px genişlik ayrıca kontrol edilmelidir.
- Tablet görünümü desktop'ın küçültülmüş hali olmamalıdır.
- Navigation mobilde yeniden tasarlanmalıdır.
- Grid'ler mobilde tek kolona düşebilir.
- Büyük heading'ler mobilde küçülmelidir.
- Hero içerikleri mobilde mantıklı sıraya geçmelidir.
- Görseller mobilde ekranı taşırmamalıdır.
- Horizontal scroll normal içerikte oluşmamalıdır.
- Button'lar mobilde kolay tıklanmalıdır.
- Footer mobilde kolon yapısından dikey yapıya geçebilir.

## 21 — SEO

- Her sayfanın benzersiz title değeri olmalıdır.
- Her sayfanın anlamlı meta description değeri olmalıdır.
- Her sayfada mantıklı bir H1 bulunmalıdır.
- H1 yalnızca görsel amaçla kullanılmamalıdır.
- URL'ler kısa ve anlaşılır olmalıdır.
- Türkçe karakterleri URL'lerde kullanmadan önce proje standardına bak.
- Slug yapısı tutarlı olmalıdır.
- Canonical URL gerekiyorsa kullanılmalıdır.
- Open Graph metadata eklenmelidir.
- Sosyal paylaşım görselleri optimize edilmelidir.
- Favicon tanımlanmalıdır.
- Sitemap oluşturulmalıdır.
- Robots.txt kontrol edilmelidir.
- Structured data gerekiyorsa doğru schema kullanılmalıdır.
- Şirket bilgileri için Organization schema değerlendirilebilir.
- LocalBusiness schema yalnızca uygun gerçek bilgiler mevcutsa kullanılmalıdır.
- Sahte review schema kesinlikle kullanılmamalıdır.
- Sahte yıldız puanları eklenmemelidir.

## 22 — İÇERİK SEO

- Anahtar kelime doldurma yapılmamalıdır.
- Metin insanlar için yazılmalıdır.
- "Doğalgaz", "enerji", "güvenli doğalgaz" gibi konular doğal şekilde kullanılabilir.
- Yerel SEO gerekiyorsa gerçek hizmet bölgeleri kullanılmalıdır.
- Hizmet verilmeyen şehirler SEO amacıyla eklenmemelidir.
- Sahte lokasyon sayfaları oluşturulmamalıdır.
- Başlıklar arama niyetine uygun hazırlanmalıdır.
- Meta description kullanıcıyı yanıltmamalıdır.
- Sayfa başlıkları tekrar etmemelidir.

## 23 — PERFORMANCE

- Web sitesi mümkün olduğunca hızlı açılmalıdır.
- Gereksiz JavaScript gönderilmemelidir.
- Büyük görseller optimize edilmelidir.
- Font sayısı minimum tutulmalıdır.
- Font preload yalnızca gerektiğinde yapılmalıdır.
- Third-party script sayısı minimum tutulmalıdır.
- Analytics script'leri performans etkisi açısından değerlendirilmelidir.
- Ağır animation kütüphaneleri gereksizse kullanılmamalıdır.
- CSS bundle gereksiz şekilde büyütülmemelidir.
- Büyük background image'lar dikkatli kullanılmalıdır.
- Lighthouse performans skorları takip edilmelidir.
- Core Web Vitals önemsenmelidir.
- CLS azaltılmalıdır.
- LCP optimize edilmelidir.
- INP optimize edilmelidir.

## 24 — SECURITY

- Kullanıcı girdileri güvenilmez kabul edilmelidir.
- Frontend validation tek başına güvenlik mekanizması değildir.
- Backend validation yapılmalıdır.
- HTML injection engellenmelidir.
- XSS risklerine dikkat edilmelidir.
- Kullanıcı tarafından verilen HTML doğrudan render edilmemelidir.
- API key'ler frontend'e yazılmamalıdır.
- Secret değerler Git'e commit edilmemelidir.
- `.env` dosyaları repository'ye eklenmemelidir.
- Hassas bilgiler loglanmamalıdır.
- Form endpoint'leri rate limit gerektirebilir.
- CSRF koruması framework standardına göre uygulanmalıdır.
- HTTPS production için zorunlu kabul edilmelidir.
- Güvenlik header'ları deployment altyapısında değerlendirilmelidir.

## 25 — FORM KURALLARI

- Form input'ları kontrollü olmalıdır.
- Email formatı doğrulanmalıdır.
- Telefon formatı proje gereksinimine göre doğrulanmalıdır.
- Kullanıcıya gereksiz validation hatası gösterilmemelidir.
- Hata mesajları Türkçe olmalıdır.
- Hata mesajları input'a yakın gösterilmelidir.
- Submit sırasında loading state gösterilmelidir.
- Başarılı submit sonrası net feedback verilmelidir.
- Başarısız submit durumunda kullanıcı verisi mümkünse korunmalıdır.
- Form submit iki kere gerçekleşmemelidir.
- Spam koruması gerekiyorsa backend'de de kontrol edilmelidir.

## 26 — ERROR STATES

- Kullanıcı hiçbir zaman boş bir ekran görmemelidir.
- API hataları kullanıcı dostu mesajla gösterilmelidir.
- Teknik hata detayları kullanıcıya gösterilmemelidir.
- Developer console'da anlamlı hata bulunabilir.
- 404 sayfası markaya uygun tasarlanmalıdır.
- 500 hatası için sade fallback ekranı bulunabilir.
- Network error durumları düşünülmelidir.
- Loading state gerçek loading sırasında gösterilmelidir.
- Skeleton kullanılıyorsa gerçek layout'a benzemelidir.

## 27 — EMPTY STATES

- Veri yoksa boş state tasarlanmalıdır.
- Boş state kullanıcıya ne olduğunu açıklamalıdır.
- Gerekliyse sonraki aksiyon belirtilmelidir.
- Örneğin duyuru yoksa gereksiz hata mesajı gösterilmemelidir.
- "Veri bulunamadı" gibi teknik ifadeler mümkünse daha doğal yazılmalıdır.
- Empty state marka tasarımıyla uyumlu olmalıdır.

## 28 — COMPONENT MİMARİSİ

- Component'ler mümkün olduğunca tek sorumluluklu olmalıdır.
- Çok büyük component'ler bölünmelidir.
- Component isimleri açık olmalıdır.
- `Hero`, `Header`, `Footer`, `ServiceCard` gibi isimler kullanılabilir.
- Component içinde gereksiz business logic tutulmamalıdır.
- Tekrar eden UI component'e dönüştürülmelidir.
- Ancak iki kez kullanılan her şey için abstraction yapılması zorunlu değildir.
- Premature abstraction'dan kaçınılmalıdır.
- Component API'leri sade tutulmalıdır.
- Props isimleri açıklayıcı olmalıdır.
- Boolean prop isimleri `is`, `has`, `show` gibi anlaşılır prefix'lere sahip olabilir.

## 45 — TEST

- Her önemli UI değişikliğinden sonra build çalıştırılmalıdır.
- TypeScript hataları kontrol edilmelidir.
- Lint hataları kontrol edilmelidir.
- Ana sayfa kontrol edilmelidir.
- Header kontrol edilmelidir.
- Footer kontrol edilmelidir.
- Mobil görünüm kontrol edilmelidir.
- Tablet görünüm kontrol edilmelidir.
- Desktop görünüm kontrol edilmelidir.
- Formlar test edilmelidir.
- Navigation linkleri test edilmelidir.
- 404 davranışı test edilmelidir.
- Görsellerin yüklenmesi kontrol edilmelidir.
- Console error kontrol edilmelidir.