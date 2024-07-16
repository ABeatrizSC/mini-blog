import styled from "styled-components";
import { StyledButton } from "../../components/Button/style";

export const DashboardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 30px;
`;

export const TableContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Table = styled.table`
    width: 100%;
    max-width: 1700px;
    max-height: 50vh;
    overflow-y: auto;
    border-radius: 10px;
    padding: 5px;
    background-color: ${props => props.theme.colors.componentBackground};
`;

export const TableHeader = styled.th`
    text-align: center;
    text-transform: uppercase;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color:  #3d3c3c;
    }
    `;

export const TableData= styled.td`
    border-radius: 5px;
    padding: 10px 5px;
`;

export const ActionsContainer= styled.span`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 5px;

    & a {
        color: ${props => props.theme.colors.white};
    }
`;

export const DeleteButton = styled(StyledButton)`
    background-color: ${props => props.theme.colors.red};
    padding: 10px;

    &:hover {
        background-color: ${props => props.theme.colors.redHover};
    }

    @media screen and (max-width: 750px) {
        padding: 5px;
    }
`;