import * as React from 'react';

interface DisplayProps {
    addOperation: (value: number) => void,
    ans: number
}


export const Display: React.FunctionComponent<DisplayProps> = ({ addOperation, ans }: DisplayProps) => {
    const [inputValue, setInputValue] = React.useState("0");
    return (
        <section className="display">
            <div className="addoperation">
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={() => {
                    const numberValue = parseInt(inputValue);
                    if (isNaN(numberValue)){
                        alert("please enter a valid number");
                    } else {
                        addOperation(numberValue);
                    }
                }}>ADD</button>
            </div>
            <span className="displaynumber">{ans}</span>
        </section>
    );
}
