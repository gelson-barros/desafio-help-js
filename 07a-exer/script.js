
const btn = document.getElementById('btn')
//exercicio 07a
// Faça 2 campos no HTML chamados: 'Nome', 'Sobrenome' e um botão 'Saudação'; ao clicar no botão exibir um alert: 'Olá {NOME} {SOBRENOME}'
//btn.addEventListener('click',()=>{
//    const nome = document.getElementById('nome').value
//    const sobrenome = document.getElementById('sobrenome').value
//    if (nome && sobrenome) {
//        alert(`Olá ${nome} ${sobrenome}`);
//    } 
//})

//exercicio 08
//Crie um campo texto parar preencher um CPF <input maxlength="11" id="cpf" />, e exiba ao lado com pontuação conforme preencher
btn.addEventListener("click", () => {
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const cpf = document.getElementById("cpf").value;
    if (nome && sobrenome && cpf) {
        alert(`Olá ${nome} ${sobrenome} com CPF ${cpf}`);
    }
});