import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";

function App() {
  return (
    <page className="root container">
      <Header isLoggedIn={true} />
      {/*<Main />*/}
        <Movies />
      <Footer />
    </page>
  );
}

export default App;
