<i18n>
{ "tr": {
  "myresearch" : "YAPTIĞIM AKADEMİK ARAŞTIRMALAR",
  "bodyText" : "20 yıla varan akademik çalışmalarıma dair Uluslararası prestijli dergilerde araştırma makalelerim, vaka sunumlarım ve yazılarım yüzlerce kez yayımlanmıştır. Bugüne kadar yazmış olduğum makaleler 1500'den fazla atıf almıştır (başka  araştırmacılar  tarafından  okunup  kendi  makalelerinde  bahsetmeleri). Bu atıflarla H-endexi:19 ve i10-endeksi: 53 gibi oldukça yüksek seviyelere ulaşmıştır. Bu bile araştırmalarımızın bilim dünyasınca takip edildip dikkate alındığını göstermektedir. Ulusal tıp dergilerinde 30 civarında yayın, ulusal kongrelerde 50'den fazla sunumum mevcuttur. Ayrıca tıp fakültesinde verdiğim dersler ve seminerlerle de genç doktorlar ve kardiyologların yetişmesine katkıda bulundum. Son 3 yıldır özel sektörde çalışmakla birlikte kongre toplantı ve sempozyumlara aktif katılarak akademik gelişimimi devam ettirmekteyim.",
  "publication1" : "Yayımlanmış",
  "publication2" : "araştırmam bulunmaktadır.",
  "titleForMeta": "Yayımlanan  Makalelerim  ve  Diğer  Araştırmalarım",
  "allPubs" : "Tüm Yayınlar",
  "descriptionForMeta" : "Ulusal ve uluslararası alanda yayımlanmış olan makale, bildiri, kitap bölümü ve diğer sunumlarının tam listesine burada yer almaktadır.",
  "keywordsForMeta" : "akademik, araştırma, aritmi, miyokard, ekokardiyografi, koroner aniyografi"
},
"en": {
  "myresearch" : "MY ACADEMIC RESEARCHES",
  "bodyText" : "In the course of a 20-year-academic career, I have published more than 100 research articles, case presentations and papers in highly prestigious international journals. Those articles have received more than 1500 citations to date (i.e. mentioned by other researches in their articles). Thanks to those citations, H-index and i10- index have reached quite high levels, 19 and 53 respectively. This clearly shows that our researches have been followed and taken into consideration by the science world. I also have around 30 publications in national journals and more than 50 presentations in national congresses so as to support the development of national medicine. Likewise, I have contributed to the training of young doctors and cardiologists through lectures and seminars in the medical faculty. While I have been working in private sector for the last three years, I continue my academic development by actively participating in congresses, conventions, and symposiums.",
  "publication1" : "I have published",
  "publication2" : "researches",
  "allPubs" : "All Publications",
  "titleForMeta": "My Published Articles and Other Researches",
  "descriptionForMeta" : "A full list of articles, papers, book chapters and other presentations published nationally and internationally is brought into use here.",
  "keywordsForMeta" : "academy, research, arrhythmia, myocardy, echocardiography, coronary angiography"
},
"ar": {
  "myresearch": "منشورات و كتاباتي العلمية",
  "bodyText" : "تم نشر مقالاتي البحثية وعروضي عن الحالات الطبية التي قدمتها خلال دراساتي الأكاديمية التي تراوح ٢٠ عامًا مئات المرات في المجلات الدولية المرموقة.  وقد تم العطف إلى مقالاتي حتى الآن بأكثر من ١٥٠٠ استشهاد (قرأها باحثون آخرون وذكرت في مقالاتهم الخاصة).و قد وصلت هذه الاستشاهادات من قبيل مؤشّر   ‘ه’  إلى مستويات مرتفعة كثيراً كمؤشّر ١٩ و ١٠ و ٥٣ و هذا دليل على أن أبحاثنا تتبع وتؤخذ بعين الاعتبار من قبل عالم الأبحاث العلمية. لدي حوالي ٣٠ منشورًا في المجلّات الطبية الوطنية وأكثر من ٥٠ عرضًا تقديميًا في المؤتمرات العلمية. كما ساهمت من خلال المحاضرات و الندوات التي ألقيتها في كلية الطب في تدريب الأطباء الشباب وأطباء القلب. و خلال السنوات الثلاثة الأخيرة خلال في القطاع الخاص أواصل تطوير نفسي أكاديميا من خلال المشاركة بأنشطة في الاجتماعات والمؤتمرات والندوات المعقودة",
  "publication1" : "يوجد بحث قد تم نشره سابقاً",
  "publication2" : " ",
  "allPubs" : "جميع المنشورات",
  "titleForMeta": "تتواجد هنا قائمة كاملة للمقالات المحلية و الدولية المنشورة، بيانات، فصل من كتاب و غيرها من العروض المقدمة.",
  "descriptionForMeta" : "علمية، بحث، اضطراب ضربات القلب، عضلة القلب، تخطيط ضربات القلب، تصوير الأوعية التاجيّة",
  "keywordsForMeta" : "شهادة، جائزة، طب، صحّة، مُسابَقة، بيان، أفضل مُلَصق، طب القلب"
}
}
</i18n>
<template>
  <section>
    <h1 class="text-gray-900 text-left text-2xl font-bold pt-6 p-4 text-center">{{$t('myresearch')}}</h1>
    <div class="flex flex-wrap  justify-center">
      <div class="w-10/12 lg:w-5/12 m-2"><img src="@/static/images/mk-reading.jpeg" alt="Araştırmalarım" class="rounded-lg object-fit"></div>
      <div class="w-10/12 lg:w-5/12 m-2 text-justify"><p class="text-lg"> {{$t('bodyText')}} </p></div>
    </div>
<div class="flex flex-col">
      <!-- <input v-model="filterText"  placeholder=" Arama ... " class="border-2 border-indigo-100 float-left m-3 ml-10 rounded"> -->
    <div class="bg-white bg-gray-100 rounded">

      <button v-model="filter" @click="filter = 'All'" class="bg-indigo-100 m-3 p-1 pl-3 pr-3  rounded-full text-gray-900 font-semibold text-xs hover:bg-blue-400 hover:text-black"> {{$t('allPubs')}}</button>
      <button
        v-for="(entry, index) in filterList"
        :item="entry[0]"
        :key="index"
        @click="filter = entry[0]; "
        class="bg-indigo-100 m-3 p-1 pl-3 pr-3 rounded-full text-gray-900 font-semibold text-xs hover:bg-blue-200 hover:text-black"
      >
      <ul>
      <li v-if="$i18n.locale === 'tr'">{{entry[0]}}</li>
      <li v-if="$i18n.locale === 'en'">{{entry[1]}}</li>
      <li v-if="$i18n.locale === 'ar'">{{entry[2]}}</li>

      </ul>  
      

      </button>

      <br>
      <div class="m-4 ml-12">
            <p>  {{$t('publication1')}} <span class="text-red-600 font-bold" >{{selectedPublications.length}} </span> {{$t('publication2')}} </p>
      </div>
      
    </div>
</div>
        
      <div>
        <ul>
           <li
            v-for="(entry, index) in selectedPublications"
            :item="entry"
            :key="index"
          >

            <div class="bg-blue-100 rounded p-1 m-1 text-left pl-3 m-3 flex flex-row shadow">
             <div class="roundedFlag rounded-full" :style="{'background-color': selectedColor(entry)}">
             </div>
              <div>
                <h2 class="font-bold text-lg p-1"> {{++index}}.  {{ entry.title}}</h2>
                <p class="text-md p-1">{{ entry.author}} </p>
                <p class="text-md font-medium p-1">  {{ entry.year}} - {{entry.journal}} </p>
                <p class="text-sm p-1">  {{ entry.cat1}}  </p>              
              </div>
            </div>         
          </li>
        </ul>
      </div>
  </section>





</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                filterText: '',
                fkey: "class1",
                filterList: {
                  "1" : ["Aritmiler", 'Arrhythmias', 'عدم انتظام ضربات القلب'],
                  "2" : ['Diğer', 'Other', 'غيرها'],
                  "3" : ['Doğumsal Kalp Hastalıkları', 'Congenital Heart Diseases', 'أمراض القلب الخلقية'],
                  "4": ['Eko-kardiyografi', 'Echocardiography', 'تخطيط ضربات القلب'],
                  "5" : ['Hipertansiyon', 'Hypertension', 'ارتفاع ضغط الدّم'],
                  "6" : ['Kalp Kapak Hastalıkları', 'Heart Valve Diseases', 'أمراض صمام القلب'],
                  "7" : ['Kalp Pilleri  - Şoklama Cihazı', 'Pacemaker - Shock Device', 'بطّاريات القلب- و أجهزة الإنعاش'],
                  "8" : ['Kalp Yetersizliği', 'Heart Failure', 'قصور القلب'],
                  "9" : ['Karotis Arter Hastalığı', 'Carotid Artery Disease', 'أمراض الشريان الأبهر'],
                  "10" : ['Koroner Anjiyografi Stent', 'Coronary Angiography Stent', 'الأوعية التاجية و الدعامات'],
                  "11" : ['Koroner Arter Hastalığı', 'Coronary Artery Disease', 'أمراض الشريان التاجي'],
                  "12" : ['Miyokard Infarktüs', 'Myocardial Infarction', 'الذبحة القلبية'],
                  "13" : ['Pulmoner Emboli', 'Pulmonary Embolism', 'الجلطة الرئوية'],
                  "14" : ['Pulmoner Hipertansiyon', 'Pulmonary Hypertension', 'ارتفاع ضغط الدم الرئوي']
                },
                filter: "All",
                filterNo: 0

            }
        },
        head () {
            return {
                title: this.$t('titleForMeta'),
                meta: [
                    { hid: 'description', name: 'description', content: this.$t('descriptionForMeta') },
                    { hid: 'keyword', name: 'keywords', content: this.$t('keywordsForMeta') },

                ]
            }
        },
        computed: {
          filtereddPublications() {
            return this.$store.state.publications.list.filter(item => {
                    return item.title.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1
                })
            },
          selectedPublications: function() {
              var vm = this;
              var classType = vm.filter;
                
                if(classType === "All"){
                  return vm.$store.state.publications.list;
                } else {
                  return vm.$store.state.publications.list.filter(function(entry) {
                    return entry.class1[2] === classType || entry.class1[1] === classType || entry.class1[0] === classType
                }

                
                  )}
          }
        },
        methods: {
          selectedColor(entry) {
            if(entry.catNo === "1"){
              return "brown"    
            }else if(entry.catNo === "2"){
              return "blue"    
            }else if(entry.catNo === "3"){
              return "darkkhaki"    
            }else if(entry.catNo === "4"){
              return "greenyellow"    
            }else if(entry.catNo === "5"){
              return "hotpink"    
            }else if(entry.catNo === "6"){
              return "indigo"    
          } else {
              return "black"    
            }
          }
        }
  }
</script>

<style scoped>

.roundedFlag {
  width: 10px;
  height: 10px;
  min-width: 10px;
  min-height: 10px;
  margin-top: 12px;
}

</style>


