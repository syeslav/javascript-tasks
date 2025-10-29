// Задача 6: Конвертор валют
function task6() {
    const EXCHANGE_RATE = 0.85; // Константа - курс доллара к евро
    
    const dollars = prompt('Введите сумму в долларах:');
    
    if (Helpers.isPositiveNumber(dollars)) {
        const euros = parseFloat(dollars) * EXCHANGE_RATE;
        alert(`${Helpers.formatNumber(dollars)} USD = ${Helpers.formatNumber(euros)} EUR`);
    } else {
        Helpers.showError();
    }
}