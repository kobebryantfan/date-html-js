
function botaoSubmit()
{
    let data = new Date();
    const meses = 
    {
        0: 'Janeiro',
        1: 'Fevereiro',
        2: 'Março',
        3: 'Abril',
        4: 'Maio',
        5: 'Junho',
        6: 'Julho',
        7: 'Agosto',
        8: 'Setembro',
        9: 'Outubro',
        10: 'Novembro',
        11: 'Dezembro',
   };
   const dias = ['Seg.','Ter.','Qua.','Qui.', 'Sex.','Sáb.','Dom.'];
   const dia = data.getDate();
   const mes = data.getMonth();
   const timeString = data.toLocaleTimeString();
   const dateString = data.toLocaleDateString();
   const nomeMes = meses[mes];
   const nomeDia = dias[dia];

   const mensagem = "A data de agora é "+dateString+"."+
    "<br>Nos encontramos no mês de "+nomeMes+", e hoje é "+ nomeDia
    +"<br>";

    document.body.innerHTML = "<br><br><br><h1 style='background-color: snow; width: 600px;margin: auto;padding: 20px 10px;box-shadow: 3px 5px 4px black;border-radius: 10px 30px;'>"+mensagem+"<br>Verificado às "+timeString + "</h1>"+
   "<br><button class='botaoVoltar' type='button' onclick='botaoVoltar()'>Voltar.</button>";
};

function botaoVoltar()
{
    document.location.reload();
};
