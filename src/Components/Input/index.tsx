import React, { InputHTMLAttributes } from "react";
import "./styles.css"

//interface -> local onde são colocadas as regras para os componentes funcionarem
interface InputProps extends InputHTMLAttributes <HTMLInputElement>{
    name: string;
    label: string;
    help?: string;
}

const Input: React.FC <InputProps> = ({label, name, help, ...rest}) => {
    return(
        <div className="input-block">
            <label htmlFor={name}>
                {label} 
                {help && <span>{help}</span>} {/*se existir a variavel help, mostra o span -> logical end */}
            </label>
            <input type="text" id={name} {...rest}/>
        </div>
    );
}

export default Input;
