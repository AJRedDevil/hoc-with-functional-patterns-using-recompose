import React, { Component } from 'react';
import { setDisplayName, setPropTypes } from 'recompose';
import { connect } from 'redux';

const User = ({ name, status }) =>
    <div className="User">
        { name }: { status }
    </div>

const App = () =>
    <div>
        <User name="AJRedDevil" status="active"/>
    </div>

export default App;