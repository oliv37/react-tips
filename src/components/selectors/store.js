import { createStore } from 'redux';
import { initialState } from './utils';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state, 
                counter: state.counter + 1
            };
        case 'TOGGLE_TYPE': {
            const typeToToggle = action.payload;

            const types = state.types.indexOf(typeToToggle) !== -1
                ? state.types.filter(type => type !== typeToToggle)
                : [...state.types, typeToToggle]

            return {
                ...state,
                types
            };
        }
        default:
            return state;
    }
}

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, enhancer);

export default store;
