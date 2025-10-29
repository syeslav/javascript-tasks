// Задача 3: Периметр квадрата
function task3() {
    const side = prompt('Введите длину стороны квадрата:');
    
    if (Helpers.isPositiveNumber(side)) {
        const perimeter = 4 * parseFloat(side);
        alert(`Периметр квадрата: ${Helpers.formatNumber(perimeter)}`);
    } else {
        Helpers.showError();
    }
}