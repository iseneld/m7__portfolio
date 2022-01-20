import React from "react";
import Main from "./components/Main";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import listItems from "./components/landingList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Main menu={listItems} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-post" element={<BlogPost />} />
      </Routes>
    </>
  );
}

export default App;
