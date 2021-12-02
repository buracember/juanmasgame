import * as React from 'react';

interface TitleProps {
	readonly text: string;
	readonly color: string;
}

export const Title: React.FunctionComponent <TitleProps> = ({text, color}: TitleProps) => (
	<span style={{color}}>{text}</span>
);