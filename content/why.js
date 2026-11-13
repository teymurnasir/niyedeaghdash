/* 02 — Niyə Ağdaş? Source: report section X ("Niyə investor Ağdaşı seçməlidir?") with figures from I, II, V, IX. */
(function () {
  'use strict';

  window.Agdash.content.push({
    id: 'niye-agdas',
    kicker: 'İnvestorun sualına cavab',
    title: 'Niyə Ağdaş?',
    intro: 'Ağdaş əlverişli nəqliyyat-logistika mövqeyi, zəngin kənd təsərrüfatı potensialı, insan resursları və geniş torpaq ehtiyatları ilə dayanıqlı, uzunmüddətli investisiya üçün strateji seçimdir.',
    subs: [
      {
        id: 'niye-logistika',
        title: 'Strateji yerləşmə və logistika üstünlükləri',
        blocks: [
          { t: 'quote', slogan: true, text: 'Ağdaşa investisiya qoymaq 7 rayonun bazarına çıxış əldə etməkdir.', cite: 'Ağdaş — Azərbaycanın aqro-sənaye və logistika qovşağı' },
          { t: 'list', check: true, items: [
            'Ağdaş 7 regionla həmsərhəddir və əsas magistral yolların kəsişməsində yerləşir.',
            'Bakı–Qazax beynəlxalq magistralına çıxış potensialı var.',
            'Ləki alternativ yol layihəsi logistikanı gücləndirəcək.',
            'Respublikanın iki böyük şəhərinə — Mingəçevir və Gəncəyə yaxındır.',
            'Kənd təsərrüfatı məhsullarının böyük həcmi mövcuddur.',
          ] },
          { t: 'p', text: 'Bu amillər kənd təsərrüfatı məhsullarının istehsaldan son istehlakçıya qədər bütün dəyər zəncirinin eyni məkanda formalaşdırılmasına imkan yaradır. Məhz buna görə Ağdaşda “Aqro-Logistika Vadisi”nin yaradılması təklif olunur: məqsəd rayonu ölkənin aparıcı aqro-sənaye, logistika və ixrac mərkəzlərindən birinə çevirməkdir.' },
          { t: 'list', title: 'Hədəf investorlar', cols: true, items: [
            'Logistika şirkətləri', 'Soyuducu anbar operatorları', 'Aqroemal şirkətləri',
            'İxracyönümlü istehsalçılar', 'Paylanma və topdansatış şirkətləri',
          ] },
        ],
      },
      {
        id: 'niye-resurslar',
        title: 'Təbii resurslar və aqrar potensial',
        blocks: [
          { t: 'lead', text: 'Ağdaş kənd təsərrüfatı istehsalında Azərbaycanın lider rayonlarından biridir: çəltik istehsalına görə 1-ci, alça üzrə 2-ci, xurma üzrə 3-cü, heyva üzrə 4-cü yerdədir.' },
          { t: 'stats', items: [
            { v: '102,3', u: 'min ha', l: 'ümumi ərazi' },
            { v: '36 500', u: 'ha', l: 'əkin sahəsi (71,5%-i şoranlaşmayan)' },
            { v: '3', u: 'mənbə', l: 'suvarma: Kür, Türyançay, Şirvan kanalı' },
            { v: '8', u: 'min ha', l: 'ehtiyat torpaqlar (zəif şorlaşmış)' },
          ] },
          { t: 'p', text: 'Bu göstəricilər Ağdaşın böyük və davamlı xammal bazasına malik olduğunu sübut edir. Meyvə emalı, quru meyvə istehsalı, şirə və konsentrat istehsalı, çəltik emalı, qablaşdırma və aqro-logistika müəssisələri hazır xammal bazasına söykənərək fəaliyyət göstərə bilər.' },
          { t: 'quote', slogan: true, text: 'Ağdaşda xammal boldur, emal isə ilk investorunu gözləyir.', cite: 'Ağdaş — Azərbaycanın meyvə emalı mərkəzi' },
          { t: 'p', text: 'İlk investor yerli tədarük zəncirini formalaşdırmaq, fermerlərlə uzunmüddətli əməkdaşlıq qurmaq və bazarda marka tanınması əldə etmək imkanına malik olacaq. Rayonda “Yerli bezon”, “Ağ mirvari”, “Qırmızı mirvari”, “Çappa”, “Ağ gilə” düyü sortları yetişdirilir.' },
        ],
      },
      {
        id: 'niye-emek',
        title: 'Əmək ehtiyatları və biznes imkanları',
        blocks: [
          { t: 'stats', items: [
            { v: '24,5', u: 'min', l: 'gənc (14–29 yaş)' },
            { v: '15 095', l: 'təsərrüfat subyekti' },
            { v: '87,7', u: '%', l: 'sənayedə özəl sektorun payı' },
            { v: '80', u: '%', l: 'investisiyalarda qeyri-dövlət kapitalının payı' },
          ] },
          { t: 'p', text: 'Geniş aqrar baza, 24,5 min nəfərlik gənc əhali, özəl sektorun yüksək çəkisi və formalaşmış sahibkarlıq potensialı rayonun inkişaf bazasını yaradır. Orta ixtisas və peşə təhsilli əhalinin payı ölkə göstəricisindən yüksəkdir.' },
          { t: 'table', caption: 'Risklərin qiymətləndirilməsi', head: ['Amil', 'Qiymət'], source: 'Hesabat, bölmə IX', rows: [
            ['İşçi qüvvəsinin mövcudluğu', 'Yüksək'],
            ['Siyasi sabitlik', 'Stabil'],
            ['Bazar riski', 'Aşağı–orta'],
            ['İnfrastruktur keyfiyyəti', 'Orta'],
            ['Tənzimləyici mühit', 'Yaxşılaşan'],
          ] },
          { t: 'list', title: 'Hesabatda müəyyən edilmiş imkanlar', check: true, cols: true, items: [
            'Aqrar-emal dəyər zəncirlərinin yaradılması', 'Soyuducu anbar və distribusiya', 'E-ticarət',
            'Peşə və rəqəmsal bacarıqlar', 'Sənaye və aqro-logistika infrastrukturu', 'Kənd və ekoturizm', 'Enerji və su səmərəliliyi',
          ] },
        ],
      },
      {
        id: 'niye-bazar',
        title: 'Bazar və əməkdaşlıq imkanları',
        blocks: [
          { t: 'lead', text: 'Bir rayona yatırım — yeddi rayonun bazarına çıxış. Ağdaş istehsalın, logistikanın və ticarətin kəsişmə nöqtəsidir.' },
          { t: 'cards', items: [
            { tag: 'Regional bazar', title: 'Yeddi rayonun alıcısı', text: 'Müasir bazar-yarmarka və tədarük mərkəzləri Yevlax, Göyçay, Bərdə, Qəbələ, Zərdab və digər qonşu rayonların məhsulunu toplaya və paylaya bilər.' },
            { tag: 'Aqroturizm', title: '“Heyva Yolu”', text: 'Heyva bağlarını, yerli mətbəxi və turizm xidmətlərini vahid marşrutda birləşdirən tematik məhsul — Göyçayın Nar Yolu təcrübəsinə bənzər.' },
            { tag: 'Mədəniyyət', title: 'Festival iqtisadiyyatı', text: '“Heyva Festivalı” və Habil Əliyevin adı ilə bağlı Beynəlxalq Kamança Festivalı hotel, restoran, nəqliyyat və ticarətdə əlavə investisiyaları stimullaşdırır.' },
            { tag: 'Tərəfdaşlıq', title: 'Dövlət–özəl tərəfdaşlığı', text: 'Bazar-yarmarka kompleksi üçün dövlət–özəl tərəfdaşlığı modelindən istifadəyə üstünlük verilməsi tövsiyə olunur.' },
          ] },
          { t: 'quote', slogan: true, text: 'Festival bu günün tədbiri, sabahın iqtisadiyyatıdır.', cite: 'Bağdan festivala, festivaldan iqtisadi inkişafa' },
        ],
      },
      {
        id: 'niye-perspektiv',
        title: 'İnkişaf perspektivləri',
        blocks: [
          { t: 'p', text: 'Konseptual çərçivə Ağdaş rayonunun uzunmüddətli perspektivdə regional investisiya və iqtisadi inkişaf mərkəzinə çevrilməsini nəzərdə tutur.' },
          { t: 'cards', numbered: true, dark: true, items: [
            { title: 'Regional investisiya mərkəzi', text: 'Yerli və xarici kapital üçün rəqabətli biznes mühiti.' },
            { title: 'Aqro-emal və logistika platforması', text: 'İstehsalla bazarı birləşdirən ünvan.' },
            { title: 'İnnovativ kənd iqtisadiyyatı modeli', text: 'Ağıllı kənd təsərrüfatı və rəqəmsal həllər.' },
            { title: 'Aqroturizm və xidmət iqtisadiyyatı mərkəzi', text: 'Yerli məhsullar və mədəni irs üzərində qurulan brend.' },
          ] },
          { t: 'list', title: 'Gözlənilən nəticələr', check: true, items: [
            'Yeni iş yerlərinin yaradılması və əhalinin gəlirlərinin artması',
            'Gənclərin və qadınların iqtisadi fəallığının yüksəlməsi',
            'Yerli məhsulların əlavə dəyərinin artırılması və ixrac imkanlarının genişlənməsi',
            'İstehsal və emal zəncirinin genişlənməsi, özəl investisiyaların həcminin artması',
            'Dövlət–özəl tərəfdaşlığının genişlənməsi və daha əlverişli biznes mühiti',
          ] },
        ],
      },
    ],
  });
})();
