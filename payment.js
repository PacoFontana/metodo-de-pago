function payWithMercadoPago() {
    // Aquí puedes configurar el enlace de Mercado Pago
    const mercadoPagoLink = "https://mpago.la/1qDHTVs";
    window.location.href = mercadoPagoLink;
    generateCode();
}

function payWithPayPal() {
    // Aquí puedes configurar el enlace de PayPal
    const payPalLink = "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=pacopc2020@gmail.com&amount=10.00&currency_code=USD";
    window.location.href = payPalLink;
    generateCode();
}

function generateCode() {
    const date = new Date();
    const dayNumber = date.getDate();  // Número del día
    const currentHour = date.getHours();  // Hora actual

    const code = dayNumber * currentHour;  // Código generado
    document.getElementById('generated-code').textContent = code;

    // Mostrar el contenedor del código generado
    document.getElementById('code-container').classList.remove('hidden');
}
