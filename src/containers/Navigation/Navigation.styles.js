import styled from 'styled-components';

export const LinkingWrapper = styled.div`

.selected {
    :after {
        transition-timing-function: cubic-bezier(.19, 1, .22, 1);
        transform: scaleX(1);
    }
}
ul {
    list-style-type:none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
}
li {
    display: inline-block;
    padding: 5px 5px 10px 5px;
    position: relative;
    font-weight: bold;
    margin: 10px 30px;
    font-size: 24px;
    font-weight: 100;
    a {
        
        text-decoration: none;
        position: relative;
        color: inherit;
    }

    a::after {
        
        position: absolute;
        content: "";
        height: .1em;
        top: 100%;
        background: currentColor;
        z-index: -1;
        left: 0;
        right: 0;
        transform: scaleX(0);
        transition: transform .5s cubic-bezier(0, 0, 1, 1);
    }

    a:hover::after {
        
        transition-timing-function: cubic-bezier(.19, 1, .22, 1);
        transform: scaleX(2);
}
}
`