import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <h1>
        Rocket <span>NFTs</span>
      </h1>
      <button className="btn">
        <img src="./Vector--footer.svg" alt="" />
      </button>
      <hr className="new5" />
      <div className="h1__h2">
        <h1>Fique por dentro de </h1>
        <h2>todas as novidades</h2>
        <input type="text" placeholder="nft@rocketseat.com.br" />
        <button className="btn2">Enviar</button>
        <hr className="new7" />
        <div className="Empresa--Mapa--Links">
          <div>
            <h1>Empresa</h1>
            <p>Sobre</p>
            <p>Serviços</p>
            <p>Time</p>
            <p>Carreira</p>
          </div>
          <div>
            <h1>Mapa</h1>
            <p>Galeria</p>
            <p>Popuplares</p>
            <p>Vendas</p>
            <p>Contato</p>
          </div>
          <div>
            <h1>Links</h1>
            <p>FAQs</p>
            <p>Termos</p>
            <p>Política</p>
            <p>Ajuda</p>
          </div>
        </div>
        <hr className="new8" />
        <p>www.rocketseat.com.br</p>
        <div className="sosial__sebeke">
          <div>
            <img className="sosial__sebeke1" src="./instagram.svg" alt="" />
          </div>
          <div>
            <img className="sosial__sebeke2" src="./youtube.svg" alt="" />
          </div>
          <div>
            <img className="sosial__sebeke3" src="./Vector (3).png" alt="" />
          </div>
          <div>
            <img className="sosial__sebeke4" src="./email.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
