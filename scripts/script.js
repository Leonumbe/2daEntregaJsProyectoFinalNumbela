
//declaracion variables golabales
let reserva;

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

