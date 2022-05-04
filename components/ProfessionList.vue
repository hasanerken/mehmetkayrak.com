<template>
  <section>
  <div class="hidden sm:flex sm:flex-wrap sm:justify-center">
    <Profession
      :profession="profession"
      v-for="profession in professions"
      :key="profession.fulltext"
    />
  </div>
  <div class="sm:hidden">

    <div class="scrolling-wrapper-flexbox">
   
        <Profession
        :profession="profession"
        v-for="profession in professions"
        :key="profession.fulltext"
        class="rolling"
        
      />
      
      </div>
    </div>
  
  
  </section>

</template>

<script>
    import Profession from "@/components/Profession";
    export default {
        name: "ProfessionList",
        components: {Profession},
        props: {
            professions: {
                required: true,
                type: Array,

            }
        }
    }
</script>

<style scoped>


  .scrolling-wrapper-flexbox {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }

/* .rolling {
  position: relative;
  padding: 5px 0 5px 5px;
  animation: animate 80s linear infinite alternate-reverse;
}
#square:hover{
  -webkit-animation-play-state:paused;
  -moz-animation-play-state:paused;
  -o-animation-play-state:paused;
  animation-play-state:paused;
  cursor: pointer;
}

@keyframes animate {
  0% {
    transform: translateX(-1100%)
  }
  100% {
    transform: translateX(20%)
  }  
}
 */
</style>
