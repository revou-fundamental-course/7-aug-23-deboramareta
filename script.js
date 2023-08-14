const currentPage = window.location.pathname.split('/').pop();
const resetButton = document.getElementById('reset');

const calculateKelilingButton = document.getElementById('calculateKeliling');
const calculateLuasButton = document.getElementById('calculateLuas');
const sideAInput = document.getElementById('sideA');
const sideBInput = document.getElementById('sideB');
const sideCInput = document.getElementById('sideC');
const kelilingResult = document.getElementById('kelilingResult');
const baseInput = document.getElementById('base');
const heightInput = document.getElementById('height');
const luasResult = document.getElementById('luasResult');

resetButton.addEventListener('click', () => {
    if (currentPage === 'keliling.html') {
        sideAInput.value = '';
        sideBInput.value = '';
        sideCInput.value = '';
        kelilingResult.textContent = '';
    } else {
        baseInput.value = '';
        heightInput.value = '';
        luasResult.textContent = '';
    }
});

if (currentPage === 'keliling.html') {
    calculateKelilingButton.addEventListener('click', () => {
        const sideA = parseFloat(sideAInput.value);
        const sideB = parseFloat(sideBInput.value);
        const sideC = parseFloat(sideCInput.value);

        if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC)) {
            const keliling = sideA + sideB + sideC;
            kelilingResult.textContent = `Keliling: ${keliling}`;
        } else {
            kelilingResult.textContent = 'Masukkan angka valid untuk semua sisi';
        }
    });
} else {
    calculateLuasButton.addEventListener('click', () => {
        const base = parseFloat(baseInput.value);
        const height = parseFloat(heightInput.value);

        if (!isNaN(base) && !isNaN(height)) {
            const luas = 0.5 * (base * height);
            luasResult.textContent = `Luas: ${luas}`;
        } else {
            luasResult.textContent = 'Masukkan angka valid untuk kedua input';
        }
    });
}
