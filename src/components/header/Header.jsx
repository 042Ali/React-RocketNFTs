import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="Header">
        <div className="Header__aa">
          <h1>10K+</h1>
          <p>Artes</p>
        </div>
        <div className="Header__bb">
          <h1>200+</h1>
          <p>Vendas</p>
        </div>
        <div className="Header__cc">
          <h1>20</h1>
          <p>Artistas</p>
          <hr className="new2" />
        </div>
        <img className="Header___text" src="./banner.jpg" alt="" />
        <hr className="new1" />
        <div className="Header___text">
          <div className="lorem8">
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Congue malesuada amet <br /> pretium lacus. Id potenti diam et
              cras odio <br /> viverra. Amet, velit ut hac sit. Enim ultricies{" "}
              <br />
              mauris mattis nunc semper.
            </p>
            <a href="#">Lorem ipsum</a>
          </div>

          <div className="lorem7">
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Congue malesuada amet <br /> pretium lacus. Id potenti diam et
              cras odio <br /> viverra. Amet, velit ut hac sit. Enim ultricies{" "}
              <br />
              mauris mattis nunc semper.
            </p>
            <a href="#">Lorem ipsum</a>
          </div>
        </div>
      </div>
    </header>
  );
}
