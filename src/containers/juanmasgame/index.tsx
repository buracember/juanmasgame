import * as React from 'react';
import './index.css';
import { ColorizableTitle } from '@src/components/colorizable-title';
import { OperandSelector } from '@src/components/operand-selector';
import { Display } from '@src/components/display';
import { Operation } from '@src/components/operation';
import { Operations } from '@src/components/operations';

export const Game: React.FunctionComponent = (props) => {
	const [inputValue, setInputValue] =  React.useState(0);
	const [ans, setAns] =  React.useState(0);
	const [operations, setOperations] = React.useState([] as Operation []);
	const [operands, setOperands] = React.useState([
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
	]);
	return (
		<div className="content">
			<ColorizableTitle/>
			<OperandSelector operands={operands} setOperands={setOperands} />
			<Display 
				ans={ans}
				inputValue={inputValue}
				setInputValue={setInputValue}
				addOperation={
					() =>{
						const selectedOperand = operands.find(x=>x.selected);
						setOperations(operations.concat([{
							value: inputValue,
							label: selectedOperand!.label,
							apply: selectedOperand!.apply,
						}]))

						console.log("added operation", operations.concat([{
							value: inputValue,
							label: selectedOperand!.label,
							apply: selectedOperand!.apply,
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
