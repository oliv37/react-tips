import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const initialState = { name: 'Paul' };
const store = createStore((state = initialState) => state);

class Hello extends React.Component {
    
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

const mapStateToProps = state => {
    return {
        name: state.name
    };
}

const HelloConnected = connect(mapStateToProps)(Hello);

const element = (
    <Provider store={store}>
        <HelloConnected />
    </Provider>
);

ReactDOM.render(element, document.getElementById("main"));
