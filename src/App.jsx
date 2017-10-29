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
import { mapProps } from 'recompose';

let index = 0;
const User = ({ name, status }) =>
    <div className="User">{ name }—{ status }</div>

const UserList = ({ users, status }) =>
    <div className="UserList">
    <h3>{ status} users</h3>
        { users && users.map((user) => <User key={index++} {...user} />)}
    </div>;


const users = [
    { name: "Tim", status: 'active' },
    { name: "Bob", status: 'pending' },
    { name: "Joe", status: 'active' },
    { name: "Jim", status: 'inactive' },
];

const filterByStatus = (status) => mapProps(
    ({ users }) => ({
        status,
        users: users.filter(u => u.status === status)
    })
);

const ActiveUsers = filterByStatus('active')(UserList)
const InactiveUsers = filterByStatus('inactive')(UserList)
const PendingUsers = filterByStatus('pending')(UserList)

const App = () =>
    <div className="App">
        <ActiveUsers users={ users } />
        <InactiveUsers users={ users } />
        <PendingUsers users={ users } />
    </div>

export default App;
