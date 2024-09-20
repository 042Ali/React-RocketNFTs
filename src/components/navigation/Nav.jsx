import "./nav.css";

export default function Nav() {
  return (
    <>
      <nav>
        <div className="navigation">
          <div className="navigation__h1">
            <h1>Rocket</h1>
            <h2>NFTs</h2>
          </div>
          <div className="navigation__sidebar">
            <h6 className="navigation___h6">Comprar NFT</h6>
            <h6 className="navigation___h6">Sobre</h6>
            <h6 className="navigation___h6">FAQ</h6>
          </div>
          <div className="navigation___btn">
            <button className="navigation---button">
              <img className="span__svg" src="./MetaMask logo.svg" alt="" />
              Conectar carteira
            </button>
          </div>
          <div className="div__content">
            <p>
              Mercado digital para colecionáveis em <br /> criptos e tokens não
              fungível (NFT). <br /> Compre, venda e descubra ativos digitais{" "}
              <br /> exclusivos para você.
            </p>
            <span>
              <img src="./Avatars.png" alt="" />
              <h1>Artistas selecionados</h1>
              <h1>+10</h1>
            </span>
            <h1>
              Descubra a verdadeira <br /> arte digital e <br /> colecione
              diversas
            </h1>
            <h3>NFTs</h3>
            <img className="img--content" src="./Badge.svg" alt="" />
            <div className="div--navigation">
              <img src="./galeria-1.png" alt="" />
              <img src="./galeria-2.png" alt="" />
              <img src="./galeria-3.png" alt="" />
              <img src="./galeria-4.png" alt="" />
              <img src="./galeria-5.png" alt="" />
              <img src="./galeria-6.png" alt="" />
              <img src="./galeria-7.png" alt="" />
              <img src="./galeria-8.png" alt="" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
