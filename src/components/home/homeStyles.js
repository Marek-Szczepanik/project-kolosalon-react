import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background-color:lightblue;
`;
export const PridejPsa = styled.div`
    display: grid;
    width: 80%;
    max-width: 1200px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 40px;
    margin: 20px 0;
    grid-template-areas:
        "jmeno rasa zvuk tlacitko";
    background-color: red;
`;
export const PridejPsaDetail = styled.input`
    display:flex;
    width: 100%;
    height: 100%;
    justify-content:flex-start;
    align-items:center;
    &:nth-child(1){
        grid-area: jmeno;
        background-color: white;
    }
    &:nth-child(2){
        grid-area: rasa;
        background-color: gold;
    }
    &:nth-child(3){
        grid-area: zvuk;
        background-color: orange;
    }
`;
export const PridejPsaButton = styled.button`
    grid-area:tlacitko;
    display:flex;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    background-color:green;
`;
export const PesList = styled.div`
    display:flex;
    width:80%;
    max-width:1200px;
    flex-direction:column;
`;
export const PesItem = styled.div`
    display:grid;
    width:100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows:40px;
    grid-template-areas: "jmeno rasa zvuk tlacitko";
    margin-bottom: 15px;
`;
export const PesItemDetail = styled.div`
display: flex;
height: 100%;
width: 100%;
padding-left: 15px;
justify-content: center;
align-items:center;
    &:nth-child(1){
        grid-area: jmeno;
        background-color: white;
    }
    &:nth-child(2){
        grid-area: rasa;
        background-color: gold;
    }
    &:nth-child(3){
        grid-area: zvuk;
        background-color: orange;
    }
`;
export const PesOdstranitButton = styled(PridejPsaButton)`
    background-color:blue;
`;