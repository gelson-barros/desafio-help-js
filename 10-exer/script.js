/*
2 x - Campo/Input do tipo text. (id=soma1, id=soma2)
1 x - Botão (id=btn-soma)
1 x - Campo (id=resultado-soma)

Caso esteja preenchido um valor númerico nos dois campos(id=soma1, id=soma2), 
O resultado da soma devera aparecer no campo (id=resultado-soma) ao clicar no botão (id=btn-soma).
*/
const soma = document.getElementById('soma')
soma.addEventListener('click', ()=>{
    const soma1 = Number(document.getElementById('soma1').value)
    const soma2 = Number(document.getElementById('soma2').value)
    
    if (Number.isInteger(soma1) && Number.isInteger(soma2)) {
        let resultado = document.getElementById('resultado')
       resultado.value = soma1 + soma2
    }
})