/*
TITLE:
Transform Props using Recompose

DESCRIPTION:
Learn how to use the 'mapProps' higher-order component to modify an
existing component’s API (its props). 'mapProps' takes incoming props
and changes them however you’d like; for example, filtering the props
by a field.
*/

import React from 'react';

let index = 0;
const User = ({ name, status }) =>
    <div className="User">{ name }—{ status }</div>

const UserList = ({ users }) =>
    <div className="UserList">
        { users && users.map((user) => <User key={index++} {...user} />)}
    </div>;


const users = [
    { name: "Tim", status: 'active' },
    { name: "Bob", status: 'active' },
    { name: "Joe", status: 'active' },
    { name: "Jim", status: 'inactive' },
];

const App = () =>
    <div className="App">
        <h3>active users</h3>
        <UserList users={ users.filter(u => u.status === 'active')} />

        <h3>inactive users</h3>
        <UserList users={ users.filter(u => u.status === 'inactive')} />

        <h3>pending users</h3>
        <UserList users={ users.filter(u => u.status === 'pending')} />
    </div>

export default App;
