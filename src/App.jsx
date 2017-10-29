/*
TITLE:
Flatten a Prop using Recompose

DESCRIPTION:
Learn how to use the ‘flattenProp’ higher order component to take a
single object prop and spread each of its fields out as a prop.
*/
import React from 'react';
import { withProps } from 'recompose';

const { connect } = ReactRedux();

const mapStateToProps = (state) => ({ user: state.user });


const User = connect(mapStateToProps)(({ user }) =>
    <div className="User"> { user.name } - { user.status } </div>
);

const App = () =>
    <div className="App">
        <User />
    </div>;

export default App;


// Mock Implemenation of ReactRedux connect
function ReactRedux() {
    const state = {
        user: { name: 'Tim', status: 'active' }
    };

    return {
        connect: (map) => withProps(map(state))
    }
}