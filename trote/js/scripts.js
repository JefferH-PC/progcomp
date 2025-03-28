function calcular() {
    // Vamos criar 2 variáveis
    // JS as variáveis não possuem tipo
    let mascote, homenagem, leite, suplementoAvulso, kitAvulso, caracter, tarefa, arroz5kg, arroz1kg, feijao2kg, feijao1kg, macarrao, oleo, sangue, sangueAd, acao, contArre, contAcao

    // Recupera o valor digitado pelo usuário
    mascote = document.getElementById("mascote").value
    homenagem = document.getElementById("homenagem").value
    leite = document.getElementById("leite").value
    kitAvulso = document.getElementById("kitAvulso").value
    suplementoAvulso = document.getElementById("suplementoAvulso").value
    caracter = document.getElementById("caracter").value
    tarefa = document.getElementById("tarefa").value
    arroz5kg = document.getElementById("arroz5kg").value
    arroz1kg = document.getElementById("arroz1kg").value
    feijao2kg = document.getElementById("feijao2kg").value
    feijao1kg = document.getElementById("feijao1kg").value
    macarrao = document.getElementById("macarrao").value
    oleo = document.getElementById("oleo").value
    sangue = document.getElementById("sangue").value
    sangueAd = document.getElementById("sangueAd").value
    acao = document.getElementById("acao").value
    contArre = document.getElementById("contArre").value
    contAcao = document.getElementById("contAcao").value
    
    let soma = Number(mascote) + Number(homenagem) + (2 * Number(leite)) + ( 30 * Number(kitAvulso)) + (15 * Number(suplementoAvulso)) + Number(caracter) + Number(tarefa) + (5 * Number(arroz5kg)) + Number(arroz1kg) + (2 * Number(feijao2kg)) + Number(feijao1kg) + (0.5 * Number(macarrao)) + Number(oleo) + Number(sangue) + (20 * Number(sangueAd)) + Number(acao) +  Number(contArre) + Number(contAcao)
    
    document.getElementById("soma").innerHTML = `Total de Pontos: ${soma}`
}