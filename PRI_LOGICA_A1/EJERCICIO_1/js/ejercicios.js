class Ejercicios_1{
    venta(){
        //console.log=("ventas..")
        let costo = document.getElementById("Costo").value
        costo = parseFloat(costo)
        let Des = document.getElementById("Descuento").value
        Des = parseFloat(Des)     
        let resp = document.getElementById("resp")
        let Iva = document.getElementById("Iva").checked
        let valorIva = 0, sub = 0, total = 0, valordes = 0
        const Iva12 = 0.12
        valordes = costo * (Des/100)
        sub = costo-valordes
        if(Iva==true){
            valorIva = sub * Iva12
        }
        total = sub+valorIva

        resp.textContent=`Costo:${costo.toString()}\nDescuento:${valordes.toString()}\nSubtotal:${sub.toString()}\nIva:${valorIva.toString()}\nTotal:${total.toString()}`
        console.log(resp.textContent)
        console.log (costo,valordes,valorIva,sub,total) 
    }
    Mayor(){
         //console.log=("Mayor..")
        let numero1= document.getElementById("numero1").value
        numero1=parseFloat(numero1)
        let numero2= document.getElementById("numero2").value
        numero2=parseFloat(numero2)
        let resp = document.getElementById("resp")
        if(numero1==numero2){
            resp.textContent=("los numeros son iguales")
        }else{
            if(numero1>numero2){
                resp.textContent=(numero1+" es mayor a "+numero2)
            }else{
                resp.textContent=(numero2+" es mayor a "+numero1)
            }
        }
        console.log(numero1,numero2)
    }
    dia_semana(){
        //console.log=(dia_semana)
        let dia=document.getElementById("dia").value
        dia=parseFloat(dia)
        let resp = document.getElementById("resp")
        if(dia==1){
            resp.textContent=("El dia es Lunes")
        }else{
            if(dia==2){
                resp.textContent=("El dia es Martes")
            }else{
                if(dia==3){
                    resp.textContent=("El dia es Miercoles")
                }else{
                    if(dia==4){
                        resp.textContent=("El dia es Jueves")
                    }else{
                        if(dia==5){
                            resp.textContent=("El dia es Viernes")
                        }else{
                            if(dia==6){
                                resp.textContent=("El dia es Sabado")
                            }else{
                                if(dia==7){
                                    resp.textContent=("El dia es Domingo")
                                }else{
                                    resp.textContent=("El numero ingresado esta fuera del limite.")
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    año(){
        let año=document.getElementById("año").value
        año=parseFloat(año)
        let resp = document.getElementById("resp")
            if((año%4==0) && (año%100 !=0 || año%400==0 )){
                resp.textContent=("Si es un año bisiesto.")
        }else{
            resp.textContent=("No es un año bisiesto.")
        }
    }
    presentar(){
        let inicio=document.getElementById("inicio").value
        inicio=parseFloat(inicio)
        let fin=document.getElementById("fin").value
        fin=parseFloat(fin)
        if(inicio==fin){
            resp.textContent=("Los valores ingresados son iguales.")
        }else{
            if(inicio>fin){
                resp.textContent=`Los números entre el ${inicio} y ${fin} son: \n`
                do{
                    resp.textContent+=`${inicio.toString()}\n`;
                    inicio=inicio-1;
                }
                while(inicio>=fin)
            }else{
                if (inicio<fin){
                    resp.textContent=`Los números entre el ${inicio} y ${fin} son: \n`
                    do{
                        resp.textContent+=`${inicio.toString()}\n`;
                        inicio=inicio+1;
                    }
                    while(inicio<=fin)
                }
            }
        }
    }
    sumar(){
        let limite=document.getElementById("limite").value
        limite=parseFloat(limite)
        let resp = document.getElementById("resp")
        let acum =0       
        for(let i=1; i <= limite; i++){
            if(i%2==0){
                acum=acum+i
            }
        }
        resp.textContent=`La suma de los numeros pares del 1 hasta el ${limite} es: ${acum.toString()}`    
    }
    contar(){
        let inicio=document.getElementById("inicio").value
        inicio=parseFloat(inicio)
        let fin=document.getElementById("fin").value
        fin=parseFloat(fin)   
        let resp= document.getElementById("resp")
        let acum=0
        let cont=inicio
        if(inicio==fin){
            resp.textContent=`los números son iguales, la respuesta es ${inicio}`
        }else{
            for( let i=1; inicio<=fin; i++){
                acum=acum+inicio
                inicio=inicio+1
            }
            resp.textContent=`La suma de los números del ${cont} hasta el ${fin} es: ${acum.toString()} y La cantidad de números es ${inicio-cont.toString()}`
        }
    }
    divisores(){
        let div=document.getElementById("div").value
        div=parseFloat(div)
        let resp = document.getElementById("resp")
        let i =1
        resp.textContent=`Los divisores del numero ${div.toString()} son:\n` 
        if(div===div){
            while(i<div){
                if (div%i==0){
                    resp.textContent+=`${i.toString()}\n` 
                }
                i++
            }
        }else{
            resp.textContent=`El valor ingresado no es valido`
        }       
    }
    perfecto(){
        let num=document.getElementById("num").value
        num=parseFloat(num)
        let resp = document.getElementById("resp")
        let i=1, acum=0
        while (i<num){
            if (num%i==0){
                acum=acum+i
            }
            i++
        }
        if (acum==num){
            resp.textContent=`El numero ${num.toString()} es Perfecto`             
        }else{
            resp.textContent=`El numero ${num.toString()} no es Perfecto`             
        }
    }
}
let ejer = new Ejercicios_1()
//ejer.venta()