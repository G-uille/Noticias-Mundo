import React from "react";
import PopularSection from "../components/Section/Popular/PopularSection.tsx";
import { useSelector } from "react-redux";

const SearchResult = () => {

    const newsPopular = useSelector((state) => state.newsPopular.newsPopularList);

    return (
        <PopularSection
            newsPopular={newsPopular}
            title="Resultados de la búsqueda"
        />
    )
};

export default SearchResult;