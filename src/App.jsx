/*
TITLE:
Add Local State to a Functional Stateless Component using Recompose

DESCRIPTION:
Learn how to use the 'withState' and 'withHandlers' higher order
components to easily add local state to your functional stateless
components. No need for classes!
*/

import React from 'react';

const User = ({ name, status, showStatus, canDeleteUsers }) =>
    <div className="User">
        { name }
        { showStatus && '—' + status }
        { canDeleteUsers && <button>X</button> }
    </div>;

const App = () =>
    <div>
        <User name="AJRedDevil" status="active"
            showStatus={ true } canDeleteUsers={ true }/>
    </div>

export default App;
