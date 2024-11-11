import { useReducer } from "react"

const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit'}

function reducer(state, { type, payload} ){
switch(type) {
    case ACTIONS.ADD_DIGIT:
        return {
            ...state,
            currentOperand: `${currentOperand}${payload.digit}` 
        }
}
}

function Calculator (){
    const [{ currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {});

    return(
        <div className="calculator-grid">
            
            <div className="output">
                <div className="previous-operand">1234</div>
                <div className="current-operand">4566</div>
            </div>
            <button className="span-two">AC</button>
            <button>DEL</button>
            <button>/</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>*</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>-</button>
            <button>.</button>
            <button>0</button>
            <button className="span-two">=</button>
        </div>
    )
}
export default Calculator
