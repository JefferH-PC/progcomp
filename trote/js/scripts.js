function calcular() {
    // Vamos criar 2 variáveis
    // JS as variáveis não possuem título
    let mascote, homenagem
    // Recupera o valor do mascote digitado pelo usuário
    mascote = document.getElementById("mascote").value
    // Recupera o valor do homenagem digitado pelo usuário
    homenagem = document.getElementById("homenagem").value
    
    let soma = Number(mascote) + Number(homenagem)
    alert(soma)
}