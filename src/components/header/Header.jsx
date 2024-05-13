import "./header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header-titles">
          <span className="header-title-sm">React & Node</span>
          <span className="header-title-lg">Blog</span>
        </div>
        <img
          className="header-img"
          src="/images/home-background-original.png"
          alt="Salta de Aticama"
        ></img>
      </div>
    </>
  );
}
