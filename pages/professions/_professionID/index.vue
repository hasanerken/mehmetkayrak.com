<i18n>
{ "tr": {
    "text1" : "Bu konuyla ilgili olarak çok sayıdaki araştırmama",
    "text2" : "yayınlarım bağlantısından",
    "text3" : "ulaşabilirsiniz.",
    "text4" : "Yukarıda  bahsettiğim  araştırma  ve  yayınlarım  ise  aşağıda  yer  almaktadır:",
    "text5" : "Bu  alanda  yapmış  olduğum yayınların  listesine  erişmek  için  tıklayınız: ",
    "titleForMeta": "Kardiyoloji Alanındaki Uzmanlıklarım - Anjiyo, ekokardiyografi ve tüm teknikler...",
    "descriptionForMeta" : "Kalp ve damar hastalıkları alanında hastaların karşılaştığı sorunların çözümü...",
    "keywordsForMeta" : "kardiyoloji, kalp, hastalık, uzman, doktor"
},
"en": {
    "text1" : "You can access the scores of my researches on this topic at",
    "text2" : " 'my publications' ",
    "text3" : "link",
    "text4" : "My research and publications mentioned above are as follows:",
    "text5" : "To access the list of my publications in this field, please click here:",
    "titleForMeta": "My expertise in the field of cardiology - angiography, echocardiography and all techniques...",
    "descriptionForMeta" : "The solution of the problems faced by patients in the field of cardiovascular diseases ...",
    "keywordsForMeta" : "Cardiology, heart disease, expert, doctor"
},
"ar": {
    "text1" : "فيما يتعلق بهذا الموضوع تستطيعون الوصول إلى مقالاتي و بحوثي الكثيرة ",
    "text2" : "عن طريق هذا الرّابط  ",
    "text3" : " ",
    "text4" : "المقالات و الأبحاث التي تحدثت عنها سابقا متواجدة أدناه",
    "text5" : ": لتتمكنوا من الوصول إلى قائمة أبحاثي في هذا المجال اِنقروا ما يلي",
    "titleForMeta": "اختصاصاتي في مجال طب القلب – تصلب الشرايين -  تخطيط لضربات القلب و جميع التقنيات المتعلقة بهذه المواضيع",
    "descriptionForMeta" : "حل المشاكل التي تواجه مرضى القلب و الأوعية الدموية ",
    "keywordsForMeta" : "طب القلب، القلب، مرض، اختصاصي، طبيب دكتور "
}
}
</i18n>
<template>
  <section>
    <h1 class="text-2xl font-bold text-center block">{{fetchedProfessions[id-1].title.toLocaleUpperCase()}}</h1>
    <div class="items-center justify-center ml-6 mr-6 flex flex-col sm:flex-none sm:inline-block">
      <img :src="fetchedProfessions[id-1].imageUrl" :alt="fetchedProfessions[id-1].imageAlt" class="w-10/12 sm:w-4/12 sm:m-2 float-left ml-2 mr-2 m-2">
      <p class="text-justify md:text-xl">{{fetchedProfessions[id-1].summary}}</p>
      <p class="text-justify md:text-xl" v-html="fetchedProfessions[id-1].details">{{fetchedProfessions[id-1].details}}</p>

    </div>
    <div class="flex flex-col items-center justify-center m-10" v-for="(link, index) in fetchedProfessions[id-1].youtubes">
             <div >
              <iframe class="16/9" :src="fetchedProfessions[id-1].youtubes[index]" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </div>
               <br>
    </div>
    <div class="flex flex-col">
      <div>
        <p class="m-2 text-xl">{{$t('text1')}} <nuxt-link :to="localePath('publications')" class="text-blue-500"> {{$t('text2')}} </nuxt-link> {{$t('text3')}}
           {{$t('text4')}}</p>
          
        <ul>
        <li v-for="entry in selectedPubs">
          
          <div class="bg-gray-100 rounded p-1 m-1 text-left pl-3 m-3">
            <a :href="entry.pLink" target="_blank"><span class="font-bold text-blue-600 hover:text-gray-500 text-lg pt-2 pb-3"> {{ entry.title}}</span></a> <br>
            <span class="text-md">{{ entry.author}} </span><br>
            <span class="text-md font-medium">  {{ entry.year}} - {{entry.journal}} </span><br>
            <span class="text-sm">  {{ entry.cat1}} </span>
          </div>
          
        </li>
      </ul>
      </div>
      <div>
        <div @click="isOpen = !isOpen" class="flex flex-row items-center">
        <p class="text-xl bg-gray-100 hover:bg-blue-200 rounded-lg rounded-full pl-4 p-2 cursor-default" >{{$t('text5')}}</p><svg class="w-8 h-8 m-2 text-blue-400"> <font-awesome-icon :icon="['fas', 'book-reader']"/></svg>
        </div>
        <div v-if="isOpen">
              <ul v-for="entry in additionalPubs">
                
                    <li class="bg-gray-100 rounded p-1 m-1 text-left pl-3 m-3">
                      <span class="font-bold text-gray-900 text-lg pt-2 pb-3"> {{ entry.title}}</span><br>
                      <span class="text-md">{{ entry.author}} </span><br>
                      <span class="text-md font-medium">  {{ entry.year}} - {{entry.journal}} </span><br>
                      <span class="text-sm">  {{ entry.cat1}} </span>
                    </li>
               
        </ul>
        </div>
</div>
  </div>
  </section>
</template>

<script>
    export default { 
        scrollToTop: true,
        name: "index",
        computed: {
            fetchedProfessions() {
                 if(this.$i18n.locale === "tr") {
                return this.$store.state.professions.list;}else if (this.$i18n.locale === "en") {
                    return this.$store.state.professions.listEn;}else if(this.$i18n.locale === "ar"){
                        return this.$store.state.professions.listAr;
                    }
            
          },
            selectedPubs() {
                  return this.$store.state.publications.list.filter(item => {
                      return ( item.class2[0] === this.$route.params.professionID  && item.isProfession === true ) || ( item.class2[1] === this.$route.params.professionID  && item.isProfession === true )
              })

            },
            additionalPubs() {
              return this.$store.state.publications.list.filter(item => {
                      return ( item.class2[0] === this.$route.params.professionID) || ( item.class2[1] === this.$route.params.professionID)
              })
            },
        },
        data() {
            return {
                id: this.$route.params.professionID,
                isOpen: false
            }
        },
        head () {
            let profession = this.fetchedProfessions[this.$route.params.professionID-1]
            return {
                title: profession.title,
                meta: [
                    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                    { hid: 'description', name: 'description', content: profession.meta.content },
                    { hid: 'keywords', name: 'keywords', keywords: profession.meta.keywords }
                ]
            }
        }
    }

</script>

<style scoped>
  /*.iframe-container {
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
  }

  .iframe-container iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
*/



  iframe{
    width:90vw;
    height:33vh;
  }
  @media screen and (min-width: 480px) {
    iframe{
      width: 80vw;
      height:42vh;
    }
  }
  @media screen and (min-width: 800px) {
    iframe{
      width: 70vw;
      height:45vh;
    }
  }
  @media screen and (min-width: 1024px) {
    iframe{
      width: 60vw;
      height:48vh;
    }
  }
  @media screen and (min-width: 1024px) {
    iframe{
      width: 50vw;
      height:50vh;
    }
  }
 
 </style>
