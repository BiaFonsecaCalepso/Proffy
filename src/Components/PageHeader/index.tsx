import React from "react";
import { Link } from "react-router-dom";

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import "./styles.css"

interface PageHeaderProps {
    title: string;
    description?: string; //o sinal de ? significa que a propriedade é opcional, ou seja, pode ou não ser passada.
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="Proffy"/>
            </div>
            <div className="header-content">
                <strong> {props.title} </strong>
                {props.description && <p>{props.description}</p>} {/* &&= Se o valor existir ele fará o q está após os && */}
                {props.children}           
            </div>
        </header>
    );
} 

export default PageHeader;