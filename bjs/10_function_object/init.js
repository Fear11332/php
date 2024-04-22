
window.onload = function()
{
    document.querySelector('#surnameOutput').innerText='Вы можете сгенерировать новые данные';
};

document.querySelector('#clearInfo').addEventListener('click', event=>{
    event.preventDefault();
    document.querySelector('#surnameOutput').innerText='Вы можете сгенерировать новые данные';
    document.querySelector('#firstNameOutput').innerText='';
    document.querySelector('#middleName').innerText='';
    document.querySelector('#profession').innerText='';
    document.querySelector('#genderOutput').innerText='';
    document.querySelector('#birthYearOutput').innerText='';
})

document.querySelector('#newPerson').addEventListener('click', event=>{
    event.preventDefault();
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.dateOfBirth;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('middleName').innerText = initPerson.middleName;
    document.getElementById('profession').innerText = initPerson.profession;
})