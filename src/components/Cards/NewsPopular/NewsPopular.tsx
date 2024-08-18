import React from "react";
import ButtonComponent from "../../../assets/css/components/Buttons/ButtonComponent.tsx";
import { ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNewSelected } from "../../../slices/newsSlice.js";

interface NewsItem {
    title: string;
    description: string;
};

interface NewsComponent {
    newsItem: NewsItem;
};


const ReadMoreContent = () =>{
    return(
        <div className="content-read-more">
            <span>Leer más</span>
            <ChevronRight />
        </div>
    )
};

const NewsPopular: React.FC<NewsComponent> = ({ newsItem }) => {

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const handleReadMore = async () => {
        dispatch(setNewSelected(newsItem));
        navigate(`/details`);
    };

    return (
        <div className="container-news popular">
            <h2>{newsItem.title}</h2>
            <p className="news__popular--text">{newsItem.description}</p>
            <div>
                <ButtonComponent
                    content={<ReadMoreContent  />}
                    onClick={handleReadMore} />
            </div>
        </div>
    )
};

export default NewsPopular;