import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";

const BlogPost = () => {
  function darkMode(e) {
    e.preventDefault(); // Added to prevent page reload on click.
    document.querySelector("body").classList.toggle("dark-mode");
  }

  const [post, setPost] = useState();

  useEffect(() => {
    fetch("./data/posts.json")
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  const match = useParams();

  console.log(match);

  return (
    <>
      <Header />
      <main>
        <section className="landing__top">
          <section className="landing__banner">
            <button className="dark-mode-button" onClick={darkMode}>
              Dark Mode (Beta)
            </button>
          </section>
          <section>
            <article className="blog__post">
              <h1>{match.post}</h1>
              {post && (
                <>
                  <h2>{post[0].title}</h2>
                  <h5>{post[0].fullSummary}</h5>
                  <section
                    dangerouslySetInnerHTML={{ __html: post[0].content }}
                  ></section>
                  <p>
                    <Link to="/blog">Back to blog page</Link>
                  </p>
                </>
              )}
            </article>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
