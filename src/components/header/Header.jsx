import "./header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img
          className="headerImg"
          src="/images/home-background-original.png"
          alt="Salta de Aticama"
        ></img>
      </div>
    </>
  );
}
