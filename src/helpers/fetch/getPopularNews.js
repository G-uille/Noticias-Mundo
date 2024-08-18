import { global } from "../../config/global";
import axios from "axios";

const getPopularNews = async () =>  {
    try{
        const query = "tesla";
        const sortBy= "publishedAt";
        let url  = `${global.url}q=${encodeURIComponent(query)}&sortBy=${sortBy}&apiKey=${global.apikey}`;

        let response= await axios.get(url);
        
        return response.data.articles;
    }
    catch(err){
        console.log(err);
    }
    
};

export default getPopularNews;