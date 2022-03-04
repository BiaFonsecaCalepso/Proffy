import React from "react";
import ReactDOM from "react-dom"; //Dom é quem manipula o HTML
import App from "./App";

ReactDOM.render( //StrictMode - alerta para potenciais problemas nas aplicação
  <React.StrictMode> 
      <App/>
  </React.StrictMode>, 
  document.getElementById("root")  //root é a tag inicial da aplicação - getElementByID roda em cima do body do index HTML na pasta public.
)