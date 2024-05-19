import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        <img
          className="single-post-img"
          src="./images/post-image.png"
          alt=""
        ></img>
        <h1 className="single-post-title">
          Lorem ipsum dolor, sit amet
          <div className="single-post-edit">
            <i className="single-post-icon fa-regular fa-pen-to-square"></i>
            <i className="single-post-icon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="single-post-info">
          <span className="single-post-author">
            Author: <b>Chris</b>
          </span>
          <span className="single-post-date">1 hour ago</span>
        </div>
        <p className="single-post-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe
          et accusantium, necessitatibus quas excepturi facilis rerum quia
          repudiandae quo corporis veniam numquam adipisci dicta consequuntur
          non, voluptas nemo reiciendis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Alias saepe et accusantium, necessitatibus quas
          excepturi facilis rerum quia repudiandae quo corporis veniam numquam
          adipisci dicta consequuntur non, voluptas nemo reiciendis. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Alias saepe et
          accusantium, necessitatibus quas excepturi facilis rerum quia
          repudiandae quo corporis veniam numquam adipisci dicta consequuntur
          non, voluptas nemo reiciendis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Alias saepe et accusantium, necessitatibus quas
          excepturi facilis rerum quia repudiandae quo corporis veniam numquam
          adipisci dicta consequuntur non, voluptas nemo reiciendis. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Alias saepe et
          accusantium, necessitatibus quas excepturi facilis rerum quia
          repudiandae quo corporis veniam numquam adipisci dicta consequuntur
          non, voluptas nemo reiciendis.
        </p>
      </div>
    </div>
  );
}
