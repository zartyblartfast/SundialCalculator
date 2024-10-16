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
    const hemisphere = document.querySelector('input[name="hemisphere"]:checked').value; // Get selected hemisphere

    // Log the values for testing
    console.log('Latitude:', latitude);
    console.log('Diameter:', diameter);
    console.log('Numerals:', numerals);
    console.log('Hemisphere:', hemisphere); // Log selected hemisphere

    // Call your function to calculate hour lines and gnomon dimensions
    calculateSundial(latitude, diameter, numerals, hemisphere);
  });

  // Example function for calculations (placeholder)
  function calculateSundial(latitude, diameter, numerals, hemisphere) {
    // Perform calculations for hour lines and gnomon based on latitude, diameter, numerals, and hemisphere
    console.log('Calculating sundial with the following inputs:');
    console.log('Latitude:', latitude);
    console.log('Diameter:', diameter);
    console.log('Numerals:', numerals);
    console.log('Hemisphere:', hemisphere);

    // Add further logic here for actual sundial calculations
  }
});
