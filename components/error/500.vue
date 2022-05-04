<template>
  <div class="error-500">
    <h1>Aradığınız sayfaya ulaşılamamıştır.</h1>
    <p>SUNUNCU HATASI.</p>
  </div>
</template>
<script>
export default {
  name: 'error-500',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>