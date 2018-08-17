import React from "react";
import classNames from 'classnames';
import { GREEN_TYPE, BLUE_TYPE } from './utils';

const Ingredient = ({name, type}) => {
    const className = classNames({
        'text-success': type === GREEN_TYPE,
        'text-primary': type === BLUE_TYPE
    });

    return (
        <div className="ingredient">
            <img src={`/img/${name}.svg`} />
            <span className={className}>{name}</span>
        </div>
    );
};

export default Ingredient;
