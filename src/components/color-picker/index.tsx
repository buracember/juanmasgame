import * as React from 'react';

interface ColorPickerProps {
	readonly currentColor: string;
	readonly onColorChange: (color: string)=>void;
}

export const ColorPicker: React.FunctionComponent<ColorPickerProps> = ({currentColor, onColorChange}) => {
	return (
		<input 
			className="text"
			onChange={(e)=>{onColorChange(e.target.value)}}
			value={currentColor}
			/>
	);
};