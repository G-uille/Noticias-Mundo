import { Skeleton } from "@mui/material";
import React from "react";
import styled from "styled-components";


const CustomSkeleton = styled(Skeleton)`

    &.MuiSkeleton-root{
        width:100%;
        margin-top: 10px;
        background-color:var(--gray-bg);
    }

`;



const SkeletonNewPopular: React.FC = () => {
    return(
        <>
        <CustomSkeleton variant="rounded" height={50} width="50%" />
        <CustomSkeleton variant="rounded" height={150} />
        <CustomSkeleton variant="rounded" height={60} width={150}/>
        </>
    )
};

export default SkeletonNewPopular;