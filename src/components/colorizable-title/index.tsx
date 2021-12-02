import * as React from 'react'
import { ColorPicker } from '../color-picker';
import { Title } from '../colored-title';

export const ColorizableTitle: React.FunctionComponent = (props) => {
	const [color, setColor] = React.useState("#fafafa");
    return(
        <section className="title">
        <div className="title-row">
            <ColorPicker currentColor={color} onColorChange={setColor}></ColorPicker>
            <Title text="El juego de juanma" color={color}/>
        </div>
    </section>
    );
}