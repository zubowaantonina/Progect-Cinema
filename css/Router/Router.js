import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardProduct from "../CardProduct/CardProduct";
import Header from "../Header/Header";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/header" component={Header}></Route>
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/Register" component={Register}></Route>
        {/* ваши роуты или приватРоуты*/}
        <Route exact path="/CardProduct" component={CardProduct}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
