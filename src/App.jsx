/*
TITLE:
Add Local State to a Functional Stateless Component using Recompose

DESCRIPTION:
Learn how to use the 'withState' and 'withHandlers' higher order
components to easily add local state to your functional stateless
components. No need for classes!
*/

import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

const StatusList = () =>
    <div className="StatusList">
        <div>pending</div>
        <div>inactive</div>
        <div>active</div>
    </div>

const Status = withState('listShown', 'setListVisible', false)(
    ({ status, listShown, setListVisible }) =>
        <span onClick={ () => setListVisible((x) => !x) }>
            { status }
            { listShown && <StatusList /> }
        </span>
);

const Tooltip = withState('tooltipShown', 'setTooltipVisible', false)(
    ({ text, children, tooltipShown, setTooltipVisible }) =>
        <span>
            { tooltipShown && <div className="Tooltip">{ text }</div> }
            <span
                onMouseEnter={() => setTooltipVisible(true) }
                onMouseLeave={() => setTooltipVisible(false) }
            >
                { children }
            </span>
        </span>
);

const User = ({ name, status }) =>
    <div className="User">
        <Tooltip text="Cool Dude!">{ name }</Tooltip>—
        <Status status={ status } />
    </div>;

const App = () =>
    <div>
        <User name="AJRedDevil" status="active" />
    </div>

export default App;
