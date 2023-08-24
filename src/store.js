import { reactive } from 'vue';
import axios from "axios";

export const store = reactive({
    array: []
});


axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0").then((response) => {
    store.array = response.data.data;
})
