// Function to calculate BMI
function calculateBMI() {
  // Get the values for height and weight
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);

  // Validate input
  if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
    alert("Please enter valid height and weight values.");
    return;
  }

  // Calculate BMI
  const bmi = weight / (height * height);

  // Display BMI result
  document.getElementById('bmi').innerText = bmi.toFixed(2);

  // Categorize BMI
  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  // Display the BMI category
  document.getElementById('category').innerText = `Category: ${category}`;

  // Show the result section
  document.getElementById('result').style.display = 'block';
}

