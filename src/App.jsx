/*
TITLE:
Add Lifecycle Hooks to a Functional Stateless Component using Recompose

DESCRIPTION:
Learn how to use the 'lifecycle' higher-order component
to conveniently use hooks without using a class component.
*/

import React from 'react';
import { lifecycle } from 'recompose';

const configPromise = fetchConfiguration();

const withConfig = lifecycle({
    state: { config: {} },
    componentDidMount() {
        configPromise.then(config =>
            this.setState({ config }));
    }
});

const User = withConfig(({ name, status, config }) =>
    <div className="User">
        { name }
        { config.showStatus && '—' + status }
        { config.canDeleteUsers && <button>X</button> }
    </div>
);

const App = () =>
    <div>
        <User name="AJRedDevil" status="active" />
    </div>

export default App;


// Mock Configuration

const config = {
    showStatus: true,
    canDeleteUsers: true
};

function fetchConfiguration() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(config), 300);
    });
}