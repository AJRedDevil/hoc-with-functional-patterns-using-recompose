import React from 'react';

const User = ({ name }) =>
    <div className="User">{ name }</div>

const App = () =>
    <div>
        <User name="AJRedDevil" />
    </div>

export default App;