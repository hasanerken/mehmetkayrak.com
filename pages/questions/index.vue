<i18n>
{ "tr": {
    "keywordsForMeta" : "sss, sık sorulan sorular, merak edilenler, anjiyo, eko, tansiyon, çarpıntı",
    "descriptionForMeta" : "Kalp  ve  damar  hastalıkları  alanında  hastaların  karşılaştığı  sorunların  çözümü...",
    "introForFaq" : "Meslek hayatım boyunca hastalarımın en çok sorduğu sorulara vermiş olduğum cevaplara aşağıdan ulaşabilirsiniz.",
    "titleForMeta" : "Kardiyoloji'de Sıkça Sorulan Sorular - Anjiyo, ekokardiyografi ve tansiyon...",
    "allfaqs" : "SIK SORULAN SORULAR"
},
"en": {
    "keywordsForMeta" : "faq, frequently asked questions, concerns, angio, echo, blood pressure, palpitations",
    "descriptionForMeta" : "Solving the issues of patients in the field of cardiovascular diseases ...",
    "introForFaq" : "You can read my answers to the most frequently asked questions that my patients have asked me throughout my career.",
    "titleForMeta" : "Frequently Asked Questions in Cardiology - Angiography, echocardiography and blood pressure ..",
    "allfaqs" : "FREQUENTLY ASKED QUESTIONS"
},
"ar": {
    "keywordsForMeta" : "الأسئلة الشائعة، ما يرغب الناس في معرفته، تصوير الأوعية(آنجيو ،التصوير بالرنين (الايكو)، ارتفاع ضغط الدم، نبضات القلب ",
    "descriptionForMeta" : "حل للمشاكل التي يواجهها المرضى الذي يعانون من أمراض القلب و الأوعية الدموية",
    "introForFaq" : "يمكنك قراءة إجاباتي على الأسئلة الأكثر شيوعًا التي طرحها عليّ مرضاي طوال حياتي المهنية.",
    "titleForMeta" : "الاسئلة الشائعة في مجال أمراض القلب، تصوير الأوعية (آنجيو)، تخطيط ضربات القلب و ارتفاع ضغط الدم",
    "allfaqs": "أسئلة متكررة"
}
}
</i18n>
<template>
<div>
    <h1 class="text-gray-900 text-left text-2xl font-bold pt-6 p-4 text-center">{{$t('allfaqs')}}</h1>
    <div class="w-screen mainbg">
        <img src="@/static/images/sorular.jpg" alt="Doktorumuz reçete yazarken" class="object-cover w-full ">
    </div>
    
  <h1 class="text-lg" style="padding: 2vw"> {{$t('introForFaq')}} </h1>
    <ul v-for="(faq, index) in faqsList" :faq="faq"> 
        <div :class="faq.open ? 'faq open' : 'faq'" @click="toggleOpen(index)">
        <div class="cursor-default question font-bold flex flex-row items-center">
            <div class="hidden sm:block w-8 h-8 sm:mr-2 text-center rounded-full">
            <transition name="slide" type="animation">
                <svg class="w-8 h-8 fill-current text-gray-4400" v-if="faq.show">
                    <font-awesome-icon :icon="['fa', 'arrow-circle-down']" />
                </svg>
            </transition>
            </div>
            <div class="left-5 bg-indigo-100 hover:bg-gray-200 rounded-full p-2 pr-4 pl-4">
            <h2 class="text-md sm:text-lg">{{index + 1}}. {{faq.question}}</h2> 
            </div>
            
           
        </div>
    <div class="answer" v-html="faq.answer">
        {{faq.answer}}
    </div>
    </div>
    </ul>
</div>
</template>

<script>
export default {
    name: "FAQ",
    head () {
            return {
                title: this.$t('titleForMeta'),
                meta: [
                    { hid: 'description', name: 'description', content: this.$t('descriotionForMeta') },
                    { hid: 'keyword', name: 'keywords', content: this.$t('keywordsForMeta') },
                ]
            }
        },
    data() {
    return {
        
      faqs: [
          {
              number: "1",
              question: "Stent sonrası iğne batar gibi göğüs ağrılarım oluyor normal mi?",
              answer: "Stent işlemi sırasında balonla damar duvarına hasar verilmekte ve o bölgeye esnekliği pek olmayan metal örgülü bir ağ takılmaktadır. Stent takılan hastaların bir kısmında birinci ayda damar gerilmesine bağlı iğne batması şeklinde tanımlanabilecek şekilde   efor testinde tespit edilemeyen  ağrılar olmaktadır. Ancak bunun önemli bir şey olup olmadığı doktorunuz tarafından değerlendirilmelidir. Stent takılan hastalarda stentle ilgili bir sorun olup olmadığını kontrol amacıyla 1. 6. ve 12 ayın sonunda efor testi yapılmakta sonrasında ise yıllık efor testi önerilmektedir.",
              open: false,
              show: false,
          },
           {
              number: "2",
              question: "Yüksek Kolesterol  zararlı  mı?",
              answer: 'Kolesterol kanda zaten bulunması gereken hücre zarının yapı taşı en temel moleküllerden biridir. Kolesterol bu kadar önemli ve hücre için gerekli iken yüksek kolesterol çok zararlıdır. Özellikle düşük yoğunluktaki küçük kolesterol parçacıkları (LDL) vücuttaki muazzam kimyasal reaksiyonlardan etkilenerek oksitlenmektedir. Aynen su borusunun oksitlenip küflenmesi gibi oksitlenen bu LDL damar duvarında birikmekte ve vücutta onu tamir etmekte zorlanmaktadır. Sonuç maalesef kalp krizleri ve beyin felci vakalarıdır. !!!',
              open: false,
              show: false,

          },
           {
              number: "3",
              question: "Kolesterol ilaçları zararlı mı?",
              answer: "Kalp krizi ve felç/inme gibi hastalıklar binlerce yıllık sağlık sorunudur. Kolesterolü yüksek hastalarda daha sık görülen hastalıklardır.  Kolesterol ilaçları ile bu hastaların yaşam süreleri uzamaktadır. Ancak her ilacın yan etkileri olasıdır. Kardiyolojide en sevdiğimiz ilaç aspirin iken aspirin aynı zamanda mide kanamalarının en sık sebebi olan ilaçtır. Kolesterol ilaçları hakkında dünyada milyarlarca kutuya varan deneyim oluşmuştur. Kas ağrıları yapabilmekte bazı hastalarda ise kas enzimlerini 5-6 kattan fazla yükseltmektedir. Milyonda bir vakada ciddi kas yıkımına sebep olmakta (rabdomiyoliz). Nadiren karaciğer enzimlerinde yükselme olmaktadır. 20 yıl önce hastaların karaciğer enzimlerini 1. Ay ve sonrasında 3 ayda bir kontrol ediliyordu. binlerce hastalık deneyimimde birkaç hasta dışında karaciğer problemi nedeniyle ilaç kesilmesine şahit olmadım. Sonraki yıllarda uluslararası araştırmalarda ilacın güvenli olduğunu sık karaciğer testlerine gerek olmadığını belirtilmiştir. Son yıllarda Q10 (co-enzim 10) ilaca bağlı kas ağrısı ve miyopatiyi engellemek için araştırılmakta ancak çelişkili bulgular nedeniyle rutin önerilmemektedir. Ancak doktorunuzun bu konudaki tavsiyesi önemlidir.",
              open: false,
              show: false,

          },
          {
              number: "4",
              question: "Ekstra atımlar kalbime zarar verir mi?",
              answer: "Kardiyoloji polikliniğinde holter takılan hastalarda en sık rastlanan bulgu ekstra sistoller veya erken vurulardır. Hastaları çok endişelendirse de kardiyologlar bu tarz ritim bozukluklarını hasta sağlığı için çok tehlikeli görmezler. Hastaların bir kısmı 20-30 erken vuruyu bile hissedip rahatsız olurken bazıları 10.000 den fazla ekstra sistolü fark etmez. Normalde fizyolojik olarak tüm sağlıklı bireylerde günlük 500-600 kadar ekstra sistol olabilir. Eğer 24 saatlik ritim holterde toplam atımın %15 inden fazlasına ulaşan ekstrasistoller tespit edilmişse ilerleyen yıllarda kalp yetersizliğine sebep olabilir. Günlük kalp atım sayımız 100.000-120.000 arasında değişir yani günlük 15.000-18.000 ekstra atımdan fazlası tedavi gerektirebilir. Ayrıca hali hazırda kalp yetersizliği veya kapak hastalığı olanlarda da tedavi edilmesigerekir. Ekokardiografide yapısal kalp hastalığı ve kalp damar tıkanıklığı olmayan kişilerde bir sorun oluşturmamaktadır. Tedavide hastanın başkaca bir hastalığı yoksa öncelikle beta bloker denilen ilaçlar verilmekte işe yaramazsa ya daha güçlü ritim düzenleyiciler eklenmekte yada hastalar ablasyon (yakma) tedavisine yönlendirilmektedir. Bu hastaların yarısından fazlasından anksiyete kaygı bozukluğu, panik atak gibi psikiyatrik bozukluklar görülmektedir. Bu hastalıklar tedavi edilmedikçe hastalar defalarca holter taktırıp doktor doktor gezmektedirler.",
              open: false,
              show: false,

          },
           {
              number: "5",
              question: "Anjiyo sonrası aynı gün taburcu olabilir miyim?",
              answer: "Koldan anjiyo vakaları işlemden 3-4 saat sonra taburcu olabilirler. Kasıktan anjiyo sonrası 4-5 saat ağırlık uygulaması gerekmektedir. Öğleden sonra anjiyo olan hastaların kalması gerekebilir. Kasık bölgesinde kanama olan hastaların da emniyet amaçlı hastanede kalması gereklidir. Stent takılan hastalar içinse 24 saat hastanede gözlem altında kalmaları tavsiye edilmektedir.",
              open: false,
              show: false,

          },
           {
              number: "6",
              question: "Tansiyonum normalken de ilacı almalı mıyım?",
              answer: "Tansiyon ilaçlarının etkisi ertesi güne kadar sürmektedir bazı ilaçlar için bu süre 30 saate kadar ulaşmaktadır. Kararlı kan seviyesine ulaştıktan sonra 1-2 saatlik gecikmeler bile rahatlıkla tolere edilmektedir. Ama tansiyon normalken ilacı alınca tansiyonum daha da düşmez mi? Tüm tansiyon ilaçları için genel kural tansiyon ne kadar yüksekse etkinlikleri o kadar fazladır. Düşük tansiyonda ise etkileri zayıflıyor. Mesela tansiyonu 180/110 mmhg olan bir hastada kullanılan tansiyon ilacı tansiyonu 150/85’e indirirken, aynı kişide tansiyon 140/80 mmhg iken aynı ilacı aldığında tansiyonu 130/70 mmhg’ ya indirmektedir. Yani tansiyon normale yaklaştıkça ilaçların tansiyon düşürücü etkileri de azalmaktadır. Dolayısıyla düzenli ilaç alan hastalarda tansiyonu ölçüp sonucuna göre ilacını almamak veya dozunu azaltmak tavsiye edilmemektedir. Bazı hastalarda ise kandaki tansiyon ilaçları yıllar içerisinde hormonal aksları baskıladığı için kişi tansiyon ilacını bıraktığında 1-12 ay arasında tansiyon değerleri normal seyretmektedir. Ta ki bir gece 180-200 mmhg tansiyon ile acil servise başvuruncaya kadar. Tansiyon ilacını bırakan hastalar da sık gördüğümüz bir durumdur. Bu nedenle tansiyon yüksekliği tanısı dikkatli bir araştırma ile konulmalı ilaç seçimine iyi karar verilmeli ancak bir kere başlandıktan sonra tedavinin ömür boyu olacağı unutulmamalıdır.",
              open: false,
              show: false,

          },
           {
              number: "7",
              question: "Kalp pilinin ömrü ne kadardır?",
              answer: "Bu sorunun cevabı birçok faktöre bağlıdır. En önemlisi hastanın kalp piline bağımlılık düzeyidir. Bazı hastalar pil bağımlıdır. Kalpleri >%90’nın üzerinde pille çalışır. Bazı hastalarda bu oran %30-40 civarıdır. Yani çoğunlukla kendi kalbi çalışırken kısa sürelerle kalp piline ihtiyaç duymaktadırlar. Kalp pili, ne kadar çok devreye girerse pilin ömrü o kadar kısalmaktadır. İkinci olarak kalp pilinin kalpte uyarı oluşturması için gerekli minimum elektrik eşiğidir. Bu bazı hastalar için 0.4 mV iken bazı hastalar için 1.8 mV’tur. Eşik ne kadar yüksekse pil o kadar kısa ömürlü olacaktır. Ayrıca ihtiyaca göre pilin hızlandığı R modları veya gece kalp hızı düşüşü gibi fonksiyonların açılıp kapatılması da pil ömrü ile ilişkilidir. Genellikle 7-8 sene pil ömrü öngörülür. Fakat  bahsedilen istinai hastalarda pil ömrü 3 yıla kadar düşmekte bazı hastalarda ise 15 yıla kadar uzayabilmektedir. Hastaya pil takılırken kablonun en düşük eşik değerinin alındığı yere monte edilmesi ve hastaya en uygun değerlerde programlanması çok önemlidir.",
              open: false,
              show: false,

          },
           {
              number: "8",
              question: "Kalp dışı bir ameliyat olacağımda kalp pili sorun olur mu?",
              answer: "Bu durumda birkaç öneri vardır birincisi piller OOO modlarına alınarak sabit vurmaya zorlanır. Ameliyat sonrası tekrar programlanır. Pillerin üzerine mıknatıs konulup devre dışı da bırakılabilir. Pil firmasına ulaşmak zor olan vakalarda koter olarak bipolar koter kullanımı ve 10 sn geçmeyen kısa süreli koter uygulamaları ile pil ayarlarını hiç değiştirmeden pek çok hastada sorunsuz ameliyat imkanı bulunmaktadır.",
              open: false,
              show: false,

          },
           {
              number: "9",
              question: "Diş çektirirken kan sulandırıcı ilaçlarımı kesebilir miyim?",
              answer: "Kan sulandırıcıları ne amaçla kullandığınıza bağlı olarak cevap değişir. Kalp damarına stent konulan hastalarda ilk 6 ay kesinlikle ikili kan sulandırıcı kesilmemelidir. 6 aydan sonra kan sulandırıcılardan biri 4-5 gün kesilip aspirin almaya devam ederken diş müdahalesine izin verilebilir.  Kalp kapak protezi olan ve coumadin kullanan hastalarda ise 3 gün ilaç kesilip INR düzeyi <2’nin altına indiğinde diş çekilebilir. Ancak tekrar INR >2’nin üzerine çıkıncaya kadar düşük molekül ağırlıklı heparin vb. kan sulandırıcı iğne tedavisi mutlaka eklenmelidir. Maalesef bu süreç iyi planlanmazsa kapakta pıhtı ve vücuda emboli gibi sorunlar yaşanabilmektedir. Coumadin benzeri Xarelto, eliquis, lixiana Pradaxa gibi yeni kuşak antikoagülanları alan hastaların ise 2 gün ilaca ara verip diş çekimi sonrası kanama durunca ilaca tekrar başlamaları yeterlidir.",
              open: false,
              show: false,

          },
           {
              number: "10",
              question: "Kalp kapağımda kaçak var ilaç ilerlememesi ne yapmalıyım?",
              answer: "Kalp kapak kaçaklarında ilaç tedavisi çok araştırılan konulardandır. Hastanın kalp büyümesi yoksa ve hastanın tansiyonları normalse kaçağın şiddetini azaltan bir ilaç tedavisi söz konusu değildir. Bu amaçla verilen ilaçlar bazen kapağın kapanma güçlerini zayıflatarak kaçağı arttırabilir. Ancak hasta tansiyonu yüksek bir hasta ise ACE inhibitörü veya bazı kalsiyum kanal blokerleri kalp kaçaklarının kısmen azaltabilir. Bazen de tansiyon ilaçları kapak problemine bağlı ritim bozukluklarının kontrolü için kullanılabilmektedir. Kalp kapak problemleri mekanik bozukluklar olduğu için kullanılan ilaçlar çoğu zaman işe yaramamaktadır. Bu durumda ameliyat veya kasıktan müdahaleler k kaçınılmaz olmaktadır. Önemli kapak kaçağı olan hastalarda koruyucu olarak önerilen diş çekimi veya kalp dışı cerrahi öncesi antibiyotik kullanmaları ve aşılarını düzenli yaptırmaları gerekmektedir. ",
              open: false,
              show: false,

          },
           {
              number: "11",
              question: "Annemde kalp büyümesi var nelere dikkat etmeliyim?",
              answer: "Bazı kalp kası hastalıkları genetik olabilmektedir. Kişide genetik olarak hastalık olsa bile kalpte hastalığa bağlı yapısal değişikliklerin ortaya çıkması 40 yaşın sonrasına kadar kalabilmektedir. Bu nedenle aile hikayesi kuvvetli olan kişilerin 5 yılda bir eko taramaları yaptırmaları, tansiyon şeker ve kilo kontrolü gibi kalp yetersizliği için risk oluşturan durumlardan kaçınması önemlidir. Bu amaçla tuz tüketiminin kısıtlanması ve düzenli fiziksel aktivite önemlidir.",
              open: false,
              show: false,

          },
           {
              number: "12",
              question: "Bypass ameliyatlı biri tekrar anjiyo olabilir mi?",
              answer: "Her ne kadar hastalar Bypass tedavisi ile hastalıktan kurtulduklarını düşünseler de bacaktan alınan greftlerin %80’i ilk 10 yılda tıkanmaktadır. Bypass olduğu dönemde olmayan yeni tıkanıklıklarda gelişebilmektedir. Bu nedenle ilerleyen yıllarda anjiyo ihtiyacı kaçınılmaz hale gelmektedir. Bu hastaların anjiyoları hem süre açısından hem kullanılan boyar madde fazla olduğundan daha riskli olmaktadır. Süre uzadıkça embolik olay riski artmaktadır. Verilen boyar madde miktarı arttıkça da işlem sonrası böbrek yetersizliği riski artmaktadır. Yine de bu hastalarda yaptığımız balon ve stentlerle ikinci bir ameliyat ihtiyacını büyük ölçüde azaltmaktadır. Normal kalp damarına göre bacaktan alınan damarların stentle genişletilmesi de daha sorunludur. Lezyonlar daha sıkı ve pıhtılaşmaya eğilimleri fazladır. Bu nedenle Bypass sonrası kolesterol, şeker, tansiyon, kilo vb risk faktörlerinin kontrolü, sigaranın bırakılması, düzenli egzersiz yapılması çok önemlidir. Yıllık muayeneler ve efor testi yapılması da erken teşhis açısından önemlidir.",
              open: false,
              show: false,

          },
           {
              number: "13",
              question: "Kalp damarındaki Stent daralırsa ne yapılır?",
              answer: "Bu durum kardiyologlar için istenmeyen bir durumdur. Stentler metal ağ şeklinde yapılar olduğundan içerisinde tel ile geçmek her zaman mümkün olmamaktadır. Burada ki birinci seçenek uzun geniş esnekliği olmayan balonlarla şişirilip takip edilmesidir. Ancak tekrar daralma riski yüksektir. İkinci seçenek ise içerisine önceki konulandan daha geniş bir ilaç kaplı stent konulmasıdır. Gerek metal yükün artması gerekse tekrar tıkanıklık riskinin artması nedeniyle tekrar stent takılması istediğimiz bir durum değildir. O yüzden ilk stent sonrası hastanın yaşam tarzını ve alışkanlıkları düzeltmesi ve tekrar daralma riskini en aza indirmesi gerekmektedir.",
              open: false,
              show: false,

          },
           {
              number: "14",
              question: "Bacak damarlarımda tıkanıklık var yürürken ağrı oluyor ne yapmalıyım?",
              answer: "Periferik arter hastalığı dediğimiz bacak damar tıkanıklığının belirtileri özellikle sabah ilk eforda görülen bacak ağrısı kramp veya yorulmadır. Öncelikle bacak damarlarının muayenesi önemlidir. Ayak bileğinden alınan nabız değerleri zayıflamış veya nabız alınamıyorsa bu önemli bir bulgudur. Bazende kol tansiyonu ayak bileği tansiyonuna oranlanarak Ankle/brakiyal indeks hesaplanarak tıkanıklık teşhis edilebilir. Bu durumda alt extremite arteryel renkli Doppler dediğimiz yöntemle bacak damarlarının ultrasonu çekilmekte ve damardaki kan akımı ölçümleri yapılmaktadır. Ölçümler bozuk olan hastalarda ise bacak damarlarının anjiyosu yapılmaktadır. Tıkalı damarlara öncelikle balon yapılmaktadır. Bu hastalarda sigaranın bırakılması ve düzenli egzersiz yapılması çok önemlidir. Ağrı oluşsa bile ısrarla yapılan yürüyüşler köprü yan damar gelişimine katkıda bulunmaktadır.",
              open: false,
              show: false,

          },
           {
              number: "15",
              question: "Kalp hastalıkları genetik midir? Ne yapmam lazım?",
              answer: "Kalp deliklerinin bir kısmı, bazı ritim bozukluğu türleri, kalp kası hastalıklarının bir kısmı ailesel olabilmektedir. Bu nedenle ailede kalp hastalığı olan bireylerin kalp kontrollerini en geç 5 yılda bir yenilemelerinde fayda olur. Bu kişilerin alışkanlık ve yaşam tarzlarının düzenlemeleri ile ailesel risk yüksek olsa bile hastalığın ortaya çıkışını geciktirmeleri mümkün olabilir.",
              open: false,
              show: false,

          },
          {
              number: "16",
              question: "ASD kapatılması ameliyatı oldum ileride sıkıntı olur mu?",
              answer: "Erken yaşta ve pulmoner hipertansiyon (akciğer tansiyonu) gelişmeden önce yapılan ameliyat hastalarda bir sorun oluşturmaz. Ancak defekt çapının geniş olduğu ve geç tespit edilen olgularda delik kapatılsa da akciğer tansiyonu devam etmektedir. Bu tip hastalarda kalp deliği (ASD) kapatılmadan önce kalp kateterizasyonu denilen anjiyoya benzer bir işlemle akciğer direnci mutlaka ölçülmelidir. Tetkik sonuçları uygun olmayan hastalar kesinlikle ameliyat edilmemelidir. Maalesef ülkemizde ve dünya da bu tip ameliyatların halen kapatıldığını görmekteyiz. Bu hastalar ameliyat sonrası sağ kalp yetersizliği, nefes darlığı ve bacaklarda şişlik rahatsızlıkları ile müracaat etmektedir. Bir kısmında kalbe tekrar delik açılmaya çalışılmakta ve çoğu hasta 3-5 sene içerisinde kaybedilmektedir.  Erken kapatılan hastalarda bu durumların hiçbiri görülmemektedir. Sadece ASD kapatılan hastalarda bir miktar artmış ritim bozukluğu riski mevcuttur. Atrial flatter denilen düzensiz bir ritimin gelişme sıklığı özellikle ASD kapatılan hastalarda artmaktadır. Bu nedenle kalp deliği kapatıldıktan sonra çarpıntısı başlayan hastalar mutlaka kalp doktoruna şikayetini anlatmalıdır. Gerekli vakalarda ritim holteri denilen cihazlar takılarak ritim bozukluğu araştırılmalıdır. ",
              open: false,
              show: false,

          },
          {
              number: "17",
              question: "Mitral kapağım balonla genişletildi tekrar daralır mı?",
              answer: "Romatizmal kalp kapak hastalığı kronik bir hastalıktır. Mitral kapak balon genişletmesi operasyonu sadece cerrahiyi geciktirip hastaya zaman kazandırmaktadır. Bu hamile kadınlar veya hamilelik planlayan hastalar için çok önemlidir. Çünkü mekanik kalp kapakları ile gebelik son derece risklidir. Erken yaştaki vakalarda cerrahiyi 10 yıldan fazla öteleyebilmektir. Bu da erken cerrahi olacak bir hastanın kalp kapağındaki yıpranmanın 10 yıl süre geciktirilmesini sağlar. Yani hastanın olası 2. kapak ameliyatı riski azaltılmış olur. Kapak ne kadar kalın ve kireç oranı yüksek ve hareketsiz bir kapaksa o denli erken daralmakta ve cerrahiye gitmektedir. Bu tip kapakların mitral balon sırasında yırtılma veya pıhtı atma riski de o denli yüksektir. O yüzden mitral balon yapılacak hastaların eko ile dikkatli değerlendirilmesi ve hastanın bu konuda bilgilendirilmesi çok önemlidir.",
              open: false,
              show: false,

          },
          {
              number: "18",
              question: "Aort kapağı değişecek TAVI olabilir miyim?",
              answer: "Bu sorunun cevabı ülkeden ülkeye ve hastadan hastaya değişmektedir. TAVI pahalı bir yöntemdir. Bazı ülkelerde sigorta şirketleri sadece açık ameliyat riski yüksek hastalarda karşılamaktadır. Ülkemizde de sadece üniversite/eğitim araştırma hastanelerinin bazılarında kardiyoloji ve kalp damar cerrahisinin açık ameliyat için çok riskli bulduğu hastalarda konsey kararı ile ödenmektedir. Ancak ekonomik durumu uygun hastalara özel hastanelerde de bu işlem yapılmaktadır. Ayrıca hasta yaşı önemlidir. Çünkü TAVI biyolojik kapak içermektedir. Bunların dayanıklılıkları mekanik kapaklar kadar iyi değildir. 60 yaş altı hastalarda pek önerilmemektedir. İstisnası porselen aort denilen aortun ileri derecede kireçli olduğu cerrahinin yapılmasının çok riskli olduğu hastalardır. İkinci olarak aortun yaprakçıklarının birinin eksik (biküspit yapıda) olduğu ve aort kökünün çok genişlediği hastalardır. Bu hastalarda hem TAVI problemlidir hem de hastanın aortunun da değişmesi gerekebilir.",
              open: false,
              show: false,

          },
          {
              number: "19",
              question: "Tansiyon neden yükselir?",
              answer: "Bazı hastaların tansiyonları ilaçla düzgün giderken dönem dönem aniden yükselebilmektedir. Bu durumlarda öncelikle hastanın ilacının etkisini azaltan ağrı kesici kullanımı veya steroid denilen romatizma, astım veya diz gibi eklemlerin içine verilen ilaçlar ile bitkisel ürünlerin (panax,ginseng vb.) kullanımı sorgulanmalıdır. İkinci olarak hastanın son günlerde tuz uyumundaki bozulmalar da önemlidir. Turşu, şalgam ve salça sezonları veya bölgesel olarak meyan şurubu bol tüketildiği dönemler tansiyon yükselme sezonları gibidir. Ayrıca mevsim geçiş dönemlerinde özellikle havaların ani soğuduğu sert kış geçişlerinin olduğu dönemlerde ani yükselmeler sıklıkla yaşanmaktadır. Hastanın stres, üzüntü ve kaygı düzeyini arttıran olaylar yaşadığı dönemlerde tansiyon değertlerinin yükseldiği görülmektedir. Böbrek üstü bezi tümörleri ve bazı hormon salgılayan endokrin tümörleri de ani tansiyon yüksekliği, yüzde kızarma ve çarpıntı bulgularına sebep olmaktadır. Bu nedenle dikkatli bir değerlendirme yapılması ve altta yatan faktörün tespiti gerekmektedir.",
              open: false,
              show: false,

          },

          
      ],
      
      faqsEn: [
          {
              number: "1",
              question: "I have pin-prick pains on my chest after stenting. Is that normal?",
              answer: "During the stenting procedure, the artery wall is damaged by the balloon and a non-resilient metal-meshed net is placed in that area. After the procedure, some patients feel pin-prick pains caused by the distention up to one month. Such pains have nothing to do with effort but should be examined by your doctor whether it is an important issue or not.  Stress tests are carried out at the end of the 1st, 6th and 12th months after a stent procedure in order to check whether there exists a stent-related problem or not. Also, it is recommended to re-perform annual stress tests for those patients regularly.",
              open: false,
              show: false,
          },
           {
              number: "2",
              question: "Is cholesterol harmful?",
              answer: "Cholesterol, a constituent of cell membrane, is one of the most essential molecules in the blood. If so, then, why should we lower our cholesterol level? Might the incidences of dementia, infertility, and many other diseases disappear if cholesterol is reduced? Those type cholesterol-related questions are now the popular subject of medicine. When we think of blood sugar, it is the most fundamental energy source of brain and many other organs. Colloquially, you may hear “Diabetes is just a made-up disease and you can/should eat slats of honey for healing”. However, the inevitable result is that diabetes is the most common cause for blindness, dialysis and leg amputation all over the world !!! <br> The important thing here is not to exceed limit values as we all know that enough is as good as a feast. Even at home, you don't know where to put your extra stuff. A minimalist philosophy of life throughout the world becomes fashionable, right? In a similar way, our bodies try to deal with excess amount of cholesterol. Particularly, low density lipoprotein  (LDL) cholesterol particles are oxidized as a result of chemical reactions in our bodies. It is just like the oxidation and moulding of the water pipe. The oxidized LDL accumulates in the artery walls and the body has difficulty in repairing them. Results are heart attacks, strokes and getting paralysed!!!",
              open: false,
              show: false,

          },
           {
              number: "3",
              question: "Are cholesterol medications harmful?",
              answer: "Diseases such as heart attacks and stroke / paralysis do not come into existence after the discovery of cholesterol medications. On the contrary, these are health problems for thousands of years despite being more common among patients with high cholesterol. Lives of these patients could be extended by the help of cholesterol drugs. However, each and every drug might have some side effects. To illustrate, Aspirin, the most popular medicament in cardiology, is at the same time the most common cause of stomach bleeding. <br> Cholesterol medications have developed an enormous experience through billions of boxes all over the world. In general, they may cause muscle aches and in some patients and might increase muscle enzymes by more than 5-6 times. They may lead to severe muscle destruction in one in a million cases (rhabdomyolysis). Rarely, there appears an increase in liver enzymes. 20 years ago, we used to check the liver enzymes of the patients at the first month and then on quarterly basis. In my experience with tens of thousands patients, I have never witnessed the ceasing of a cholesterol medication treatment for a patient due to liver problems except for a few cases. In the following years, international guidelines reported that the medication was safe and did not require frequent liver tests and those reports were completely consistent with our practical experience. <br> In recent years, Q10 (co-enzyme 10) has been researched to prevent drug-induced muscle pain and myopathy but it is not routinely recommended due to contradictory findings. However, your doctor's advice comes first.",
              open: false,
              show: false,

          },
          {
              number: "4",
              question: "Do extra beats hurt my heart?",
              answer: " In cardiology out-patient-clinic extra systoles or early heart beats are the most common finding at the rhytm holter records. Despite the fact that patient are highly worried, cardiologists do not pay very much attention to those type of such an arrhythmia. <br> While some patients are even bothered by 20-30 early beats, some others do not notice more than 10,000 extra systoles. Under normal circumstances, all physiologically healthy individuals can have extra systole from 500 to 600 in 24 hours. Then, who should be concerned? The answer is that if the extra systoles which exceed 15% of total beats measured in the holter, it can cause congestive heart failure in the upcoming years. Our daily heart rate ranges from 100,000 to 120,000. That is, an extra number of 15,000-18,000 beats per day may require treatment.  <br> In addition, patients with heart failure or valvular disease need to be treated. At echocardiography it causes no issue for people without structural heart disease and coronary artey disease. If there is no underlying disease, initially beta-blockers are prescribed. If they do not provide the expected cure, more powerful rhythm regulators are added to the prescription or ablation treatment is recommended. In over half of these patients, psychiatric disorders such as anxiety disorder and panic attack are observed. In such cases it is an imperative to cure the underlying psychiatric disorders; otherwise, those patients often visits one doctor to another and a large number of holter examinations .",
              open: false,
              show: false,

          },
           {
              number: "5",
              question: "Is it possible to be discharged from the hospital at the day of angiography ",
              answer: "In the case of angiography through arm, the patient could be discharged 3-4 hours after the procedure. In the case of angiography through groin, 4-5 hours are required due to external weight implementation and such patients may need to stay overnight if the angiography is performed in the afternoon. Patients with bleeding in the groin are also required to stay in the hospital as a precautionary measure. In the case of stent placement patients are advised to remain under observation for 24 hours in the hospital. ",
              open: false,
              show: false,

          },
           {
              number: "6",
              question: "Should I take medications even if my blood pressure is normal?",
              answer: "The effect of blood pressure medications lasts until the next day. For some medications, this duration could reach up to 30 hours. After achieving stable blood levels 1-2 hours of delays could easily be tolerated. Yet, 'if I take the medication when my blood pressure is normal, doesn't my blood pressure drop even further?' The general rule is that the higher the blood pressure is, the higher the effectiveness is. In the case of lower blood pressure, the effects of medications decrease. To illustrate, while the medication reduces the blood pressure to 150/85 in a patient with a blood pressure of 180/110 mmhg, the same medication reduces the blood pressure to 130/70 in the same patient with a blood pressure of 150/80 mmhg. In other words, as the blood pressure approaches normal, the effects of the medications decrease. Therefore, it is not recommended for patients taking regular medication to skip the medication or reduce the dose after measuring normal levels of blood pressure. <br> In some other patients the medications repress hormonal axes in blood throughout years and this leads normal levels of blood pressure up to 12 months even if the patient quits taking the medication himself. Until one night he presented to the emergency room with a blood pressure of 180-200 mmhg. This is a common situation in patients who discontinue blood pressure medication. Therefore, the diagnosis of high blood pressure should be made with a careful research and medication should be decided with due diligence. Most importantly, one should bear in mind that the treatment will be lifelong once started. ",
              open: false,
              show: false,

          },
           {
              number: "7",
              question: "How long do pacemakers last?", 
              answer: "The answer depends on many factors.  First of all, dependency level of the patient on the pacemaker is the most critical one. To illustrate, some patients are pacemaker-dependent and their hearts run on higher than 90% with pacemaker. For some patients, this ratio is goes down to 30-40% and they often need a pacemaker with short intervals. Hence, the more the pacemaker is activated, the shorter it lasts. Secondly, the minimum electrical threshold required for the pacemaker to generate a warning in the heart is important. This is 0.4 mV for some patients and 1.8 mV for some others. The higher the threshold is, the shorter the pacemaker lasts. Last but not least, switching on and off functions such as “R modes” in which the pacemaker accelerates when needed or “night-time heart rate drop” are also related to the life of the device. A pacemaker is expected to last for 7-8 years. However, in some patients lifetime of the device could be reduced to 3 years or extended to 15 years depending on the abovementioned factors. <br> When implanting the pacemaker, it is very crucial that the cable is mounted where the lowest threshold is taken and programmed to the patient at the most appropriate values. ",
              open: false,
              show: false,

          },
           {
              number: "8",
              question: " May I have a non-cardiac surgery with an implanted pacemaker?",
              answer: "There are a few suggestions in such case. First, the pacemaker could be fixed to the OOO mode during the surgery and re-adjusted afterwards. Furthermore, a magnet could be placed on the pacemaker to disable it during the operation. Using bipolar cautery and short-term cautery implementation not exceeding 10 seconds ensure to perform smooth surgeries in many patient with pacemaker in cases of difficulty to reach producing company of the pacemaker ",
              open: false,
              show: false,

          },
           {
              number: "9",
              question: "May I quit my blood thinners when I have a tooth extraction?",
              answer: "The answer may change depending on why you use blood thinners. Patients stented should keep taking both of the blood thinners in the first 6 months. After this initial period, they could quit one of the blood thinners for 5 or 6 days and take aspirin instead in order to have dental intervention. In patients with heart valve prosthesis and taking Coumadin (warfarine), the tooth could be extracted when the drug is discontinued for three days and the INR level falls below <2. However, injection of blood thinners such as low molecular weight heparin should be added to the prescription until INR level goes up to > 2 again. <br> Unfortunately, issues such as clot and embolism may occur in the valve, if this process is not well managed. The patients taking new generation anticoagulants such as Xarelto, eliquis, lixiana Pradaxa need to stop the medication for two days and start again after the dental intervention.",

              open: false,
              show: false,

          },
           {
              number: "10",
              question: "I have a heart valve insufficiency. Is some drugs usefull?",
              answer: "Medication treatment for heart valve disease is one of the highly researched subjects. No medication is recommended to reduce regurgitant volume if the patient has no cardiac dilatation or has a normal blood pressure. In those patients, on the contrary, such medication treatment may escalatethe regurgitation by deteriorating the strength of heart valve. However, if the patient has high blood pressure, ACE inhibitor or some calcium channel blockers could be prescribed to reduce the regurgitan volume. In some other cases, high blood pressure medication is applied to control the cardiac arrhythmia connected with heart valve issues. <br> Medications often do not served he purpose due to the fact that heart valve insufficiency are mechanical disorders. That’s why, surgery or interventions through groin are inevitable. As a protective measure, patients with high volume regurgitation are recommended to take antibiotics or to be vaccinated regularly before dental extraction or non-cardiac surgeries.",
              open: false,
              show: false,

          },
           {
              number: "11",
              question: "My mother has cardiac dilatation. What should I pay attention to?", 
              answer: "Some heart muscle diseases may be genetic. Even if a person has a genetic heart disease, structural changes in the heart may remain until after the age of 40. Therefore, people with a strong family history should have echo scans in every 5 years and evade risk factor relating to high blood pressure, diabetes, and weight. To that end, it is critical to limit the salt and to avoid sedentary lifestyle.",
              open: false,
              show: false,

          },
           {
              number: "12",
              question: "Is that possible to have angiography after the coronary bypass surgery?",
              answer: "Although patients think that they have recovered after the Coronary Bypass Surgery (CABGO), 80% of the saphenous vein grafts taken from their legs are occluded in the first 10 years. New occlusions that did not exist prior to the CABGO may develop. For this reason, need for angiography in these patients becomes inevitable. Angiography in those patients is more risky due to both duration of the operation and the amount of contrast agent. The risk of experiencing an embolic issue increases as the operation lasts longer. The higher the amount of contrast agent is used in angiography, the more risk exists to suffer from renal insufficiency afterwards. Nevertheless, balloon and stents placements in these patients significantly reduce the need for a second surgery. Placement of a stent in saphenous vein grafts is more problematical when compared to coronary artery. In such graft lesions are firmer and have higher clotting capacity. For this reason, lifestyle change after Bypass surgery, quitting smoking, regular exercise, and close control of risk factors such as cholesterol, diabetes, blood pressure, weight, etc. are vital. Also, performing annual cardiac stress tests is essential for early diagnosis of restenosis.",
              open: false,
              show: false,

          },
           {
              number: "13",
              question: "What happens if stent narrows in coronary arteries?",
              answer: "It is a very undesirable situation for cardiologists. Since stents are metal-meshed, it is not always possible to get through them by wire. The first option is to inflate them with long and wide balloons without flexibility and follow the patient afterwards. However, it is a high risk for restenosis. The second option is to insert a larger drug-eluting stent into the existing one. This is not a very desirable method because of the increased metal load on the coronary artery wall and escalated risk of re-occlusion. Therefore, it is vital to change the lifestyle and habits of the patient after the placement of first stent in order to mitigate such risks.",
              open: false,
              show: false,

          },
           {
              number: "14",
              question: "I have vascular occlusion in my leg artery and have pain while walking. What should I do?",
              answer: "First symptoms of peripheral arterial disease, i.e. vascular occlusion, are leg pain, cramping or fatigue in the first effort in mornings. First, examination of the leg vessels is important. It is a key finding if the pulse is weak or cannot be observed. Sometimes, an occlusion is suspected by comparing the arm blood pressure to the one in ankles and calculating the ankle / brachial index. In this case, an ultrasound scan of the lower extremity arteries is performed with the method of colour Doppler and the presence of the blood flow, its velocity and quality are measured. Angiography of lower extremity arteries is carried out  in patients with abnormal results. Firstly, balloons are placed into the occluded leg artery. Quitting smoking and regular exercise is vital for those patients. Insisting upon walking despite pain contributes to the development of collateral blood flow from side artery.",
              open: false,
              show: false,

          },
           {
              number: "15",
              question: "Are heart diseases genetic? What should I do?",
              answer: "Some of the heart defects, some types of arrhythmias, certain heart muscle diseases could be familial. Hence, individuals with family history are recommended to renew their controls every 5 years regularly even if the results are fine. They can delay the occurrence of heart diseases by having a healthy lifestyle and habits even if the familial risk is high. ",
              open: false,
              show: false,

          },
          {
              number: "16",
              question: "I had  atrial septal defect (ASD) closure surgery. Should I be concerned?",
              answer: "It does not pose any problems in patients who had the operation at early ages before pulmonary hypertension developed. However, pulmonary hypertension persists in patients with larger defects and late detected cases. Pulmonary resistance should necessarily be measured with cardiac catheterization, an angiography-like procedure prior to the ASD closure surgery. If the pulmonary resistance is measured high, then the heart hole should not be closed. Unfortunately, we see that patients with such conditions still undergo ASD closure surgeries in our country and in the world. These patients are hospitalized with a diagnosis of right heart failure, difficulty in breathing and swelling of legs. The hole is tried to be re-opened in the heart but those patient are lost within 3-5 years. None of these problems are observed in patients who had the ASD closure surgery at early ages. The only risk is to have an increased level of arrhythmia in those patients. The frequency of development of an arrhythmia, i.e. atrial flutter, increases especially in patients with ASD closure. Therefore, patients suffering from palpitations after closing of heart defect must consult their doctors about those complaints. In necessary cases, such rhythm disorders should be investigated by measuring with holter devices.",
              open: false,
              show: false,

          },
          {
              number: "17",
              question: "I have gone through the balloon dilatation of the mitral valve. Does my mitral valve get narrowed again?",
              answer: "Rheumatic heart valve disease is chronic. The operation for balloon dilatation of the mitral valve only delays the ultimate surgery and saves some time. This is highly important for pregnant women or patients planning pregnancy. Pregnancy with mechanical heart valves is extremely risky. Postponing the surgery up to 10 years is possible at early ages. That is to say, the degeneration of mitral valve could be put over and the risk for a second surgery is reduced as well in such patients. Higher thickness, calcification and immobility at the mitral valve result in early narrowing and end up with surgery. In such valves the risk of tearing or clotting is considerable high. Therefore, it is very important to carefully evaluate the patients with echocardiogram results who will be placed a mitral balloon and to inform them about the abovementioned issues.",
              open: false,
              show: false,

          },
          {
              number: "18",
              question: "My aortic valve is going to be replaced? Can I have TAVI?",
              answer: "The answer to this question varies from country to country and from patient to patient. TAVI is an expensive method. In some countries, insurance companies only cover patients with a high risk of open surgery. In our country, only in some university / training and research hospitals, TAVI is paid by the council decision in patients whom cardiology and cardiovascular surgery departments find too risky for open surgery. This procedure is also performed to patients with necessary economic conditions in private hospitals. The age of patient is primarily important as TAVI contains a biological valve. Their durability is not as good as mechanical ones. It is not quite recommended to patients under the age of 60 years. The first exception is the patients who have a very high risk of surgery due to having a highly calcified aorta, i.e. porcelain aorta. The second exception is the patients whose one of the aortic leaflets are missing (bicuspid structure) and the aortic root is very enlarged. In those patients TAVI is problematical and it may be need to replace aorta as well.",
              open: false,
              show: false,

          },
          {
              number: "19",
              question: "Why does the blood pressure rise?",
              answer: "Some patients' blood pressure can rise suddenly while on regular medication for blood pressure. In such cases, use of painkillers drugs for rheumatism, asthma or knee joint injection (i.e. steroids) or herbal products (panax, ginseng etc.) should be primarily questioned as they reduce the effect of blood pressure medication. Secondly, deterioration in salt compliance of the patient is also important. Thirdly, seasonally high consumption of pickles, turnip juice, tomato paste seasons or licorice syrup lead to provisionally high blood pressure. In addition, sudden elevations in blood pressure are common during seasonal transition periods where sudden drops in temperatures occur. Moreover, the periods that patients experience higher levels of stress, worry, and anxiety are always a risk factor for high blood pressure. Last but not least, adrenal glands tumours and endocrine tumours are connected with sudden high blood pressure, flushing of the face and heart palpitations. Overall, a careful evaluation of patients should be carried out and the underlying factors should be put forward.",
              open: false,
              show: false,

          },

          
      ],
      
      faqsAr: [
        {
            number: "1",
            question: "بعد عملية الدعامات أحس بألم بصدري و كأن إبرة و قد غُرزت في صدري هل هذا طبيعي؟",
            answer: "الجواب: أثناء القيام بعملية تثبيت الدعامات يلحق ضرر بجدار الوعاء الدموي و البالون حيث يتم تثبيت شبكة معدنية و هي ليست مرنة كثيرة.لذلك فإنه خلال الشهر الأول فإن لدى المرضى الذين تمت لهم عملية تثبيت دعامات و نتيجة لعملية تمدد الوعاء الدموي من الممكن أن يشعروا بآلام تسبه ألم غرز الإبرة و هذه الآلام لا يمكن تحديدها عند القيام باختبار (تمرين) الجهد. و لكن هل لهذا الأمر قيمة طبية أم لا هذا أمر يعود تحديده من قبل طبيبكم.و لكي يتم تثبيت ما إن كانت توجد مشكلة تتعلق بالدعامة لدى المرضى الذين تمت لهم عملية تثبيت دعامات يتم القيام باختبار الجهد في نهاية الشهر الأول و كذلك السادس و الثاني عشر بعد العملية. و يُنصح بعدها القيام كل سنة بعملية اختبار الجهد",
            open: false,
            show: false,
        },
        {
            number: "2",
            question: "هل ارتفاع نسبة الكوليسترول مضر بالصحة؟",
            answer: "الجواب: في الأصل إن الكوليسترول واحد من الجزيئات الأساسية لمكونات غشاء الخلية والذي يجب أن يكون موجود في الدم. إن الكسوليسترول مهم لهذه الدرجة و لكن زيادته مضرة جداً. بشكل خاص جزيئات الكوليسترول الصغيرة منخفضة الكثافة   -الدلا-    حيث تتأكسد نتيجة تعرضها للتفاعلات الكيميائية الهائلة في الجسم. تماما مثل الأكسدة والعفن  في أنابيب المياه حيث تتراكم هذه الجزئيات على جدار الوعاء الدموي و يصبح  من الصعب على الجسم اعادة ترميم هذه الجدران.  و للأسف نتيجة لهذا تحدث النوبة القلبية و الشلل الدماغي",
            open: false,
            show: false,

        },
        {
            number: "3",
            question: "هل أدوية الكوليسترول مضرة بالصحة؟",
            answer: "بعض الأمراض مثل النوبة القلبية و الشلل/ الجلطة الدماغية عمرها آلاف السنين، و هذه الأمراض أكثر شيوعا لدى المرضى الذين يعانون من ارتفاع الكوليسترول في الدم. و باستخدام أدوية الكوليسترول يتم إطالة أعمار المصابين بهذى الأمراض. و لكن لكل دواء أثاره الجانية أيضاً.في الوقت الذي يعتبر الأسبرين الدواء المفضل لدينا في طب أمراض القلب، نجد أنه السبب الأكثر شيوعًا لحدوث نزيف المعدة. لقد تكونت خبرتنا حول أدوية الكوايسترول بعد استهلاك ملايين العلب منها. فهي من الممكن أن تسبب لبعض المرضى ألماً في العضلات نتيجة لزيادة عدد الأنزيمات فيها من٦-٥ مرات. ومن الممكن أن تكون سببا في الانحلال الشديد للعضلات و ذلك بنسبة واحد من بين مليون شخص (انحلال الربيدات). و من النادر أن تسبب ارتفاع عدد أنزيمات الكبد. قبل ٢٠ عامًا، كان يتم فحص أنزيمات الكبد لدى المرضى في الشهر الأول و بعدها تُفحص مرة كل ثلاثة أشهر. و بعد آلاف من تجاربي في هذا المرض  لم ألحظ - باستثناء العدد القليل منهم- أيقاف المرضى استخدام هذه الأدوية بسبب مشاكل حاصلة في الكبد. و في السنوات اللاحقة، أشارت الأبحاث الدولية إلى أن الدواء آمن ولا يتطلب معه اجراء اختبارات متكررة للكبد.و في السنوات الأخيرة نقوم بالبحث عن طرق لمنع الألم  و الاتهاب في العضلات الناتج عن استخدام دواء  ‘ق ١٠’ (سينظم ١٠) و نتيجة للحصول على نتائج متضاربة لا يُنصح به بشكل رو تيني. لكن هنا تبقى توصية طبيبكم مهمة في هذا الموضوع",
            open: false,
            show: false,

        },
        {
            number: "4",
            question: "زيادة نبضات القلب هل تسبب ضررا لقلبي؟",
            answer: "من أكثر النتائج الملحوظة لدى المرضى الذين ثُبت لهم   (حولتر إكج) هي حدوث انقباضات أو النبضات المُبكِرة لديهم. ورغم شعور المرضى بالقلق نتيجة لهذا الموضوع فإن أطباء القلب لا يرون أن اضطرابات النبضات هذه تشكل خطراً على صحة المريض. ففي حين أنّ بعض المرضى يشعرون بعدم الارتياح بسبب ٢٠-٣٠  نبضة مبكرة، لا يلاحظ آخرون أكثر من ١٠٠٠٠ انقباضاً إضافياً.في الحالات العادية من الممكن أن تحدث لدى جميع الأشخاص الأصحاء ما بين ٥٠٠ إلى ٦٠٠ من الانقباضات الإضافية يوميًا. إذا تم قياس زيادة في عدد الانقباضات في مقياس  حولتر إكج على مدار ٢٤ ساعة و كانت تزيد بنسبة %١٥ من إجمالي النبض المعتاد فهذا يعني أنها قد تكون سببا في حدوث قصور  في قلب خلال السنوات اللاحقة.يتراوح معدل ضربات القلب اليومية  لدينا ما بين ١٠٠٠٠٠ و ١٢٠٠٠٠ ، لذلك قد يتطلب الأمر تداويا إذا ما زادت عدد الضربات أكثر من ١٥٠٠٠ إلى ١٨٠٠٠ نبضة يوميا. كما يجب أن يعالج المرضى الذين يعانون حاليا من مشكلة قصور القلب أو  مرض في صمّام القلب. استنادا إلى تخطيط القلب فإنه لا توجد مشكلة لدى الأشخاص الذين لا يعانون من أمراض القلب التشوهية أو  انسدادا في الأوعية الدموية. فإذا لم يكن لدى المريض أية أمراض أخرى فإنّه لعطى أدوية من نوع  بتا بلوقر  فإذا إما أن يعطى  أدوية أكثر فعّالية في تنظيم ضربات القلب أو يتم توجيه المرضى نحو استخدام  موجات الراديو (حرق) في التداوي.يلاحظ أن أكثر من نصف هؤلاء المرضى يعانون من اضطرابات نفسية مثل اضطرابات القلق ونوبات الهلع، و ما لم يتم علاج هذه الأمراض، فهم محكومون (المرضى)  بتركيب حولتر إكج عدة مرات و قضاء وقتهم متجولين منى طبيب لآخر",
            open: false,
            show: false,

        },
        {
            number: "5",
            question: " بعد عملية تصوير شرايين القلب (الآنجيو) هل أستطيع الخروج من المشفى في نفس اليوم؟ ",
            answer: "تستطيعون مغادرة المشفى بعد ٣-٤ ساعات من عملية الآنجيو المنفذة عن طريق الساعد. بعد عملية الآنجيو المنفذة عن طريق الفخذ يلزم تنفيذ عملية ممارسة رياضة حمل الأثقال لمدة تتراوح بين ٤-٥  ساعات. و من الممكن أن يتطلب بقاء الأشخاص الذين خضعوا لعملية الآنجيو بعد الظهر في المشفى. و الأشخاص الذين حدث لديهم نزيف في منطقة الفخد قد يلزم بقاءهم في المشفى و ذلك مراعاة للتدابير الأمنية.  أما المرضى الذين رُكبت لهم دعامات فيوصى بقاءهم في المشفى تحت المراقبة لمدة ٢٤ ساعة ",
            open: false,
            show: false,

        },
        {
            number: "6",
            question: "هل آخذ الدواء عندما يكون ضغطي طبيعي؟",
            answer: "إن تأثير أدوية الضغط يستمر حتى اليوم التالي و هناك بعض الأدوية قد يستمِرّ مفعولها لمدة ٣٠ ساعة. بعد الوصول إلى مستوى ضغط الدم المطلوب من الممكن بكل راحة تحمل تأخر ساعة أو ساعتين للدواء.لكن عندما يكون ضغطي طبيعي و أتناول دواء الضغط ألا يكون ذلك سببا لانخفاضه أكثر؟القاعدة العامة لجميع أدوية ضغط الدم هي أنه كلما زاد ارتفاع ضغط الدم زادت فعالية هذه الأدوية.أما في حالة انخفاض ضغط الدم فإن تأثير الأدوية يقل.مثلا المريض الذي ضغطه ١١٠/١٨٠  حج/مم  دواء الضغظ الذي يستخدمه يخفض ضغظه إلى ٨٥/١٥٠ حج/مم  ، و نفس الشخص عندما يكون ضغه ٨٠/١٤٠ حج/مم  و باستخدامه  نفس الدواء ينخفض ضغطه إلى ٧٠/١٣٠ حج/مم  . يعني عندما يقترب ضغط الدم من الوضع الطبيعي يقل تأثير الدواء في خفض معدل ضغط الدم. و لهذا السبب فلا ينصح المرضى الذين يتعاطون الدواء بشكل منتظم قيامهم بقطع الدواء أو خفض معدل تعاطيه بعد قيامهم بقاس معدل ضغطهم. أحيانا لدى بعض المرضى فإن أدوية الضغط و مع مرور الزمن تقوم بتثبيط إفراز الهرمونات و لذلك فمثل هؤلاء الأشخاص اذا ما تركوا تعاطي أدوية الضغط فإن معدل الضغط لديهم يبقى بوضعه الطبيعي لمدة تتراوح بين ١-١٢ شهراً، إلى أن يتم نقله إلى قسم الإسعاف عندما يصل ضغطه إلى ٢٠٠/١٨٠ حج/مم  و هذا وضع كثيرا ما واجهناه لدى المرضى الذين يقدمون على ترك أدوية الضغط، لهذا السبب يجب تشخيص درجة ارتفاع ضغط الدم بد دراسة دقيقة و تقرير الدواء اللازم بدقّة و لكن بعد البدء بتعاطي الدواء فإن مدة التدواي ستستمر مدى الحياة، و هذا شيئٌ يجب عدم نسيانه",
            open: false,
            show: false,

        },
        {
            number: "7",
            question: "كم عمر بطارية القلب؟",
            answer: "إن الجواب على هذا السؤال مرتبط بعدة عوامل وأهمها مستوى إدمان القلب على بطارية القلب هذه، بعض قلوب المرضى مدمنة على البطارية فأكثر من %٩٠  من قابلية عملها تستمدها من البطارية، و لدى بعض المرضى الآخرين تصل هذه النسبة إلى %٣٠-٤٠  يعني في الوقت الذي يعتمد فية القلب على عمله الذاتي قد يحتاج لفترات مؤقتة لطاقة البطارية. و بذلك و بحسب تدخل البطارية في عمل القلب يمكن تحديد الباقي من عمرها.  و من ناحية ثانية حتى تتمكن البطارية من عمل تنبيه في القلب تحتاج إلى حد أدنى من الطاقة الكهربائية، وهذا الحد قد يصل لدى بعض المرضى إلى  ٠.٤ م.ف.  في الوقت الذي يصل فيه هذا الحد  لدى مرضى آخرين إلى ١.٨  م.ف.. كلما زادت عتبة قابلية التنبيه كلما قل عمر البطارية. بالإضافة إلى أن عوامل مثل تشغيل البطارية وإيقافها مثل أوضاع R التي يتسارع فيها عمل البطارية وفقًا للحاجة أو عند انخفاض معدل ضربات القلب بالليل لها تأثير أيضًا على عمر البطارية. بشكل عام يتراوح عمر البطارية من ٧ - ٨  سنة.   لكن هذا الأمر يختلف في الحالات الاستثنائية ففي الوقت الذي يقصر عمر البطارية إلى حد ٣ سنوات لدى البعض قد يطول لدى البعض الآخر إلى ١٥  سنة. عند تركيب البطارية للمريض من المهم للغاية أن يتم تركيب سلك البطارية من المكان الذي يتم فيه أخذ أقل قيمة للعتبة وبرمجتها للمريض بشكل تتحقق فيه أفضل المعايير المطلوبة لعملها",
            open: false,
            show: false,

        },
        {
            number: "8",
            question: "سأخضع لعملية لا علاقة لها بالقلب هل تشكل بطارية القلب مشكلة بهذا الخصوص؟",
            answer: "توجد عدة اقتراحات بخصوص هذا الموضوع :الاقتراح الأول هو أخذ بطاريات من نوع ٠٠٠   و تَلزم وضع الضربات الثابتة. و بعد العملية تعاد برمجتها من جديد. و من الممكن وضع مغناطيس فوق البطارية و تعطيل قابليتها على العمل. في الحالات التي يصعب فيها الوصول إلى شركة الصانعة للبطاريات ففي حالات  عمليات الكي الثنائي القطب وتطبيقات الكي قصيرة الأجل التي لا تتجاوز مدتها ١٠  ثوانٍ، يمكن إجراء العملية بسلاسة للعديد من المرضى دون أي تغيير إعدادات البطّارية",
            open: false,
            show: false,

        },
        {
            number: "9",
            question: "هل أستطيع إيقاف تعاطي أدوية تمييع الدم عندما أريد قلع أسناني؟",
            answer: "هنا يختلف الجواب بحسب الغرض من استخدام أدوية تمييع الدم. فالأشخاص الذين ركبت لهم دعامات لا ينبغي أبدا  إيقافهم لمميعات الدم الثنائية أول ٦ أشهر من العملية.  بعد  الـ ٦ أشهر، يمكن إيقاف أحد مميعات الدم لمدة ٤-٥  أيام و مع استمرار تناول الأسبرين  يمكن السماح بالقيام بعمليات الأسنان.أمّا المرضى الذين لديهم صمام القلب صناعي أو الذين و يستخدمون دواء الكومادين -شمدين- بعد إيقاف الدواء لمدة ٣ أيام، ويصل مستوى - إ ن ر - إلى أقل من ٢ يمكن عندعا قلع الأسنان. لكن إلى أن يصل مستوى  - إ ن ر - إلى أكثر من ٢ من المحتم إضافة علاج إبرة - هيبرن - و ما شابهها من مميعات الدم.ومع الأسف إذا لم يتم تخطيط هذه المرحلة بشكل جيد، فقد تحدث مشاكل مثل الجلطة في الصمام و شلل فس شرايين الجسم - إمبوليسم - . أمّا الأشخاص الضين يتعاطون أدوية من النسل الجديد المضادة لتخثر الدم و معادلة مثل لـ شمدين مثل  كسرلته, القيس, ليكسنا بردكسا  بعد يومين من ايقافهم للدواء و بعد توقف النزيف الناتج عن قلع السن يجب عليهم البدء بتعاطي الدواء مرة أخرى",
            open: false,
            show: false,

        },
        {
            number: "10",
            question: "يوجد تسريب في صمام قلبي هل هناك دواء معين لمنع تضاعفه؟",
            answer: "معالجة تسربات صمام القلب بالدواء من المواضيع التي تمت دراستها بشكل مكثّف. إذا لم يكن المريض يعاني من تضخم في القلب وكان ضغط دمه طبيعيًا، فلا يمن التكلم عن دواء يقلل من شدة التسرب. و الأدوية التي تعطى لهذا الغرض من الممكن أن تضعف قابلية الصمام على الإغلاق و بالتالي زيادة في عملية التسرب. و لكن إذا كان المريض يعاني من ارتفاع في ضغط الدم من الممكن للمثبطات من نوع  - أ س إ - أو بعض قافلات قنوات الكالسيوم من الممكن أن تخفف جزئيا من عملية التسرّب في القلب. من الممكن استخدام أدوية ضغط الدم في علاج الخلل في نبضات القلب الناتجة عن مشاكل الصمام. لأن مشاكل صمام القلب هي اضطرابات ميكانيكية لذلك لا تجدي الأدوية المستخدمة لهذا الغرض. في هذه الحالة تكون العملية الجراحية أو التدخلات عن طرسق الفخذ أمراً لا مفر منه. يجب على المرضى الذين يعانون يعانون من تسرب كبير في الصمامات يجب عليهم استخدام المضادات الحيوية (مضاضّات الالتهابات) وأخذ لقاحاتهم بانتظام قبل قلع الأسنان أو القيام بعملية جراحية غير القلبية",
            open: false,
            show: false,

        },
        {
            number: "11",
            question: "لدى أمي تضخّم في القلب ماهي الأمور التي يجب أن أُراعيها؟",
            answer: "بعض أمراض عضلة القلب وراثية. و لو كان مرض الشخص وراثيا حتى لو كان مرض الشخص وراثياً  فإن التغيرات الهيكلية في القلب و الناتجة عن المرض قد تستمر إلى ما بعد عمر ٤٠عامًا.لهذا السبب ، يجب على الأشخاص الذين لديهم تاريخ عائلي جدي بهذالا الخصوص إجراء تصوير للقلب مرة  كل ٥ سنوات. من المهم تجنب الأوضاع التي تعدُّ تهديدا و سببا لقصور القلب، مثل ضغط الدم والسكر والانتباه إلى الوزن. و لهذا يجب تقليل كمية استهلاك الملح و القيام بنشاطات جسدية منتظمة",
            open: false,
            show: false,

        },
        {
            number: "12",
            question: "هل من الممكن للخص الذي أجريت له عملية جسر القلب 'بيبس' أن يخضع لعملية آنجو ( تصوير القلب) مرة أخرى؟",
            answer: "رغم ظن المرضى أنهم انقذو بعد إجراء عملية الجسر - بيبس- يتم احتشا ء %٨٠ من الأنسجة المأخوذة من الفخد في السنوات العشر الأولى من العملية، ومن الممكن حدوث احتشاءات متضاعفة لم تكن موجودة قبل عملية  الجسر - بيبس-. لهذا السبب  لامفر من القيام بعملية تصوير جديدة لشرايين القلب. و لأن مدة التصوير أطول و كمية الصباغ أكبر فإن  عملية التصوير الثانية تكون أكثر خطورة على المريض. و مع طول مدة التصوير تزداد امكانية تشكل انسدادات فس الوريد. و كمية المادة المستخدمة في طلاء المناطق المصورة تزيد من احتمال الإصابة بالفشل الكلوي في المستقبل. ومع ذلك ، فإن عملية زرع البالون والدعامات لدى هؤلاء المرضى تقلل بشكل كبير من الحاجة لإجراء عملية جراحية ثانية من هذا النوع. توسيع الشرايين المأخودة من الساق أكثر إشكالية من توسيع الأوعية القلبية الطبيعية. فالأنسجة المزروعة أكثر سرعة في الميل للتعرض للتخثر و العطب.  لهذا السبب، يجب الانتباه  إلى عوامل تعد عوامل خطير في تشجيع هذه الحالة مثل الكوليسترول والسكر وضغط الدم و زيادة الوزن و غيرها عوامل الخطر  و يعتبر الإقلاع عن التدخين، وممارسة التمارين الرياضية بانتظام مهم جدا هنا",
            open: false,
            show: false,

        },
        {
            number: "13",
            question: "عند تضييق الدعامات المزروعة في أوعية القلب ما الذي يمكن أن يُعمل؟",
            answer: "هذا وضع لا يُرغب به من قبل أطباء القلب.و لأن الدعامات مصنوعة من شبكات معدنية ليس من السهل دائما اختراقها بوسطة الأسلاك. في هذه الحالة الخيار الأول هو نفخها بوسطة بالونات طويلة و واسعة وعديمة المرونة و تعقب النتائج. ومع ذلك  فإن خطر احتمال عودة الانكماش من جديد يبقى مرتفعا.و الخيار الثاني هو وضع دعامات مغلفة بالدواء تكون أكثر سعة من تلك التي كانت قد وضعت من قبل. و بسبب تسببه زيادة ثقل المعدن المركب إضافة إلى زيادة احتمال تشكل انسداد في الشرايين نحن لا نرجح عملية تركيب الدعامات مرة أخرى. لذلك بعد عملية تركيب الدعامات الأولى يجب على المريض أن يغير طريقة معيشته و ينظّمَ من جديد بهدف التقليل من احتمال تضيّق الشرايين إلى حدّها الأدنى",
            open: false,
            show: false,

        },
        {
            number: "14",
            question: "يوجد انسداد في شرايين ساقي أحسّ بألمٍ عند المشيِ ماذا عليَّ أن أفعل؟ ",
            answer: "من مؤشرات وجود  انسداد شرايين الأرجل التي نسميها أمراض الشرايين المحيطية -ب أ د - هي الشعور بألم في الساق، أو التشنج أو التعب، خاصة في أول عملية جهد نقوم بها في الصباح. في البداية علينا الول بأن القيام بمعاينة شرايين الأرجل مسألة مهمة. إذا كان  معدل النبض المأخوذ من منطقة معصم القدم (الكاحل) قد قل أو تعذر الحصول عليه فهذه علامة مهمة على المرض.\ في بعض الأحيان، يمكن تشخيص الانسداد عن طريق حساب مؤشر نبض الذراع مقارنة بنبض معصم القدم (الكاحل) أنقل / برقيل. في هذه الحالة يتم اللجوء إلى أسلوب -دوبلر أس-  للحصول على تصوير لشرايين الرجل، ويتم قياس مقدار تدفق الدم في عروق الأرجل.  يتم إجراء تصوير للأوعية الدموية للأرجل  لدى المرضى الذين يعانون من خلل في  المعدلات المطلوبة. ففي الدرجة الأولى يتم تركيب بالونات للأوعية الدموية المسدودة . و من الضروري جدا ترك المرضى المصابين بهذا المرض للتدخين و ممارسة التمارين الرياضية بشكل منتظم. حتى ولو تم الشعور بالألم، فإن عملية المشي  المستمرة تساهم في ظهور الوعاء الجانبي داعمة لدى المريض",
            open: false,
            show: false,

        },
        {
            number: "15",
            question: "هل أمراض القلب وراثية ؟ ماذا يجب أن أفعل؟",
            answer: "إن بعض أنواع ثقوب القلب، و بعض أنواع اضطراب نبضات القلب وقسم من أمراض عضلة القلب من الممكن ان تكون وراثية. و لهذا من المهم لدى الأشخاص الذين تحمل عائلتهم مرضا وراثيا في القلب ان يراجعوا الطبيب لفحص القلب بشكل متكرر مرة كل خمس سنوات على الأكثر . إنّ مثل هؤلاء الأشخاص إن غيّروا  عاداتهم و أساليبهم المعيشية ممكن أن يساهموا في تأخر ظهور المرض حتى لو كانت مخاطر الإصابة لأسباب وراثية عالية الاحتمال",
            open: false,
            show: false,

        },
        {
            number: "16",
            question: "لقد قمت بعملية إغلاق عيب الحاجز الأذيني (أ ص د)  هل من الممكن أن يخلق هذا مشاكل في المستقبل؟",
            answer: "في العمليات التي تتم في سن مبكرة وقبل تطور ارتفاع ضغط الدم الرئوي ليس لها أية مشاكل على المرضى. غير أنه في الحالات التي يكون فيها قطر العيب كبيرًا ويتم اكتشافه في وقت متأخر، يستمر ضغط الرئوي على الرغم من إغلاق الثقب. في مثل هذا النوع من الأمراض و قبل إغلاق ثقب القلب (أ ص د) يجب قياس درجة مقاومة الرئة من خلال إجراء عملية تشبه تصوير الأوعية تسمى القسطرة. و إذا ما كانت نتائج فحص المرضى غير متوافقة مع المتطلبات ينبغي عدم إجراء هذه العملية لهم بتاتا. لكن و للأسف نجد أنه رغم هذا، فإن هذا النوع من العمليات لا يزال يطبق في بلدنا والعالم. إن المرضى الذين أجريت عليهم هذا النوع من العمليات يراجعونا في المستقبل  معانين من قصور القلب الأيمن وضيق التنفس وتورم الساقين. و يلجأ بعض المرضى إلى إعادة فتح القلب و معظم المرضى يموتون في غضون ٣-٥ سنوات. أما الأشخاص الذيت تمت عملية إغلاق ثقب القلب لديهم في مرحلة مبكرة من عمرهم فبل تلاحظ لديهم الاعراض السابقة. فقط من الممكن ظهور خطر زيادة في نبضات القلب لدى الخاضعن لهذه العملية أ ص د.  يزيد حدوث نبض غير منتظم يسمى الرفرفة الأذينية بشكل خاص لدى المرضى الذين خضعوا لعملية إغلاق أ ص د. لذلك، يجب على المرضى الذين خطعوا لعملية إغلا ثقب القلب إذا ما أحسوا بزيادة الخفقان بعد العملية إخبار طبيبهم بالموضوع. وفي الحالا التي تستلزم ذلك يتم تثبيت ما يسمى ب هولتر (جهاز قياس نبضات القلب) لدراسة الخلل في نبضات القلب لدى المرضى",
            open: false,
            show: false,

        },
        {
            number: "17",
            question: "تمت عملية توسيع الصمام التاجي لدي باستخدام البالون هل من الممكن أن يعود و يتضيّق من جديد؟",
            answer: "إن ّمرض صمام القلب الروماتيزمي هو مرض مزمن، و إن هدف عملية توسيع الصمام التاجي بواسطة البالون هي تأخير العملية الجراحية الامر الذي يسمح للمريض بكسب مزيد من الوقت. و هذه مسألة مهمة بالنسبة للمرأة الحاملة أو المرة التي تخطط الحمل. لأن الحمل يكون شديد الخطورة بوجود صمّامات القلب الميكانيكية. ففي حالات الكشف المبكر عن المرض من الممكن تأجيل العملية الجراحية لمدة تزيد عن ١٠  سنوات. وذا يأمّن تأجيل عملية تدهور صمام القلب لمدة ١٠  سنوات إضافية. بمعنى آخر، يتم تقليل خطر إجراء عملية جراحية ثانية لصمّام للمريض. كلما كان الصمام أكثر سمكا معدل تكلّسه مرتفعا و قابلية حركته ضعيفة، كان قابلا للتضيق و محتاجا لعملية جراحية  في وقت مبكر. مثل هذه الأنواع من الصمامات يكون عرضة لخطر التمزق أو إحداث تخثر أثناء وجود البالون التاجي. و لهذا فإنه يجب تحديد وضعية المرضى الذين سيخضعون لعملية زرع البالون التاجي بدقة عن طريق التصوير الرنيني (الايكو) من المهم جدا ان يكون المريض على علم بهذه المعلومات",
            open: false,
            show: false,

        },
        {
            number: "18",
            question: "سأخضع لعملية تغيير الصمام الأبهري، هل يحتمل أن أصاب بـ زرع القسطرة من الصمام الأبهري ؟",
            answer: "إن الاجابة على هذا السؤال تختلف من مشفى إلى أخرى و من دولة إلى أخرى،  العمليات بأسلوب  - ط أ ف إ - عملية مكلفة. في بعض الدول، لا تغطي شركات التأمين الصحي سوى  عمليات المرضى المعرضين لخطر كبير من الجراحة المفتوحة. و في بلدنا في بعض المستشفيات الجامعية / التدريبية، و فقط عندما تكون العملية الجراحية تشكل خطرا كبيرا على حياة المريض و هذا يكون استنادا إلى قرار مجلس الجامعة أو المستشفى يتم دفع نفقات العملية بدون جراحة. لكن إذا كان الوضع المادي للمريض يسمح باجراء هذا النوع من العمليات فمن الممكن القيام بذلك في المشافي الخاصة. كما أن عمر المريض مهم جدا هنا، لأن - ط أ ف إ - يحتوي على  غطاء بيولوجي و إن قابلية و هذا النوع من الأغطية تكون درجة تحمُّلها تكون أقل من قابلية تحمّل الأغطية الميكانيكية.لا ينصح بهذا النوع من العمليات لدى المرضى الذين تقل أعمارهم عن ٦٠  عامًا. باستثناء المرضى الذين يعانون من موضوع الشريان الأبهر المتكلس لدرجة كبيرة حيث تحمل العملية الجراحيّة مخاطرة كبيرة. الحالة الثانية، المرضى الذين يعانون من فقدان احدى شفاه الأبهر/ تسلخ الشريان الأبهر (بنية ثنائية الشفة) حيث يكون الجذر الأبهري متضخم للغاية. لدى هذا النوع من المرضى، تشكّل  - ط أ ف إ - إشكالية وقد يحتاج الأمر أيضًا إلى تغيير الشريان الأورطي/ الأبهري للمريض",
            open: false,
            show: false,

        },
        {
            number: "19",
            question: "لما يرتفع ضغط الدم؟ ",
            answer: "علاج مرض الربو أو الأدوية المضافة للمقاطع الصنعية المضافة للركبة و غيرها من المنتجات النباتية مثل (جينسينج - بانكس) و غيرها. ثانيا، الخلل في معدل استهلاك الملح لدى لمريض في الأيام الأخيرة  مهم أيضا هنا. فمثلا مواسم المخلل وشراب اللفت ومعجون الطماطم أو شراب عرق السوس المستهلك في بعض المناطق مواسم يرتفع فيها ضغط الدم. بالإضافة إلى ذلك غالبًا ما تحدث زيادات مفاجئة في ارتفاع ضغط الدم خلال الفترات الانتقالية الموسمية، وخاصة في فترات الشتاء القاسية عندما يبرد الطقس. كما يلاحظ أن معدل ضغط الدم يزداد خلال الفترات التي يعاني فيها المريض من التوتر والحزن والقلق. كما تسبب أورام الغدة الكظرية وأورام الغدد الصم التي تفرز بعض الهرمونات ارتفاع ضغط الدم المفاجئ والاحمرار وزيادة في خفقان القلب. لذلك  من الضروري إجراء تقييم دقيق للعامل الأساسي  في ارتفاع ضغط الدم و القيام بتثبيت السبب",
            open: false,
            show: false,

        },

        
    ],

    }
  },
  computed: {
      faqsList() {
                if(this.$i18n.locale === "tr") {
                return this.faqs;}else if (this.$i18n.locale === "en") {
                    return this.faqsEn;}else if(this.$i18n.locale === "ar"){
                        return this.faqsAr;
                    }
            }
        },

  
  methods: {
      toggleOpen(index) {
          this.faqsList = this.faqsList.map((faq, i) => {
              if (index === i) {
                  faq.open = !faq.open;
                  faq.show = !faq.show;
              } else {
                  
                  faq.show = false
              }
              return faq;   
          })
    
      },
     
  }
}
</script>

<style scoped>
* {
	box-sizing: border-box;
}
body {
	background-color: #EEE;
	font-family: sans-serif;
}
.faq {
  display: block;
  width: 100%;
  margin: 10px;
  padding: 5px;

  background-color: #FFF;
}
.faq .question {
  position: relative;
  padding-left: 5px ;
  padding-right:5px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right:40px;
  color: #3c3c3c;
  transition: all 0.4s linear;
}
.faq .question::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-20%) rotate(0deg);
  width: 30px;
  height: 30px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  
  transition: all 0.4s linear;
}
.faq.open .question {
  margin-bottom: 5px;
}
.faq.open .question::after {
  transform: translateY(-50%) rotate(0deg);
}
.faq .answer {
  color: #3c3c3c;
  font-size: 18px;
  padding-left: 30px;
  padding-right:40px;
  margin-right:40px;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.4s ease-out;
}
.faq.open .answer {
  opacity: 1;
  max-height: 2000px;
}
.slide-enter{
    opacity: 0;
}
.slide-enter-active{
    animation: slide-in 1s ease-out forwards;
    transition: opacity 0.5s;

}
.slide-leave{
    
}
.slide-leave-active{
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
}
@keyframes slide-in {
    from {
        transform: translateY(-20px);
        transform: rotate(-180deg)
    }
    to {
        transform: translateY(0);
    }
}
@keyframes slide-out {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(0px);
    }
}
    


</style>