import * as React from 'react';
import './index.css';
import { ColorizableTitle } from '@src/components/colorizable-title';
import { OperandSelector } from '@src/components/operand-selector';
import { Display } from '@src/components/display';
import { Operation } from '@src/components/operation';
import { Operations } from '@src/components/operations';

const initialOperandsState = [
	{
		label: "x",
		apply: (a:number , b:number ) => a*b,
		selected: true,
	},
	{
		label: "%",
		apply: (a:number , b:number ) => a/b
	},
	{
		label: "-",
		apply: (a:number , b:number ) => a-b
	},
	{
		label: "+",
		apply: (a:number , b:number ) => a+b
	},
];

export const Game: React.FunctionComponent = () => {
	const [ans, setAns] =  React.useState(0);
	const [operations, setOperations] = React.useState([] as Operation []);
	const [operands, setOperands] = React.useState(initialOperandsState);
	return (
		<div className="content">
			<ColorizableTitle/>
			<OperandSelector operands={operands} setOperands={setOperands} />
			<Display 
				ans={ans}
				addOperation={
					(inputValue) =>{
						const selectedOperand = operands.find(x=>x.selected);
						if (!selectedOperand) {
							return;
						}
						setOperations(operations.concat([{
							value: inputValue,
							label: selectedOperand.label,
							apply: selectedOperand.apply,
						}]))
					}
				}
			/>
			<Operations 
				operations={operations} 
				setOperations={setOperations} 
				ans={ans} 
				setAns={setAns}/>
		</div>
	);
};

export default Game;
