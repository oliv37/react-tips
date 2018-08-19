import React from 'react';
import { toast } from 'react-toastify';

const NAMES = [
    'Jim',
    'John',
    'Paul'
];

class Example0 extends React.Component {

    constructor(props) {
        super(props);

        this.state = { names: [...NAMES] };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const name = this.inputElement.value;

        if (this.state.names.indexOf(name) !== -1) {
            toast.error(`${name} existe déjà`);
            return;
        }

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
            <li key={index}>{name}</li>
        ));

        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit} className="form-inline my-2">
                    <div className="form-group mr-2">
                        <input 
                            type="text" 
                            className="form-control" 
                            ref={el => this.inputElement = el} 
                        />
                    </div>
                    <button className="btn btn-success" type="submit">
                        Add
                    </button>
                </form>

                <ul>{content}</ul>
            </React.Fragment>
        );
    }
}

export default Example0;
