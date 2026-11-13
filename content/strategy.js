/* 04 — İnkişaf strategiyası. Source: report foreword, introduction and sections VII–VIII. */
(function () {
  'use strict';

  const AUTHORS = 'Dövlət Statistika Komitəsinin məlumatları və müəllif hesablamaları əsasında';

  window.Agdash.content.push({
    id: 'strategiya',
    kicker: 'Strateji sənəd',
    title: 'İnkişaf strategiyası',
    intro: '“Ağdaş rayonunun strateji sosial-iqtisadi inkişaf istiqamətləri (2027–2030-cu illər)” — elmi əsaslarla hazırlanmış diaqnostika, prioritetlər və icra mexanizmi.',
    subs: [
      {
        id: 'strategiya-layihe',
        title: 'Layihə haqqında',
        blocks: [
          { t: 'quote', text: 'Mən çox şadam ki, Ağdaşda işlər yaxşı gedir, gözəl obyektlər istifadəyə verilir. Əminəm ki, Ağdaşda gözəl açılışlar hələ çox olacaqdır.', cite: 'İlham Əliyev, Azərbaycan Respublikasının Prezidenti' },
          { t: 'p', text: 'Ağdaş rayonunun uzunmüddətli sosial-iqtisadi inkişaf istiqamətlərinin elmi əsaslarla müəyyənləşdirilməsi və özəl investisiyalar üçün cəlbediciliyinin artırılması məqsədilə “Ağdaş rayonunun özəl investisiyalar üçün cəlbediciliyinin artırılmasına təşviq və dəstək mexanizmlərinin hazırlanması” adlı elmi-tədqiqat layihəsi həyata keçirilmişdir.' },
          { t: 'p', text: 'Tədqiqatın icrası üçün Elm və Təhsil Nazirliyinin İqtisadiyyat İnstitutunda 14 mütəxəssisdən ibarət tədqiqat qrupu formalaşdırılmışdır. Layihənin elmi rəhbəri İnstitutun baş direktoru, professor Nazim Müzəffərli (İmanov), koordinatoru professor Tərbiz Əliyevdir.' },
          { t: 'p', text: 'Layihənin əsas məqsədi rayonun mövcud təbii, iqtisadi, istehsal, əmək və infrastruktur potensialından səmərəli istifadə etməklə dayanıqlı iqtisadi artımın təmin olunması, iqtisadi strukturun şaxələndirilməsi, məhsuldar məşğulluğun genişləndirilməsi və əhalinin rifah səviyyəsinin yüksəldilməsi üçün əsas inkişaf istiqamətlərinin müəyyən edilməsidir.' },
        ],
      },
      {
        id: 'strategiya-hedefler',
        title: '2027–2030-cu illər üzrə hədəflər',
        blocks: [
          { t: 'lead', text: 'Strateji xətt: “daha çox eyni istehsal” modelindən “mövcud üstünlüklərdən daha çox əlavə dəyər” modelinə keçid.' },
          { t: 'cards', numbered: true, title: 'Özəl investisiyalar üçün cəlbediciliyin yüksəldilməsinin altı prioriteti', items: [
            { title: 'Demoqrafik vəziyyətin yaxşılaşdırılması', text: 'Əhalinin və gənclərin rayon daxilində saxlanması üçün iş və yaşayış imkanları.' },
            { title: 'Kadr axınının azaldılması', text: 'Kadrların başqa regionlara və xarici ölkələrə axınının azaldılması.' },
            { title: 'Mütərəqqi biznes infrastrukturu', text: 'KOB klasteri, sənaye parkı, aqropark, klaster və müştərək müəssisələrin yaradılması.' },
            { title: 'Aqrar-emal müəssisələri', text: 'Dəyər zənciri prinsipi əsasında emal müəssisələri və aqrar sferanın əhatəsinin genişləndirilməsi.' },
            { title: 'Turizm infrastrukturu', text: 'Yeni turizm infrastrukturunun yaradılması və mövcud olanın müasirləşdirilməsi.' },
            { title: 'İnvestisiya imici', text: 'Mütərəqqi təşviq mexanizminin tətbiqi ilə investisiya imicinin formalaşdırılması.' },
          ] },
          { t: 'steps', numbered: true, title: 'Mərhələlər', items: [
            { title: 'Baza və hazırlıq', text: 'Su, enerji, internet, investisiya sahələri və məlumat bazasının inventarlaşdırılması; investor və sahibkar xidmətlərinin “vahid pəncərə” prinsipi üzrə təşkili.' },
            { title: 'Dəyər zəncirinin qurulması', text: 'Emal, qablaşdırma, soyuducu anbar, logistika, keyfiyyət laboratoriyası, sertifikatlaşdırma və bazara çıxış infrastrukturu.' },
            { title: 'Miqyaslanma və diversifikasiya', text: 'İxrac, e-ticarət, rəqəmsal xidmətlər, turizm, peşəkar xidmətlər, yeni sənaye və texnoloji fəaliyyətlər.' },
          ] },
          { t: 'chain', title: 'İcra məntiqi', items: ['İnfrastruktur', 'Müəssisə', 'Bazar', 'İnsan kapitalı', 'Gəlir'] },
        ],
      },
      {
        id: 'strategiya-prioritetler',
        title: 'Prioritet inkişaf istiqamətləri',
        blocks: [
          { t: 'p', text: 'Ağdaş üçün məqsədəuyğun model “əlaqəli diversifikasiya”dır: kənd təsərrüfatının çəkisini inzibati şəkildə azaltmaq yox, aqrar üstünlüyün ətrafında emal, logistika, texnologiya, peşəkar xidmət, bazar və maliyyə infrastrukturu yaratmaq.' },
          { t: 'table', caption: 'Əlaqəli diversifikasiya və struktur transformasiya prioritetləri', head: ['Prioritet', 'İqtisadi məzmun', 'Gözlənilən struktur təsir'], source: 'Hesabat, cədvəl 8.4', rows: [
            ['1. Aqrar emal və qida sənayesi', 'Meyvə-tərəvəz, çəltik, süd, ət və digər yerli məhsulların çeşidlənməsi, emalı, qablaşdırılması və brendləşməsi.', 'Yerli əlavə dəyər və formal iş yerləri artır; mövsümi aqrar gəlirlərin sabitliyi güclənir.'],
            ['2. Logistika və saxlama', 'Soyuducu anbar, tədarük məntəqələri, distribusiya, topdansatış və rəqəmsal izləmə.', 'Nəqliyyat-anbar sahəsinin payı yüksəlir, məhsul itkisi və bazar məsafəsi azalır.'],
            ['3. Sənayenin keyfiyyətcə böyüməsi', 'Texnoloji yenilənmə, məhsuldarlıq, yerli xammal, ixrac və əmək tutumu.', 'Sənayenin əməkhaqqı və məşğulluğa ötürülməsi güclənir.'],
            ['4. Tikinti və investisiya infrastrukturu', 'Emal zonaları, kiçik istehsal sahələri, anbar-logistika obyektləri və investor üçün hazır sahələr.', 'Tikintinin aşağı payı istehsal və xidmət güclərinə çevrilir.'],
            ['5. Rəqəmsallaşma və İKT', 'Rəqəmsal kənd təsərrüfatı, e-ticarət, rəqəmsal mühasibat, e-logistika, distant xidmətlər.', 'Bütün sektorların məhsuldarlığı artır.'],
            ['6. Gənclərin iqtisadi inteqrasiyası', 'Aqrotexnologiya, qida təhlükəsizliyi, laboratoriya işi, logistika və texniki xidmət üzrə peşə hazırlığı.', 'Gənc əhalinin rayonda məhsuldar məşğulluğu və gəliri artır.'],
            ['7. Su və enerji səmərəliliyi', 'Suvarmanın modernləşdirilməsi, enerji səmərəli avadanlıq, bərpa olunan enerji.', 'Maya dəyəri və ekoloji risk azalır.'],
            ['8. Müasir xidmətlər və turizm', 'Biznes xidmətləri, təhsil, səhiyyə, kənd turizmi, yerli məhsullar və regional brend.', 'Qadın və gənclər üçün qeyri-aqrar məşğulluq genişlənir.'],
            ['9. Sahibkarlığın miqyaslanması', 'Maliyyə, məsləhət, ixrac, sertifikatlaşdırma və kooperasiya alətlərinin nəticə əsaslı tətbiqi.', 'Mikro və kiçik biznesin orta miqyaslı müəssisələrə keçidi sürətlənir.'],
          ] },
        ],
      },
      {
        id: 'strategiya-tehliller',
        title: 'Təhlillər və hesabatlar',
        blocks: [
          { t: 'cards', title: 'İnteqrə olunmuş SWOT diaqnostikası', items: [
            { tone: 'strength', tag: 'Üstünlüklər', title: 'Baza resursları', text: 'Geniş aqrar xammal bazası; 24,5 min nəfərlik gənc əhali; özəl sektorun yüksək payı; formalaşmış ticarət və sahibkarlıq bazası; coğrafi və logistika potensialı.' },
            { tone: 'weakness', tag: 'Zəifliklər', title: 'Dəyər zəncirinin həlqələri', text: 'Emal məşğulluğunun aşağı olması; muzdlu məşğulluğun məhdudluğu; nəqliyyat-anbar, tikinti və İKT-nin aşağı payı; aşağı urbanizasiya.' },
            { tone: 'opportunity', tag: 'İmkanlar', title: 'Yeni fəaliyyətlər', text: 'Aqrar-emal dəyər zəncirləri; soyuducu anbar və distribusiya; e-ticarət; sənaye və aqro-logistika infrastrukturu; kənd və ekoturizm; enerji və su səmərəliliyi.' },
            { tone: 'risk', tag: 'Risklər', title: 'İdarə olunmalı amillər', text: 'İqlim və su məhdudiyyətləri; gənclərin rayon xaricinə yönəlməsi; investisiyaların epizodik xarakteri; kiçik bizneslərin miqyaslana bilməməsi.' },
          ] },
          { t: 'bars', caption: 'Əsas kapitala yönəldilən investisiyalar (milyon manat)', source: 'Hesabat, diaqram 7.1. 2022–2023-cü illərdə həcm 16–18 milyon manat intervalında olmuşdur', items: [
            { l: '2020', v: 61.2 }, { l: '2021', v: 15.4 }, { l: '2024', v: 48.1 }, { l: '2025', v: 63.2, hl: true },
          ] },
          { t: 'stats', title: 'Sorğuların əsas nəticələri', source: 'Sahibkarlar və mütəxəssislər arasında aparılmış sorğu', items: [
            { v: '66', u: '%', l: 'sahibkar güzəştli kreditləri mühüm dəstək sayır' },
            { v: '70', u: '%', l: 'mütəxəssis eyni fikirdədir' },
            { v: '50', u: '%', l: 'sahibkar infrastruktur zəifliyini maneə sayır' },
            { v: '53,3', u: '%', l: 'mütəxəssis eyni maneəni qeyd edir' },
          ] },
          { t: 'list', title: 'Hesabatın bölmələri', cols: true, items: [
            'I. Coğrafi mövqe və insan potensialı', 'II. İqtisadiyyatın sahəvi strukturu', 'III. İqtisadi diversifikasiya səviyyəsi',
            'IV. Əmək bazarı, gəlirlər və insan kapitalı', 'V. Sahibkarlığın inkişaf vəziyyəti', 'VI. Sahibkar və mütəxəssis sorğuları',
            'VII. İqtisadiyyata yatırılmış investisiyalar', 'VIII. Problemlər, üstün və zəif tərəflər, prioritetlər',
            'IX. İnvestisiya cəlbediciliyi', 'X. Niyə investor Ağdaşı seçməlidir?', 'XI. Prioritet investisiya layihələri',
          ] },
        ],
      },
      {
        id: 'strategiya-monitorinq',
        title: 'İcra və monitorinq',
        blocks: [
          { t: 'lead', text: 'Monitorinq ayrılmış vəsaitin və keçirilmiş tədbirlərin sayı ilə deyil, iqtisadi və sosial nəticələr üzrə aparılmalıdır.' },
          { t: 'table', caption: 'Nəticə indikatorları və monitorinq çərçivəsi', head: ['Monitorinq bloku', 'Əsas indikatorlar', 'Qiymətləndirmə məntiqi'], source: AUTHORS, rows: [
            ['Emal sənayesi', 'Emalda məşğulluğun payı; yerli xammalın rayon daxilində emal dərəcəsi; emal müəssisələrinin dövriyyəsi', 'Aqrar xammal–emal əlaqəsinin güclənməsi'],
            ['Əmək bazarı', 'Formal muzdlu iş yerlərinin sayı; gənc və qadınların formal məşğulluğu; orta əməkhaqqının regional səviyyəyə nisbəti', 'Məşğulluğun keyfiyyətinin və gəlirin yüksəlməsi'],
            ['Logistika', 'Saxlama və soyuducu güclər; istifadə səviyyəsi; nəqliyyat-anbarın payı', 'Məhsul itkisinin və bazar məsafəsinin azalması'],
            ['Rəqəmsallaşma', 'Genişzolaqlı internetin keyfiyyəti; e-ticarətə qoşulan bizneslər; İKT payı', 'Rəqəmsal məhsuldarlığın artması'],
            ['Sahibkarlıq', 'Mikro və kiçik müəssisələrin dövriyyəsi, işçi sayı, ixracı və investisiyası', 'Subyekt sayından keyfiyyət və miqyas artımına keçid'],
            ['Aqrar dayanıqlılıq', 'Suvarılan torpaqların əhatəsi; su itkisi; məhsuldarlıq; müasir suvarma tətbiqi', 'Resurs səmərəliliyi və iqlim davamlılığı'],
            ['Xidmət və rifah', 'Adambaşına ödənişli xidmətlər; real əməkhaqqı; ev təsərrüfatlarının sərəncamda qalan gəliri', 'İqtisadi artımın rifaha ötürülməsi'],
            ['Diversifikasiya', 'Diversifikasiya indeksinin dinamikası; tikinti, logistika və İKT-nin struktur payı', 'Daha balanslı iqtisadi struktur'],
          ] },
          { t: 'p', text: 'Monitorinq Dövlət Statistika Komitəsi, Ağdaş Rayon İcra Hakimiyyəti, sahə qurumları, təhsil müəssisələri və yerli biznes arasında məlumat uyğunluğunu təmin etməlidir. Hər indikator üçün başlanğıc səviyyə, illik hədəf, məlumat mənbəyi və məsul qurum müəyyənləşdirilir.' },
        ],
      },
    ],
  });
})();
