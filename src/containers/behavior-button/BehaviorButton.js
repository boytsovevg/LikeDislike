import React from 'react';
import './BehaviorButton.css';

const BehaviorButton = ({variant, count, active, toggleActiveChange}) => {

    return (
        <button
            className={`${active ? 'behavior-button behavior-button_active' : 'behavior-button'}`}
            onClick={toggleActiveChange}
        >
            { variant } | <span>{ count }</span>
        </button>
    )
}

export default BehaviorButton;
