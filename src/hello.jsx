import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {

    render() {
        return <div>Hello {this.props.name}</div>
    }
}

const HelloFunctionnal = (props) => {
    return <div>Hello {props.name} from Functional Component</div>;
};

ReactDOM.render(<Hello name="john" />, document.getElementById("main"));

/*
class List extends React.Component {
    
    render() {
        return (
            <ul>
                {this.props.names.map(name => <li>{name}</li>)}
            </ul>
        )
    }
}

const NAMES = ['Jim', 'John', 'Paul'];
ReactDOM.render(<List names={NAMES} />, document.getElementById("main"));
*/
