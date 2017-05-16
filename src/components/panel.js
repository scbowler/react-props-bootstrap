import React from 'react';
import { getColorClass } from './helperFunctions';

export default (props) => {
    
    const panelColor = getColorClass('panel', props.color);
    return (
        <div className={`panel ${panelColor}`}>
            { (props.heading) ? 
                <div className="panel-heading">
                    <div className="panel-title">{props.heading}</div>
                </div>
            : '' }
            <div className="panel-body">{props.body || ''}</div>
        </div>
    )
}