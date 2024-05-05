let data = [
    {
        imagen: "./assets/img/visa@2x.png",
        tarjeta: "visa"
    },
    {
        imagen: "./assets/img/mastercard@2x.png",
        tarjeta: "mastercard"
    },
    {

        imagen: "./assets/img/amex@2x.png",
        tarjeta: "amex"
    },
    {
        imagen: "./assets/img/diners@2x.png",
        tarjeta: "diners"
    },
    {
        imagen: "./assets/img/argencard@2x.png",
        tarjeta: "ar_argencard"
    },
    {
        imagen: "./assets/img/mercadopago@2x.png",
        tarjeta: "mercadopago"
    },
    {
        imagen: "./assets/img/CuentaDNI.png",
        tarjeta: "cuentadni"
    },
    {
        imagen: "./assets/img/Transferencia.png",
        tarjeta: "transferencia"
    },
    {
        imagen: "./assets/img/maestro@2x.png",
        tarjeta: "maestro"
    },
    {
        imagen: "./assets/img/visadebit@2x.png",
        tarjeta: "visadebit"
    }]

texto = `
    <h4>Aceptamos estos medios de pago</h4>
    <br>
    <div>
`
for (let tarj of data) {
    texto += `
    <img src=${tarj.imagen} 
    alt=${tarj.tarjeta} 
    width="48" height="30">
    `
}

document.querySelector("#medios_pago").innerHTML = texto+"</div><br>"

let pie = `
    <div>
    <span>Copyright Extralife electrodomésticos - 2024. Todos los derechos reservados.</span>
    </div>
    <!-- desarrolladores -->
    <div>
    <span>&copy; Grupo NN</span>
    <span>Email: <a href="mailto:mail@mail.com">mail@mail.com</a></span>
    </div>
    <br>
`
document.querySelector("#pie").innerHTML = pie