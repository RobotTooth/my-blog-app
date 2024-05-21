import "./sidebar.css";

export default function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img
            src="/images/profile-pic-2.png"
            alt="Chirs Meysner"
            className="profileImg"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero
            necessitatibus dolor quod architecto iure possimus officiis iste
            dignissimos, voluptatem excepturi quidem cum nobis odit qui ducimus
            aspernatur laborum accusamus?
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Art</li>
            <li className="sidebarListItem">Family</li>
            <li className="sidebarListItem">Gaming</li>
            <li className="sidebarListItem">Television</li>
            <li className="sidebarListItem">Movies</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW ME</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-github"></i>
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </>
  );
}
