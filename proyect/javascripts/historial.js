window.addEventListener('load', function(){
    
    btngenerar.addEventListener('click', function(){
        
        arr=
        [
            ["", "<b>Nombre Dueño</b>","<b>Nombre Mascota</b>","<b>tipo mascota</b>","<b>Edad</b>","<b>Telefono</b>","<b>Correo</b>","<b>Fecha</b>"],
            [1, "Carlos Loor","Puchy",,"Gato", "5 Meses",,"0968331691","franeyrey1814@gmail.com", "17/07/2020"],
            [2, "Maria Delgado","Toby",,"Perro", "6 Meses", "0983498827","mariadelgado123@gmail.com","18/07/2020"],
            [3, "Satiago Arcentales","Samy",,"Perro", "1 Año","0958463258","san-arce12@gmail.com", "18/07/2020"],
            [4, "Patricia Reyes","blanca",,"Gato", "6 Meses", "0962351649","reyes-patricia99@gmail.com","18/07/2020"]
        
        ]

        convertirArregloEnTabla(arr);
    
    });

})
function convertirArregloEnTabla(parreglo)
{
    let html="<table border=1 > <font size=20>"
    
    
    parreglo.forEach(elemento=>{
        
        html+="<tr>"
        elemento.forEach(col=>{
            html+=`<td> ${col} </td>`
        })
        html+="</tr>"
    
    })
    html+="</table></font>"
    divtabla.innerHTML=html
}