import styled from 'styled-components';
import { Button } from 'antd';

export const SectionWrapper = styled.div`
    display: flex;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 55%, rgba(0,0,0,1) 100%);    height: 100%;
    width:100%;
    justify-content: space-around;
    padding: 0 auto;
    img{
        width : 400px;
        }
`;

export const StyledText = styled.div`
    padding-top: 70px;
    padding-left: 170px;
    color: white;
    font-size: 16px;
    h1 {
        font-size: 40px;
        color: white;
    }
`
export const StyledButton = styled(Button)`
    background: transparent;
    border-radius: 20px;
    color: white;
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 60px;
`