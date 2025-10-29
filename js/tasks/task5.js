// Задача 5: Расчет скорости
function task5() {
    const distance = prompt('Введите расстояние между городами (в км):');
    const time = prompt('Введите время, за которое нужно добраться (в часах):');
    
    if (Helpers.isPositiveNumber(distance) && Helpers.isPositiveNumber(time)) {
        const speed = parseFloat(distance) / parseFloat(time);
        alert(`Необходимая скорость: ${Helpers.formatNumber(speed)} км/ч`);
    } else {
        Helpers.showError();
    }
}