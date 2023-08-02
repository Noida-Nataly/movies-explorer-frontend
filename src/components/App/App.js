import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";
import Main from "../Main/Main";

function App() {
  return (
    <page className="root container">
      <Header isLoggedIn={true} />
      <Main />
      <Footer />
    </page>
  );
}

export default App;
