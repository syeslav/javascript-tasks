// Задача 8: Покупка шоколадок
function task8() {
    const money = prompt('Введите сумму денег в кошельке:');
    const price = prompt('Введите цену одной шоколадки:');
    
    if (Helpers.isPositiveNumber(money) && Helpers.isPositiveNumber(price)) {
        const moneyValue = parseFloat(money);
        const priceValue = parseFloat(price);
        
        if (priceValue > 0) {
            const chocolates = Math.floor(moneyValue / priceValue);
            const change = moneyValue - (chocolates * priceValue);
            
            alert(`Вы можете купить ${chocolates} шоколадок\nСдача: ${Helpers.formatNumber(change)}`);
        } else {
            alert('Цена должна быть больше 0!');
        }
    } else {
        Helpers.showError();
    }
}