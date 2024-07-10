import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    margin-bottom: 10px;
`;

export const Form = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
    margin-top: 30px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
    width: 100%;
`;

export const ErrorMessage = styled.p`
    text-transform: uppercase;
    color: ${props => props.theme.colors.red};
`;