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
            selection: ""
        }
    },

    mounted() {
        fillArrayArchetype();
    }

}

</script>

<template>
    <select v-model="selection" @change="filteredCard(selection)" class="form-select form-select-lg mb-3" aria-label="Large select example" >
        <option selected v-for="archetype in store.arrayArchetype">{{ archetype.archetype_name }}</option>
    </select>
</template>

<style ></style>
 


