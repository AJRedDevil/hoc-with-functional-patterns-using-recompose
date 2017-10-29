/*
TITLE:
Show a Spinner While a Component is Loading using Recompose

DESCRIPTION:
Learn how to use the 'branch' and 'renderComponent'
higher-order components to show a spinner while a
component loads.
*/
import React from 'react';
import { lifecycle } from 'recompose';

const withUserData = lifecycle({
    componentDidMount() {
        fetchData().then((data) =>
            this.setState(data));
    }
});

const User = withUserData(({ name, status}) =>
    !name || !status ?
        <div className="Spinner">
            <div className="loader">Loading...</div>
        </div> :
    <div className="User"> { name }-{ status } </div>
);

const App = () =>
    <div className="App">
        <User />
    </div>;

export default App;


function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ name: "Tim", status: "active" }), 1500);
    });
}