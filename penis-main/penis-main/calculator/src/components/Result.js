import React from 'react';

const Result = (props) => {

    const result = props.x;

    if(result || result  == 0)

    return <div className="Result">Výsledok je: {props.x} </div>;
    else
        return <div>Nebol zatial vypocitany vysledok</div>
};
export default Result;