/* 01 — Ağdaş haqqında. Source: report sections I, II, IV, V and 11.9–11.10. */
(function () {
  'use strict';

  const DSK = 'Dövlət Statistika Komitəsi (2025) və müəllif hesablamaları';

  window.Agdash.content.push({
    id: 'haqqinda',
    kicker: 'Rayonla tanışlıq',
    title: 'Ağdaş haqqında',
    intro: 'Qədim İpək Yolu üzərində, respublikanın mərkəzində yerləşən Ağdaş zəngin mədəni irsə, güclü aqrar ənənələrə və 107,6 min nəfərlik əhaliyə malik rayondur.',
    subs: [
      {
        id: 'haqqinda-cografi-movqe',
        title: 'Coğrafi mövqe',
        blocks: [
          { t: 'lead', text: 'Ağdaş rayonu Şirvan düzünün şimal-qərbində, Acınohur ön dağlığının cənubunda, respublikanın mərkəzində yerləşir. Səthi əsasən düzənlik, şimal hissədə dağlıqdır.' },
          { t: 'stats', items: [
            { v: '1 023', u: 'km²', l: 'ərazi' },
            { v: '14,2', u: '°C', l: 'orta illik temperatur' },
            { v: '300–450', u: 'mm', l: 'illik yağıntı' },
            { v: '3', u: 'mənbə', l: 'suvarma suyu: Kür, Türyançay, Şirvan kanalı' },
          ] },
          { t: 'p', text: 'Rayonun ərazisindən Türyançay, cənub-qərb sərhədi boyu isə Kür çayı axır. Baş Şirvan kollektoru Ağdaş ərazisindən başlanır, Türyançayda su qovşağı yaradılmışdır. Coğrafi üstünlüklərdən ən başlıcası rayonun üç mənbədən suvarma suyu ilə təmin oluna bilməsidir.' },
          { t: 'p', text: 'İqlim düzənlik yerlərdə mülayim isti və quru-subtropikdir: orta temperatur yanvarda 1,2–1,4 °C, iyulda 25–27 °C-dir. Kür sahilində tuqay meşələri, şimalda — Türyançay Dövlət Təbiət Qoruğunda ardıc və saqqız ağaclarından ibarət seyrək arid meşələr var.' },
          { t: 'steps', title: 'Tarixdən səhifələr', items: [
            { title: 'XVI əsr', text: 'Ağdaş yaşayış məskəni salınır; toponimin təqribən 400 illik tarixi var.' },
            { title: '1873', text: 'İndiki rayon ərazisində Yelizavetpol quberniyasının tərkibində Ərəş qəzası yaradılır.' },
            { title: '1882', text: 'Azərbaycanda mövcud olan üç dünyəvi təhsil müəssisəsindən biri Ağdaşda açılır.' },
            { title: '1883', text: 'Bakı–Tiflis dəmir yolunun çəkilməsi Ağdaşın tranzit əhəmiyyətini artırır.' },
            { title: '1900', text: 'Ağdaşa şəhər statusu verilir.' },
            { title: '1904', text: 'Qafqaz pambıqçılarının Birinci Qurultayı Ağdaşda keçirilir.' },
            { title: '1930', text: 'Ağdaş rayonu yaradılır.' },
          ] },
        ],
      },
      {
        id: 'haqqinda-ehali',
        title: 'Əhali və insan kapitalı',
        blocks: [
          { t: 'lead', text: 'Ağdaş 107,6 min nəfərlə Mərkəzi Aranda əhali sayına, 24,5 min nəfərlə gənclərin sayına görə dördüncü mövqedədir. Rayonun əsas üstünlüyü geniş əhali və gənc insan kapitalı bazasıdır.' },
          { t: 'stats', items: [
            { v: '107,6', u: 'min', l: 'əhali (2025)' },
            { v: '105', u: 'nəfər/km²', l: 'əhali sıxlığı' },
            { v: '24,5', u: 'min', l: '14–29 yaşlı gənclər (22,8%)' },
            { v: '72', u: 'kənd', l: 'və 1 şəhər, 1 şəhər tipli qəsəbə, 1 qəsəbə' },
          ] },
          { t: 'bars', caption: 'Mərkəzi Aranın inzibati vahidləri üzrə əhali, 2025 (min nəfər)', source: DSK, items: [
            { l: 'Yevlax', v: 130.0 }, { l: 'Kürdəmir', v: 119.2 }, { l: 'Göyçay', v: 119.1 },
            { l: 'Ağdaş', v: 107.6, hl: true }, { l: 'Mingəçevir', v: 103.1 }, { l: 'Ucar', v: 85.5 }, { l: 'Zərdab', v: 59.7 },
          ] },
          { t: 'table', caption: 'Şəhər və kənd əhalisinin dinamikası', head: ['Göstərici', '2015', '2025', 'Dəyişmə'], source: DSK, rows: [
            ['Ümumi əhali, min nəfər', '105,5', '107,6', '+2,0%'],
            ['Şəhər əhalisi, min nəfər', '35,5', '34,3', '−3,4%'],
            ['Kənd əhalisi, min nəfər', '70,0', '73,3', '+4,7%'],
            ['Şəhər əhalisinin payı, faiz', '33,6', '31,9', '−1,8 f.b.'],
          ] },
          { t: 'p', text: '2020–2025-ci illərdə Ağdaşda əhalinin orta illik artımı 0,69%-ə yüksələrək həm Mərkəzi Aranı (0,59%), həm də ölkəni (0,50%) üstələmişdir. Gənclərin 69,0%-i kənd yaşayış məntəqələrində yaşayır — buna görə aqrotexnologiya, qida emalı, logistika, elektron ticarət və məsafədən xidmətlərin kənd iqtisadiyyatına inteqrasiyası rayonun insan kapitalı siyasətinin əsas xəttidir.' },
          { t: 'p', text: '15 və yuxarı yaşlı əhalinin 9,2%-i ali, 16,6%-i orta ixtisas və peşə, 70,2%-i tam və ümumi orta təhsilə malikdir. Əhalinin 49,9%-ni kişilər, 50,1%-ni qadınlar təşkil edir.' },
        ],
      },
      {
        id: 'haqqinda-iqtisadiyyat',
        title: 'İqtisadiyyat və sahibkarlıq',
        blocks: [
          { t: 'lead', text: '2025-ci ildə Ağdaşda əsas iqtisadi fəaliyyət sahələri üzrə 525,9 milyon manat məhsul buraxılışı formalaşmışdır — Mərkəzi Aran iqtisadi rayonunun təxminən 14,5%-i.' },
          { t: 'stats', items: [
            { v: '525,9', u: 'mln ₼', l: 'məhsul buraxılışı (2025)' },
            { v: '49,2', u: '%', l: 'kənd təsərrüfatının məhsul buraxılışında payı' },
            { v: '87,7', u: '%', l: 'sənayedə qeyri-dövlət sektorunun payı' },
            { v: '15 095', l: 'təsərrüfat subyekti (2020–2025: +59%)' },
          ] },
          { t: 'table', caption: 'Ağdaşın Mərkəzi Aranda mövqeyi, 2025', head: ['Göstərici', 'Yer'], source: 'Dövlət Statistika Komitəsi', rows: [
            ['Kənd təsərrüfatı', '3-cü'], ['Sənaye', '3-cü'], ['Nəqliyyat və anbar', '3-cü'],
            ['Ümumi məhsul buraxılışı', '4-cü'], ['Ticarət', '4-cü'], ['Tikinti', '6-cı'], ['İnformasiya və rabitə', '7-ci'],
          ] },
          { t: 'cards', title: 'Aqrar liderlik', items: [
            { tag: '1-ci yer', title: 'Çəltik', text: 'Çəltik istehsalına görə ölkədə birinci yer; 35 kənddə 175 fermer təsərrüfatı 1 306 hektarda çəltik əkir.' },
            { tag: '2-ci yer', title: 'Alça', text: 'Alça istehsalına görə ölkədə ikinci yer — meyvə emalı üçün davamlı xammal bazası.' },
            { tag: '3-cü yer', title: 'Xurma', text: 'Xurma istehsalına görə ölkədə üçüncü yer.' },
            { tag: '4-cü yer', title: 'Heyva', text: 'Heyva istehsalına görə ölkədə dördüncü yer; “Heyva Yolu” aqroturizm brendinin əsası.' },
          ] },
          { t: 'p', text: 'Sahibkarlıq bazası genişlənir: bütün subyektlərin 95,4%-i fiziki şəxslərdir, 2024-cü ildə fəaliyyətdə olan sahibkarlıq subyektlərinin sayı 2 060-a çatmışdır. Rayon 43,7 diversifikasiya indeksi ilə Mərkəzi Aranda dördüncü mövqedədir. Əsas vəzifə mövcud aqrar üstünlüyün ətrafında emal, logistika, rəqəmsal həllər və xidmətlər yaratmaqdır.' },
        ],
      },
      {
        id: 'haqqinda-infrastruktur',
        title: 'İnfrastruktur və nəqliyyat',
        blocks: [
          { t: 'lead', text: 'Rayonun ərazisindən Bakı–Tiflis və Bakı–Qəbələ dəmir yolları, Bakı–Qazax şose yolu və Mingəçevir–Bakı elektrik ötürmə xətti keçir.' },
          { t: 'table', caption: 'Ağdaş şəhərindən qonşu rayon mərkəzlərinə avtomobil yolu ilə məsafə', head: ['Şəhər', 'Məsafə', 'Təxmini vaxt', 'Əsas marşrut'], source: 'Google Maps naviqasiya məlumatları, ən qısa avtomobil marşrutları', rows: [
            ['Göyçay', '25,3 km', '~29 dəqiqə', 'Bakı–Şamaxı–Yevlax yolu'],
            ['Yevlax', '37,9 km', '~36 dəqiqə', 'M5 (Yevlax–Zaqatala) və Bakı–Şamaxı–Yevlax yolu'],
            ['Ucar', '40,6 km', '~44 dəqiqə', 'Göyçay–Ucar və Bakı–Şamaxı–Yevlax yolu'],
            ['Qəbələ', '55,1 km', '~59 dəqiqə', 'R15 (Ağdaş–Zarağan) yolu'],
            ['Bərdə', '64,8 km', '1 saat 8 dəqiqə', 'M2 (Bakı–Ələt–Qazax) və R28 yolu'],
            ['Zərdab', '69,0 km', '1 saat 2 dəqiqə', 'M2 və R32 (Ucar–Zərdab) yolu'],
            ['Oğuz', '84,4 km', '1 saat 21 dəqiqə', 'R56 və Yevlax–Zaqatala yolu'],
          ] },
          { t: 'cards', items: [
            { tag: 'Yol', title: 'Magistral qovşağı', text: 'Bakı–Qazax beynəlxalq magistralına çıxış; Ləki alternativ yol layihəsi logistikanı daha da gücləndirəcək.' },
            { tag: 'Dəmir yolu', title: 'Ləki stansiyası', text: 'Sənaye və logistika məhəlləsi layihəsində Ləki stansiyası ilə logistika əlaqələrinin təşkili nəzərdə tutulur.' },
            { tag: 'Su', title: 'Suvarma sistemi', text: 'Kür, Türyançay və Yuxarı Şirvan kanalı; Türyançay su qovşağı və Baş Şirvan kollektoru.' },
            { tag: 'Enerji', title: 'Günəş stansiyası', text: 'Əmirarx və Ağcaqovaq kəndləri yaxınlığında 300 hektarda 200 MVt gücündə Günəş Elektrik Stansiyasının qurulması nəzərdə tutulub.' },
          ] },
          { t: 'p', text: '2004–2023-cü illəri əhatə edən dörd Dövlət Proqramı çərçivəsində rayonda yol, kommunal, sosial və istehsal infrastrukturu genişmiqyaslı yenilənmişdir. Nəqliyyat-anbar sahəsinin məhsul buraxılışında payı hələlik 1,8%-dir — bu, logistika investisiyaları üçün istifadə olunmamış böyük potensial deməkdir.' },
        ],
      },
      {
        id: 'haqqinda-tehsil-sehiyye-turizm',
        title: 'Təhsil, səhiyyə və turizm',
        blocks: [
          { t: 'stats', title: 'Təhsil (2024)', source: 'Dövlət Statistika Komitəsi', items: [
            { v: '64', l: 'ümumi təhsil müəssisəsi' },
            { v: '16 048', l: 'şagird' },
            { v: '30', l: 'məktəbəqədər təhsil müəssisəsi' },
            { v: '31,0', u: '%', l: 'məzunların ali məktəbə qəbulu' },
          ] },
          { t: 'stats', title: 'Səhiyyə (2024)', source: 'Dövlət Statistika Komitəsi', items: [
            { v: '114', l: 'həkim' },
            { v: '548', l: 'orta tibb işçisi' },
            { v: '170', l: 'xəstəxana çarpayısı' },
            { v: '15', l: 'ambulator-poliklinika müəssisəsi' },
          ] },
          { t: 'p', text: 'Orta ixtisas və peşə təhsili üzrə göstəricilər ölkə səviyyəsindən yüksəkdir. Səpələnmiş kənd məskunlaşması üçün hesabatda mobil səhiyyə, telemedisina və distant məsləhət xidmətlərinin genişləndirilməsi tövsiyə olunur.' },
          { t: 'cards', title: 'Turizm resursları', items: [
            { tag: 'Mədəni irs', title: '17 tarix-mədəniyyət abidəsi', text: 'XIX əsrə aid yaşayış evləri və məscidlər, Qarabəy karvansarayı, Bulaqotağı türbəsi, müqəddəs ziyarətgahlar.' },
            { tag: 'Təbiət', title: 'Türyançay Dövlət Təbiət Qoruğu', text: 'Arid meşə landşaftı, Kür sahili tuqay meşələri — ekoturizm və maarifçi marşrutlar üçün.' },
            { tag: 'Aqroturizm', title: 'Canlı istehsal təcrübəsi', text: 'Çəltikçilik, baramaçılıq, bağçılıq və yerli mətbəx turist üçün real kənd həyatı təcrübəsidir.' },
            { tag: 'Xidmət bazası', title: 'İaşə sektoru böyüyür', text: 'İaşə dövriyyəsi 2015-ci ildəki 3,5 milyon manatdan 2024-cü ildə 5,25 milyon manata, subyektlərin sayı 192-dən 283-ə yüksəlmişdir.' },
          ] },
        ],
      },
    ],
  });
})();
