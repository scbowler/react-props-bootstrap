import React from 'react';

export default (props) => {
    return (
        <div className="jumbotron">
            <h1>{props.mainTitle}</h1>
            <p>{props.subText}</p>
        </div>
    )
}