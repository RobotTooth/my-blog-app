import "./sidebar.css";

export default function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-item">
          <span className="sidebar-title">ABOUT ME</span>
          <img
            src="/images/profile-pic-2.png"
            alt="Chirs Meysner"
            className="profile-img"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero
            necessitatibus dolor quod architecto iure possimus officiis iste
            dignissimos, voluptatem excepturi quidem cum nobis odit qui ducimus
            aspernatur laborum accusamus?
          </p>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-title">CATEGORIES</span>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">Life</li>
            <li className="sidebar-list-item">Art</li>
            <li className="sidebar-list-item">Family</li>
            <li className="sidebar-list-item">Gaming</li>
            <li className="sidebar-list-item">Television</li>
            <li className="sidebar-list-item">Movies</li>
          </ul>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-title">FOLLOW ME</span>
          <div className="sidebar-social">
            <i className="sidebar-icon fa-brands fa-square-facebook"></i>
            <i className="sidebar-icon fa-brands fa-github"></i>
            <i className="sidebar-icon fa-brands fa-linkedin"></i>
            <i className="sidebar-icon fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </>
  );
}
