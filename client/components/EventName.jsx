/**
* ************************************
*
* @module  Market
* @author
* @date
* @description presentation component that renders a single box for each market
*
* ************************************
*/

import React from 'react';

const Event = ({
    name,
}) => (
    <form onSubmit={addName}>
        <input
            id="add-name"
            value={addName}
            onChange={e => addName(e.target.value)}
        />
    </form>
);

export default Event;
