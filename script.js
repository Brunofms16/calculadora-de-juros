document.getElementById("calculate").addEventListener("click", function(){
    const value = document.getElementById("value").value;
    const fee = (document.getElementById("fee").value)/100;
    const time = document.getElementById("time").value;

    const total = value * (1 + fee)**time;
    
    document.getElementById("total").innerHTML = ("R$" + total.toFixed(2).replace("." , ","));

    inpboxs.innerHTML = ` <button id="more" value="">  <a  href="https://brasilescola.uol.com.br/matematica/juros-compostos.htm" target="_blank" style = "color: white;
    text-decoration: none;">Saber mais</a></button>`
})


const mais = document.getElementById("mores")

const inpboxs = document.getElementById("inpboxs")