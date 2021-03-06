import React from "react";
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg'
import whatsappIcon from "../../assets/images/whatsapp.svg"

import './style.css'

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Select from "../../components/Select";
import Input from "../../components/Input";

function TeacherList() {
    return(
        <><div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
            <form id="search-teachers">
               <Select name="subject" label="Matéria" value="" options={[
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

                <Select name="week_day" label="Dia da semana" value="" options={[
                   { value: '0', label: 'Domingo' },
                   { value: '1', label: 'Segunda-feira' },
                   { value: '2', label: 'Terça-feira' },
                   { value: '3', label: 'Quarta-feira' },
                   { value: '4', label: 'Quinta-feira' },
                   { value: '5', label: 'Sexta-feira' },
                   { value: '6', label: 'Sábado' }
               ]}/>

                <Input type="time" name="time" label="Hora"/>
                <button type="submit">
                    Buscar
                </button>
            </form>
            </PageHeader>
            <main>
               <TeacherItem/>
               <TeacherItem/>
               <TeacherItem/>
               <TeacherItem/>
               <TeacherItem/>
               <TeacherItem/>
            </main>
        </div></>
    )
 }

export default TeacherList;