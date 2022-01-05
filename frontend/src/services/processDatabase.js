import database from "./database";

function getCurso() {
    return database.cursosRealizados;
}

export {
    getCurso
}