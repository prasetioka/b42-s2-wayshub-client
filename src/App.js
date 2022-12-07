import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import SignUpPage from "./pages/SignUpPage"
import SignInPage from "./pages/SignInPage"
import HomePage from "./pages/HomePage"
import AddVideo from "./pages/AddVideo"
import CreatorPage from "./pages/CreatorPage"
import MyChannelPage from "./pages/MyChannelPage";
import EditChannel from "./pages/EditChannel"
import DetailVideoPage from "./pages/DetailVideoPage";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/SignUpPage' element={<SignUpPage/>} />
          <Route exact path='/SignInPage' element={<SignInPage/>} />
          <Route exact path='/AddVideo' element={<AddVideo/>} />
          <Route exact path='/CreatorPage' element={<CreatorPage/>} />
          <Route exact path='/MyChannelPage' element={<MyChannelPage/>} />
          <Route exact path='/EditChannel' element={<EditChannel/>} />
          <Route exact path='/DetailVideoPage' element={<DetailVideoPage/>} />
        </Routes>
    </Router>
  );
}

export default App;
