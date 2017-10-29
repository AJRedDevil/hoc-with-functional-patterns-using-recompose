/*
TITLE:
Replace a Component with Non-Optimal States using Recompose

DESCRIPTION:
Learn how to use the ‘branch’ and ‘renderComponent’
higher-order components to show errors or messaging when
your component is in a non-optimal state. Avoid putting
extraneous logic to show errors or messaging into your
core component by organizing your non-optimal states into
custom higher-order components.
*/

import React from 'react';
import { lifecycle } from 'recompose';

const User = ({ name, status}) =>
    <div className="User"> { name }-{ status } </div>;

const withUserData = lifecycle({
    componentDidMount() {
        fetchData().then(
            (users) => this.setState({ users }),
            (error) => this.setState({ error })
        );
    }
});

const UNAUTHENTICATED = 401;
const UNAUTHORIZED = 403;
const errorMsgs = {
    [UNAUTHENTICATED]: 'Not Authenticated!',
    [UNAUTHORIZED]: 'Not Authorized!',
};

const AuthError = ({ error }) =>
    error.statusCode &&
        <div className="Error">{ errorMsgs[error.statusCode] }</div>;

const NoUsersMessage = () =>
    <div>There are no users to display</div>;

const UserList = withUserData(({ users, error }) =>
    error && error.statusCode && <AuthError error={ error } /> ||
    users && users.length === 0 && <NoUsersMessage /> ||
    <div className="UserList">
        { users && users.map((user) => <User {...user} />) }
    </div>
);

const App = () =>
    <div>
        <UserList />
    </div>;

export default App;


// Mock Service
const noUsers = [];
const users = [
    { name: "Tim", status: "active" },
    { name: "Bob", status: "active" },
    { name: "Joe", status: "inactive" },
    { name: "Jim", status: "pending" },
];
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject({ statusCode: UNAUTHENTICATED });
            // reject({ statusCode: UNAUTHORIZED })
            // resolve(noUsers);
            resolve(users);
        }, 100);
    });
}