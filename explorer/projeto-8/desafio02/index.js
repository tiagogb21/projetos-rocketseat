let students = [
    {
        name: 'John Doe',
        grade1: Math.round(Math.random()*10),
        grade2: Math.round(Math.random()*10)
    },
    {
        name: 'Jane Doe',
        grade1: Math.round(Math.random()*10),
        grade2: Math.round(Math.random()*10)
    },
    {
        name: 'Oliver Round',
        grade1: Math.round(Math.random()*10),
        grade2: Math.round(Math.random()*10)
    },
    {
        name: 'Charles Beltmore',
        grade1: Math.round(Math.random()*10),
        grade2: Math.round(Math.random()*10)
    },
];

function calculateAverage(student) {
    return (student.grade1 + student.grade2) / 2;
}

function checkApproval(student) {
    const average = calculateAverage(student);

    const result = average > 7 ?
        `Parabéns ${student.name}! Você foi aprovado(a) no concurso!` :
        `Não foi dessa vez ${student.name}! Tente novamente!`;

    return `
        A média do aluno ${student.name} é ${average.toFixed(2)} \n
        ${result}
    `;
}

students.forEach((student) => {
    alert(checkApproval(student));
});
