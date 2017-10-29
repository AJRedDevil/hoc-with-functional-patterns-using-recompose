/*
TITLE:
Lock Props using Recompose

DESCRIPTION:
Learn how to use the ‘withProps’ higher order component to pre-fill a prop,
unable to be overridden.
*/

import React from 'react';

const App = () =>
    <div className="App">
        <header>
            <a href='#/'>Logo</a>
        </header>
        <nav>
            <a href='#/'>Home</a>
            <a href='#/products'>Products</a>
            <a href='#/checkout'>Checkout</a>
        </nav>
    </div>;

export default App;
