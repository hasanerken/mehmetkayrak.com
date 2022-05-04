<template>
  <div class="error-404 text-center text-2xl">
    <h1>Aradığınız sayfaya ulaşılamamıştır.</h1>
    <p>SAYFA HATASI</p>
  </div>
</template>
<script>
export default {
  name: 'error-404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>