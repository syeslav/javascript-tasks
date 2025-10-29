// Главный файл приложения

// Функция для запуска задач
function runTask(taskNumber) {
    switch(taskNumber) {
        case 1:
            task1();
            break;
        case 2:
            task2();
            break;
        case 3:
            task3();
            break;
        case 4:
            task4();
            break;
        case 5:
            task5();
            break;
        case 6:
            task6();
            break;
        case 7:
            task7();
            break;
        case 8:
            task8();
            break;
        case 9:
            task9();
            break;
        case 10:
            task10();
            break;
        default:
            alert('Задача не найдена!');
    }
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript Tasks App initialized!');
    
    // Добавляем обработчики клавиш для быстрого доступа
    document.addEventListener('keydown', function(event) {
        if (event.key >= '1' && event.key <= '9') {
            runTask(parseInt(event.key));
        } else if (event.key === '0') {
            runTask(10);
        }
    });
});