<i18n>
{ "tr": {
  "home": "Ana Sayfa",
  "prof": "Uzmanlık",
  "news": "Haberler",
  "pubs": "Yayınlar",
  "cert": "Sertifikalar",
  "faqs": "Sık Sorulanlar",
  "cont": "İletişim",
  "mk": "Doç. Dr. Mehmet KAYRAK",
  "karduz": "Kardiyoloji Uzmanı"

},
"en": {
  "home": "Home Page",
  "prof": "Profession",
  "news": "News",
  "pubs": "Publications",
  "cert": "Certificates",
  "faqs": "Frequently Asked",
  "cont": "Contact",
  "mk": "Assoc. Prof. Mehmet KAYRAK",
  "karduz": "Cardiologist"


},
"ar": {
  "home": "الصفحة الرئيسية",
  "prof": "الاختصاصات",
  "news": "أخبار",
  "pubs": "المنشورات",
  "cert": "شهادات",
  "faqs": "الأسئلة المتكررة",
  "cont": "اتصل",
  "mk": "الاستاذ الدكتور محمد كايراك ",
  "karduz": "طبيب أمراض القلب"

}
}
</i18n>


<template>

    
  <div class="h-24">
    <div class="flex flex-row right-0 top-0 z-50 absolute sm:flex-row text-gray-700 text-xs sm:text-sm ml-1 mr-1 items-center">
        <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')" class="mr-1">English</nuxt-link>
        <nuxt-link v-if="$i18n.locale !== 'tr'" :to="switchLocalePath('tr')" class="mr-1">Türkçe</nuxt-link>
        <nuxt-link v-if="$i18n.locale !== 'ar'" :to="switchLocalePath('ar')" class="mr-1">عربى</nuxt-link>
      </div>
    
    <div
      class="navbar w-screen fixed z-30 pt-2 left-0 md:flex sm:justify-between bg-white"
      :class="{ 'navbar--hidden': !showNavbar }">
      

      <div class="flex items-center justify-between">
        <nuxt-link :to="localePath('about')">
        <div class="flex flex-row items-center text-center">
          <img class="h-16 rounded-full"  src="../static/images/mklogo.jpg" alt="Doç. Dr. Mehmet KAYRAK" title="Doç. Dr. Mehmet KAYRAK">
          <p class="p-2 text-md font-semibold"> {{ $t('mk') }} <br> {{$t('karduz')}}</p>
        </div>
        </nuxt-link>
        <div class="md:hidden m-4">
          <button ref="button" @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-indigo-400 hover:outline-none">
            <svg class="h-6 w-6 fill-current">
              <font-awesome-icon :icon="['fa', 'bars']" v-if="!isOpen"/>
              <font-awesome-icon :icon="['fa', 'times']" v-if="isOpen"/>
            </svg>

          </button>

        </div>
       

      </div>
      

<div class="flex flex-col">
       

      <div :class="isOpen ? 'block' : 'hidden'"
           class="popup-box bg-white pt-4 pb-2 pl-2 text-sm md:text-md  lg:text-lg text-center md:flex"
           v-closable="{ exclude: ['button'], handler:'onClose'}">

        <ul class="md:flex md:flex-row mr-3">
          <li @click="onClose"><nuxt-link :to="localePath('about')" class="font-semibold md:pt-6 block no-underline hover:text-blue-800 border-b-2 hover:bg-blue-100 md:hover:bg-white border-white md:hover:border-blue-500 p-2">{{$t('home')}}</nuxt-link></li>
          <li @click="onClose"><nuxt-link :to="localePath('professions')" class="font-semibold md:pt-6 block no-underline hover:text-blue-800 border-b-2 hover:bg-blue-100 md:hover:bg-white border-white md:hover:border-blue-500 p-2">{{$t('prof')}}</nuxt-link></li>
          <li @click="onClose"><nuxt-link :to="localePath('news')" class="font-semibold md:pt-6 block no-underline hover:text-blue-800 border-b-2 hover:bg-blue-100 md:hover:bg-white border-white md:hover:border-blue-500 p-2">{{$t('news')}}</nuxt-link></li>
          <li @click="onClose"><nuxt-link :to="localePath({ name: 'publications', params: { reload: true }})" class="font-semibold md:pt-6 block no-underline hover:text-blue-800 border-b-2 hover:bg-blue-100 md:hover:bg-white border-white md:hover:border-blue-500 p-2">{{$t('pubs')}}</nuxt-link></li>
          <li @click="onClose"><nuxt-link :to="localePath('certificates')" class="font-semibold md:pt-6 block no-underline hover:text-blue-800 border-b-2 hover:bg-blue-100 md:hover:bg-white border-white md:hover:border-blue-500 p-2">{{$t('cert')}}</nuxt-link></li>
          <li @click="onClose"><nuxt-link :to="localePath('questions')" class="font-semibold md:pt-6 block no-underline hover:text-blue-800 border-b-2 hover:bg-blue-100 md:hover:bg-white border-white md:hover:border-blue-500 p-2">{{$t('faqs')}}</nuxt-link></li>

          <li @click="onClose"><a href="#" v-scroll-to="'#socialmedia'" class="font-semibold md:pt-6 block no-underline hover:text-blue-800 border-b-2 hover:bg-blue-100 md:hover:bg-white border-white md:hover:border-blue-500 p-2">{{$t('cont')}}</a></li>
        </ul>
      </div>

    </div>
     
    </div>
    
      
  </div>
  

 </template>

<script>

    export default {
        name: "Header.vue",
        data () {
            return {
                showNavbar: true,
                lastScrollPosition: 0,
                isOpen : false,
            }
        },
        mounted () {
            window.addEventListener('scroll', this.onScroll)
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.onScroll)
        },
        methods: {
            onClose () {
                this.isOpen = false
            },
            onScroll () {
                const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
                if (currentScrollPosition < 0) {
                    return
                }
                // Stop executing this function if the difference between
                // current scroll position and last scroll position is less than some offset
                if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
                    return
                }
                this.showNavbar = currentScrollPosition < this.lastScrollPosition
                this.lastScrollPosition = currentScrollPosition
            },
        }


    }
</script>

<style scoped>
  body {
    background-color: #212121;
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
  p.a {
    white-space: nowrap;
  }

  .navbar {
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
  }
  .navbar.navbar--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
  }


</style>
