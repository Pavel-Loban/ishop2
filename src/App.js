import React from "react";
import './App.scss';

import Store from "./Components/Store/Store";




function App({products, remove}) {



  return (
    <div className="App">

      <div>
      <h1 className={'title'} >Каталог товаров</h1>
      </div>
    <Store  remove={remove}  products={products}/>


    </div>
  );

}

export default App;
