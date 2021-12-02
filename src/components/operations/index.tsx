import * as React from 'react';

import { Operation } from '../operation';

interface OperationsProps {
    operations: Operation[],
    setOperations: (operations: Operation[]) => void,
    ans: number,
    setAns: (ans: number) => void,
}

export const Operations: React.FunctionComponent<OperationsProps> = ({ operations, setOperations, ans, setAns }) => {
	return (
        <section className="operations">
            <div>
                {operations.map((op, key) => {
                    const {label, value, apply} = op;
                    return (
                        <Operation 
                            key={key}
                            label={label} 
                            value={value} 
                            onApply={
                                () => {
                                    setAns(apply(ans, value))
                                }
                            } 
                            onDelete={
                                () => {
                                    setOperations(operations.filter(op2 => op2!=op))
                                }
                            }
                        />
                    )
                })}
            </div>
        </section>
	);
}