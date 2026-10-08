import React from "react";
import blogs from "../blogsData";

const BlogsPage = () => {
  return (
    <main className="main">
      <div className="container">
        <section className="section">
          <p className="section-label">Blogs</p>

          {blogs.length === 0 ? (
            <p className="blog-empty">No blogs for now.</p>
          ) : (
            blogs.map((post) => (
              <article key={post.id} className="blog-post">
                <div className="blog-header">
                  <h2 className="blog-title">{post.title}</h2>
                  {post.date ? (
                    <span className="blog-date">{post.date}</span>
                  ) : null}
                </div>
                <div className="blog-body">
                  {post.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))
          )}
        </section>
      </div>
    </main>
  );
};

export default BlogsPage;
