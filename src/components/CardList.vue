<script>
import CardHeader from "./CardHeader.vue";
import Card from "./Card.vue";
import CardFilter from "./CardFilter.vue";
import { store, fetchCards } from "../store";

export default {
    components: {
        Card,
        CardHeader,
        CardFilter,
    },

    data() {
        return {
            store,
        }
    },

    mounted() {
        fetchCards()
    },
}
</script>

<template>
    <div class="container py-5 bg-light">
        <CardFilter :arrayArchetype="store.arrayArchetype"></CardFilter>
        <CardHeader></CardHeader>
        <div class="row gy-3">
            <div class="col-sm-1 col-md-2 col-lg-3" v-for="singleCard in store.array">
                <Card :array="singleCard" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variable" as *;

</style>  







