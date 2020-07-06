import React from "react";
import ReactDOM from "react-dom"
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import BookStoreService from "./services/bookstore-service";
import {BookstoreServiceProvider} from "./components/bookstore-service-context";

import store from "./store";

const bookStoreService = new BookStoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServiceProvider value={bookStoreService}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById("root")
);
