import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Search } from "@mui/icons-material";

const CustomButton = styled(Button)`
    &.MuiButton-root{
        background-color: var(--primary-color);
        color: #ffffff;
        height: 100%;
        padding: 15px 20px; 
        border-radius: 5px; 
        text-transform: none;

        &:hover{
            background-color: #4C88FF;
        }
    }

`;

interface ButtonComponpent{
    onClick: ()  => void;
    content: React.ReactNode;
}

const ButtonComponent: React.FC<ButtonComponpent>= ({ onClick, content }) => {
    return(
        <CustomButton onClick={onClick} variant="contained">{content}</CustomButton>
    )
};

export default ButtonComponent;