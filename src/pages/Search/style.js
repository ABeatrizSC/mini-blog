import styled from "styled-components";

export const SearchResultHeader = styled.div`
    position: relative;
    text-align: center;
    margin-bottom: 70px;

    & button {
        position: absolute;
        top: 50%;
        left: 25px;
        transform: translateY(-50%)
    }
`;