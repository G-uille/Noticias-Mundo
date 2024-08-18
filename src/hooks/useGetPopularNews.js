import { useEffect } from "react";
import getPopularNews from "../helpers/fetch/getPopularNews";
import { useDispatch } from "react-redux";
import { setInitialState } from "../slices/newsSlice";
import { setLoading } from "../slices/loadingSlice.tsx";

const useGetPopularNews = () => {

    const dispatch = useDispatch();

    useEffect(()=> {
        const onGetNews = async () => {
            try{
                dispatch(setLoading(true));
                let response = await getPopularNews();

                if(response){
                    dispatch(setInitialState(response));
                    dispatch(setLoading(false));
                };
            }
            catch(err){
                console.log("Error al traer los chats ", err);
            }
        };
        onGetNews();
    }, []);

};

export default useGetPopularNews;