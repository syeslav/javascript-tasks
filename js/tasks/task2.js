// Задача 2: Расчет возраста
function task2() {
    const CURRENT_YEAR = 2024; // Константа - текущий год
    
    const birthYear = prompt('Введите ваш год рождения:');
    
    if (Helpers.isInteger(birthYear)) {
        const year = parseInt(birthYear);
        const age = CURRENT_YEAR - year;
        
        if (age >= 0 && age <= 150) {
            alert(`Вам ${age} лет!`);
        } else {
            alert('Некорректный год рождения!');
        }
    } else {
        Helpers.showError();
    }
}