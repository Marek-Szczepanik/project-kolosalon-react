import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  align-self: center;
  justify-self: center;
`;
export const Formular = styled.form`
  width: 800px;
  min-height: 800px;
  border: 1px solid black;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "nadpis"
    "vyber"
    "detaily"
    "kalkulace";
  gap: 15px;
  background-color: lightgray;
`;
export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: lightblue;
  &:nth-child(1) {
    grid-area: nadpis;
  }
  &:nth-child(2) {
    grid-area: vyber;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "kol1"
      "kol2"
      "kol3"
      "kol4";
    gap: 20px;
  }
  &:nth-child(3) {
    grid-area: detaily;
  }
  &:nth-child(4) {
    grid-area: kalkulace;
  }
`;
export const Kolo = styled.div`
    display: flex;
  flex-direction: column;
  align-items:center;
  
  width: 100%;
  &:nth-child(1) {
    grid-area: 'kol1';
  }
  &:nth-child(2) {
    grid-area: 'kol2';
  }
  &:nth-child(3) {
    grid-area: 'kol3';
  }
  &:nth-child(4) {
    grid-area: 'kol4';
  }
`;
export const SectionTitle = styled.h2`
  color: black;
  font-size: 20px;
  margin: 0px;
  padding: 20px;
  padding-bottom: 10px;
`;
export const MainTitle = styled(SectionTitle)`
  font-size: 30px;
  align-self: center;
  justify-self: center;
`;
export const Kontrola = styled.div`
  margin-top: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  ${(props) => {
    if (props.checked === 1) {
      return `background-color:green;`;
    } else if (props.checked === 2) {
      return `background-color:red;`;
    }
  }}
`;
