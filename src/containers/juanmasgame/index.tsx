import * as React from 'react';
import { Wrapper } from '@components';

import './index.scss';

interface ColorPickerProps {
	readonly currentColor: string;
	readonly onColorChange: (color: string)=>void;
}

export const ColorPicker: React.FunctionComponent<ColorPickerProps> = (props) => {

	return (
		<div className="col-xs-4 col-ms-2 col-md-2 col-lg-1" >
			<input 
				className="colorinput"
				onChange={(e)=>{props.onColorChange(e.target.value)}}
				value={props.currentColor}
				/>
		</div>
	);
};

interface TitleProps {
	readonly text: string;
}

export const Title: React.FunctionComponent <TitleProps> = (props) => {
	return (
		<div className="col-xs-8 col-ms-10 col-md-10 col-lg-11">
			<p>{props.text}</p>
		</div>
	)
}

interface OperandProps {
	readonly label: string,
	readonly selected?: boolean,
	readonly apply: (op1: number, op2: number) => number
}

export const Operand: React.FunctionComponent <OperandProps> = (props) => {
	return (
		<div><p>{props.label}</p></div>
	)
}
interface OperandsProps {
	readonly operands: OperandProps[],
	readonly setOperands: (operands: OperandProps[]) => void
}
export const Operands: React.FunctionComponent <OperandsProps> = (props) => {
	return (
		<div>
			{props.operands.map((operand)=>(
			<div 
				key={operand.label} 
				className={operand.selected?"selected operand rounded-circle":"operand rounded-circle"}
				onClick={e=>{
					const newOperands = props.operands.map(currentOperand => ({
						...currentOperand,
						selected: operand.label === currentOperand.label
					}))
					props.setOperands(newOperands);
				}}
				>
					{operand.label}
			</div>))}
		</div>
	)
}

interface NewOperationInput {
	readonly addOperation: (operation: {operand: OperandProps, value: number }) => void;
}

export const AddNewOperation: React.FunctionComponent <NewOperationInput> = (props) => {
	const [inputValue, setInputValue] = React.useState(0);
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
		<div>
			<Operands operands={operands} setOperands={setOperands}/>
			<input value={inputValue} onChange={(e)=>{setInputValue(parseInt(e.target.value))}}/>
			<button onClick={(e)=>{
				props.addOperation({
					operand: operands.find(operand=>operand.selected)!,
					value: inputValue
				})
			}}>Add</button>
		</div>
	)
}

interface Operation {
	operand: OperandProps, 
	value: number 
}

interface OperationsProps {
	readonly ans: number,
	readonly operations: Operation[],
	readonly removeOperation: (index:number)=> void,
	readonly setAns: (index:number)=> void,
}
export const Operations: React.FunctionComponent <OperationsProps> = (props) => {
	return (
		<div>
			{props.operations.map((operation, key)=>(
				<div key={key}>
					<div>{operation.operand.label}</div>
					<div>{operation.value}</div>
					<button onClick={ e => {
						const newAns= operation.operand.apply(props.ans, operation.value);
						props.setAns(newAns);
					}}>
						Apply
					</button>
					<button onClick={(e)=>{
						props.removeOperation(key)
						}}>
							Delete
					</button>
				</div>
			))}
		</div>
	)
}
export const Display: React.FunctionComponent <{value:number}> = (props) => {
	return (
		<div>
			<p>{props.value}</p>
		</div>
	)
}

export const Game: React.FunctionComponent = (props) => {
	const [color, setColor] = React.useState("#fafafa");
	const [operations, setOperations] = React.useState([] as  {operand: OperandProps, value: number }[]);
	const [ans, setAns] =  React.useState(10);
	return (
		<Wrapper>
			<div className="container" style={{backgroundColor: color}}>
				<div className="row">
					<ColorPicker currentColor={color} onColorChange={setColor}></ColorPicker>
					<Title text="El juego de juanma"/>
				</div>
				<AddNewOperation addOperation={(operation)=>{
					setOperations(operations.concat([operation]))
					console.info("added operand", operation, "operations:", operations)
				}}></AddNewOperation>
				<Display value={ans}/>
				<Operations operations={operations} 
					removeOperation={
						(index: number) => {
							//todo: reemplazar operations por algo con custom states
							// en este momento agarra la operations que  habia en el momento del render ([]) y no el operations actual
							operations.splice(index, 1);
							setOperations([...operations]);
						}
					}
					setAns={setAns}
					ans={ans}
					></Operations>
			</div>
		</Wrapper>
	);
};

export default Game;
