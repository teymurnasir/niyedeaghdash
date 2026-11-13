/* 05 — İnvestorlar üçün. Source: report sections VII, IX and X. */
(function () {
  'use strict';

  window.Agdash.content.push({
    id: 'investorlar',
    kicker: 'Praktik bələdçi',
    title: 'İnvestorlar üçün',
    intro: 'İnvestisiya mühiti, təşviq və maliyyə mənbələri, layihələrdə iştirakın addımları və əməkdaşlıq formatları.',
    subs: [
      {
        id: 'investorlar-muhit',
        title: 'İnvestisiya mühiti',
        blocks: [
          { t: 'lead', text: 'Ağdaş Mərkəzi Aranda investisiya cəlbi üzrə yuxarı mövqelərdədir: 2020-ci ildə 1-ci, 2024-cü ildə 2-ci yer. Qeyri-dövlət investisiyasının payı 75%-dən 80%-ə yüksəlmişdir.' },
          { t: 'stats', items: [
            { v: '63,2', u: 'mln ₼', l: 'əsas kapitala investisiya (2025)' },
            { v: '37,1', u: 'mln ₼', l: 'altıillik orta illik həcm' },
            { v: '82', u: '%', l: 'məhsul istehsalı və xidmətlərə yönələn pay' },
            { v: '2-ci', l: 'yer Mərkəzi Aranda (2024)' },
          ] },
          { t: 'cards', title: 'Əsas üstünlüklər', items: [
            { tag: 'Mövqe', title: 'Magistral yol qovşağında strateji mövqe', text: 'Yeddi rayonla sərhəd, dəmir yolu və şose əlaqəsi.' },
            { tag: 'Aqrar', title: 'Güclü kənd təsərrüfatı ənənəsi', text: 'Davamlı xammal bazası və üç suvarma mənbəyi.' },
            { tag: 'Əmək', title: 'Mövcud işçi qüvvəsi', text: '24,5 min gənc; işçi qüvvəsinin mövcudluğu hesabatda “yüksək” qiymətləndirilir.' },
            { tag: 'İnfrastruktur', title: 'Təkmilləşən infrastruktur', text: 'Dörd Dövlət Proqramı çərçivəsində yenilənmiş yol və kommunal şəbəkə.' },
          ] },
          { t: 'table', caption: 'Tələb olunan investisiya həcmləri', head: ['Layihə miqyası', 'Həcm'], source: 'Hesabat, bölmə IX', rows: [
            ['Kiçik layihələr', '$100K – $500K'], ['Orta layihələr', '$500K – $2M'],
            ['Böyük layihələr', '$2M – $10M'], ['Strateji layihələr', '$10M+'],
          ] },
        ],
      },
      {
        id: 'investorlar-tesviq',
        title: 'Təşviq və dəstək imkanları',
        blocks: [
          { t: 'cards', items: [
            { tag: 'Regional səviyyə', title: 'Rayon üzrə təşviqlər', text: ['Yeni investisiyalar üçün vergi tətilləri', 'Torpaq ayırma proqramları', 'İnfrastruktur dəstəyi', 'Sürətləndirilmiş lisenziyalaşdırma'] },
            { tag: 'Dövlət səviyyəsi', title: 'Ümumdövlət alətləri', text: ['İnvestisiya təşviqi sertifikatları', 'Gömrük rüsumu azadolmaları', 'ƏDV güzəştləri', 'Məşğulluq təşviqləri'] },
            { tag: 'Güzəştli kredit', title: 'Aşağı faizli proqramlar', text: ['KOB inkişaf kreditləri', 'Sənaye inkişaf kreditləri', 'Kənd təsərrüfatı maliyyələşdirməsi', 'İnnovasiya və ixrac maliyyələşdirməsi'] },
            { tag: 'Özəl kapital', title: 'Fondlar', text: ['Vençur kapitalı', 'Təsir (impact) investisiya fondları', 'Özəl investorlar'] },
          ] },
          { t: 'list', title: 'Maliyyə mənbələri', cols: true, items: [
            'Asiya İnkişaf Bankı', 'Dünya Bankı Qrupu', 'Avropa Yenidənqurma və İnkişaf Bankı',
            'Beynəlxalq Maliyyə Korporasiyası', 'İslam İnkişaf Bankı', 'Azərbaycan İnvestisiya Şirkəti',
            'Kiçik və Orta Biznesin İnkişafı Agentliyi', 'Kommersiya banklarının güzəştli proqramları', 'Qrant proqramları',
          ] },
          { t: 'p', text: '“Türyançay” aqro-klaster layihəsində emal, saxlama və logistika obyektlərinin aqropark kimi qeydiyyatı vergi və gömrük güzəştləri ilə əlaqələndirilir. Sorğuda sahibkarların 66%-i, mütəxəssislərin 70%-i güzəştli kreditləri mühüm dəstək mexanizmi kimi qeyd etmişdir.' },
        ],
      },
      {
        id: 'investorlar-istirak',
        title: 'Layihələrdə iştirak',
        blocks: [
          { t: 'steps', numbered: true, title: 'İnvestisiya layihəsinin addımları', items: [
            { title: 'Sahənin seçilməsi', text: 'İnvestisiya yatırılacaq sahənin seçilməsi və səriştəli ekspertlər tərəfindən təhlili.' },
            { title: 'Üstünlüklərin qiymətləndirilməsi', text: 'Regionun imkanlarının və müqayisəli üstünlüklərinin qiymətləndirilməsi.' },
            { title: 'Tərəfdaşların müəyyən edilməsi', text: 'Əməkdaşlıq mümkün olan şirkətlərin fəaliyyətinin araşdırılması.' },
            { title: 'Saziş layihəsi', text: 'Zəruri məlumatların toplanması və sazişin layihəsinin hazırlanması.' },
            { title: 'Ərazinin seçilməsi', text: 'Layihənin həyata keçiriləcəyi yerin seçilməsi və rəsmiləşdirilməsi.' },
            { title: 'Danışıqlar', text: 'Layihə şərtlərinin razılaşdırılması.' },
            { title: 'Müqavilə', text: 'Sazişin bağlanması və icrasına başlanılması.' },
            { title: 'Müşayiət', text: 'İcra prosesində investora zəruri köməyin və dəstəyin göstərilməsi.' },
          ] },
          { t: 'list', title: 'Zəruri sənədlər', check: true, items: [
            'Texniki-iqtisadi əsaslandırma',
            'Biznes-plan',
            'Memorandum (saziş, müqavilə)',
          ] },
          { t: 'p', text: 'Sənədlər aydın yazılmalı, investorların və bankların tələblərinə uyğun olmalıdır. Standart texniki-iqtisadi əsaslandırma, biznes-plan və investisiya pasportlarının hazırlanması tövsiyə olunur.' },
        ],
      },
      {
        id: 'investorlar-emekdasliq',
        title: 'Əməkdaşlıq təklifləri',
        blocks: [
          { t: 'cards', title: 'Hədəf investor qrupları', items: [
            { tag: 'Aqro-logistika', title: 'Logistika və soyuducu anbar operatorları', text: 'Paylanma, topdansatış və ixracyönümlü istehsalçılar üçün qovşaq.' },
            { tag: 'Qida sənayesi', title: 'Meyvə emalı və qida istehsalçıları', text: 'Şirə, konserv, quru meyvə, qablaşdırma; aqrar holdinqlər və aqropark operatorları.' },
            { tag: 'Turizm', title: 'Qonaqlama və tədbir investorları', text: 'Butik və kənd otelləri, ferma evləri, glamping, festival və tədbir təşkilatçıları.' },
          ] },
          { t: 'list', title: 'Hesabatda tövsiyə olunan mexanizmlər', check: true, items: [
            'Rayon investisiya ofisi və “bir pəncərə” investor xidməti',
            'Layihələr kataloqu, torpaq və obyekt məlumat bazası',
            'İnvestisiya məkanlarının mühəndis-kommunikasiya və logistika xəritəsi',
            '3–5 illik layihə portfeli və illik investor forumu',
            'Layihə müşayiəti və icradan sonrakı dəstək (aftercare)',
          ] },
          { t: 'quote', slogan: true, text: 'Bazara sonradan qoşulmayın, bazarı siz yaradın.', cite: 'İlk gələn investor ən böyük üstünlüyü qazanır' },
        ],
      },
      {
        id: 'investorlar-muraciet',
        title: 'Müraciət və əlaqə',
        blocks: [
          { t: 'p', text: 'Hesabatda istinad edilən Ağdaş Rayon İcra Hakimiyyətinin rəsmi səhifələri:' },
          { t: 'links', items: [
            { label: 'Ağdaş Rayon İcra Hakimiyyəti — rayon haqqında', href: 'https://agdash-ih.gov.az/az/rayon-haqqinda.html' },
            { label: 'Coğrafi mövqe', href: 'https://agdash-ih.gov.az/az/cografi-movqeyi.html' },
            { label: 'Əhali', href: 'https://agdash-ih.gov.az/az/ehalisi.html' },
            { label: 'Tarixi', href: 'https://agdash-ih.gov.az/az/tarixi.html' },
            { label: 'Mədəniyyət və tarixi abidələr', href: 'https://agdash-ih.gov.az/az/medeniyyet.html' },
            { label: 'İqtisadiyyat', href: 'https://agdash-ih.gov.az/az/iqtisadiyyat.html' },
          ] },
          { t: 'p', text: 'Tədqiqatın icraçısı: Elm və Təhsil Nazirliyinin İqtisadiyyat İnstitutu.' },
        ],
      },
    ],
  });
})();
