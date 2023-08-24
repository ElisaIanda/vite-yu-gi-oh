<script>

import TheHeader from "./components/TheHeader.vue";
import Card from "./components/Card.vue";
import CardList from "./components/CardList.vue";

export default {
    components: { TheHeader, CardList }
}
</script>

<template>

  <TheHeader></TheHeader>
  <CardList></CardList>
  <main>

  </main>

</template>

<style lang="scss" >
@use"../src/assets/styles/partials/variable" as*;
main{
  background-color: $my-color-primary;
}
</style>
