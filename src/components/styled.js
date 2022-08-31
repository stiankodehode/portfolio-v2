import styled from "styled-components";
import backgroundImage from "../img/background.jpg";

//--------------//
//--TYPOGRAPHY--//
//--------------//

export const StyledH3 = styled.h3`
    text-align: center;
`;

//--------------//
//--CONTAINERS--//
//--------------//

export const AppContainer = styled.div`
    color: #09001e;
    background-image: url(${backgroundImage});
    min-height: 100vh;
    width: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    -moz-background-size: cover;
`;

export const StyledFlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
`;
export const StyledFlex = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1000px;
`;

export const StyledBox = styled.div`
    background-color: #ffe8ff;
    max-width: 300px;
    height: 100px;
`;

//--------------//
//----NAVBAR----//
//--------------//

export const StyledNav = styled.nav`
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.4px);
    -webkit-backdrop-filter: blur(10.4px);
    outline: 1px solid rgba(255, 255, 255, 0.3);
    width: 100%;
    position: fixed;
`;

export const StyledList = styled.ul`
    list-style: none;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
`;

export const StyledLink = styled.a`
    border-radius: 5px;
    font-weight: bold;
    font-size: 20px;
    padding: 1.5em;
    cursor: pointer;
    transition: 0.25s;
    &:hover {
        transition: 0.5s;
        background-color: #a287af;
    }
`;

export const StyledMain = styled.main`
    margin: 0 auto;
    height: 100vh;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

//--------------//
//----IMAGES----//
//--------------//

export const StyledSvg = styled.svg`
    max-width: 50px;
`;
