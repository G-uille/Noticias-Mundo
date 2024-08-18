import { TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import ButtonComponent from "../../assets/css/components/Buttons/ButtonComponent.tsx";
import postSearch from "../../helpers/fetch/postSearch.js";
import { Search } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setInitialState } from "../../slices/newsSlice.js";
import { setLoading } from "../../slices/loadingSlice.tsx";
import { useNavigate } from "react-router-dom";

const CustomTextField = styled(TextField)`
    & .MuiInputBase-root {
        background-color:#374151;
        color: #ffffff;
        
        &:hover {
            background-color: #3F4A5C;
        }

        &.Mui-focused {
            background-color: #3F4A5C;
        }
    }

    & .MuiInputLabel-root {
        color: var(--gray-color);
        font-family: 'Poppins', sans-serif !important;


        & .Mui-focused {
            color: var(--gray-color);
        }
    }
`;


const Searcher: React.FC = () => {

    const [search, setSearch] = useState<string>("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearch = async () => {
        if(search!=  "") {
            dispatch(setLoading(true));
            let response = await postSearch({ query: search });
            if (response) {
                navigate("/results");
                dispatch(setInitialState(response));
                dispatch(setLoading(false));
            }
        };
    };

    return (
        <div className="container-searcher">
            
            <CustomTextField
                fullWidth
                label="Buscar Noticias por Nombre o palabra clave ..."
                id="fullWidth"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <ButtonComponent 
            onClick={handleSearch}
            content={<Search />} />

        </div>
    )
};

export default Searcher;