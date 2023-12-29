const studentNameInput = document.querySelector('#student-name');
const gradeInputs = [document.querySelector('#input-grade1'), document.querySelector('#input-grade2'), document.querySelector('#input-grade3')];
const buttonSubmit = document.querySelector('#button-submit');
const tbody = document.querySelector('tbody');

const applyInputValidation = (inputElement, min, max) => {
    inputElement.addEventListener('input', function() {
        const value = Number(inputElement.value);
        if (value < min || value > max || isNaN(value)) {
            inputElement.value = inputElement.value.charAt(0);
        }
    });
};

gradeInputs.forEach(input => applyInputValidation(input, 0, 10));

function isValidInput(input) {
    return input.value.trim() !== '';
}

function calculateAverage(grades) {
    const total = grades.reduce((sum, grade) => sum + parseFloat(grade), 0);
    return total === 0 ? 0 : total / grades.length;
}

function clearInputs(inputs) {
    inputs.forEach(input => (input.value = ''));
}

function createCell() {
    return document.createElement('td');
}

function createNewRow(numColumns = 5) {
    const newTr = document.createElement('tr');
    for (let i = 0; i < numColumns; i++) {
        newTr.appendChild(createCell());
    }
    tbody.appendChild(newTr);
    return newTr;
}

function updateTable() {
    const values = [studentNameInput, ...gradeInputs];

    if (values.every(isValidInput)) {
        const lastCreateRow = createNewRow();
        const tds = lastCreateRow.querySelectorAll('td');

        values.forEach((input, i) => {
            tds[i].textContent = input.value;
        });

        const grades = gradeInputs.map(input => Number(input.value));
        const average = calculateAverage(grades);

        tds[4].textContent = average.toFixed(2);

        clearInputs(values);
    }
}

buttonSubmit.addEventListener('click', updateTable);
