// Задача 1: Приветствие
function task1() {
    const name = prompt('Введите ваше имя:');
    
    if (name && name.trim() !== '') {
        alert(`Привет, ${name.trim()}!`);
    } else {
        alert('Вы не ввели имя!');
    }
}