<i18n>
{ "tr": {
  "mynews" : "HAKKIMDA YAPILAN HABERLER",
  "titleForMeta" : "Hakkımda Yayımlanmış Olan Haberler",
  "descriptionForMeta" : "Tedavi  ettiğim  kardiyoloji  hastalarıyla  ilgili  olarak  ulusal  basında  yer  alan  haberler...",
  "keywordsForMeta" : "konya, kardiyoloji, '112 yaşında kalp ameliyatı' "
},
"en": {
  "mynews" : "NEWS ABOUT ME",
  "titleForMeta" : "The Published News About Me",
  "descriptionForMeta" : "News in the national press about the cardiology patients I have treated ...",
  "keywordsForMeta" : "Konya, cardiology, ' heart surgery' a 112-year-old patient"
},
"ar": {
  "mynews": "ما كُتب حولي من أخبار",
  "titleForMeta" : "الأخبار التي تم نشرها عني",
  "descriptionForMeta" : "أخبار في الصحافة الوطنية تتعلق بمن عالجتهم  من مرضى أمراض القلب",
  "keywordsForMeta" : "كونيا، أمراض القلب، عملية قلب لشخص عمره 112 سنة"
}
}
</i18n>
<template>
    <div class="">
      <h1 class="text-2xl font-bold text-left ml-4 text-center mb-12">{{$t('mynews')}}</h1>
      <img style="display:block; margin-left:auto; margin-right:auto" class="rounded w-5/6 m-4 " src="@/static/images/haber1.png" alt="112 yaşındaki hastaya kalp ameliyatı | Sabah Gazetesi">
      <br>
      <img style="display:block; margin-left:auto; margin-right:auto" class="rounded w-5/6 m-4 " src="@/static/images/haber2.png" alt="Kapalı kalp ameliyetinda Konya'da bir ilk | Haberler.com">
      <br>
      <img style="display:block; margin-left:auto; margin-right:auto" class="rounded w-5/6 m-4 " src="@/static/images/haber3.png" alt="Adnan Tayfun'un annesi sağlığına kavuştu. | Haberler.com">
    </div>
</template>

<script>
    export default {
        name: "index",
        head () {
            return {
                title: this.$t('titleForMeta'),
                meta: [
                    { hid: 'description', name: 'description', content: this.$t('descriptionForMeta') },
                    { hid: 'keyword', name: 'keywords', content: this.$t('keywordsForMeta') },

                ]
            }
        }
    }
</script>

<style scoped>
</style>
