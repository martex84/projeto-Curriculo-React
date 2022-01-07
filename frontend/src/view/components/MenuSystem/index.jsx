import React, { useEffect, useState } from "react";

import "../../styles/menuSystem.css"

import ListValues from "../ListValues";
import * as processDatabase from '../../../services/processDatabase'
import * as localStorageSystem from '../../../services/localStorage'

function MenuSystem() {

    const [objectInternalValues, setObjetoInternalValues] = useState({
        personalInformation: {
            name: "",
            job: "",
            city: "",
            state: "",
            phone: "",
            email: "",
            github: "",
            linkedin: ""
        },
        profissionalExperience: {
            companyName: "",
            experience: ""
        },
        completeCourses: {
            courseName: "",
            institutionName: ""
        },
        languages: {
            nameLanguages: "",
            languageLevel: ""
        },
        abilities: "",
        profissionalQualifications: ""
    })
    const [objetoReturnListValues, setObjetoReturnListValues] = useState();
    const [showListValues, setShowListValues] = useState(false);
    const [localStorageVerified, setLocalStorageVerified] = useState([false, false]);
    const [name, setName] = useState("");



    if (localStorageSystem.checkLocalStorage() && localStorageVerified[0] === false) {
        setLocalStorageVerified([true, false]);
    }
    //Check that localStorage can be create, if not, will show a message
    else {

        if (!localStorageSystem.createLocalStorage()) {
            console.log("Error for create localStorage!");
        }
    }

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

    function saveObjetoReturnListValues(type, value) {
        let objectInternal = Object.assign({}, objectInternalValues);

        switch (type) {
            case "personalInformationName":
                objectInternal.personalInformation.name = value;
                break;

            case "personalInformationJob":
                objectInternal.personalInformation.job = value;
                break;

            case "personalInformationCity":
                objectInternal.personalInformation.city = value;
                break;

            case "personalInformationState":
                objectInternal.personalInformation.state = value;
                break;

            case "personalInformationPhone":
                objectInternal.personalInformation.phone = value;
                break;

            case "personalInformationEmail":
                objectInternal.personalInformation.email = value;
                break;

            case "personalInformationGithub":
                objectInternal.personalInformation.github = value;
                break;

            case "personalInformationLinkedin":
                objectInternal.personalInformation.linkedin = value;
                break;

            case "profissionalExperienceCompanyName":
                objectInternal.profissionalExperience.companyName = value;
                break;

            case "profissionalExperienceCompanyExperience":
                objectInternal.profissionalExperience.experience = value;
                break;

            case "CompletCoursesName":
                objectInternal.completeCourses.courseName = value;
                break;

            case "CompletCoursesInstitutionName":
                objectInternal.completeCourses.institutionName = value;
                break;

            case "LanguagesName":
                objectInternal.languages.nameLanguages = value;
                break;

            case "LanguagesLanguageLevel":
                objectInternal.languages.languageLevel = value;
                break;

            case "Abilities":
                objectInternal.abilities = value;
                break;


            case "ProfissionalQualifications":
                objectInternal.profissionalQualifications = value;
                break;
        }

        setObjetoInternalValues(objectInternal);
    }

    function includeLocalStorage(type) {

        switch (type) {
            case "personalInformation":
                localStorageSystem.includeField(type, objectInternalValues.personalInformation)

                break;

            case "profissionalExperience":
                localStorageSystem.includeField(type, objectInternalValues.personalInformation)
                break;

            case "completeCourses":
                localStorageSystem.includeField(type, objectInternalValues.completeCourses)
                break;

            case "languages":
                localStorageSystem.includeField(type, objectInternalValues.languages)
                break;

            case "abilities":
                localStorageSystem.includeField(type, objectInternalValues.abilities)
                break;

            case "profissionalQualifications":
                localStorageSystem.includeField(type, objectInternalValues.profissionalQualifications)
                break;
        }
    }

    useEffect(() => {

        if (localStorageVerified[1] === false && localStorageVerified[0] === true) {
            setObjetoInternalValues({ ...objectInternalValues, personalInformation: localStorageSystem.getLocalStorage().personalInformation });

            setLocalStorageVerified([true, true]);
        }
    }, [localStorageVerified])

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
                            <input type="text" placeholder="Digite seu nome" className="c-information-menu__input c-information-menu__input--personal-information" onChange={(event) => saveObjetoReturnListValues("personalInformationName", event.target.value)} value={objectInternalValues.personalInformation.name} />

                            <label className="c-information-menu__label">
                                Cargo
                            </label>
                            <input type="text" placeholder="Digite o cargo desejado" className="c-information-menu__input c-information-menu__input--personal-information" onChange={(event) => saveObjetoReturnListValues("personalInformationJob", event.target.value)} value={objectInternalValues.personalInformation.job} />

                            <label className="c-information-menu__label">
                                Cidade
                            </label>
                            <input type="text" placeholder="Digite sua cidade" className="c-information-menu__input c-information-menu__input--personal-information" onChange={(event) => saveObjetoReturnListValues("personalInformationCity", event.target.value)} value={objectInternalValues.personalInformation.city} />

                            <label className="c-information-menu__label">
                                Estado
                            </label>
                            <input type="text" placeholder="Digite seu estado" className="c-information-menu__input c-information-menu__input--personal-information" onChange={(event) => saveObjetoReturnListValues("personalInformationState", event.target.value)} value={objectInternalValues.personalInformation.state} />

                            <label className="c-information-menu__label">
                                Telefone
                            </label>
                            <input type="text" placeholder="Digite seu telefone" className="c-information-menu__input c-information-menu__input--personal-information" onChange={(event) => saveObjetoReturnListValues("personalInformationPhone", event.target.value)} value={objectInternalValues.personalInformation.phone} />

                            <label className="c-information-menu__label">
                                Email
                            </label>
                            <input type="email" placeholder="Digite seu email" className="c-information-menu__input c-information-menu__input--personal-information" onChange={(event) => saveObjetoReturnListValues("personalInformationEmail", event.target.value)} value={objectInternalValues.personalInformation.email} />

                            <label className="c-information-menu__label">
                                Github
                            </label>
                            <input type="text" placeholder="Digite seu github" className="c-information-menu__input c-information-menu__input--personal-information" onChange={(event) => saveObjetoReturnListValues("personalInformationGithub", event.target.value)} value={objectInternalValues.personalInformation.github} />

                            <label className="c-information-menu__label">
                                Linkedin
                            </label>
                            <input type="text" placeholder="Digite seu linkedin" className="c-information-menu__input c-information-menu__input--personal-information" onChange={(event) => saveObjetoReturnListValues("personalInformationLinkedin", event.target.value)} value={objectInternalValues.personalInformation.linkedin} />
                        </div>

                        {/* Interface Profissional Experience */}
                        <div className="c-information-menu">
                            <h2 className="c-information-menu__title">
                                Experiência Profissionais
                            </h2>

                            <label className="c-information-menu__label">
                                Nome da Empresa
                            </label>
                            <input type="text" placeholder="Digite o nome da empresa" className="c-information-menu__input" onChange={(event) => saveObjetoReturnListValues("profissionalExperienceCompanyName", event.target.value)} value={objectInternalValues.profissionalExperience.companyName} />

                            <label className="c-information-menu__label">
                                Descrição da Experiência
                            </label>
                            <textarea placeholder="Digite a experiência" className="c-information-menu__input c-information-menu__input--text-area" onChange={(event) => saveObjetoReturnListValues("profissionalExperienceCompanyExperience", event.target.value)} value={objectInternalValues.profissionalExperience.experience} />

                            <div className="c-information-menu-button">
                                <button aria-label="buttonOpenList" className="button-system" onClick={() => openListValues('experience')}>Visualizar lista</button>
                                <button className="button-system" onClick={() => includeLocalStorage('profissionalExperience')}>Adicionar</button>
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
                            <input type="text" placeholder="Digite o nome do curso" className="c-information-menu__input" onChange={(event) => saveObjetoReturnListValues("CompletCoursesName", event.target.value)} value={objectInternalValues.completeCourses.courseName} />

                            <label className="c-information-menu__label">
                                Nome da Instituição
                            </label>
                            <input type="text" placeholder="Digite o nome da instituição" className="c-information-menu__input" onChange={(event) => saveObjetoReturnListValues("CompletCoursesInstitutionName", event.target.value)} value={objectInternalValues.profissionalExperience.institutionName} />

                            <div className="c-information-menu-button">
                                <button aria-label="buttonOpenList" className="button-system" onClick={() => openListValues("course")}>Visualizar lista</button>
                                <button className="button-system" onClick={() => includeLocalStorage('completeCourses')}>Adicionar</button>
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
                            <input type="text" placeholder="Digite o nome do curso" className="c-information-menu__input" onChange={(event) => saveObjetoReturnListValues("LanguagesName", event.target.value)} value={objectInternalValues.languages.name} />

                            <label className="c-information-menu__label">
                                Nível do Idioma
                            </label>
                            <input type="text" placeholder="Digite o nível do idioma" className="c-information-menu__input" onChange={(event) => saveObjetoReturnListValues("LanguagesLanguageLevel", event.target.value)} value={objectInternalValues.languages.languageLevel} />

                            <div className="c-information-menu-button">
                                <button aria-label="buttonOpenList" className="button-system" onClick={() => openListValues('languages')}>Visualizar lista</button>
                                <button className="button-system" onClick={() => includeLocalStorage('languages')}>Adicionar</button>
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
                            <input type="text" placeholder="Digite o tipo da habilidade" className="c-information-menu__input" onChange={(event) => saveObjetoReturnListValues("Abilities", event.target.value)} value={objectInternalValues.abilities} />

                            <div className="c-information-menu-button">
                                <button aria-label="buttonOpenList" className="button-system" onClick={() => openListValues('ability')}>Visualizar lista</button>
                                <button className="button-system" onClick={() => includeLocalStorage('abilities')}>Adicionar</button>
                            </div>
                        </div>

                        {/* Interface Profissional Qualification */}
                        <div className="c-information-menu">
                            <h2 className="c-information-menu__title">
                                Qualificações Profissionais
                            </h2>

                            <label className="c-information-menu__label">
                                Descrição da Qualificação
                            </label>
                            <textarea placeholder="Digite a qualificação" className="c-information-menu__input c-information-menu__input--text-area" onChange={(event) => saveObjetoReturnListValues("ProfissionalQualifications", event.target.value)} value={objectInternalValues.profissionalQualifications} />

                            <div className="c-information-menu-button">
                                <button aria-label="buttonOpenList" className="button-system" onClick={() => openListValues('qualification')}>Visualizar lista</button>
                                <button className="button-system" onClick={() => includeLocalStorage('profissionalQualifications')}>Adicionar</button>
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