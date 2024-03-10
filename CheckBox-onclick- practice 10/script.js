const myCheckBox = document.getElementById("myCheckBox");
const butangVisa = document.getElementById("butangVisa");
const butangMasterCard = document.getElementById("butangMasterCard");
const butangPayPal = document.getElementById("butangPayPal");
const butangCash = document.getElementById("butangCash");
const myLanggan = document.getElementById("myLanggan");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if (myCheckBox.checked) {
        subResult.textContent = `Anda telah melanggan!`;
    } else {
        subResult.textContent = `Anda belum melanggan :( `;
    }

    if (butangVisa.checked) {
        paymentResult.textContent = `Anda membayar dengan Visa`;
    } else if (butangMasterCard.checked) {
        paymentResult.textContent = `Anda membayar dengan Mastercard`;
    }
    else if (butangPayPal.checked) {
        paymentResult.textContent = `Anda membayar dengan PayPal`;
    }
    else if (butangCash.checked) {
        paymentResult.textContent = `Anda membayar dengan wang tunai`;
    } else {
        paymentResult.textContent = `Anda harus memilih cara pembayaran!`;
    }

}