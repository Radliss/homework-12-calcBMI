function calculateBMI() {
    let heightInput = document.getElementById('height'.value);
    console.log(heightInput);
    let weightInput = document.getElementById('weight').value; 
    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);   
    let heightSquare = Math.pow(height, 2);
    console.log(heightSquare);
    let getBmi = +weight / heightSquare;
    let roundedBmi = getBmi.toFixed(2);
    const result = document.getElementById('result');
    result.textContent = 'Индекс массы тела (ИМТ): ' + roundedBmi;
};
const button = document.querySelector('button');
button.addEventListener('click', calculateBMI);