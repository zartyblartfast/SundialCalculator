document.addEventListener('DOMContentLoaded', function () {
  // Latitude elements
  const latitudeSlider = document.getElementById('latitude-slider');
  const latitudeNumber = document.getElementById('latitude-number');

  // Sundial Diameter elements
  const diameterSlider = document.getElementById('diameter-slider');
  const diameterNumber = document.getElementById('diameter-number');

  // Latitude synchronization
  latitudeSlider.addEventListener('input', function () {
    latitudeNumber.value = latitudeSlider.value;
  });

  latitudeNumber.addEventListener('input', function () {
    if (latitudeNumber.value >= 10 && latitudeNumber.value <= 70) {
      latitudeSlider.value = latitudeNumber.value;
    }
  });

  // Sundial Diameter synchronization
  diameterSlider.addEventListener('input', function () {
    diameterNumber.value = diameterSlider.value;
  });

  diameterNumber.addEventListener('input', function () {
    if (diameterNumber.value >= 120 && diameterNumber.value <= 1000) {
      diameterSlider.value = diameterNumber.value;
    }
  });

  // Handle Calculate button click
  const calculateButton = document.getElementById('calculate-button');
  calculateButton.addEventListener('click', function () {
    const latitude = parseFloat(latitudeNumber.value);
    const diameter = parseFloat(diameterNumber.value);
    const numerals = document.querySelector('input[name="numerals"]:checked').value;

    // Call your function to calculate hour lines and gnomon dimensions
    calculateSundial(latitude, diameter, numerals);
  });

  // Example function for calculations (placeholder)
  function calculateSundial(latitude, diameter, numerals) {
    // Perform calculations for hour lines and gnomon
    console.log('Latitude:', latitude);
    console.log('Diameter:', diameter);
    console.log('Numerals:', numerals);

    // Display calculated values (You can update the DOM elements with the results)
  }
});
