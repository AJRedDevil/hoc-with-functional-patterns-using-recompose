/*
TITLE:
Set the HTML Tag of a Component via a Prop using Recompose

DESCRIPTION:
Learn how to user the ‘componentFromProp’ helper and ‘defaultProps’
higher order component to swap the underlying html tag of your
component. Sometimes we want a component to behave the same overall
but to use a different element in the HTML output. An example is
swapping an <a> for a <button> or even a react router <Link>
depending on circumstance.
*/

import React from 'react';

const App = () =>
    <div className="App">
        <a href='#/page1'>Anchor Link</a>
        <button onClick={ window.location='#/page2' }>Button Link</button>
    </div>

export default App;
