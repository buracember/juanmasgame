import * as React from 'react';

export interface Operand {
	readonly label: string,
	readonly selected?: boolean,
	readonly apply: (op1: number, op2: number) => number,
}

interface OperandSelectorProps {
	readonly operands: Operand[],
	readonly setOperands: (operands: Operand[]) => void,
}

export const OperandSelector: React.FunctionComponent<OperandSelectorProps> = ({ operands, setOperands }) => {
	return (
		<ul className="operands">
			{operands.map((op, key) => (
				<li
					key={key}
					className={op.selected ? "selected" : ""}
					onClick={
						() => {
							setOperands(operands.map((op, opKey) => ({ ...op, selected: opKey === key })));
						}
					}
				>
					<span>{op.label}</span>
				</li>
			))}
		</ul>
	);
}