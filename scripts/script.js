//------------------1ra entrega proyecto final-------------------//

//VAriables globales
const addRoom = []
const bookedRoom = []
let reserva;

// creo objeto habitaciones
class Room{
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
addRoom.push(new Room('1','Charleroi','dept',50));
addRoom.push(new Room('2','Namur','house',55));
addRoom.push(new Room('3','Nivelles','dept',45));
addRoom.push(new Room('4','Moron','house',70));
addRoom.push(new Room('5','Luven','house',75));
addRoom.push(new Room('6','Artwerpen','dept',60));

//Funcion agregar nuevas habitaciones
function addNewRoom(){ addRoom.push(new Room(prompt('Ingrese numero de ID'), 
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
var departament= addRoom.filter(function(room){
    return room.type == "dept";
})

function onlyDept(){
        for(const obj of departament){
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
//funcion elegir room
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
    
       for (let i = 0; i< 1; i++) {
       if (elegido === 'ESC' || elegido ==='esc' ) { 
           alert("Cancelado");
         break;
        }
        
       total += selectionRoom(elegido); 
       let qDays1 = parseInt(prompt("Ingrese el numero de dias"))
       let total2= total*qDays1// RETORNAR MULTIPLICACION
       
    document.write("A seleccionado: " + bookedRoom.length + " rooms <br>"); //cantidad  hab seleccionadas
    document.write("Total a abonar es: " + total2 + "<br>"); // el total.
    document.write(`<button onclick="location.reload()">Volver</button>`)
    document.write(`<button onclick="elegido()">show Rooms</button>`+ "</br>" )
    }
}
function elegido (){
    document.write("Habitacion Seleccionada: " + bookedRoom.join(" - ") + "<br>") //muestra elegidos.push
}

//------------------------NUeva Entrega Eventos-Dom-Storage-----------------------------//
//declaracion variables golabales


//Nuestra reserva la guardamos en el localStorage
if (JSON.parse(localStorage.getItem('reserva'))){
    reserva = JSON.parse(localStorage.getItem('reserva'))
}else{
    localStorage.setItem('reserva', JSON.stringify([]))
    reserva = JSON.parse(localStorage.getItem('reserva'))
}

//muestra las crad de manera dinamica reemplazando al html
function showRooms() {
    //tbm podia usar un foreach
    for (let i= 0; i< rooms.length; i++) {
        const element = rooms[i];
        //creo una variable para evitar escribir element
        const {id, category, name, price, img} = element
        const card =  `
        <div class='card'>
            <div class='box'>
                <img src=${img} alt="">    
                <div class="head">${name}</div>
                <div class="subT">${category}</div>
                <div class="price">$${price.toLocaleString()}- Euros</div>
                <button id=${id} class="btnAdd btn">Booked</button>
            </div>
        </div>
        `
        const contenedora = document.getElementById('contenedora')
        contenedora.innerHTML += card
    } 
}

//llamo a la function
showRooms();

const btnAdd = document.getElementsByClassName('btnAdd')
for (let i = 0; i < btnAdd.length; i++) {
    const element = btnAdd[i];
    element.addEventListener('click', addReserve)
}

//funcion para asociar el click con la habitacion por medio del ID
function addReserve(e){
    //capturamos el evento en una constante por id
    const btn = e.target;
    const idBtn = btn.getAttribute('id')
    const roomSelect = rooms.find(prod => prod.id == idBtn)
    //acumula los click del mismo prod
    const inReserve = reserva.find(prod => prod.id == roomSelect.id)
    //Condicional que acumula reservas iguales para que no se repitan
    if (!inReserve) {
        //si no esta lo pusheo
        reserva.push({...roomSelect, cantidad: 1})
    }else{
        //si esta lo borro y
        let filterReserve = reserva.filter(prod => prod.id != inReserve.id)
        //reescribo la cantidad agregandole 1
        reserva = [...filterReserve, {...inReserve, cantidad: inReserve.cantidad + 1}]
    }
    console.log(reserva)
    localStorage.setItem('reserva', JSON.stringify(reserva))
}

//Acumulador de seleccion se actualiza cada vez que refresh
const contador = document.getElementById('counter')
contador.innerHTML = reserva.length 

//-----------------------------------------------------//

