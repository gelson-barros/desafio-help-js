let img = document.getElementById('img')
//exercicio 06
//No seu HTML exiba a imagem de uma lampada, ao clicar em cima da lampada, troque o src dela para a lampada que está acessa.
//img.addEventListener('click', ()=>{
//
//    img.src = "./img/lampada-on.jpg";
//    
//})

//exercicio 07
//Agora que você já sabe utilizar o evento 'click', aprenda a usar o 'mouseover', ao passar o mouse em cima da 'lampada.jpg' altere ela para 'lampada-on.jpg' (Exemplo abaixo).
img.addEventListener('mouseover',()=>{
    img.src = "./img/lampada-on.jpg";
})