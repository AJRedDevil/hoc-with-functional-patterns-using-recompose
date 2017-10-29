import React, { Component } from 'react';

const overrideProps = (overrideProps) => (BaseComponent) => (props) =>
    <BaseComponent {...props} {...overrideProps} />;

const alwaysBob = overrideProps({ name: 'Bob' });

const neverRender = (BaseComponent) =>
    class extends Component {
        shouldComponentUpdate() {
            return false;
        }

        render() {
            return <BaseComponent {...this.props} />;
        }
    }

const User = ({ name }) =>
    <div className="User">{ name }</div>

const User2 = alwaysBob(User);
const User3 = neverRender(User);

const App = () =>
    <div>
        <User name="AJRedDevil" />
        <User2 name="AJAzzurri" />
        <User3 name="Steve" />
    </div>

export default App;