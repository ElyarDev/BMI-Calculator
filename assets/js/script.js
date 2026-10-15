const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const calcBtn = document.querySelector('.calc_btn');
const bmiValue = document.querySelector('#bmi-value');
const statusValue = document.querySelector('#status');
const adviceValue = document.querySelector('#advice');
const resultValue = document.querySelector('#result')

const calcBmi = function () {
    const height = heightInput.value / 100;
    const weight = weightInput.value;
    const BMI = (weight / Math.pow(height, 2)).toFixed(1);
    let status, advice;

    bmiValue.textContent = BMI;

    if (height <= 0 || weight <= 0 || isNaN(weight) || isNaN(height)) {
        alert('مقادیر معتبر نیستند');
        return
    }

    if (BMI < 18.5) {
        status = 'کمبود وزن';
        advice = 'شما کمبود وزن دارید و بهتر است به پزشک مراجعه کنید';
        statusValue.classList.add('underweight');
    }
    else if (BMI >= 18.5 && BMI < 25) {
        status = 'نرمال';
        advice = 'تبریک وزن شما در محدوده نرمال است';
        statusValue.classList.add('normal');
    }
    else if (BMI >= 25 && BMI < 30) {
        status = 'اضافه وزن';
        advice = 'شما اضافه وزن دارید و بهتر است که ورزش کنید';
        statusValue.classList.add('overweight');
    }
    else {
        status = 'چاق';
        advice = 'شما در محدوده چتقی قرار دارید و بهتر است به پزشک مراجعه نمایید';
        statusValue.classList.add('obese');
    }

    statusValue.textContent = status;
    adviceValue.textContent = advice;
    resultValue.classList.add('active');

}

calcBtn.addEventListener('click', calcBmi);