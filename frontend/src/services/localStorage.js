
const nameLocalStorage = "SCurriculo";

let internalLocalStorage = "";

function createLocalStorage() {
    let resultProcess = false;

    const templateLocalStorage = {
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
        profissionalExperience: [],
        completeCourses: [],
        languages: [],
        abilities: [],
        profissionalQualifications: []
    };

    if (!localStorage.getItem(nameLocalStorage)) {
        localStorage.setItem(nameLocalStorage, JSON.stringify(templateLocalStorage));

        if (localStorage.getItem(nameLocalStorage)) {
            resultProcess = true;

            return resultProcess;
        }
        else {
            return resultProcess;
        }
    }

    resultProcess = true;

    return resultProcess;
}

function checkLocalStorage() {
    if (!localStorage.getItem(nameLocalStorage)) {
        debugger
        return false
    }



    return true;
}

//Field === type of field will be chance
//Value === object or array for to include in field
function includeField(field, value) {

    if (checkLocalStorage === false) {
        return false
    }

    internalLocalStorage = JSON.parse(localStorage.getItem(nameLocalStorage));

    Object.keys(internalLocalStorage).forEach(data => {

        if (data === field) {
            if (data === "personalInformation") {

                internalLocalStorage.personalInformation = value
            }
            else {
                let internalArray = [...internalLocalStorage[`${data}`]]

                internalArray.push(value);

                internalLocalStorage[`${data}`] = internalArray;

            }
            localStorage.setItem(nameLocalStorage, JSON.stringify(internalLocalStorage));
        }
    })
}

function getLocalStorage() {
    return JSON.parse(localStorage.getItem(nameLocalStorage));
}

export {
    nameLocalStorage,
    createLocalStorage,
    includeField,
    checkLocalStorage,
    getLocalStorage
}