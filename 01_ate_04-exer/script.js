//alert('Olá Mundo')

//alert(2+2)

const btn = document.getElementById('btn')

btn.addEventListener('click',function(){
    const input = document.getElementById('nome').value
    alert(`O nome completo é: ${input}`)
})