// Задача 4: Площадь окружности
function task4() {
    const radius = prompt('Введите радиус окружности:');
    
    if (Helpers.isPositiveNumber(radius)) {
        const area = Math.PI * Math.pow(parseFloat(radius), 2);
        alert(`Площадь окружности: ${Helpers.formatNumber(area)}`);
    } else {
        Helpers.showError();
    }
}