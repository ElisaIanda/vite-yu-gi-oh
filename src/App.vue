<script>

import TheHeader from "./components/TheHeader.vue";

export default {
    components: { TheHeader }
}
</script>

<template>

  <TheHeader></TheHeader>
  <main>

  </main>

</template>

<style lang="scss" >
@use"../src/assets/styles/partials/variable" as*;
main{
  background-color: $my-color-primary;
}
</style>
