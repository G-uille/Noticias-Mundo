import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NewsDetails from "../pages/NewsDetails.jsx";
import Inicio from "../pages/Inicio.jsx";
import DefaultLayout from "../layout/DefaultLayout.tsx";
import SearchResult from "../pages/SearchResult.jsx";

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />} >
                <Route index element={<Navigate to="inicio"/>}/>
                <Route path="inicio" element={<Inicio />} />
                <Route path="results" element={<SearchResult />} />
                <Route path="details" element={<NewsDetails />} />
            </Route>
        </Routes>
    )
};

export default AppRouter;