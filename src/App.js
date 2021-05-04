import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// DataBase
import { DataBase } from "./.firebase/Firebase";

function App() {
    const [cartItems, setCartItems] = useState([]);
    const getCartItems = () => {
        DataBase.collection("cartItems").onSnapshot((snapshot) => {
            let tempCartItems = [];
            tempCartItems = snapshot.docs.map((doc) => ({
                id: doc.id,
                product: doc.data(),
            }));
            setCartItems(tempCartItems);
        });
    };

    useEffect(() => {
        getCartItems();
    }, []);
    return (
        <Router>
            <div className="App">
                <Header />

                <Switch>
                    <Route path="/cart">
                        <Cart cartItems={cartItems} />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
