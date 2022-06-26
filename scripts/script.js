

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
                <img src=${img}>    
                <div class="head">${name}</div>
                <div class="subT">${category}</div>
                <div class="price">$${price.toLocaleString()}- Euros</div>
                <div id="${id}" class="btn btnAdd">Booked</div>
            </div>
        </div>
        `
        const contenedora = document.getElementById('contenedora')
        contenedora.innerHTML += card
    } 
}
//llamo a la funcion
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
    const roomSelect = rooms.find(prod => prod.id === idBtn)
    //acumula los click del mismo prod
    const inReserve = reserva.find(prod => prod.id == roomSelect.id)
    if (!inReserve) {
        reserva.push({...roomSelect, cantidad: 1})
    }else{
        let filterReserve = reserva.filter(prod => prod.id != inReserve.id)
        //reescribo la cantidad 
        reserva = [...filterReserve, {...inReserve, cantidad: inReserve.cantidad + 1}]
    }
    console.log(reserva)
    localStorage.setItem('reserva', JSON.stringify(reserva))
}


//Acumulador de seleccion
const contador = document.getElementById('counter')
contador.innerHTML = reserva.length 

//---------------pagina reserva---------------------

//Monto total mas fee 0.1
 const totalReserve = () => {
    return reserva.reduce((acc, prod) => acc + ((prod.price * 0.1 + prod.price)) * prod.cantidad, 0 )
 }

 const body = document.getElementById('reserva');

 if(reserva.length == 0){
    const reserveSubt = 
    `
    <div id="bookedOn">
        <h1 class="subT">No ha seleccionado ninguna habitacion</h1>
        <a class="btn" href="../index.html">
            <button>Back</button>
        <a/>
    </div>
    `
    body.innerHTML += reserveSubt
 }else{
    
 }