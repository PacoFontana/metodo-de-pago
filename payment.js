function payWithMercadoPago() {
    // Configurar el enlace de Mercado Pago con la URL de redirección
    const mercadoPagoLink = "https://mpago.la/1qDHTVs";  // Enlace de pago de Mercado Pago
    window.location.href = mercadoPagoLink;
}

function payWithPayPal() {
    // Configurar el enlace de PayPal con la URL de redirección
    const payPalLink = "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=pacopc2020@gmail.com&amount=10.00&currency_code=USD&return=https://www.tuweb.com/success.html";
    window.location.href = payPalLink;
}
