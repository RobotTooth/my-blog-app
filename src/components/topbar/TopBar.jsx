import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-github"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">PROJECTS</li>
          <li className="topListItem">CONTACT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImage"
          src="/images/profile-pic.png"
          alt="Chris Meysner"
        ></img>
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
