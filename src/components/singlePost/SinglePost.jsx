import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="./images/post-image.png"
          alt=""
        ></img>
        <h1 className="singlePostTitle">
          Lorem ipsum dolor, sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Chris</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
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
