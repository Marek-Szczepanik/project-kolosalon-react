import React, { useRef, useState } from 'react'
import { PageContainer, PesItem, PesItemDetail, PesList, PesOdstranitButton, PridejPsa, PridejPsaButton, PridejPsaDetail } from './homeStyles'
import { listPsu } from './listPsu';

export default function Home() {
    const pocetPsu = useRef(listPsu.length);
    const [seznamPsu, setSeznamPsu] = useState(listPsu);
    const [pridejPsa, setPridejPsa ] = useState({
        id: (pocetPsu.current + 1),
        jmeno: '',
        rasa: '',
        zvuk: '',
    });
    const handleAdd = (e) => {
        setSeznamPsu(seznamPsu => {
            return [{...seznamPsu,pridejPsa}];
        })
        pocetPsu.current++;
        console.log(JSON.stringify(pridejPsa));
        setPridejPsa({
            id: (pocetPsu.current + 1),
            jmeno: '',
            rasa: '',
            zvuk: '',
        })
    }
    const handleChange = (e) => {
        setPridejPsa({...pridejPsa, [e.target.name]: e.target.value});
    }
    const handleDelete = (e) => {
        const removeId = e.target.getAttribute("data-id");
        setSeznamPsu(seznamPsu.filter(pes => pes.id !== removeId));
    }


  return (
      <PageContainer>
          <PridejPsa>
              <PridejPsaDetail type="text" name="jmeno" placeholder="Zadejte jmeno psa:" value={pridejPsa.jmeno} onChange={handleChange}></PridejPsaDetail>
              <PridejPsaDetail type="text" name="rasa" placeholder="Zadejte rasu psa:" value={pridejPsa.rasa} onChange={handleChange}></PridejPsaDetail>
              <PridejPsaDetail type="text" name="zvuk" placeholder="Jak dela vas pes:" value={pridejPsa.zvuk} onChange={handleChange}></PridejPsaDetail>
              <PridejPsaButton onClick={handleAdd}>PŘIDEJ PSA</PridejPsaButton>
          </PridejPsa>
          <PesList>
              <PesItem>
                  <PesItemDetail>JMÉNO</PesItemDetail>
                  <PesItemDetail>RASA</PesItemDetail>
                  <PesItemDetail>ZVUK</PesItemDetail>
                  <PesOdstranitButton disabled>Odstranit</PesOdstranitButton>
              </PesItem>
              {seznamPsu.map((pes) => (
                <PesItem key={pes.id}>    
                    <PesItemDetail>{ pes.jmeno }</PesItemDetail>
                    <PesItemDetail>{ pes.rasa }</PesItemDetail>
                    <PesItemDetail>{ pes.zvuk }</PesItemDetail>
                    <PesOdstranitButton data-id={pes.id} onClick={handleDelete}>
                        ODSTRANIT
                    </PesOdstranitButton>
                </PesItem>
            ))}
          </PesList>
      </PageContainer>
  )
}
