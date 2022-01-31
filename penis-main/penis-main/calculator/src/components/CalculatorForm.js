import React, {useState} from "react";
import NumberInput from "./NumberInput";
import Select from "react-select";
import Result from "./Result";


const CalculatorForm = (props) => {
    
    const [selectedOptionState, setSelectedOptionState] = useState({
        selectedOption: {
            value: '--Vyber operacie--',
            label: '--Vyber operacie--',
        }
    })
    
    
    const [resultState,setResultState] = useState(null)
    
    
    const options = [
        {value: 'ADD', label: 'Scitanie'},
        {value: 'SUBTRACT', label: 'Odcitanie'},
        {value: 'MULTIPLY', label: 'Nasobenie'},
        {value: 'DIVIDE', label: 'Delenie'},
    ];
    
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const handleChange = (selectedOptionState) => {
        setSelectedOptionState({ selectedOptionState });
    };
    
    
    
    let calculate = () => {

const { x,y } = props;

switch(selectedOptionState.selectedOptionState.value) {
    case 'ADD':
        return parseFloat(x) + parseFloat(y);
    case 'SUBTRACT':
        return parseFloat(x) - parseFloat(y);
    case 'MULTIPLY':
        return parseFloat(x) * parseFloat(y);
    case 'DIVIDE':
        return parseFloat(x) / parseFloat(y);
        }

    };


    
    return (
        <div>
            <form className="CalculatorForm" onSubmit = {handleSubmit}>
                <NumberInput
                OnChange={props.xOnChange}
                label="Cislo 1" 
                name="X"
                value={props.x}/>
                <NumberInput
                OnChange={props.yOnChange}
                label="Cislo 2"     
                name="Y"
                value={props.y}/>
                
                <Select 
                OnChange={handleChange}
                value={selectedOptionState.value}
                options={options}
                />


                <input type="submit" value="Spočítaj" />
            </form>
            <Result x ={resultState}/>
            
            
        </div>
    );
};
export default CalculatorForm;