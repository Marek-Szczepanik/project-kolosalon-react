import "./App.css";
import { FormSection, Formular, PageContainer, Kolo, MainTitle, SectionTitle, Kontrola, } from "./AppStyles";
import { useReducer, useState, useEffect } from "react";

const defaultObjednavka = {
  horske: false,
  pocetKolHorske: 0,
  detske: false,
  pocetKolDetske: 0,
  silnicni: false,
  pocetKolSilnicni: 0,
  gravel: false,
  pocetKolGravel: 0,
  pocetDni: "",
  nosic: 0,
  rozpocet: 0,
};

function setObjednavka(objednavka, action) {
  switch (action.type) {
    case "toggle_horske":
      return { ...objednavka, horske: !objednavka.horske };
    case "toggle_detske":
      return { ...objednavka, detske: !objednavka.detske };
    case "toggle_silnicni":
      return { ...objednavka, silnicni: !objednavka.silnicni };
    case "toggle_gravel":
      return { ...objednavka, gravel: !objednavka.gravel };
    case "update_horske":
      return { ...objednavka, [action.key]: parseFloat(action.value) };
    case "update_detske":
      return { ...objednavka, [action.key]: parseFloat(action.value) };
    case "update_silnicni":
      return { ...objednavka, [action.key]: parseFloat(action.value) };
    case "update_gravel":
      return { ...objednavka, [action.key]: parseFloat(action.value) };
    case "update_dny":
      return { ...objednavka, [action.key]: action.value };
    case "update_nosic":
      return { ...objednavka, [action.key]: parseFloat(action.value) };
    case "update_rozpocet":
      return { ...objednavka, [action.key]: parseFloat(action.value) };
    default:
      return objednavka;
  }
}

function App() {
  const [objednavka, dispatch] = useReducer(setObjednavka, defaultObjednavka);
  const [checked, setChecked] = useState(0);
  const [showFinalPrice, setShowFinalPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    let newFinalPrice = getFinalPrice(objednavka);
    setShowFinalPrice(newFinalPrice);
  }, [objednavka]);

  const getFinalPrice = (objednavka) => {
    let horske = 0;
    let detske = 0;
    let silnicni = 0;
    let gravel = 0;
    if (objednavka.horske) {
      horske = 500;
    }
    if (objednavka.detske) {
      detske = 200;
    }
    if (objednavka.silnicni) {
      silnicni = 1500;
    }
    if (objednavka.gravel) {
      gravel = 2500;
    }
    let thisFinalPrice =
      (horske * objednavka.pocetKolHorske +
        detske * objednavka.pocetKolDetske +
        silnicni * objednavka.pocetKolSilnicni +
        gravel * objednavka.pocetKolGravel) *
      objednavka.pocetDni *
      objednavka.nosic;

    setFinalPrice(thisFinalPrice);
    return thisFinalPrice;
  };

  const checkPrice = (objednavka) => {
    if (objednavka.rozpocet >= finalPrice) {
      let checkOK = 1;
      setChecked(checkOK);
    } else {
      let checkNotOK = 2;
      setChecked(checkNotOK);
    }
    console.log(checked);
  };

  useEffect(() => {
     // console.log(JSON.stringify(objednavka));
  }, [objednavka]);
  return (
    <PageContainer>
      <Formular>
        <FormSection name="nadpis">
          <MainTitle>Objednávka Kolosalon</MainTitle>
        </FormSection>
        <FormSection name="vyber">
          <Kolo>
            <SectionTitle>Horské kolo:</SectionTitle>
            <label>(500 Kč/den)</label>
            <input
              type="checkbox"
              id="horske"
              onChange={(e) => {
                dispatch({
                  type: "toggle_horske",
                });
              }}
            />
            <label><b>Kusů</b></label>
            <input
              type="number"
              id="pocetKolHorske"
              min='0'
              value={objednavka.pocetKolHorske}
              onChange={(e) => {
                dispatch({
                  type: "update_horske",
                  value: e.target.value,
                  key: "pocetKolHorske",
                });
              }}
            />
          </Kolo>
          <Kolo>
            <SectionTitle>Dětské kolo:</SectionTitle>
            <label>(200 Kč/den)</label>
            <input
              type="checkbox"
              id="detske"
              onChange={(e) => {
                dispatch({
                  type: "toggle_detske",
                });
              }}
            />
            <label><b>Kusů</b></label>
            <input
              type="number"
              id="pocetKolDetske"
              min='0'
              value={objednavka.pocetKolDetske}
              onChange={(e) => {
                dispatch({
                  type: "update_detske",
                  value: e.target.value,
                  key: "pocetKolDetske",
                });
              }}
            />
          </Kolo>
          <Kolo>
            <SectionTitle>Silniční kolo:</SectionTitle>
            <label>(1500 Kč/den)</label>
            <input
              type="checkbox"
              id="silnicni"

              onChange={(e) => {
                dispatch({
                  type: "toggle_silnicni",
                });
              }}
            ></input>
            <label><b>Kusů</b></label>
            <input
              type="number"
              id="pocetKolSilnicni"
              min='0'
              value={objednavka.pocetKolSilnicni}
              onChange={(e) => {
                dispatch({
                  type: "update_silnicni",
                  value: e.target.value,
                  key: "pocetKolSilnicni",
                });
              }}
            />
          </Kolo>
          <Kolo>
            <SectionTitle>Gravel kolo:</SectionTitle>
            <label>(2500 Kč/den)</label>
            <input
              type="checkbox"
              id="gravel"
              onChange={(e) => {
                dispatch({
                  type: "toggle_gravel",
                });
              }}
            />
            <label><b>Kusů</b></label>
            <input
              type="number"
              id="pocetKolGravel"
              min='0'
              value={objednavka.pocetKolGravel}
              onChange={(e) => {
                dispatch({
                  type: "update_gravel",
                  value: e.target.value,
                  key: "pocetKolGravel",
                });
              }}
            />
          </Kolo>
        </FormSection>
        <FormSection>
          <SectionTitle>Doba zapujčení:</SectionTitle>
          <label>Vyberte dobu pronájmu:</label>
          <select
            id="pocetDni"
            onClick={(e) => {
              dispatch({
                type: "update_dny",
                value: e.target.value,
                key: "pocetDni",
              });
            }}
          >
            <option value={0}>nevybráno</option>
            <option value={5}>5 Dnů</option>
            <option value={7}>1 Týden</option>
            <option value={14}>2 týdny</option>
            <option value={30}>1 Měsíc</option>
          </select>
          <br></br>
          <div>
            <SectionTitle>Doprava:</SectionTitle>
            <input
              type="radio"
              name="nosic"
              value={1}
              onChange={(e) => {
                dispatch({
                  type: "update_nosic",
                  value: e.target.value,
                  key: "nosic",
                });
              }}
            />
            <label>Bez nosiče (+0%)</label>
            <input
              type="radio"
              name="nosic"
              value={1.05}
              onChange={(e) => {
                dispatch({
                  type: "update_nosic",
                  value: e.target.value,
                  key: "nosic",
                });
              }}
            />
            <label>Nosič na střeše (+5%)</label>
            <input
              type="radio"
              name="nosic"
              value={1.1}
              onChange={(e) => {
                dispatch({
                  type: "update_nosic",
                  value: e.target.value,
                  key: "nosic",
                });
              }}
            />
            <label>Tažný nosič(+10%)</label>
          </div>
        </FormSection>
        <FormSection>
          <SectionTitle>Kalkulačka:</SectionTitle>
          <label>Můj rozpočet</label>
          <input
            type="text"
            id="rozpocet"
            value={objednavka.rozpocet}
            onChange={(e) => {
              dispatch({
                type: "update_rozpocet",
                value: e.target.value,
                key: "rozpocet",
              });
            }}
          />
          <label>Výsledná cena</label>
          <input type="text" disabled value={showFinalPrice}></input>
          <Kontrola
            checked={checked}
            onClick={() => {
              checkPrice(objednavka);
            }}
          >
            Zkontroluj rozpocet
          </Kontrola>
        </FormSection>
      </Formular>
    </PageContainer>
  );
}

export default App;