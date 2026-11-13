/* 03 — İnvestisiya layihələri. Source: report section 11 (projects 11.1–11.12). */
(function () {
  'use strict';

  Object.assign(window.Agdash.projects, {
    senaye: {
      code: '11.1', title: 'Ağdaş Özəl Sənaye və Logistika Məhəlləsi', image: 'senaye-mehellesi.jpg',
      imageAlt: 'Sənaye və logistika məhəlləsinin konseptual görünüşü',
      summary: 'Ləki qəsəbəsində, Bakı–Yevlax yolunun və İpək yolunun yaxınlığında, sənaye təyinatlı torpaqlarda kiçik və orta sahibkarlıq üçün sənaye məhəlləsi.',
      facts: [['İnvestisiya dəyəri', '150–200 mln ₼'], ['Ərazi', '200 ha'], ['Dövr', '2027–2031']],
      details: [
        { title: 'Əsaslandırma', items: [
          'Ağdaş aqrar rayon olduğu üçün kənd təsərrüfatı məhsullarının emalını genişləndirmək və əlavə dəyər yaratmaq zəruridir.',
          'Özəl idarəetmə modeli məqsədəuyğun sayılır; uğurlu olacağı təqdirdə məhəllə gələcəkdə sənaye parkına çevrilə bilər.',
        ] },
        { title: 'Gözlənilən nəticələr', items: [
          '2030-cu ildə 25–30 rezident fəaliyyət göstərir, ilk ixrac məhsulları bazara çıxarılır, təxminən 800–1 000 iş yeri yaradılır.',
          '2031-ci ilin sonuna 40–50 rezident; 1 500–2 000 daimi və 800–1 000 mövsümi iş yeri; təxminən 150–300 milyon manat investisiya cəlb olunur.',
        ] },
      ],
    },
    soyuducu: {
      code: '11.6', title: 'Multifunksional soyuducu anbar kompleksi', image: 'soyuducu-anbar.jpg',
      imageAlt: 'Soyuq zəncir (cold chain) proses axını',
      summary: 'Məhsulun qəbulundan çeşidləmə, qablaşdırma, saxlama, topdansatış və ixrac hazırlığına qədər prosesləri bir mərkəzdə birləşdirən kompleks.',
      facts: [['Tutum', '1 000 ton'], ['İlkin investisiya', '≈5,5 mln USD'], ['Geriödəmə', '7–8 il']],
      details: [
        { title: 'İlkin parametrlər', items: [
          'Temperatur zonaları: 0…+4 °C və −18…−20 °C; 3 000–5 000 tona mərhələli genişlənmə imkanı.',
          'Enerji modeli: şəbəkə + günəş PV + BESS + ehtiyat generator; hibrid sistem illik enerji xərclərini 30–40% azalda bilər.',
          'Rəqəmsal idarəetmə: WMS, SCADA, IoT, RFID və ERP inteqrasiyası; HACCP / ISO 22000 istiqaməti.',
        ] },
        { title: 'Gözlənilən nəticələr', items: ['35–45 daimi iş yeri və mövsümi dövrlərdə əlavə məşğulluq.', 'Mövsümi bolluq dövründə məhsulun itkisiz qəbulu və bazara mərhələli çıxarılması.'] },
      ],
    },
    tedaruk: {
      code: '11.12', title: 'Ağıllı tədarük və logistika mərkəzi', image: 'tedaruk-merkezi.jpg',
      imageAlt: 'Tədarük və logistika mərkəzinin konsepti',
      summary: 'Fermer–tədarük–saxlama–emal–logistika–bazar zəncirinin əsas halqası: məhsulun vahid mərkəzdə qəbulu, çeşidlənməsi, ilkin emalı və bazara yönəldilməsi.',
      facts: [['Xammal ehtiyatı', '93 mln ₼/il (4 məhsul)'], ['Logistika', 'Ləki dəmir yolu stansiyası']],
      details: [
        { title: 'Əsaslandırma', items: [
          'Təkcə baş soğan, kələm, yerkökü və kartof üzrə Ağdaş və ətraf rayonlarda illik 93 milyon manat həcmində ehtiyat var.',
          '2026-cı ildə Ağdaş Rayon İcra Hakimiyyəti ilə Kənd Təsərrüfatı Nazirliyinin müzakirələrində tədarük məntəqələrinin yaradılması ayrıca gündəmə gətirilib.',
        ] },
      ],
    },
    pavloniya: {
      code: '11.7', title: 'Pavloniya sənaye meşəçiliyi və ağac emalı klasteri', image: 'pavloniya.jpg',
      imageAlt: 'Pavloniya klasterinin dəyər zənciri',
      summary: 'Tingçilik, plantasiya, ağac emalı, logistika və satışı vahid dəyər zəncirində birləşdirən yaşıl sənaye layihəsi.',
      facts: [['Pilot mərhələ', '50 ha'], ['Geriödəmə (yalnız plantasiya)', '8–10 il']],
      details: [
        { title: 'Üstünlüklər', items: [
          'Azərbaycanda ağac materiallarına artan tələbat və idxaldan asılılıq.',
          'Ağdaşın 8 min hektar zəif şorlaşmış ehtiyat torpaqları, Bakı–Qazax magistralı və Ləki stansiyasına yaxınlıq.',
          'Yaşıl iqtisadiyyat siyasətinə uyğunluq və yüksək karbon udma potensialı.',
        ] },
        { title: 'Mərhələlər', items: ['50 hektarda pilot əkin və 2 illik monitorinq.', 'Tingçilik mərkəzi, sonra ağac emalı zavodu və mebel istehsalı — emal ilə inteqrasiya gəlirliliyi əhəmiyyətli artırır.'] },
      ],
    },
    turyancay: {
      code: '11.2', title: '“Türyançay” fermer təsərrüfatı bazasında özəl aqro-klaster', image: 'turyancay.jpg',
      imageAlt: '“Türyançay” təsərrüfatında iribuynuzlu mal-qaranın sayı: faktiki və hədəf',
      summary: '2007-ci ildən Yuxarı Nemətabad kəndində fəaliyyət göstərən təsərrüfatın bazasında süd-ət, yem və emalı birləşdirən klaster.',
      facts: [['Ərazi', '3 000 ha'], ['Mal-qara', '1 700 baş → 5 000'], ['Yeni iş yeri', '+220 daimi']],
      details: [
        { title: 'Mövcud baza', items: [
          '2 500 hektara yaxın ərazidə taxılçılıq, yem bitkiləri, günəbaxan, tərəvəz istehsalı və bağçılıq.',
          'Avropadan gətirilmiş yüksək məhsuldar cins inəklər; hədəf — baş sayını 5 000-ə çatdırmaq.',
        ] },
        { title: 'Klaster modeli', items: ['Emal, saxlama və logistika obyektlərinin aqropark statusu ilə qeydiyyatı vergi və gömrük güzəştlərinə çıxış verir.'] },
      ],
    },
    camis: {
      code: '11.3', title: 'Ağdaş Özəl Camışçılıq Aqroparkı', image: 'camisciliq.jpg',
      imageAlt: 'Camışçılıq aqroparkının konsepti',
      summary: 'Camışçılıq + yem bazası + süd emalı + damazlıq + ət istehsalı + logistika + brend məhsullar üzrə tam dəyər zənciri.',
      facts: [['Model', 'Tam dəyər zənciri'], ['Rayonun əkin sahəsi', '34 min ha-dan çox']],
      details: [
        { title: 'Nə üçün Ağdaşda?', items: [
          'Ağdaş Aran zonasında yerləşir — camış əsasən aran və dağətəyi rayonlarda yetişdirilir.',
          'Kür, Türyançay və Yuxarı Şirvan kanalı camışçılıq üçün vacib olan su amilini təmin edir.',
          '2026-cı ildə rayonun aqrar inkişafı ilə bağlı rəsmi müzakirələrdə camışçılığın perspektivləri ayrıca qeyd olunub.',
        ] },
      ],
    },
    celtik: {
      code: '11.4', title: 'Özəl Çəltik Aqroparkı (aqro-klaster)', image: 'celtik.jpg',
      imageAlt: 'Çəltik aqro-klasterinin konsepti',
      summary: 'Ölkədə çəltik istehsalında birinci olan rayonda “Ağdaş düyüsü” brendi ətrafında əkin, emal və qablaşdırma klasteri.',
      facts: [['Əkin sahəsi', '1 306 ha'], ['Emal potensialı', '7–8 min ton/il'], ['Əkənlər', '35 kənddə 175 təsərrüfat']],
      details: [
        { title: 'Bazar', items: [
          'Ölkənin düyüyə tələbatı 40 min tondan çoxdur; 2025-ci ildə özünütəminat səviyyəsi 28% olmuşdur.',
          '2020–2025-ci illərdə rayonda çəltiyin əkin sahəsi 691 hektar, istehsalı 902 ton artmışdır.',
        ] },
        { title: 'Yerli sortlar', items: ['“Yerli bezon”, “Ağ mirvari”, “Qırmızı mirvari”, “Çappa”, “Ağ gilə”.'] },
      ],
    },
    istixana: {
      code: '11.5', title: 'Ağıllı İstixana Kompleksi', image: 'istixana.jpg',
      imageAlt: 'Ağıllı istixana kompleksinin sxemi',
      summary: 'IoT, süni intellekt və avtomatlaşdırılmış idarəetməyə əsaslanan, ilboyu sabit məhsul verən yüksək texnologiyalı kompleks.',
      facts: [['İlkin sahə', '10 ha'], ['İş yeri', '120 daimi'], ['Su qənaəti', '40–50%']],
      details: [
        { title: 'Texnologiya', items: [
          'Ağıllı suvarma və damlama sistemləri: su sərfiyyatı 40–50%, gübrə istifadəsi 30%-dək azalır.',
          'İqlimə avtomatik nəzarət — 365 gün sabit və yüksəkkeyfiyyətli məhsul.',
        ] },
        { title: 'Faydalar', items: [
          'Bakı–Qazax magistralı və dəmir yolu üzərində yerləşmə ixracı sürətli və az xərcli edir.',
          'Aqronomlar, İT mütəxəssisləri və mühəndislər üçün sabit iş yerləri; Ağdaşın “Agro-Tech” mərkəzi kimi brendləşməsi.',
        ] },
      ],
    },
    turizm: {
      code: '11.10', title: 'Turizmin inkişaf istiqamətləri', image: 'turizm.jpg',
      imageAlt: 'Turizm resurslarının sosial-iqtisadi effektə çevrilmə məntiqi',
      summary: 'Kənd turizmi, aqroturizm, ekoturizm, qastronomiya və yolüstü xidmətlər — “resurs → məhsul → bazar → idarəetmə → effekt” ardıcıllığı ilə.',
      facts: [['Abidələr', '17 tarix-mədəniyyət abidəsi'], ['Yerləşmə', '3 ulduzlu 2 otel təklifi']],
      details: [
        { title: 'Məhsullar', items: [
          'Kürqırağı ekoloji zonalar, Türyançay və qoruq xətti üzrə bələdçili marşrutlar.',
          'Meyvə yığımı, baramaçılıq təcrübəsi, kənd bazarı, qonaq evi və qastronomiya paketləri.',
          '“Heyva Yolu” marşrutu və tematik festivallar.',
        ] },
        { title: 'Regional mövqe', items: ['Ağdaş Qəbələ, Oğuz, Göyçay və Bərdə ilə birgə marşrutlarda “Mərkəzi Aran turizm keçidi” kimi mövqelənə bilər.'] },
      ],
    },
    tibb: {
      code: '11.9', title: 'Özəl tibb müəssisələrinin yaradılması', image: 'tibb.jpg',
      imageAlt: 'Özəl tibb müəssisələri layihəsinin sxemi',
      summary: 'Səpələnmiş kənd məskunlaşması şəraitində ilkin tibbi xidmətin əlçatanlığını artıran özəl kənd tibb məntəqələri.',
      facts: [['İş yeri', '5–7 (hər məntəqədə)'], ['Mövcud baza', '1 mərkəzi xəstəxana']],
      details: [
        { title: 'Əsaslandırma', items: [
          'Rayonda cəmi bir mərkəzi xəstəxana fəaliyyət göstərir; 2020–2024-cü illərdə həkimlərin sayı 6,7% azalmışdır.',
          'Əhalinin 68,3%-i kəndlərdə yaşayır.',
        ] },
        { title: 'Maliyyə imkanları', items: ['Beynəlxalq təşkilatların uzaq kəndlərdə səhiyyə əlçatanlığı üçün ayırdığı qrantlar.'] },
      ],
    },
    enerji: {
      code: '11.8', title: 'Bərpa olunan enerji mənbələrindən istifadə', image: 'gunes-enerjisi.jpg',
      imageAlt: 'Günəş elektrik stansiyası',
      summary: 'Günəş, bioenerji, üzən günəş panelləri və yaşıl hidrogen — Ağdaşın iqlimi və su resursları üzərində qurulan enerji portfeli.',
      facts: [['Günəş stansiyası', '200 MVt'], ['Sahə', '300 ha'], ['Orta temperatur', '14,2 °C']],
      details: [
        { title: 'İstiqamətlər', items: [
          'Günəş Elektrik Stansiyası: Əmirarx və Ağcaqovaq kəndləri yaxınlığında, Bakı–Ələt–Qazax yolunun şimalında.',
          'Bioenerji: heyvandarlıq və bitkiçilik tullantılarından bioqaz və üzvi gübrə — tətbiqi ən tez baş tuta biləcək sahə.',
          'Üzən günəş panelləri: Türyançay su qovşağı, Yuxarı Şirvan kanalı və süni suvarma göllərində.',
          'Yaşıl hidrogen: artıq günəş enerjisi ilə sudan hidrogen istehsalı — uzunmüddətli perspektiv.',
        ] },
      ],
    },
    bazar: {
      code: '11.11', title: 'Müasir Bazar-Yarmarka Kompleksi', image: 'bazar-yarmarka.jpg',
      imageAlt: 'Bazar-yarmarka kompleksinin konseptual görünüşü',
      summary: 'Topdan və pərakəndə satışı, tədarükü, saxlamanı və laboratoriya nəzarətini bir məkanda birləşdirən “tarladan masaya” kompleksi.',
      facts: [['Ərazi', '10+ ha'], ['Ümumi sahə', '100 min m²'], ['Model', 'Dövlət–özəl tərəfdaşlığı']],
      details: [
        { title: 'Şərtləndirən amillər', items: [
          'Mövcud bazar məhdud ərazidə yerləşir, maddi-texniki bazası zəifdir və sanitar standartlara cavab vermir.',
          'Fermerlər məhsulunu vasitəçisiz, birbaşa istehlakçıya təklif edə biləcək.',
          'Soyuducu anbarlar və çeşidləmə məntəqələri məhsul itkisini minimuma endirəcək.',
        ] },
        { title: 'Tərkibi', items: ['Qapalı hissə — 10 min m²; AQTA laboratoriyası, soyuducu anbar, tədarük-logistika ərazisi, aqroservis və bank filialı.', 'Yüzlərlə yeni iş yeri; yerli brendlər üçün turizm cazibə mərkəzi.'] },
      ],
    },
  });

  window.Agdash.content.push({
    id: 'layiheler',
    kicker: 'Layihə portfeli',
    title: 'İnvestisiya layihələri',
    intro: 'Hesabatda işlənmiş on iki prioritet layihə: hər biri iqtisadi əsaslandırma, ilkin parametrlər və gözlənilən nəticələrlə.',
    subs: [
      { id: 'layiheler-senaye', title: 'Sənaye və logistika', blocks: [
        { t: 'p', text: 'Aqrar xammalı emala, saxlamaya və bazara bağlayan infrastruktur layihələri — rayonun əsas struktur boşluğunu doldurur.' },
        { t: 'projects', ids: ['senaye', 'soyuducu', 'tedaruk', 'pavloniya'] },
      ] },
      { id: 'layiheler-aqrar', title: 'Kənd təsərrüfatı və emal', blocks: [
        { t: 'p', text: 'Rayonun müqayisəli üstünlüyünə — süd-ət, çəltik və örtülü qrunt məhsullarına söykənən klaster və aqropark layihələri.' },
        { t: 'projects', ids: ['turyancay', 'camis', 'celtik', 'istixana'] },
      ] },
      { id: 'layiheler-turizm', title: 'Turizm və xidmətlər', blocks: [
        { t: 'p', text: 'Qadın və gənclər üçün qeyri-aqrar məşğulluğu genişləndirən tamamlayıcı diversifikasiya istiqaməti.' },
        { t: 'projects', ids: ['turizm', 'tibb'] },
      ] },
      { id: 'layiheler-enerji', title: 'Bərpa olunan enerji', blocks: [
        { t: 'p', text: 'Emal, soyutma və istixana investisiyaları enerji xərclərinə həssasdır — yaşıl enerji həm ayrıca sektor, həm də digər layihələrin maya dəyərini azaldan vasitədir.' },
        { t: 'projects', ids: ['enerji'] },
      ] },
      { id: 'layiheler-ticaret', title: 'Ticarət və bazar infrastrukturu', blocks: [
        { t: 'p', text: 'Pərakəndə yönümlü ticarətdən topdansatış, distribusiya və regional bazar funksiyasına keçid.' },
        { t: 'projects', ids: ['bazar'] },
      ] },
    ],
  });
})();
