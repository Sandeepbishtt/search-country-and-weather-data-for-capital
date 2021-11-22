import React from "react";
import CountryDetail from "./Components/CountryDetail";
import InputForm from "./Components/SearchCountry";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={InputForm} />
        <Route exact path="/CountryDetail" component={CountryDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
