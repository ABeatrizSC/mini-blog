import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-width: 300px;
`;

export const Title = styled.h1`
    margin-bottom: 10px;
`;

export const Form = styled.form`
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