const Post = () => {
  const view = `
					<article class="post">
            <h3 class="post__title">Title</h3>
            <div class="post__description">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora officia voluptas ut magnam a voluptatem nostrum, aut
                consequuntur nobis aliquid voluptates ducimus deserunt minima
                repellendus.
              </p>
            </div>

            <div class="post__buttons">
              <a href="">LEER MAS</a>
            </div>
          </article>`;
  return view;
};

export default Post;
