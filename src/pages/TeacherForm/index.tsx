import React from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";
import warningIcon from "../../assets/images/icons/warning.svg"

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
                        <Select name="subject" label="Matéria" value="" optionLabel="Selecione qual você quer ensinar" options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação física', label: 'Educação física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' }
                        ]}/>  
                        <Input name="cost" label="Custo da sua hora por aula" help="(em R$)"/>
                    </fieldset>

                    <fieldset>
                    <legend> 
                        Horários disponíveis 
                        <button>
                            + Novo Horário
                        </button>
                    </legend>
                        <div className="schedule-item">
                        <Select name="week_day" label="Dia da semana" value="" options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' }
                        ]}/>
                        <Input type="time" name="from" label="Das"/>
                        <Input type="time" name="to" label="Até"/>
                        </div>
                    </fieldset>
                    
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante"/>
                            Importante!
                        <br/>
                            Preencha todos os dados
                        </p>

                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}
export default TeacherForm;