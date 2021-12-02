import * as React from 'react';
import { Operation } from '../operation';

interface DisplayProps {
    addOperation: () => void,
    inputValue: number,
    setInputValue: (value:number) => void,
    ans: number
}


export const Display: React.FunctionComponent <DisplayProps> = ({addOperation, inputValue, setInputValue, ans}) => {
	return (
        <section className="display">
            <div className="addoperation">
                <input value={inputValue} onChange={(e)=>{setInputValue(parseInt(e.target.value))}}/>
                <button onClick={addOperation}>ADD</button>
            </div>
            <span className="displaynumber">{ans}</span>
        </section>
	);
}
