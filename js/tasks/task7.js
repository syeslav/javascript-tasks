// Задача 7: Расчет файлов на флешке
function task7() {
    const flashSizeGB = prompt('Введите объем флешки в Гб:');
    
    if (Helpers.isPositiveNumber(flashSizeGB)) {
        const FILE_SIZE_MB = 820;
        const flashSizeMB = parseFloat(flashSizeGB) * 1024;
        const filesCount = Math.floor(flashSizeMB / FILE_SIZE_MB);
        
        alert(`На флешку поместится ${filesCount} файлов по 820 Мб`);
    } else {
        Helpers.showError();
    }
}