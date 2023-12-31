import styled from 'styled-components';


export const container = styled.div`
    position: relative;
`;


export const movieDetail = styled.div`
    position: absolute; /*container에 맞춰짐*/
    width: 250px;
    height: 450px;
    margin: 16px;
    color: white;
    top: 0;
    visibility: hidden;
    word-break:break-all;
    background-color: rgba(0,0,0,0.7);
`;

export const movieContainer = styled.div`
    width: 250px;
    height: 450px;
    margin: 16px;
    background-color: #373b69;
    color: white;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1, green, blue, alpha);

    &:hover ~${movieDetail} {
        visibility: visible ;
    } 
    `;

export const poster = styled.img`
    max-width: 100%;
`;

export const movieInfo = styled.div`
    display: flex;
    padding: 2px;
    justify-content: space-between;
    align-items: center;
`;

export const title = styled.h4`
    margin: 0;
    margin-left: 5px;
`;

export const vote = styled.span`
    margin-left: 3px;
`;



