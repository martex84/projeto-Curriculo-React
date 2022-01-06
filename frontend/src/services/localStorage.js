
const nomeCurriculo = "SCurriculo";

function createLocalStorage() {
    let resultProcess = false;

    const templateLocalStorage = {
        informacaoPessoal: {
            name: "",
            cargo: "",
            cidade: "",
            estado: "",
            telefone: "",
            email: "",
            github: "",
            linkedin: ""
        },
        experienciasProfissionais: null,
        cursosRealizados: null,
        idiomas: null,
        habilidades: null,
        qualificacoesProfissionais: null
    };

    if (!localStorage.getItem(nomeCurriculo)) {
        localStorage.setItem(nomeCurriculo, JSON.stringify(templateLocalStorage));

        if (localStorage.getItem(nomeCurriculo)) {
            resultProcess = true;

            return resultProcess;
        }
        else {
            resultProcess = false;

            return resultProcess;
        }
    }

    resultProcess = true;

    return resultProcess;
}

export {
    nomeCurriculo,
    createLocalStorage
}