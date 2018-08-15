import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { createSelector } from 'reselect'
import classNames from 'classnames';
import { GREEN_TYPE, BLUE_TYPE } from '../utils';

const getIngredients = createSelector(
    state => state.ingredients,
    state => state.types,
    (ingredients, types) => {
        toast.info("resultFunc selector");
        return ingredients.filter(({type}) => types.indexOf(type) !== -1)
    }
);

class Example2 extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange = event => {
        const {target} = event;

        this.props.dispatch({
            type: 'TOGGLE_TYPE',
            payload: target.value
        });
    }

    render() {
        toast.info("Render");
        const {ingredients, types} = this.props;

        const content = ingredients
        .map(({name, type}) => {
            const className = classNames({
                'text-success': type === GREEN_TYPE,
                'text-primary': type === BLUE_TYPE
            });

            return <div key={name} className={className}>{name}</div>
        });

        return (
            <div className="my-2 text-center">
                
                <label className="mx-1 text-primary">
                    <input type="checkbox" 
                        value={BLUE_TYPE} 
                        onChange={this.handleChange}
                        checked={types.indexOf(BLUE_TYPE) !== -1} />
                    {BLUE_TYPE}
                </label>

                <label className="mx-1 text-success">
                    <input type="checkbox" 
                        value={GREEN_TYPE} 
                        onChange={this.handleChange}
                        checked={types.indexOf(GREEN_TYPE) !== -1} />
                    {GREEN_TYPE}
                </label>
                
                {content}
            </div>
        );
    }
}

const mapStateToProps = state => {
    toast.info("mapStateToProps");

    /*
    // Sans selecteur, la fonction render est exécutée à chaque modification du store

    const ingredients = state.ingredients
        .filter(({type}) => state.types.indexOf(type) !== -1);

    return {
        ingredients,
        types: state.types
    };
    */
    
    return {
        ingredients: getIngredients(state),
        types: state.types
    };
};

export default connect(mapStateToProps)(Example2);
