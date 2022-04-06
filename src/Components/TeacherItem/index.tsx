import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

import './styles.css';


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars.githubusercontent.com/u/92695946?s=400&v=4" alt="Bia Calepso" />
                <div>
                    <strong>Bia Calepso</strong>
                    <span>React</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de front end.
                <br/><br/>
                Apaixoada por conhecer novos linguagens e grandes desafios.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>
                <a href="https://whatsapp.com">
                    <img src={whatsappIcon} alt= "Whatsapp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem