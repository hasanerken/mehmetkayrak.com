<i18n>
{ "tr": {
  "h1" : "Doç. Dr. Mehmet KAYRAK Kimdir?",
  "titleForMeta" : "Doç. Dr. Mehmet KAYRAK | Kardiyoloji Uzmanı",
  "descriptionForMeta" : "Kardiyoloji Uzmanı Doç. Dr. Mehmet KAYRAK'ın kalp ve damar hastalıkları alanındaki tecrübelerini ve  araştırmalarını paylaştığı sitedir.",
  "keywordsForMeta" : "kalp, damar, koroner, anjiyografi, 'kalp yetersizliği', kriz, hastalık, hastane, özel, uzman, kardiyolog, doktor"
},
"en": {
  "h1" : "Who is Assoc. Prof. Mehmet KAYRAK?",
  "titleForMeta" : "Assoc. Prof. Dr. Mehmet KAYRAK | Cardiologist",
  "descriptionForMeta" : "Cardiologist Assoc. Prof. Dr. Mehmet KAYRAK shares his expertise and researches in cardiovascular diseases in this site",
  "keywordsForMeta" : "hearth, valve, cardiology, cardiovascular, angiography, coronary, 'hearth failure', 'hearth attack', disease, hospital, special, private, expert, cardiologist, doctor "
},
"ar": {
  "h1": "من هو الدكتور محمد كايراك؟",
  "titleForMeta" : "الاستاذ الدكتور محمد كايراك هو اختصاصي أمراض القلب",
  "descriptionForMeta" : "الموقع الالكتروني الذي ينشر فيه الأستاذ الدكتور محمد كايراك تجاربه و بحوثه في مجال أمراض القلب و الأوعية الدموية",
  "keywordsForMeta" : "القلب، الأوعية الدموية، الأوعية التاجية و تصوير الأوعية التاجية، قصور القلب، الأزمة، المرض، المستشفى، خاص، مختص، طبيب أمراض القلب، طبيب    "
}
}
</i18n>

<template>
<main>
<div class="hidden xl:flex flex-row">
   
  <div class="w-full h-full">  
    <figure>
         <div class="">
        <img src="@/static/images/intro.jpeg" alt="Ameliyathane" title="Ameliyathane'den Bir Kare" class="mt-10 object-cover rounded-r-lg ">
      </div>
    <figcaption>
        <p v-if="$i18n.locale === 'tr'" class="font-bold xlcaption" style="font-size:2vw" >{{selectedQuoteTr}}</p>
        <p v-if="$i18n.locale === 'en'" class="font-bold" style="font-size:2vw" >{{selectedQuoteEn}}</p>
        <p v-if="$i18n.locale === 'ar'" class="font-bold" style="font-size:2vw" >{{selectedQuoteAr}}</p>

   </figcaption>
   
    </figure></div>

     <div class="w-full h-full m-4">
        <h1 id="myresume" class="font-semibold md:text-2xl lg:text-xl p-4">{{$t('h1')}}</h1>
        <p v-if="$i18n.locale === 'tr'" class="p-2 text-justify md:text-lg lg:text-xl">{{ resumeTr1 }}</p>
        <p v-if="$i18n.locale === 'tr'" class="p-2 text-justify md:text-lg lg:text-xl">{{ resumeTr2 }}</p>
        <p v-if="$i18n.locale === 'tr'" class="p-2 text-justify md:text-lg lg:text-xl">{{ resumeTr3 }}</p>
        <p v-if="$i18n.locale === 'en'" class="p-2 text-justify md:text-lg lg:text-xl">{{ resumeEn1 }}</p>
        <p v-if="$i18n.locale === 'en'" class="p-2 text-justify md:text-lg lg:text-xl">{{ resumeEn2 }}</p>
        <p v-if="$i18n.locale === 'en'" class="p-2 text-justify md:text-lg lg:text-xl">{{ resumeEn3 }}</p>
        <p v-if="$i18n.locale === 'ar'" class="p-2 text-justify md:text-lg lg:text-xl">{{ resumeAr1 }}</p>
        <p v-if="$i18n.locale === 'ar'" class="p-2 text-justify md:text-lg lg:text-xl">{{ resumeAr2 }}</p>
        <p v-if="$i18n.locale === 'ar'" class="p-2 text-justify md:text-lg lg:text-xl">{{ resumeAr3 }}</p>

    </div>

  

</div>




  <div class="flex flex-col xl:hidden">
        <figure>
    <figcaption>
        <p v-if="$i18n.locale === 'tr'" class="font-bold" style="font-size:4vw" >{{selectedQuoteTr}}</p>
        <p v-if="$i18n.locale === 'en'" class="font-bold" style="font-size:4vw" >{{selectedQuoteEn}}</p>
        <p v-if="$i18n.locale === 'ar'" class="font-bold" style="font-size:4vw" >{{selectedQuoteAr}}</p>

   </figcaption>
      <div class="w-screen">
        <img src="@/static/images/intro.jpeg" alt="Ameliyathane" title="Ameliyathane'den Bir Kare" class="object-cover">
      </div>
    </figure>

    <h1 id="myresume" class="font-semibold md:text-3xl lg:text-2xl p-4">{{$t('h1')}}</h1>
    <div class="flex">
      <div class="md:w-4/12 ml-6 mr-6 hidden md:flex md:rounded-full image-adjust">
        <img src="@/static/images/mk-body.jpg"  class="sm:h-36 object-fit" alt="Doç. Dr. Mehmet KAYRAK">
      </div>
      <div class="md:w-8/12 ml-10 mr-10">
        <p v-if="$i18n.locale === 'tr'" class="p-2 text-justify md:text-lg lg:text-xl">{{ resumeTr1 }}</p>
        <p v-if="$i18n.locale === 'tr'" class="p-2 text-justify md:text-lg lg:text-xl">{{ resumeTr2 }}</p>
        <p v-if="$i18n.locale === 'tr'" class="p-2 text-justify md:text-lg lg:text-xl">{{ resumeTr3 }}</p>
        <p v-if="$i18n.locale === 'en'" class="p-2 text-justify md:text-lg lg:text-xl">{{ resumeEn1 }}</p>
        <p v-if="$i18n.locale === 'en'" class="p-2 text-justify md:text-lg lg:text-xl">{{ resumeEn2 }}</p>
        <p v-if="$i18n.locale === 'en'" class="p-2 text-justify md:text-lg lg:text-xl">{{ resumeEn3 }}</p>
        <p v-if="$i18n.locale === 'ar'" class="p-2 text-justify md:text-lg lg:text-xl">{{ resumeAr1 }}</p>
        <p v-if="$i18n.locale === 'ar'" class="p-2 text-justify md:text-lg lg:text-xl">{{ resumeAr2 }}</p>
        <p v-if="$i18n.locale === 'ar'" class="p-2 text-justify md:text-lg lg:text-xl">{{ resumeAr3 }}</p>

      </div>

    </div>

  </div>
  </main>
</template>

<script>


export default {
        components: {
         
        },
        head () {
            return {
                title: this.$t('titleForMeta'),
                meta: [
                    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                    { hid: 'description', name: 'description', content: this.$t('descriptionForMeta') },
                    { hid: 'keyword', name: 'keywords', content: this.$t('keywordsForMeta') },

                ]
            }
        },

        data() {
            return {
                quotes: [
                    'Günlük 4 km yürüyüş kalp krizi riskini %40 oranında azaltmaktadır.',
                    '50 yaş üstü her iki kişiden birinde yüksek tansiyon olduğunu biliyor musunuz?',
                    'Günlük karbonhidrat  ve yağ tüketimini azaltın!',
                    'Strese karşı; fiziksel aktivite ve dengeli beslenme ile mücadele edin!',
                    '\n \n Sağlıklı bir kalp için daha fazla hareket...',
                    'Porsiyonları küçültme vakti! Küçük tabaklar sağlıklı kalpler :)',
                    'Şeker hastalığı hepimizi tehdit ediyor, insülin direncinize baktırdınız mı?',
                    'Ailenizde kalp damar tıkanıklığı hikâyesi sizin için en güçlü risk göstergesidir.',
                    'Kalp hastalıklarından değil, teşhiste gecikmekten korkun, erken teşhis hayat kurtarır.',
                    'Her yıl kolesterolünüzü ölçtürmeyi unutmayın!'
                ],
                selectedQuoteTr: '',
                quotesEn: [
                    'Walking 4 km per day reduces the risk of heart attack by 40 %.',
                    'Do you know that every other person over the age of 50 has high blood pressure?',
                    'Reduce to consume carbohydrates and fats in diet!',
                    'Physical activity and a balanced diet are key for the fight against stress',
                    'More physical activity for healthier hearts ...',
                    'Time to reduce serving size! Small portions for healthy hearts :)',
                    'Diabetes threatens all of us; have you got your insulin resistance checked?',
                    'History of cardiovascular disease in your family is the strongest risk factor for you.',
                    'Do not fear heart diseases but to be late; early diagnosis saves live.',
                    'Do not forget to have your annual cholesterol measured!'

                ],
                selectedQuoteEn: '',
                quotesAr: [
                    "من الممكن و عن طريق المشي يومياً مايقارب الـ 4 كم التخفيف من خطر التعرض لنوبة قلبية بنسبة 40% ",
                    "هل تعلمون أن كل واحد من اثنين من الأشخاص الذين تجاوزوا  عمر الخمسين يعاني من ارتفاع ضغط الدّم",
                    "قللوا من الاستهلاك اليومي للنشويات و الدهون",
                    "حاربوا للتوتر و الاجهاد بواسطة النشاطات الجسدية و التغذية المتوازنة",
                    "لأجل الحصول على قلب سليم قوموا بالحركة أكثر",
                    "هذا وقت تضغير حجم الوجبات! وجبات صغيرة و قلوب سليمة",
                    "إنّ مرضَ السُّكّري يهددُنا جميعا، هل قمتم بقياس درجة مقاومة الأنسلين لديكم",
                    "إن كان في عائلتكم مشكلة انسداد شرايين القلب و الأوعية الدموية علامة على أنكم تحت خطر كبير للإصابة بنفس المرض",
                    "لا تقلقوا من الإصابة بمرض القلب و إنما خافوا من القيام بالتشخيص المبكّر، فإن التشخيص المبكر يُنقذ حياتكم",
                    'لا تنسوا قياس نسبة الكوليسترول في الدم كل سنة'
                ],
                selectedQuoteAr: '',

                resumeTr1: '2000 yılında Ege Üniversitesi Tıp Fakültesini bitirdim. 2005 yılında Kardiyoloji  ihtisasımı Selçuk Üniversitesinde tamamladım. 2016 yılında Avrupanın en büyük pulmoner hipertansiyon merkezi olan Bologna Üniversitesi (Italya) bünyesinde Pulmoner Hipertansiyon (akciğer damar tansiyonu) üzerine master eğitimi aldım.',
                resumeTr2: '2005-2019 yılları arasında girişimsel kardiyoloji alanında, akut miyokard infarktüsü (kalp krizi) hastalarına balon/stent tedavisiyle yüzlerce basarılı operasyon gerçekleştirdim. poliklinikten gelen bifurkasyon (çatal lezyonu), CTO (kronik tam tıkalı damar), Bypass greft lezyonlarına müdahale, doğuştan kalp deliklerini kapatılması (ASD, PDA, VSD), kalp pilleri, şoklama cihazlarının takılması, karotis arter (şah damarı) ve bacak damarlarının açılması gibi kompleks girişimlerde yüzlerce başarılı operasyon gerçekleştirdim. Ayrıca Kalp kapak hastalarının tedavisinde peruktan aort kapak replasmanı (TAVI) ve mitral kapağın balonla genişletilmesi gibi operasyonları da defalarca gerçekleştirdim. Dirençli tansiyon hastalarında böbrek damarı anjiyosu, renal artere stent (böbrek damarının açılması) ve renal denervasyon (böbrek sinirin yakılması)  gibi vaka bazlı deneyimim mevcuttur.',
                resumeTr3: '112 yaşında bir hastaya kalp krizi sırasında başarılı müdahale ederek tedavisini tamamladım. Bu vaka ile şu ana kadar bildirilen en yaşlı kalp krizi hastasına başarılı müdahale olarak literatüre geçtim.',
                
                resumeEn1: ' In 2000, I graduated from the Faculty of Medicine of Ege University. In 2005, I completed my specialization in the field ‘Cardiology’ at the Selcuk University. In 2016, I had my masters degree on the field of ‘Pulmonary Hypertension’ at the University of Bologna (Italy), the top pulmonary hypertension centre in Europe.',
                resumeEn2: 'Between 2005-2019, I have implemented many complex interventions in the field of interventional cardiology including hundreds of successful balloon/stent placement operations for patients with acute myocardial infarction (heart attack), bifurcation cases from polyclinics, chronic total occlusion cases, intervening to bypass graft lesions, closing of congenital heart holes (ASD, PDA, VSD), pacemaker implantations, implantation of shock devices (ICD) and treating carotid artery (carotid artery) and leg arteries. Moreover, I carried out many operations of “aortic valve replacements (TAVR)” and “mitral balloon valvuloplasty (MBV)” in treating patients with valvular heart disease. In addition, I have a case-based experience in patients with resistant blood pressure, such as renal artery angiography, stenting of the renal artery (opening renal arteries), and renal denervation. ',
                resumeEn3: 'Thanks to a successful intervention which I performed over a 112-year-old patient during a heart attack, I made the news in the national press. I also published the case in a highly prestigious European Journal in that field and I passed into literature as the successful intervention to the oldest patient with heart attack known. ',

                resumeAr1: "أنهيت دراستي في كلية الطب في جامعة ايجة هام ٢٠٠٠. و قد أتممت تخصصي في أمراض القلب في جامعة سلجوق عام ٢٠٠٥. وقد قمت في عام ٢٠١٦ بدراسة الماجستير في مجال ارتفاع ضغط الدم الرئوي في جامعة بولونيا  الإيطالية التي تعد من أكبرِ مراكز دراسة ارتفاع ضغط الدم في أوروبا",
                resumeAr2: "و ما بين عامي ٢٠٠٥-٢٠١٩   قمت بإجراء مئات من العمليات الناجحة في مجال أمراض القلب التداخلية و كذلك عن طريق استخدام بالون/ الدعامات قمت بمعالجة المرضى الذين يعانون من بدايات النوبة القلبية. و قمت بإجراء المئات من العمليات الناجحة للمرضى المصابين بالأمراض القلبية الوعائية القادمين من عيادات خارجية و (س.ط.أ.) الانسداد الكلي المزمن في الأوعية الدموية وسفنص فين غرفة لسنس-  جراحة ترقيع الشرايين التاجيّة و (أ.ص.د.- ب.د.أ.- ف.ص.د.) عمليات سد فتحات القلب الولادية (الخلقية) و زرع بطاريات القلب و تركيب أجهزة الصدمة الكهربائية و فتح الشريان و شرايين الساق و غيرها من العمليات التي تحتاج إلى تدخلات معقدة.لقد أجريت أيضًا العديد من العمليات لاستبدال الصمام الأبهري الباروكة (ط.أ.ف.إ.) وتوسيع بالون الصمام التاجي في علاج مرضى صمام القلب و كذلك زرع قسطرة شريان لعلاج ارتفاع ضغط الدم المقاوم و الدعامات للشريان الكلوي (فتح الأوعية الدموية الكلوية) و حرق الأعصاب الكلوية التي تلعب دورا في ارتفاع ضغط الدم و غيرها من التجارب و ما يشابهها من العمليات",
                resumeAr3: "و قد نجحت بعلاج مريض عمره ١١٢  سنة كان يعاني من نوبة قلبية عن طريق تدخل ناجح  تمَّ خلاله انقاذ حياته.  و قد سُجّلت هذه الحادثة كتدخل ناجح لأكبر مريض (الأكبر سنّاً) خلال إصابته بالنوبة القلبية",
                
            }
        },
        created() {
            const idx = Math.floor(Math.random() * this.quotes.length);
            this.selectedQuoteTr = this.quotes[idx];
            this.selectedQuoteEn = this.quotesEn[idx];
            this.selectedQuoteAr = this.quotesAr[idx]
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
[v-cloak] {
  display: none;
}
  figure {
    position: relative;
  }
  figure img {
    display: block;
    width: 100%;
    height: auto;
  }
  figcaption {
    font-family: "Futura", "Trebuchet MS", Arial, sans-serif;
    text-shadow: #e3fffd 10px 0 10px;
    padding-left: 60%;
    padding-right: 5%;
    padding-top: 5%;
    position: absolute;
    top: 0;
    bottom: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  figcaption .xlcaption {
     padding-left: 0%;
    padding-right: 20%;
    padding-top: 5%;
  }


  .image-adjust {
    position: relative;
    padding-bottom: 30%;
    height: 0;
    overflow: hidden;
  }
  .image-adjust img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
  quote {
    font-size: calc(10vw + 10vh + 10vmin);
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
