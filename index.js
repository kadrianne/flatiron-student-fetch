const BASE_URL = 'http://localhost:3000'

fetch(`${BASE_URL}/students`)
    .then(response => response.json())
    .then(displayStudents)

function displayStudents(students) {
    const studentsContainer = document.querySelector('.students')
    
    students.forEach(student => {
        const card = document.createElement('div')
        const name = document.createElement('h2')
        const editInfoForm = addEditInfoForm()
        const cohort = document.createElement('p')
        const languages = document.createElement('ul')
        const newLanguageForm = addLanguageForm()

        card.className = 'card'
        name.textContent = student.name
        cohort.textContent = `Cohort: ${student.cohort}`
        languages.textContent = `Languages:`

        
        student.languages.forEach(language => {
            const languageItem = document.createElement('li')
            const deleteLanguage = document.createElement('button')

            languageItem.textContent = language.name
            languageItem.id = `languageID-${language.id}`
            deleteLanguage.textContent = 'x'

            languageItem.appendChild(deleteLanguage)
            languages.appendChild(languageItem)
        })

        card.append(name, cohort, editInfoForm, languages, newLanguageForm)
        studentsContainer.appendChild(card)
    })
}

function addEditInfoForm() {
    const editInfoForm = document.createElement('form')
    const nameInput = document.createElement('input')
    const cohortInput = document.createElement('input')
    const submit = document.createElement('input')

    nameInput.name = 'name'
    nameInput.placeholder = 'Name'
    cohortInput.name = 'cohort'
    cohortInput.placeholder = 'Cohort'
    submit.type = 'submit'
    submit.value = 'Update info'

    editInfoForm.append(nameInput, cohortInput, submit)
    return editInfoForm
}

function addLanguageForm() {
    const newLanguageForm = document.createElement('form')
    const languageInput = document.createElement('input')
    const submit = document.createElement('input')

    languageInput.name = 'name'
    languageInput.placeholder = 'Input language name'
    submit.type = 'submit'
    submit.value = 'Add language'

    newLanguageForm.append(languageInput, submit)
    return newLanguageForm
}