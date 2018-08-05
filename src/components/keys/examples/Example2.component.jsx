import React from 'react';
import Example0 from './Example0.component';

/*
    Les clés doivent être uniques au sein d'une même liste
    Les clés n'ont pas besoin d'être uniques globalement -> 
        On peut avec plusieurs 2 listes qui contiennent des clés similaires

        <ul>
            <li key="Tom">Tom</li>
            <li key="John">John</li>
        </ul>

        <ul>
            <li key="John">John</li>
            <li key="Sam">Sam</li>
        </ul>
*/

const Example2 = () => (
    <div className="row">
        <div className="col">
            <Example0 />
        </div>
        <div className="col">
            <Example0 />
        </div>
    </div>
);

export default Example2;

