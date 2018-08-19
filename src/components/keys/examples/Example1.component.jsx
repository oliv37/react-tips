import React from 'react';

const INPUTS = ['input0', 'input1'];

class Example1 extends React.Component {

    constructor(props) {
        super(props);

        this.state = { inputs: [...INPUTS] };
    }

    handleClick = () => {
        this.setState(prevState => ({
            inputs: [`input${prevState.inputs.length}`, ...prevState.inputs]
        }));
    }

    render() {
        /*
            Saisissez du texte dans le champ puis cliquez sur le bouton
            Testez avec key={index} et key={name}
            -> avec key={index}, le comportement de l'application n'est pas valide
        */

        const content = this.state.inputs.map(
            (name, index) => (
                <div key={index} className="my-1">
                    <span>{name} : </span>
                    <input type="text" />
                </div>
            )
        );

        return (
            <React.Fragment>
                <button 
                    type="button" 
                    className="btn btn-success my-2" 
                    onClick={this.handleClick}>
                    Add Input
                </button>

                <div>{content}</div>
            </React.Fragment>
        );
    }
}

export default Example1;
