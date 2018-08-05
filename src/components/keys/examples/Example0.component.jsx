import React from 'react';

const names = [
    'Jim',
    'John',
    'Paul',
    'Zak'
];

class Example0 extends React.Component {

    constructor(props) {
        super(props);

        this.state = { names: [...names] };
    }

    handleClick = () => {
        const name = this.inputElement.value;

        this.setState(prevState => ({
            names: [name, ...prevState.names]
        }));
    }

    render() {
        /*
            Testez avec key={index} et key={name}
            Inspectez le dom dans votre navigateur pour voir les éléments modifiés
            Avoir une clé unique permet de minimiser les modifications du DOM (-> gain performance) 
        */

        const content = this.state.names.map((name, index) => (
            <div key={name}>{name}</div>
        ));

        return (
            <React.Fragment>
                <input type="text" ref={el => this.inputElement = el} />
                <button onClick={this.handleClick}>Add Begining</button>

                <div>{content}</div>
            </React.Fragment>
        );
    }
}

export default Example0;
