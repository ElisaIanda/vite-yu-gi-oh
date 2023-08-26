<script>

import { store, fillArrayArchetype, filteredCard } from "../store"

export default {
    props:{
        arrayArchetype: {
                type: Object,
                required: true
            }
    },
    methods: {
        filteredCard
    },

    data() {
        return {
            store,
            selectArchetype: "",
        }
    },

    mounted() {
        fillArrayArchetype();
    }

}

</script>

<template>
    <select v-model="selectArchetype" @change="filteredCard(selectArchetype)" class="form-select form-select-lg mb-3" aria-label="Large select example" >
        <option selected v-for="archetype in store.arrayArchetype">{{ archetype.archetype_name }}</option>
    </select>
</template>

<style ></style>



