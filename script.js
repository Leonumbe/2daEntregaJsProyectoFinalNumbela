//1ra entrega proyecto final

// creo objeto habitaciones
class room{
    constructor(id, name,type, price){
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
    }
    priceTax(){
        this.price * 1.21; 
        return this.price;
    }
}

//agregando nuevos objetos al array
const addRoom = [];

addRoom.push(new room('1','Charleroi','dept',50));
addRoom.push(new room('2','Namur','house',55));
addRoom.push(new room('3','Nivelles','dept',45));
addRoom.push(new room('4','Moron','house',70));
addRoom.push(new room('5','Luven','house',75));
addRoom.push(new room('6','Artwerpen','dept',60));

//Funcion agregar nuevas habitaciones
function addNewRoom(){
    addRoom.push(new room(prompt('Ingrese numero de ID'), 
        prompt('Ingrese nombre de la hab.'),
        prompt('Ingrese tipo de hab: house/dept'),
        prompt('Ingrese precio')));
    console.log(addRoom)
}

//Mostramos habitciones dusponibles

function showRooms(){
    document.write('Estas son las habitaciones que se encuentran disponibles:' + '<br>')
        for (const room of addRoom) {
            document.write(room.id + '-')
            document.write(room.name + '-')
            document.write(room.type + '-')
            document.write('$'+ room.price +'<br>') 
        }
    document.write(`<button onclick="booked()">Selectionar</button>`)
    document.write(`<button onclick="location.reload()">Volver</button>` + '<br>')
}

// funcion Filtro (solo dept)
var dept= addRoom.filter(function(room){
    return room.type == "dept";
})

function onlyDept(){
        for(const obj of dept){
            document.write(obj.id + "-")
            document.write(obj.name +"-")
            document.write("$" + obj.price + "<br>")        
        }
    document.write(`<button onclick="location.reload()">Volver</button>`)
}
function sortByPrice(){
    addRoom.sort((a,b)=>{
        return b.price - a.price
    })
    for(const room of addRoom){
        document.write(room.id + "-")
        document.write(room.name +"-")
        document.write("$" + room.price + "<br>")
    }
    document.write(`<button onclick="location.reload()">Volver</button>`)
}


const bookedRoom = []
function selectionRoom(R){
    
    switch (R) {
 
        case "1":
            alert("Excelente eleccion.");
            bookedRoom.push("Charleroi'");
            return 50;
            
        case "2":
            alert("Excelente eleccion");
            bookedRoom.push("Namur");
            return 55;

        case "3":
            alert("Excelente eleccion");
            bookedRoom.push("Nivelles");
            return 45;
        
        case "4":
            alert("Excelente eleccion");
            bookedRoom.push("Moron");
            return 70;
        
        case "5":
            alert("Excelente eleccion");
            bookedRoom.push("Luven");
            return 75;
  
        case "6":
            alert("Excelente eleccion");
            bookedRoom.push("Artwerpen");
            return 80;
 
        default:
            alert("La habitacion no esta disponible");
            bookedRoom.push("Operacion CANCELADA");
            return 0;
    }
}
function booked(){
       let total = 0
       let elegido = prompt('Ingrese el Id de la habitacion \n1- Charleroi $50\n2- Namur $55\n3- Nivelles $45\n4- Moron $70\n5- Bruges $75\n6- Artwerpen $80\n ESC para cancelar');
    
       for (let i = 0; i< total.length; i++) {
       if (elegido === 'ESC' || elegido ==='esc' ) { 
    
           alert("Cancelado");
         break;
        }
       let qDays1 = parseInt(prompt("Ingrese el numero de dias\n 1-1 dia\n 2-2 dias\n 3-3 dias\n 4-4 dias\n 5-5 dias\n 6-6 dias\n ESC para cancelar"))
    //     if (qDays1(isNaN(prompt('Vuelva a ingresar un numero')))){ 
    //     alert("Error");
        
        
       total += selectionRoom(elegido); 
       let total2= total*qDays1// RETORNAR MULTIPLICACION
     // console.log(total)
       
    document.write("A seleccionado: " + bookedRoom.length + " rooms <br>"); //cantidad  hab seleccionadas
    document.write("Total a abonar es: " + total2 + "<br>"); // el total.
    document.write(`<button onclick="location.reload()">Volver</button>`)
    document.write(`<button onclick="elegido()">show Rooms</button>`+ "</br>" )
    
    }
}
function elegido (){
    document.write("Habitacion Seleccionada: " + bookedRoom.join(" - ") + "<br>") //muestra elegidos.push
}





//--------------ENTREGA ANTERIOR---------------------------------//

//Replanteando el desafio del simulador, mantengo la pagina de alq de habitaciones, pero en esta entrega todo el feedback va al adm de la pagina.
//Partiendo del supuesto de una semana de Operaciones. entregamos los siguientes datos:
//Subtotal con referencia de ID por habitacion incluyendo dias alquilados, monto parcial, comision parcial. 
//Total Acumulado de: nro de dias, monto facturado, comisiones percibidas.

// creo objeto habitaciones
// class room{
//     constructor(id,name,price){
//         this.id = id;
//         this.name = name;
//         this.price = price;
//     }
//     roomPrice(){
//         return this.price; 
//     }
// }

// //agrego habitaciones disponibles
// const rooms1 = new room('1','Charleroi',50);
// const rooms2 = new room('2','Namur',55);
// const rooms3 = new room('3','Nivelles',45);
// const rooms4 = new room('4','Moron',70);
// const rooms5 = new room('5','Luven',75);
// const rooms6 = new room('6','Artwerpen',60);




//Creo objeto nro de dias

// class detalleNroDias{
//     constructor(room,nroDias){
//         this.room = room;
//         this.nroDias = nroDias;
//     }
//     //funcion para guardar dato
//     cantidadDias(){
//         return this.nroDias;
//     }
//     //funcion calcular $xQ
//     calcularSubtotal(){
//         let subtotal = this.room.price * this.nroDias;
//         return subtotal;
//     }
//     //funcion calcular taxes 10%
//     calcularTax(){
//         const taxBase = 0.10;
//         let tax = this.calcularSubtotal() * taxBase;
//         return tax;
//     }
//     mostrarDetalle(){
//         return 'Detalle por Operacion:\n'+'\nRoom ID: '+ this.room.id + '\nNro de dias alq: ' + this.nroDias + ' x  $ '+ this.room.roomPrice()+ ' = '+ this.calcularSubtotal()+'-Euros' + '\nTaxes: ' + ' $ '+this.calcularTax()+'-Euros'+'\n';
//     }
// }

// //agrego numero de dias + objeto room
// const detalleNroDias1 = new detalleNroDias(rooms1,3)
// const detalleNroDias2 = new detalleNroDias(rooms2,5)
// const detalleNroDias3 = new detalleNroDias(rooms3,2)
// const detalleNroDias4 = new detalleNroDias(rooms4,6)
// const detalleNroDias5 = new detalleNroDias(rooms5,1)
// const detalleNroDias6 = new detalleNroDias(rooms6,7)


// //Objeto acumulados totales
// class acumTotal{
//     constructor(fecha,detalleFinal){
//         this.fecha = fecha;
//         this.detalleFinal = detalleFinal;
//     }
//     //Calculo total de dias alquilados
//     calcularDaysTotal(){
//         let total = 0;
//         for(const dT of this.detalleFinal){
//             total += dT.cantidadDias();
//         }
//         return total
//     }
//     //Calculo total de ingreso por alquiler
//     calcularAmountTotal(){
//         let total = 0;
//         for(const aT of this.detalleFinal){
//             total += aT.calcularSubtotal();
//         }
//         return total
//     }
//     //Calculo total de comision acum
//     calcularTaxTotal(){
//         let total = 0;
//         for(const cT of this.detalleFinal){
//             total += cT.calcularTax();
//         }
//         return total
//     }
//     //muestro total concatenando
//     mostrarTotal(){
//         let text = '';
//         for(const bT of this.detalleFinal){
//             text += bT.mostrarDetalle() + '\n';
//         }
//         text += 'Resumen de Acumulado Semanal: '+ this.fecha +'\nTotal de dias Alquilados: ' + this.calcularDaysTotal()+' dias.' +'\nIngresos Totales por alquiler: $ '+ this.calcularAmountTotal()+'-Euros' +'\nTotal de Comisiones: $ '+ this.calcularTaxTotal()+'-Euros';
//         return text
//     }
// }
// // creo un lista con los atrib acumulados
// const listaRooms = [];
// listaRooms.push(detalleNroDias1)
// listaRooms.push(detalleNroDias2)
// listaRooms.push(detalleNroDias3)
// listaRooms.push(detalleNroDias4)
// listaRooms.push(detalleNroDias5)
// listaRooms.push(detalleNroDias6)

// //cargo nuevo acum
// const acumTotal1 = new acumTotal(new Date(),listaRooms)
// console.log(acumTotal1.mostrarTotal())


//-----------------------------------/
