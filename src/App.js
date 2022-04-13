import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Streaming from "./pages/Streaming";
import Blog from "./pages/Blog";
import Page404 from "./pages/Page404";
import Sandbox from "./pages/Sandbox";
import BlogPost from "./pages/BlogPost";
import linkList from "./components/linkList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home linkList={linkList} />} />
        <Route path="/streaming" element={<Streaming />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:post" element={<BlogPost />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
