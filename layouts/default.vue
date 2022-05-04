<template>
  <div :class="{'html-ar': $i18n.locale === 'ar' }">

    <Header/>
   <transition name="view">
     <nuxt></nuxt>
   </transition>
    <Footer/>
  </div>
</template>

<style>
  html {
  font-family: "Cabin", sans-serif;

  color: #2D3748;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.html-ar {
  font-family: "Mirza", "" cursive;

  color: #2D3748;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

  .view-enter-active, .view-leave-active {
    transition: opacity 0.5s ease-in-out, transform 0.5s ease;
  }
  .view-enter-active {
    transition-delay: 0.5s;
  }
  .view-enter {
    opacity: 0;
    transform: translateY(-100px);
  }
  .view-enter-to {
    opacity: 1;
    transform: translateY(0px);
  }
  .view-leave {
    opacity: 1;
    transform: translateY(0px);
  }
  .view-leave-to {
    opacity: 0;
    transform: translateY(100px);
  }

</style>
<script>
    import Header from "@/components/Header.vue"
    import Footer from "@/components/Footer.vue"
    export default {
        transition: "default",
        components: {
            Header,
            Footer
        },
        head() {
            return {
                link: [
                    {
                        rel: 'canonical',
                        href: 'http://www.mehmetkayrak.com' + this.$route.path,
                    },
                ],
                htmlAttrs: {
                    lang: 'tr'
                },
            }
        },
    }
</script>
