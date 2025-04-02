function calcular() {
    // Vamos criar 2 variáveis
    // JS as variáveis não possuem tipo
    let mascote, homenagem, leite, suplemento, kit, caracter, tarefa, arroz5kg, arroz1kg, feijao2kg, feijao1kg, macarrao, oleo, sangue, sangueAd, acao, contArre, contAcao, soma, equipe

    // Recupera o valor digitado pelo usuário
    mascote = Number(document.getElementById("mascote").value)
    homenagem = Number(document.getElementById("homenagem").value)
    leite = Number(document.getElementById("leite").value)
    kit = Number(document.getElementById("kit").value)
    suplemento = Number(document.getElementById("suplemento").value)
    caracter = Number(document.getElementById("caracter").value)
    tarefa = Number(document.getElementById("tarefa").value)
    arroz5kg = Number(document.getElementById("arroz5kg").value)
    arroz1kg = Number(document.getElementById("arroz1kg").value)
    feijao2kg = Number(document.getElementById("feijao2kg").value)
    feijao1kg = Number(document.getElementById("feijao1kg").value)
    macarrao = Number(document.getElementById("macarrao").value)
    oleo = Number(document.getElementById("oleo").value)
    sangue = Number(document.getElementById("sangue").value)
    sangueAd = Number(document.getElementById("sangueAd").value)
    acao = Number(document.getElementById("acao").value)
    contArre = Number(document.getElementById("contArre").value)
    contAcao = Number(document.getElementById("contAcao").value)
    equipe = document.getElementById("calculadora__equipe").value
    
     soma = mascote + homenagem + (2 * Number(leite)) 
     if (equipe == "Laranja"){
        if (kit >= 97){
            soma = soma + 5000 + ((kit-97)*30)
        }
        else if (kit >= 78){
            soma = soma + 4000 + ((kit-78)*30)
        }
        else if (kit >= 49){
            soma = soma + 2500 + ((kit-49)*30)
        }
        else if (kit >= 19){
            soma = soma + 1000 + ((kit-19)*30) 
        }
     }
    // Vamos calcular a pontuação considerando metas de kit e supl
    document.getElementById("soma").innerHTML = `Total de Pontos: ${soma}`
}