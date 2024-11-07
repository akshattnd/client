import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Loading from "./components/common/Loading";
import Home from "./pages/Protected/Home";
import User from "./pages/Protected/User";
import Search from "./pages/Protected/Search";
import Add from "./pages/Protected/Add";
import Activities from "./pages/Protected/Activities";

import NotFound from "./pages/NotFound";
import SingUp from "./pages/SingUp";
import SingIn from "./pages/SignIn";
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1>protected</h1>}>
            <Route path="" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="add" element={<Add />} />
            <Route path="activities" element={<Activities />} />
            <Route path="user" element={<User />} />
          </Route>
          <Route path="sign-up" element={<SingUp />} />
          <Route path="sign-in" element={<SingIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
