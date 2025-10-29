// Вспомогательные функции

const Helpers = {
    // вляется ли значение числом
    isNumber(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    },
    
    // является ли значение целым числом
    isInteger(value) {
        return Helpers.isNumber(value) && Number.isInteger(parseFloat(value));
    },
    
    // явли значение положительным числом
    isPositiveNumber(value) {
        return Helpers.isNumber(value) && parseFloat(value) > 0;
    },
    
    // преоброзование числа с двумя знаками после запятой
    formatNumber(num) {
        return parseFloat(num).toFixed(2);
    },
    
    // ошибки при некорректном вводе
    showError(message = 'Некорректный ввод! Пожалуйста, введите число.') {
        alert('❌ ' + message);
    }
};