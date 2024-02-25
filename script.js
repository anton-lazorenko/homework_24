function convertMinutes(amountMinutes) {
    amountMinutes %= (60 * 24); 
    let hours = Math.floor(amountMinutes / 60);
    let minutes = (amountMinutes % 60);
    return `${hours}ч. ${minutes}м.`;
}

function howManyMinutes() {
    let request;
    while (isNaN(request) || +request < 0 || +request > 1440 || request === null){
        request = prompt('Введите минуты от 0 до 2000');
    }
    return request;
}

function result() {
    let inputMinutes = howManyMinutes();
    alert(`Введенные минуты: ${inputMinutes} м. \nРезультат: ${convertMinutes(inputMinutes)}`);
}

result();