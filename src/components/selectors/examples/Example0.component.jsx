import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { BLUE_TYPE, GREEN_TYPE, filterByType } from '../utils';

class Example0 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        toast.info("Render");

        const {blueIngredients, greenIngredients} = this.props;

        const blueContent = blueIngredients.map(ingredient =>
            <div key={ingredient.name}>{ingredient.name}</div>
        );

        const greenContent = greenIngredients.map(ingredient =>
            <div key={ingredient.name}>{ingredient.name}</div>
        );

        return (
            <div className="my-2 row text-center">
                <div className="col border border-primary mx-1">
                    {blueContent}
                </div>
                <div className="col border border-success mx-1">
                    {greenContent}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    toast.info("mapStateToProps");

    return {
        blueIngredients: filterByType(state.ingredients, BLUE_TYPE),
        greenIngredients: filterByType(state.ingredients, GREEN_TYPE)
    };
};

export default connect(mapStateToProps)(Example0);
