import React, { useEffect, useState } from "react";

import "../../styles/menuSystem.css"

import ListValues from "../ListValues";
import * as processDatabase from '../../../services/processDatabase'

function MenuSystem() {

    const [objetoReturnListValues, setObjetoReturnListValues] = useState();
    const [showListValues, setShowListValues] = useState(false);

    function openListValues(tipoObjeto) {

        let valueReturn;

        switch (tipoObjeto) {

            case "course":
                valueReturn = processDatabase.getCourse();

                setObjetoReturnListValues({
                    nameList: "Cursos Realizados",
                    data: valueReturn
                });

                break;

            case "experience":
                valueReturn = processDatabase.getExperience();

                setObjetoReturnListValues({
                    nameList: "Experiência Profissionais",
                    data: valueReturn
                });

                break;

            case "languages":
                valueReturn = processDatabase.getLanguages();

                setObjetoReturnListValues({
                    nameList: "Idiomas Falados",
                    data: valueReturn
                });

                break;

            case "ability":
                valueReturn = processDatabase.getAbility();

                setObjetoReturnListValues({
                    nameList: "Habilidades",
                    data: valueReturn
                });

                break;

            case "qualification":
                valueReturn = processDatabase.getQualification();

                setObjetoReturnListValues({
                    nameList: "Qualificações Profissionais",
                    data: valueReturn
                });

                break;

            default:
                setObjetoReturnListValues(undefined);
                break;
        }

        setShowListValues(true);
    }

    function closeListValues() {
        setShowListValues(false);
    }

    return (
        <>
            <section id="c-menu-system">
                <h1 className="c-menu-system__title">
                    Preencha as informações para serem apresentadas no seu currículo
                </h1>
                <div className="c-secundario-menu">

                    {/* Primary Group */}
                    <div className="c-secundario-menu__group">

                        {/* Interface Photo */}
                        <div className="c-information-menu">
                            <button className="button-system button-system--big button-system--center">Enviar Imagem de Perfil</button>
                        </div>

                        {/* Interface Personal Information */}
                        <div className="c-information-menu">
                            <h2 className="c-information-menu__title">
                                Informação Pessoal
                            </h2>
                            <label className="c-information-menu__label">
                                Nome
                            </label>
                            <input type="text" placeholder="Digite seu nome" className="c-information-menu__input c-information-menu__input--personal-information" />
                            <label className="c-information-menu__label">
                                Cidade
                            </label>
                            <input type="text" placeholder="Digite sua cidade" className="c-information-menu__input c-information-menu__input--personal-information" />
                            <label className="c-information-menu__label">
                                Estado
                            </label>
                            <input type="text" placeholder="Digite seu estado" className="c-information-menu__input c-information-menu__input--personal-information" />
                            <label className="c-information-menu__label">
                                Telefone
                            </label>
                            <input type="text" placeholder="Digite seu telefone" className="c-information-menu__input c-information-menu__input--personal-information" />
                            <label className="c-information-menu__label">
                                Email
                            </label>
                            <input type="email" placeholder="Digite seu email" className="c-information-menu__input c-information-menu__input--personal-information" />
                            <label className="c-information-menu__label">
                                Github
                            </label>
                            <input type="text" placeholder="Digite seu github" className="c-information-menu__input c-information-menu__input--personal-information" />
                            <label className="c-information-menu__label">
                                Linkedin
                            </label>
                            <input type="text" placeholder="Digite seu linkedin" className="c-information-menu__input c-information-menu__input--personal-information" />
                        </div>

                        {/* Interface Profissional Experience */}
                        <div className="c-information-menu">
                            <h2 className="c-information-menu__title">
                                Experiência Profissionais
                            </h2>
                            <label className="c-information-menu__label">
                                Nome da Empresa
                            </label>
                            <input type="text" placeholder="Digite o nome da empresa" className="c-information-menu__input" />
                            <label className="c-information-menu__label">
                                Descrição da Experiência
                            </label>
                            <textarea placeholder="Digite a experiência" className="c-information-menu__input c-information-menu__input--text-area" />
                            <div className="c-information-menu-button">
                                <button aria-label="buttonOpenList" className="button-system" onClick={() => openListValues('experience')}>Visualizar lista</button>
                                <button className="button-system">Adicionar</button>
                            </div>
                        </div>
                    </div>

                    {/* Second Group */}
                    <div className="c-secundario-menu__group">

                        {/* Interface Course */}
                        <div className="c-information-menu">
                            <h2 className="c-information-menu__title">
                                Cursos Realizados
                            </h2>
                            <label className="c-information-menu__label">
                                Nome do Curso
                            </label>
                            <input type="text" placeholder="Digite o nome do curso" className="c-information-menu__input" />
                            <label className="c-information-menu__label">
                                Nome da Instituição
                            </label>
                            <input type="text" placeholder="Digite o nome da instituição" className="c-information-menu__input" />
                            <div className="c-information-menu-button">
                                <button aria-label="buttonOpenList" className="button-system" onClick={() => openListValues("course")}>Visualizar lista</button>
                                <button className="button-system">Adicionar</button>
                            </div>
                        </div>

                        {/* Interface Languages */}
                        <div className="c-information-menu">
                            <h2 className="c-information-menu__title">
                                Idiomas Falados
                            </h2>
                            <label className="c-information-menu__label">
                                Nome do Idioma
                            </label>
                            <input type="text" placeholder="Digite o nome do curso" className="c-information-menu__input" />
                            <label className="c-information-menu__label">
                                Nível do Idioma
                            </label>
                            <input type="text" placeholder="Digite o nível do idioma" className="c-information-menu__input" />
                            <div className="c-information-menu-button">
                                <button aria-label="buttonOpenList" className="button-system" onClick={() => openListValues('languages')}>Visualizar lista</button>
                                <button className="button-system">Adicionar</button>
                            </div>
                        </div>

                        {/* Interface Abilities */}
                        <div className="c-information-menu">
                            <h2 className="c-information-menu__title">
                                Habilidades
                            </h2>
                            <label className="c-information-menu__label">
                                Tipo de Habilidade
                            </label>
                            <input type="text" placeholder="Digite o tipo da habilidade" className="c-information-menu__input" />
                            <div className="c-information-menu-button">
                                <button aria-label="buttonOpenList" className="button-system" onClick={() => openListValues('ability')}>Visualizar lista</button>
                                <button className="button-system">Adicionar</button>
                            </div>
                        </div>

                        {/* Interface Profissional Qualification */}
                        <div className="c-information-menu">
                            <h2 className="c-information-menu__title">
                                Qualificações Profissionais
                            </h2>
                            <label className="c-information-menu__label">
                                Qualificação Profissional
                            </label>
                            <input type="text" placeholder="Digite o nome da empresa" className="c-information-menu__input" />
                            <label className="c-information-menu__label">
                                Descrição da Qualificação
                            </label>
                            <textarea placeholder="Digite a qualificação" className="c-information-menu__input c-information-menu__input--text-area" />
                            <div className="c-information-menu-button">
                                <button aria-label="buttonOpenList" className="button-system" onClick={() => openListValues('qualification')}>Visualizar lista</button>
                                <button className="button-system">Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c-information-menu-button">
                    <button className="button-system button-system--main">Visualizar</button>
                    <button className="button-system button-system--main">Criar</button>
                </div>
            </section>
            {showListValues === true ? <ListValues props={objetoReturnListValues.data} nameList={objetoReturnListValues.nameList} closeMenu={closeListValues} /> : null}
        </>
    )
}

export default MenuSystem;