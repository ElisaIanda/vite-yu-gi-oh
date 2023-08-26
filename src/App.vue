<script>

import TheHeader from "./components/TheHeader.vue";
import CardList from "./components/CardList.vue";


export default {
  components: {
    TheHeader,
    CardList,
  },
}

</script>

<template>
  <TheHeader></TheHeader>
  <main class="py-5">
    <CardList></CardList>
  </main>
</template>

<style lang="scss" >
@use"../src/assets/styles/partials/variable" as*;

main {
  background-color: $my-color-primary;
}
</style>
