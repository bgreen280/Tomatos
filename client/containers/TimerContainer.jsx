/**
* ************************************
*
* @module  MarketsContainer
* @author
* @date
* @description component that renders MarketCreator and Market
*
* ************************************
*/

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
// import TimerDisplay from '../components/TimerDisplay';
// import EventNameDisplay from '../components/EventNameDisplay';
// import LabelDisplay from '../components/LabelDisplay';
// import ButtonDisplay from '../components/ButtonDisplay';

const mapStateToProps = ({ Timer }) => ({

});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const MarketsContainer = props => (
    <div className="innerbox">
        {/* <TimerDisplay />
        <EventNameDisplay />
        <LabelDisplay />
        <ButtonDisplay /> */}
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);
