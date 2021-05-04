
const bmiCalculator = () => {
   const weight = Number(document.getElementById('weight').value);
   let height = Number(document.getElementById('height').value);
   height = height/100;
   const bmi = weight/(height*height);
   document.getElementById('bmiIndex').innerHTML = "Your BMI Index is : " + bmi.toFixed(2); 
}