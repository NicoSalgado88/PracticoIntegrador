//const p=document.getElementById("pago")
//p.addEventListener("click",Total)
function Total() {
    try{
    event.preventDefault()
    let entradaform = document.forms["form-entradas"]
    let menor = entradaform["cantmenor"].value
    let mayor = entradaform["cantmayor"].value
    let jubilado = entradaform["cantjubilados"].value
    let factura=document.getElementById("factura")
    let error = true
    let total = 0
    let total1 = 0
    let total2 = 0
    let total3 = 0

    if(isNaN(menor) || menor<0){
        document.getElementById("errormenor").textContent="Ingrese una cantidad de entradas en numeros"
       // document.getElementById("errormayor").textContent="Ingrese una cantidad de entradas en numeros"
        //document.getElementById("errorjubilado").textContent="Ingrese una cantidad de entradas en numeros"
        return false
    }
    if(isNaN(mayor) || mayor<0){
        document.getElementById("errormayor").textContent="Ingrese una cantidad de entradas en numeros"
        return false
    }
    if (isNaN(jubilado) || jubilado<0){
        document.getElementById("errorjubilado").textContent="Ingrese una cantidad de entradas en numeros"
        return false
    }

    if (menor == 0 && mayor == 0 && jubilado == 0) {
        document.getElementById("errormenor").textContent = "Ingrese una cantidad de entradas"
        document.getElementById("errormayor").textContent = "Ingrese una cantidad de entradas"
        document.getElementById("errorjubilado").textContent = "Ingrese una cantidad de entradas"
        return false

    }
   
    
    if (menor > 0 || mayor > 0 || jubilado > 0) {
        document.getElementById("errormenor").textContent = ""
        document.getElementById("errormayor").textContent = ""
        document.getElementById("errorjubilado").textContent = ""
        total1 = 13000 * menor
        total2 = 16000 * mayor
        total3 = 13000 * jubilado
    }

    if (!error) {
        return error
    }

    total = total1 + total2 + total3
    
    //document.getElementById("pago").textContent = "Total a Pagar: " + total

    const divfac=document.createElement("div")
    let pfactura=document.createElement("h4")
    pfactura.textContent="Cantidad de entradas- Menor: "+menor+", Mayor: "+mayor+
    ", Jubilados: "+jubilado
    pfactura.style.fontSize="20px"
    let tfactura=document.createElement("h3")
    tfactura.textContent="Total a Pagar: $"+total
    factura.appendChild(divfac)
    divfac.appendChild(pfactura)
    divfac.appendChild(tfactura)

    /*var submitb=document.createElement("button")
    submitb.type="submit"
    submitb.textContent="Realizar Pago"
    factura.appendChild(submitb)*/

    return error
     
    }catch(e){
        alert("error")
        return false
    }

}