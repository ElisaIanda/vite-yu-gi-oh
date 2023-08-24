
<script>
import CardHeader from "./CardHeader.vue";
import { store } from "../store";

export default {
    

    data() {
        return {
            store,
        }
    },


    components: {
        CardHeader,
    },
}
</script>

<template>
    <div class="container py-5 bg-light">
        <CardHeader></CardHeader>
        <div class="d-flex flex-wrap gap">

            <div class="card" v-for="singleCard in store.array" :key="singleCard.id">
                <img :src="singleCard.card_images[0].image_url" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-white">{{ singleCard.name }}</h5>
                    <p class="card-text">{{ singleCard.archetype }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variable" as *;

.container {
    .gap{
        gap: 1.2rem
    }
    .card {
        width: calc((100% / 5) - 1rem);
        border: none;
        --bs-card-bg: #d48f38;
        border-radius: 0;
    }
}
</style>  



