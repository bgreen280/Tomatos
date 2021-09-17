/**
* ************************************
*
* @module  MainContainer
* @author
* @date
* @description stateful component that renders TotalsDisplay and MarketsContainer
*
* ************************************
*/

import React from 'react';
import { connect } from 'react-redux';
import TimerContainer from './TimerContainer';
import * as actions from '../actions/actions';

const mapStateToProps = ({
    markets: { totalCards, totalMarkets, synced },
    }) => ({
        totalCards,
        totalMarkets,
        synced,
});

const mapDispatchToProps = dispatch => ({
syncMarkets: () => dispatch(actions.syncMarkets()),
});

const MainContainer = props => (
    <div className="container">
        <div className="outerBox">
            <h1 id="header">Timed Green Tomatos</h1>
            <TimerContainer />
        </div>
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
