import React from "react";
import NewsPopular from "../../Cards/NewsPopular/NewsPopular.tsx";
import SkeletonNewPopular from "../../Skeleton/SkeletonNewPopular.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store.tsx";

interface PopularItem {
    title: string;
    description: string;
    url: string;
}

interface Popular {
    newsPopular: PopularItem[];
    title:  string;
}

const PopularSection: React.FC<Popular> = ({ newsPopular, title }) => {
    
    const isLoading = useSelector((state: RootState)  => state.loadingSlice.value);

    return (
        <section className="container-section" id="popular">
            <h1>{title}</h1>
            {isLoading
                ? 
                <div className="section-skeleton">
                    <SkeletonNewPopular />
                    <SkeletonNewPopular />
                    <SkeletonNewPopular />
                </div>
                : 
                <div className="container-news-list">
                  {newsPopular.map((news, index) =>   <NewsPopular newsItem={news} key={index} />)}
                </div> 
            }
        </section>
    )
};

export default PopularSection;