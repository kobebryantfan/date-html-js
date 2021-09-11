
function botaoSubmit()
{
    let data = new Date();
    const meses = 
    {
        0: 'January',
        1: 'Februay',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December',
   };
   const dias = ['Mon.','Tues.','Wed.','Thurs.', 'Fri.','Sat.','Sun.'];
   const dia = data.getDay();
   const mes = data.getMonth();
   const timeString = data.toLocaleTimeString();
   const dateString = data.toLocaleDateString();
   const nomeMes = meses[mes];
   const nomeDia = dias[dia];

   const mensagem = "The date right now is "+dateString+"."+
    "<br>The actual month is "+nomeMes+", and today is "+ nomeDia
    +"<br>";

    document.body.innerHTML = "<br><br><br><h1 style='background-color: snow; width: 600px;margin: auto;padding: 20px 10px;box-shadow: 3px 5px 4px black;border-radius: 10px 30px;'>"+mensagem+"<br>Verified at "+timeString + "</h1>"+
   "<br><button class='botaoVoltar' type='button' onclick='botaoVoltar()'>Return.</button>";
};

function botaoVoltar()
{
    document.location.reload();
};
