import React from "react";
import Input from "../../Components/Input";
import PageHeader from "../../Components/PageHeader";
import TextArea from "../../Components/TextArea";

import "./styles.css";

function TeacherForm(){
    return(
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas." description="O primeiro passo, é preencher esse formulário de inscrição."/>
            <main>
                <form>
                    <fieldset>
                        <legend> Seus dados </legend>
                        <Input name="name" label="Nome completo"/>
                        <Input name="avatar" label="Link da sua foto"/>
                        <Input name="whatsapp" label="Whatsapp"/>
                        <TextArea name="bio" label="Biografia"/>
                    </fieldset>
                    <fieldset>
                    <legend> Sobre a aula </legend>
                      
                    </fieldset>
                </form>
            </main>
        </div>
    )
}
export default TeacherForm;