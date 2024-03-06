function Total(){
    event.preventDefault()
    let entradaform=document.forms["form-entradas"]
    let menor=entradaform["cantmenor"].value
    let mayor=entradaform["cantmayor"].value
    let jubilado=entradaform["cantjubilados"].value
    let error=true
    let total=0
    let total1=0 
    let total2=0 
    let total3=0
    console.log(menor)
    if(menor==0 && mayor==0 && jubilado==0){
        document.getElementById("errormenor").textContent="Ingrese una cantidad de entradas"
        document.getElementById("errormayor").textContent="Ingrese una cantidad de entradas"
        document.getElementById("errorjubilado").textContent="Ingrese una cantidad de entradas"
        error=false
        
    }

    if(isNaN(menor) || isNaN(mayor) || isNaN(jubilado)){
        console.log(menor)
        document.getElementById("errormenor").textContent="Ingrese una cantidad de entradas en numeros"
        document.getElementById("errormayor").textContent="Ingrese una cantidad de entradas en numeros"
        document.getElementById("errorjubilado").textContent="Ingrese una cantidad de entradas en numeros"
        error=false
    }

    if(menor>0 || mayor>0 || jubilado>0){
        document.getElementById("errormenor").textContent=""
        document.getElementById("errormayor").textContent=""
        document.getElementById("errorjubilado").textContent=""
        total1=13000*menor
        total2=16000*mayor
        total3=13000*jubilado
    }

    if(!error){
        return error
    }

    total=total1+total2+total3
    console.log(total)
    document.getElementById("pago").textContent=total
    /*probando con crear un elemento 
    const pag=document.createElement("p")
    pag.textContent="total a pagar: "+total
    const contpag=document.createElement("div")
    contpag.style.backgroundColor= "#6cb6ff"
    contpag.appendChild(pag)
    entradaform.appendChild(contpag)*/
   return error
  

}