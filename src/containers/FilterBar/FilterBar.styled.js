import styled from "styled-components";
import { Button } from 'antd';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 60px 0px 40px;
`;

export const SortWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
`;

export const ApplyButton = styled(Button)`  
    width: 140px;
    border-radius: 10px;
    color: black;
`;
