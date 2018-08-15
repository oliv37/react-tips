import React from 'react';
import { connect } from 'react-redux';

const Counter = ({increment, counter}) => (
    <div className="mt-2">
        <button type="button" className="btn btn-info" onClick={increment}>
            Increment
        </button>
        <span className="mx-3 font-weight-bold">{counter}</span>
    </div>
);

const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch({type: 'INCREMENT'})
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
