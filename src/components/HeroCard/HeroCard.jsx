import "./HeroCard.css";

export default function HeroCard() {
  return (
    <div className="HeroCard">
      <div>
        <h1>da semana</h1>
        <h2>Populares</h2>
      </div>
      <div className="img__card">
        <div className="img__card1">
          <img className="cardimage1" src="./astronauta-1.png" alt="" />

          <img className="cardimage2" src="./astronauta-2.png" alt="" />
        </div>
        <hr className="new3" />
        <div className="img__card2">
          <img className="cardimage2" src="./astronauta-3.png" alt="" />

          <img className="cardimage4" src="./astronauta-4.png" alt="" />
        </div>
      </div>

      <div className="card__image--class">
        <h1>artistas</h1>
        <h2>Melhores </h2>
        <div className="card___image__artistas">
          <img src="./Artista 1.png" alt="" />
          <img src="./Artista 2.png" alt="" />
          <img src="./Artista 3.png" alt="" />
          <img src="./Artista 4.png" alt="" />
          <img src="./Artista 5.png" alt="" />
          <img src="./Artista 6.png" alt="" />
        </div>
      </div>
    </div>
  );
}
