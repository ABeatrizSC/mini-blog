import styled from "styled-components";
import { Form } from "../../assets/styles/form";

export const Container = styled.div`
    width: 100%;
    min-height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 50px;
`;

export const SearchForm = styled(Form)`
    flex-direction: row;
    margin-top: 0;
`;
