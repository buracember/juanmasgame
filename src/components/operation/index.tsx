import * as React from 'react'

export interface Operation {
    label: string,
    value: number,
    apply: (op1: number, op2: number) => number,
}

interface OperationProps {
    label: string,
    value: number,
    onApply: () => void,
    onDelete: () => void,
}

export const Operation: React.FunctionComponent<OperationProps> = ({ label, value, onApply, onDelete }) => {
	return (
        <figure className="operation">
            <span className="top left">{label}</span>
            <span className="top right">{value}</span>
            <button className="bottom left" onClick={onApply}>APPLY</button>
            <button className="bottom right" onClick={onDelete}>DELETE</button>
        </figure>  
	);
}