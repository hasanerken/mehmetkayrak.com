<i18n>
{ "tr": {
  "map" : "Harita",
  "address": "Adres ve İletişim Bilgileri",
  "phone": "Telefon",
  "workinghours": "Çalışma Saatleri",
  "pazcum": "Pazartesi-Cuma",
  "cumr": "Cumartesi"

},
"en": {
  "map" : "Map",
  "address": "Adress and Contact",
  "phone": "Phone",
  "workinghours": "Working Hours",
  "pazcum": "Monday - Friday",
  "cumr"  : "Saturday"



},
"ar": {
  "map": "خريطة",
  "address": "العنوان والاتصال",
  "phone": "هاتف",
  "workinghours": "ساعات العمل",
  "pazcum": "الإثنين، الجمعة",
  "cumr"  : "يوم السبت"

}
}
</i18n>

<template>
  <section id="socialmedia" class="bg-gray-100">

    <div class="w-screen flex items-center justify-center bg-white pb-4">
        <div class="w-full m-3 md:w-1/3 bg-indigo-100 rounded-t-lg ">
            <p class="p-2 text-center text-xl">{{$t('map')}}</p>
          <div class="rounded-b-lg google-maps">
            <iframe title="100. Yıl Hastanesi'ne Erişim" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.208452781849!2d32.80814731492281!3d39.891964979429545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d345fd0872ca69%3A0xc8a638a186a3235e!2s%C3%96zel%20100.%20Y%C4%B1l%20Hastanesi!5e0!3m2!1str!2str!4v1571049210487!5m2!1str!2str" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
          </div>
        </div>
    </div>

    <div class="flex flex-row items-center justify-center bg-white">
        <a href="https://wa.me/905306825189" title="Whatsapp Üzerinden Erişmek İçin Tıklayınız!"><svg class="w-16 h-16 fill-current"><font-awesome-icon :icon="['fab', 'whatsapp-square']" class="text-green-600 hover:text-green-900 m-3"/></svg></a>
        <a href="https://www.youtube.com/playlist?list=PL2dzd7hq4bIPgBdCIehyXdhTdYPNJGY7U" title="Youtube Kanalıma Erişmek İçin Tıklayınız!"><svg class="w-16 h-16 fill-current"><font-awesome-icon :icon="['fab', 'youtube-square']" class="text-red-600 hover:text-red-900 m-3"/></svg></a>
        <a href="https://www.linkedin.com/in/mehmet-kayrak-534970195" title="LinkedIn Profilimi Görüntülemek İçin Tıklayınız!"><svg class="w-16 h-16 fill-current"><font-awesome-icon :icon="['fab', 'linkedin']" class="text-blue-600 hover:text-blue-900 m-3"/></svg></a>
        <a href="tel:+905306825189"  title="Telefon ile Randevu Almak İçin Tıklayınız!"><svg class="w-16 h-16 fill-current"><font-awesome-icon :icon="['fa', 'phone-square']" class="text-red-500 hover:text-red-700 m-3"/></svg></a>
        <a href="http://178.251.45.63:7206/online/randevu/index.html" title="Online Randevu Almak İçin Tıklayınız!" ><svg class="w-16 h-16 fill-current"><font-awesome-icon :icon="['fas', 'check-square']" class="text-gray-400 hover:text-gray-900 m-3"/></svg></a>
    </div>


    <h3 class="block w-full text-xl text-center pt-2 bg-gray-300 pb-2"> {{$t('address')}}</h3>
    <div class="flex flex-wrap items-center justify-between ml-5 mr-5">
      <div class="flex flex-col md:flex-row items-center justify-center w-full md:w-1/3">
        <a href="https://www.100yilhastanesi.com.tr/"><img class="h-16 w-16 object-scale-down block m-2" src="../static/images/100.png" alt="100. Yıl Hastanesi"></a>
        <p class="p-2 text-sm md:text-md lg:text-lg text-center">100. Yıl Hastanesi <br> Muhsin Yazıcıoğlu Caddesi No:54 Balgat Çankaya / Ankara </p>
      </div>
      <div class="w-full md:w-1/3">
        <p class="p-2 text-sm md:text-md lg:text-lg text-center">{{$t('phone')}}<a href="tel:+905306825189" ><br>0 530 682 51 89</a> </p>
      </div>
      <div class="w-full md:w-1/3">
        <p class="p-2 text-sm md:text-md lg:text-lg text-center">{{$t('workinghours')}} <br> {{$t('pazcum')}}: 08:30 - 17:30 <br> {{$t('cumr')}}: 08:30 - 13:00 </p>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: 'Footer',


    }
</script>

<style scoped>
  body {
    background: #f1f1f1;
    font-family: 'Roboto', sans-serif;
  }
  .google-maps {
    position: relative;
    padding-bottom: 75%;
    height: 0;
    overflow: hidden;
  }
  .google-maps iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
  .float{
    position:fixed;
    width:60px;
    height:60px;
    bottom:40px;
    right:40px;


    border-radius:50px;
    text-align:center;

  }

  .my-float{
    margin-top:22px;
  }

</style>
