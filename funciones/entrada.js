function Total(){
    let entradaform=document.forms["form-entradas"]
    let menor=entradaform["cantmenor"].value
    let mayor=entradaform["cantmayor"].value
    let jubilado=entradaform["cantjubilados"].value
    let error=true
    let total=0
    let total1=0 
    let total2=0 
    let total3=0
    if(menor==0 && mayor==0 && jubilado==0){
        document.getElementById("errormenor").textContent="Ingrese una cantidad de entradas"
        document.getElementById("errormayor").textContent="Ingrese una cantidad de entradas"
        document.getElementById("errorjubilado").textContent="Ingrese una cantidad de entradas"
        error=false
        
    }

    if(menor>0 || mayor>0 || jubilado>0){
        total1=13000*menor
        total2=16000*mayor
        total3=13000*jubilado
    }

    if(!error){
        return error
    }

    total=total1+total2+total3
    console.log(total)
    onclick=document.getElementById("pago").textContent=total
    
   return error
  

}