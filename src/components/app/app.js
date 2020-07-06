import React from "react";
import "./app.css";
import {Route, Switch} from "react-router-dom";
import {HomePage, CartPage} from "../pages"
import ShopHeader from "../shop-header";

const App = () => {
    return (
        <main role={"main"} className={"container"}>
            <ShopHeader numItems={5} total={200}/>

            <Switch>
                <Route
                    exact
                    path={"/"}
                    component={HomePage}
                />

                <Route
                    exact
                    path={"/cart"}
                    component={CartPage}
                />

                <Route render={() => (<h2>Page not found</h2>)}/>
            </Switch>
        </main>
    );
}

export default App;