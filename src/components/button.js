import React from 'react';
import { getColorClass } from './helperFunctions';

export default (props) => {

    const btnColor = getColorClass('btn', props.color);
    return (
        <button className={`btn ${btnColor}`} onClick={(event) => props.click(event)}>{props.label}</button>
    )
}