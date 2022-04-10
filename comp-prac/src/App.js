import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Article from "./pages/Article";
import ArticleItem from "./Components/ArticleItem";
import Announcement from "./pages/Announcement";
import Apply from "./pages/Apply";

const dummyCards = [
  { id: 1, title: "언론보도", content: "1번 컨텐츠", date: "220322" },
  { id: 2, title: "언론보도", content: "2번 컨텐츠", date: "220323" },
  { id: 3, title: "언론보도", content: "3번 컨텐츠", date: "220324" },
  { id: 4, title: "언론보도", content: "4번 컨텐츠", date: "220325" },
  { id: 5, title: "언론보도", content: "5번 컨텐츠", date: "220326" },
  { id: 6, title: "언론보도", content: "6번 컨텐츠", date: "220327" },
  { id: 7, title: "언론보도", content: "7번 컨텐츠", date: "220328" },
  { id: 8, title: "언론보도", content: "8번 컨텐츠", date: "220329" },
];

export const ArticleContext = React.createContext();

const App = () => {
  return (
    <ArticleContext.Provider value={dummyCards}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/article/:id" element={<ArticleItem />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </BrowserRouter>
    </ArticleContext.Provider>
  );
};

export default App;
