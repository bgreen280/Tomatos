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
import MarketCreator from '../components/MarketCreator';
import MarketsDisplay from '../components/MarketsDisplay';

const mapStateToProps = ({ markets }) => ({
    newLocation: markets.newLocation,
    totalCards: markets.totalCards,
    marketList: markets.marketList,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const MarketsContainer = props => (
    <div className="innerbox">
        <MarketCreator
            newLocation={props.newLocation}
            updateLocation={props.updateLocation}
            addMarket={props.addMarket}
        />
        <MarketsDisplay
            totalCards={props.totalCards}
            marketList={props.marketList}
            addCard={props.addCard}
            deleteCard={props.deleteCard}
        />
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);
