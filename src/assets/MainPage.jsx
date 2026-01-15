import React, { useEffect } from "react";
import { useState } from "react";

function MainPage() {
  const [indexes, setIndex] = useState([]);

  useEffect(() => {
    shufflePics();

    const interval = setInterval( () => {
       shufflePics();
    }, 4000)

    return () => clearInterval(interval)
  }, []);

  const randomIndexes = (previous = []) => {

    let rand1 = Math.ceil(Math.random() * 43);
    let rand2 = Math.ceil(Math.random() * 43);
    if (
      rand1 != rand2 &&
      !previous.includes(rand1) &&
      !previous.includes(rand2)
    ) {
      return [rand1, rand2];
    }
      return randomIndexes(previous);
  };

  const shufflePics = () => {
    setIndex((prev) => {
        return randomIndexes(prev)
    });
  };


  return (
    <>
      <img className="hearts" alt="hearts" src="/Srca.png" />
      <div className="circle"></div>
      <div className="square">
        <div className="happyBday">HAPPY BIRTHDAY</div>
        <div className="bdayTitle">mamice</div>
        <img className="ballons" src="/Baloni.png" alt="baloni" />
        <div className="date">
          16 <br /> Januar <br /> 2026.
        </div>
        <div className="volimoTe">Volimo te</div>
        <div className="grid">
          <img src="/Pic1.jpg" alt="No image" className="gridPic1" />
          <div className="gridText1">
            Svojom <br />
            dobrotom i <br /> ljubavi <br /> uljepšavaš nam <br /> dane
          </div>
          <div className="gridText2">
            i svojom brižnošću pokazuješ da si najdivnije biće na planeti
          </div>
          <img src="/Pic2.jpg" alt="No image" className="gridPic2" />
        </div>
        <div className="years">
          <div className="fortyThree">43</div>
          <div className="yearsText">YEARS</div>
        </div>
        <div className="photosText">
          Slikice najljepše žene na <br /> svijetu
        </div>
        <div className="pictures">
          {indexes?.map((ind, id) => {
            return <img src={`/Mama/${ind}.jpg`} alt="no pic" key={id} className="picture" />;
          })}
        </div>
        <div className="ukrstenicaBorder">
          <img className="ukrstenica" src="/Ukrstenica.png" alt="ukrstenica" />
        </div>
        <img src="/Poklon.png" alt="Poklon" className="poklon" />

        <div className="slatkeRijeci">SLATKE RIJEČI TVOJIH NAJMILIJIH</div>
        <div className="porukeGrid">
        <img src="/Tata.jpg" alt="tata" className="rijeciImg" style={{marginTop: "10%"}} />
        <div className="tataText" style={{marginTop: "10%"}}>
        <div className="ko">Dragan</div>
          "Simeuna dosadna si al nek ti je sretan rodjendan"</div>
        <img src="/Miko.jpg" alt="miko" className="rijeciImg" style={{marginTop: "10%"}} />
        <div className="mikoText">
        <div className="ko"  style={{marginTop: "10%"}}>Mihajlo</div>
        "Biljoni srećan rodjendan"
        </div>
        </div>
        <div className="pismo">
          Draga mama, <br/><br/>

Hvala ti za svaki minut proveden sa tobom. Ti si naše najveće blago i drago mi je što mi je Bog dao da budem tvoja ćerka. Neizmjerno sam ponosna na tebe i na sve što radiš i obećavam da ću uvijek biti kraj tebe. <br/>
Hvala ti na svakom zagrljaju, savjetu, utjesi, na svakoj popijenoj kafici zajedno i  na ogromnoj žrtvi koju si podnijela da bih odrasla u snažnu i uspješnu ženu. Ti si najhrabrija osoba koju poznajem i moja najveća inspiracija. Znam da sam nekad drska i ljuta i žao mi je što ti ponekad kidam živce. Koliko god da porastem i gdje god da me život odnese, uvijek ću biti tvoja mala djevojčica {"<3"}
<div className="potpis">Voli te tvoja <br/> Kaća</div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
