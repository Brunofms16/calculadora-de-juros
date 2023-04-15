document.getElementById("calculate").addEventListener("click", function(){
    const value = document.getElementById("value").value;
    const fee = document.getElementById("fee").value/100;
    const time = document.getElementById("time").value;

    const total = value * (1 + fee)**time;
    
    document.getElementById("total").innerHTML = ("R$" + total.toFixed(2).replace("." , ","));

    inpboxs.innerHTML = ` <button id="more" value=""> <a  href="https://brasilescola.uol.com.br/matematica/juros-compostos.htm" target="_blank" style = "color: white;
    text-decoration: none;">Saber mais</a></button>`
    

btn.style.display = "block"
    
})




const mais = document.getElementById("mores")

const inpboxs = document.getElementById("inpboxs")
const btn = document.getElementById("pdf")
var data = document.getElementById("data")
var agora = new Date()
var min = agora.getMinutes()
var hora = agora.getHours()
var dia = agora.getDate()
var mes = agora.getMonth()+1
var ano = agora.getFullYear()
 


console.log(`agora são exatamente ${hora} horas. `)

btn.addEventListener("click" , () => {

    btn.style.display = "none"
    
  
    

var element = document.getElementById('container');
var opt = {
  margin:       0,
  filename:     'resultado.pdf',
  image:        { type: 'pdf', quality: 0.98 },
  html2canvas:  { scale: 1 },
  jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  
};
 
// New Promise-based usage:
html2pdf().from(element).set(opt).save();
 
// Old monolithic-style usage:
html2pdf(element, opt);
data.innerHTML = ` <br> arquivo extraido em ${dia}/${mes}/${ano} , as ${hora}:${min}<br><br>
`


body.button.style.display = "none"
})