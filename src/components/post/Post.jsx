import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="/images/post-image.png" alt="water falls" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
        nesciunt. Voluptates iusto eaque fugit laborum laudantium atque
        cupiditate corporis animi aut ad! Laudantium molestiae asperiores soluta
        vero fugiat ipsa? Consequuntur. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Quibusdam, nesciunt. Voluptates iusto eaque fugit
        laborum laudantium atque cupiditate corporis animi aut ad! Laudantium
        molestiae asperiores soluta vero fugiat ipsa? Consequuntur. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Quibusdam, nesciunt.
        Voluptates iusto eaque fugit laborum laudantium atque cupiditate
        corporis animi aut ad! Laudantium molestiae asperiores soluta vero
        fugiat ipsa? Consequuntur.
      </p>
    </div>
  );
}
