import "./App.css";
import React from "react";
// import Blog from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// import Layout from "./pages/Layout";
// import { Routes, Route } from "react-router-dom";
import "./css/style.css"
import PersonList from "./API/PersonList";

const App = () => {
  return (
    // <Routes>
    //   <Route index element={<Layout />}></Route>
    //   <Route path="/home" element={<Home />}></Route>
    //   <Route path="blogs" element={<Blog />}></Route>
    //   <Route path="contact" element={<Contact />}></Route>
    // </Routes>
    <div>
      <PersonList />
    </div>
    
  );
};

export default App;
