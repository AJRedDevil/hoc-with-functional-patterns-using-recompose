/*
TITLE:
Render Nothing in Place of a Component using Recompose

DESCRIPTION:
Learn how to use the ‘branch’ and ‘renderNothing’ higher-order
components to render nothing when a certain prop condition is
met. Sometimes you only want to render a component when valid
props exist or are in a certain condition; ‘renderNothing’ is
an easy way to completely remove the component when you don’t
need to show it.
*/

import React from 'react';

const User = ({ name, status}) =>
    <div className="User"> { name }-{ status } </div>;

const FeaturedUser = ({ name, status }) =>
    <div>
        <h3>Today's Featured User</h3>
        <User name={ name } status={ status } />
        <hr />
    </div>;

const UserList = ({ users }) =>
    <div className="UserList">
        <h3>All Users</h3>
        { users && users.map((user) => <User key={user.name} {...user} />)}
    </div>;

const users = [
    { name: "Tim", status: "active" },
    { name: "Bob", status: "active" },
    { name: "Joe", status: "inactive" },
    { name: "Jim", status: "pending" },
];

const featured = users[getRandomInt(0, 3)];

const App = () =>
    <div className="App">
        <h2>User Management</h2>
        <hr />
        <FeaturedUser name={ featured.name } status={ featured.status } />
        <UserList users= { users } />
    </div>;

export default App;


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}