import database from "./database";

function getCourse() {
    return database.cursosRealizados;
}

function getQualification() {
    return database.qualificacoesProfissionais;
}

function getExperience() {
    return database.experienciasProfissionais;
}

function getLanguages() {
    return database.idiomas;
}

function getAbility() {
    return database.habilidades;
}

export {
    getCourse,
    getAbility,
    getExperience,
    getLanguages,
    getQualification
}