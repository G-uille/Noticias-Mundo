import { global } from "../../config/global";
import axios from "axios";

const postSearch = async ({ query }) => {
    try{
        const sortBy= "publishedAt";
        let url  = `${global.url}q=${encodeURIComponent(query)}&sortBy=${sortBy}&apiKey=${global.apikey}`;

        let response= await axios.get(url);

        console.log("Esta es la búsqueda: ", response);
        
        return response.data.articles;
    }
    catch(err){
        console.log("Error al hacer la búsqueda", err);
    }
};

export default  postSearch;