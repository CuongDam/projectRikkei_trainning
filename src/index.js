import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Blog from './pages/Blogs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Appp(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route index element={<Home />}></Route>
        <Route path='blogs' element={<Blog />}></Route>
        <Route path='contact' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
);
}
ReactDOM.render(<Appp />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
