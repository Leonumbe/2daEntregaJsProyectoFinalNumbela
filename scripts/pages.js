//declaracion variables golabales
let reserva;

//Nuestra reserva la guardamos en el localStorage
if (JSON.parse(localStorage.getItem('reserva'))){
    reserva = JSON.parse(localStorage.getItem('reserva'))
}else{
    localStorage.setItem('reserva', JSON.stringify([]))
    reserva = JSON.parse(localStorage.getItem('reserva'))
}

//---------------pagina reserva---------------------//
//Monto total mas fee 0.1
//reduce ciclo de producto mas acum
const totalReserved = () => {
    return reserva.reduce((acumulador, prod) => acumulador + ((prod.price * 0.1 + prod.price) * prod.cantidad, 0 ))
 }

const body = document.getElementById('bookedInProgress');
//desplegamos reserva en el Dom
    if(reserva.length == 0){
        const noBookedSelection = 
        `
        <h1 class="subT">No ha seleccionado ninguna habitacion</h1>
        <a class="btn" href="../index.html">
            <button class="btn">Back</button>
        <a/>
        `
        body.innerHTML += noBookedSelection; 
    }else{
        const summary = `
        <h1 class="subT">Booked Selection</h1>
        <div id='tBody'></div>
        <a id="filter" class="btn" href="../index.html">Back</a>
        <a href="#Form" class="btn">Finalizar Reserva</a>
        `
        body.innerHTML += summary
        const tbody = document.getElementById('tBody')
            for (let i = 0; i < reserva.length; i++) {
                const element = reserva[i];
                const { id, category, name, price,img, cantidad } = element;
                const reservaFinal = `
                <div id=${id}>
                    <img src=${img} alt="">    
                    <div class="head">${name}</div>
                    <div class="subT">${category}</div>
                    <div>${cantidad}</div>
                    <div class="price">$${price.toLocaleString()}- Euros</div>
                    <div>Precio*Q: $${(cantidad * price).toLocaleString()}</div>
                    <button class='btn'>borrar</button>
                </div>`
                tbody.innerHTML += reservaFinal
            }
    }