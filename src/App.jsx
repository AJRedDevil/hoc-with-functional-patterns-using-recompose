import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, setPropTypes } from 'recompose';

const { connect } = Redux();

// We don't want this
// nesting of everything
// const User = connect()(setPropTypes({})(setDisplayName('User')(({ name, status }) =>
//     <div className="User">
//         { name }: { status }
//     </div>
// )));

// Instead compose these hoc into one
const enhance = compose(
    setDisplayName('User'),
    setPropTypes({
        name: PropTypes.string.isRequired,
        status: PropTypes.string
    }),
    connect()
);

const User = enhance(({ name, status, dispatch }) =>
    <div
        className="User"
        onClick={() => dispatch({ type: 'USER_SELECTED' })}>
        { name }: { status }
    </div>
);

console.log(User.displayName);

const App = () =>
    <div>
        <User name="AJRedDevil" status="active" />
    </div>

export default App;


// fake implementation of redux
function Redux() {
    return {
        connect: () => (BaseComponent) => (props) =>
            <BaseComponent
                {...props}
                dispatch={ ({ type }) => console.log(type + ' dispatched')}
            />
    }
}