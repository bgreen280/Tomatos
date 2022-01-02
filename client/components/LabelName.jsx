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
import LabeledText from './_LabeledText';

const Event = ({
    label,
}) => (
    <div>
        <form onSubmit={addLabel}>
            <input
                id="label"
                value={label}
                onChange={e => updateSelectedLabel(e.target.value)}
            />
            <button 
                id="label" 
                className="primary" 
                type="submit">
                <LabeledText 
                    label="Add" 
                    text="Add" 
                    />
            </button>
        </form>
    </div>
);

export default Event;
