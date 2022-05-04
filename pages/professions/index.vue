<i18n>
{ "tr": {
    "kard" : "KARDİYOLOJİ ALANINDAKİ UZMANLIKLARIM",
    "subHeading1" : "Kardiyoloji alanında uzmanlığım olan alanlara ilişkin detaylara, konularına göre aşağıdan ulaşabilirsiniz.",
    "titleForMeta": "Kardiyoloji Alanındaki Uzmanlıklarım - Anjiyo, ekokardiyografi ve tüm teknikler...",
    "descriptionForMeta" : "Kalp ve damar hastalıkları alanında hastaların karşılaştığı sorunların çözümü...",
    "keywordsForMeta" : "kardiyoloji, kalp, hastalık, uzman, doktor"
},
"en": {
    "kard" : "MY EXPERTISE IN CARDIOLOGY",
    "subHeading1" : "You can review the details of my areas of specialisation in the field of cardiology herein after.",
    "titleForMeta": "My expertise in the field of cardiology - angiography, echocardiography and all techniques...",
    "descriptionForMeta" : "The solution of the problems faced by patients in the field of cardiovascular diseases ...",
    "keywordsForMeta" : "Cardiology, heart disease, expert, doctor"
},
"ar": {
    "kard": "تخصّصاتي مجال طب القلب",
    "subHeading1" : "يمكنكم الوصول إلى التفاصيل بخصوص مجالات تخصصي و بحسب المواضيع من خلال ما يلي ",
    "titleForMeta": "تخصصاتي في مجال طب القلب– تصوير الشرايين، تخطيط لضربات القلب و جميع التقنيات المتعلقة بالقلب",
    "descriptionForMeta" : "حل المشاكل التي تواجه مرضى القلب و الأوعية الدموية",
    "keywordsForMeta" : "طب القلب , اختصاصي , طبيب , دكتور "

}
}
</i18n>
<template>
  <section>
    <h1 class="text-gray-900 text-left text-2xl font-bold pt-6 p-4 text-center">{{$t('kard')}}</h1>
    <div class="w-screen">
        <img src="@/static/images/profession.jpg" alt="Uzmanlıklar" class="object-cover">
      </div>
   
    <h2 class="text-xl m-2 mt-10 mb-10">{{$t('subHeading1')}}</h2>
    <div class="flex flex-wrap items-center justify-center">        
    </div>

    <ProfessionList :professions="professionList"/>

  </section>
</template>

<script>
    import ProfessionList from "@/components/ProfessionList";
    export default {
        name: "index",
        components: {
            ProfessionList
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
        computed: {
            professionList() {
                if(this.$i18n.locale === "tr") {
                return this.$store.state.professions.list;}else if (this.$i18n.locale === "en") {
                    return this.$store.state.professions.listEn;}else if(this.$i18n.locale === "ar"){
                        return this.$store.state.professions.listAr;
                    }
            }
        },
       
    }
</script>


<style scoped>

 
</style>
