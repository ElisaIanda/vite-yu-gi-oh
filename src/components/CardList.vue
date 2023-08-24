
<script>
import axios from 'axios';
export default {
    data(){
        return{
            card:[]
        }
    },

    methods: {
        returnCard(){
            const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0"

            axios.get(url).then((response) =>{

                this.card = response.data.results;
            })
        }
    },
    mounted(){
        this.returnCard()
    }
}
</script>

<template>
    
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variable" as *;

</style>

