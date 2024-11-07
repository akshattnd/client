import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Loading from "./components/common/Loading";
import Home from "./pages/Home";
import User from "./pages/User";
import Search from "./pages/Search";
import Add from "./pages/Add";
import Activities from "./pages/Activities";
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="add" element={<Add />}></Route>
          <Route path="activities" element={<Activities />}></Route>
          <Route path="user" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
