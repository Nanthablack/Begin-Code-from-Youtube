let discountButton = document.getElementById('discount-botton');
let message = document.getElementById('message');

function showMessage() {
    message.innerHTML = 'คุณได้ส่วนลด!';
}

discountButton.addEventListener('click', showMessage);