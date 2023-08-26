import axios from "axios";
import { reactive } from 'vue';


export const store = reactive({
    array: [],
    arrayArchetype: [],
    selection: "",
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

export function filteredCard(selection){
    if( selection === "" || selection === undefined){
        console.log(selection)
        fetchCards()
    } else {
        console.log(selection)
        const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${selection}&num=20&offset=0`
        axios.get(url).then((response)=>{
            store.array = response.data.data
        })
    }
}

