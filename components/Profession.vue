<i18n>
{ "tr": {
    "text1" : "Devam"
},
"en": {
    "text1" : "Continue"
},
"ar": {
    "text1" : "واصل"
}
}
</i18n>
<template>
  <div class="">
    <div class="w-80 m-2 ">
      <div class="bg-indigo-100 flex flex-col items-center justify-center rounded-lg hover:bg-gray-500 hover:shadow-xl ">
        <h3 class="text-center text-sm sm:text-lg font-bold p-2">{{profession.title.toLocaleUpperCase()}}</h3>
        <img :src="profession.imageUrl" :alt="profession.imageAlt"  class="h-36 w-48 sm:h-48 sm:w-64 flex-shrink-0 p-2 rounded-full">
        <p class="m-4 text-left linelimit">{{profession.summary}}</p>
        <nuxt-link :to="localePath({name:'professions-professionID', params: {professionID: profession.fulltext} })" class="rounded-full bg-blue-200 hover:bg-blue-300 p-2 pl-4 pr-4 m-2">{{$t('text1')}}</nuxt-link>
      </div> 
    </div>
  </div>
</template>

<script>
    export default {
        name: "profession",

        props: {
            profession: {
                required: true,
                type: Object,
            }
        },

    }

</script>

<style scoped>
  .linelimit {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
  .h-fixed {
    height: 300px;
  }
  
  .w-80 {
    width: 14rem;
  }

  @media screen and (min-width: 480px) {
    .w-80{
      width: 18rem;
    }
  }

</style>
