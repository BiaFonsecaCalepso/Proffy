import React, { TextareaHTMLAttributes } from "react";
import "./styles.css"

//interface -> local onde são colocadas as regras para os componentes funcionarem
interface TextareaProps extends TextareaHTMLAttributes <HTMLTextAreaElement>{
    name: string;
    label: string;
}

const TextArea: React.FC <TextareaProps> = ({label, name, ...rest}) => {
    return(
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest}/>
        </div>
    );
}

export default TextArea;