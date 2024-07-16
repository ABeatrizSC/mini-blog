import styled from "styled-components";

export const SearchResultHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 70px;
    gap: 15px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
    }

    & h1 {
        flex: 1;
        width: 100%;
        text-align: center;
    }
`;