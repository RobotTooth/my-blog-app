import "./topbar.css";

function TopBar() {
  return (
    <div className="top">
      <div className="top-left">
        <i className="top-icon fa-brands fa-square-facebook"></i>
        <i className="top-icon fa-brands fa-github"></i>
        <i className="top-icon fa-brands fa-linkedin"></i>
        <i className="top-icon fa-brands fa-instagram"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">HOME</li>
          <li className="top-list-item">ABOUT</li>
          <li className="top-list-item">ART WORK</li>
          <li className="top-list-item">PROJECTS</li>
          <li className="top-list-item">CONTACT</li>
        </ul>
      </div>
      <div className="top-right">
        <img
          className="top-image"
          src="/images/profile-pic.png"
          alt="Chris Meysner"
        ></img>
        <i className="top-search-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default TopBar;
