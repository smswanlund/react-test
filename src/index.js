import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import "./index.css";
import App from "./App";
import ADD_PRODUCTS from "./actions/product";
import rootReducer from "./reducers";

// Create Store, Wrap the Provider Component to the App

//store
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//display
store.subscribe(()=>console.log(store.getState()));

//dispatch
store.dispatch(ADD_PRODUCTS());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
