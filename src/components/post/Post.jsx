import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="post-img"
        src="/images/post-image.png"
        alt="water falls"
      />
      <div className="post-info">
        <div className="post-cats">
          <span className="post-cat">Music</span>
          <span className="post-cat">Life</span>
        </div>
        <span className="post-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <hr />
        <span className="post-date">1 hour ago</span>
      </div>
      <p className="post-desc">
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
