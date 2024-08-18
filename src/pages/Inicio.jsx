import React from "react";
import PopularSection from "../components/Section/Popular/PopularSection.tsx";
import useGetPopularNews from "../hooks/useGetPopularNews.js";
import { useSelector } from "react-redux";

const Inicio = () => {

    useGetPopularNews();
    const newsPopular = useSelector((state) => state.newsPopular.newsPopularList);

    return (
        <PopularSection newsPopular={newsPopular}  title="Noticias Relevantes" />
    )
};

export default Inicio;