import React from 'react';

import Header from "./Page/Header.js"
import Footer from './Page/Footer.js'
import MenuUtama from "./Page/MenuUtama"
import MenuTentangKami from "./Page/MenuTentangKami"
import MenuKontak from "./Page/MenuKontak"
import MenuMakanan from "./Page/MenuMakanan"

function App() {

  return (
    <div>
      <Header  />
      <MenuUtama />
      <MenuMakanan />
      <MenuTentangKami />

      <MenuKontak />
      <Footer />



    </div>
  );
}


export default App;
