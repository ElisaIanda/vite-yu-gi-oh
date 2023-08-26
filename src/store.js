import axios from "axios";
import { reactive } from 'vue';


export const store = reactive({
    array: [],
    arrayArchetype: [],
    selectArchetype: "",
});

export function fetchCards() {
    const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";

    axios.get(url).then((response) => {
        store.array = response.data.data;
    });
}

export function fillArrayArchetype() {
    const url = "https://db.ygoprodeck.com/api/v7/archetypes.php";

    axios.get(url).then((response) => {
        store.arrayArchetype = response.data;
    });
}

export function filteredCard(selectArchetype){
    if( selectArchetype === "" || selectArchetype === undefined){
        fetchCards()
    } else {
        const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${selectArchetype}&num=20&offset=0`
        axios.get(url).then((response)=>{
            store.array = response.data.data
        })
    }
}

