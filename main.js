document.addEventListener('DOMContentLoaded', function () {
  // Latitude elements
  const latitudeSlider = document.getElementById('latitude-slider');
  const latitudeNumber = document.getElementById('latitude-number');

  // Sundial Diameter elements
  const diameterSlider = document.getElementById('diameter-slider');
  const diameterNumber = document.getElementById('diameter-number');

  // Hemisphere and Numerals elements
  const hemisphereRadios = document.querySelectorAll('input[name="hemisphere"]');
  const numeralsRadios = document.querySelectorAll('input[name="numerals"]');

  // Function to round values
  function roundToOneDecimal(value) {
    return parseFloat(value).toFixed(1); // Round to 1 decimal place
  }

  // Update sundial dynamically based on input changes
  function updateSundial() {
    const latitude = parseFloat(latitudeNumber.value);
    const diameter = parseFloat(diameterNumber.value);
    const hemisphere = document.querySelector('input[name="hemisphere"]:checked').value;
    const numerals = document.querySelector('input[name="numerals"]:checked').value;

    // Call your sundial calculation function here
    calculateSundial(latitude, diameter, numerals, hemisphere);
  }

  // Event listeners for updating sundial dynamically
  latitudeSlider.addEventListener('input', function () {
    latitudeNumber.value = roundToOneDecimal(latitudeSlider.value); // Round latitude value
    updateSundial();
  });

  latitudeNumber.addEventListener('input', function () {
    if (latitudeNumber.value >= 10 && latitudeNumber.value <= 70) {
      latitudeSlider.value = latitudeNumber.value;
      updateSundial();
    }
  });

  diameterSlider.addEventListener('input', function () {
    diameterNumber.value = diameterSlider.value;
    updateSundial();
  });

  diameterNumber.addEventListener('input', function () {
    if (diameterNumber.value >= 120 && diameterNumber.value <= 1000) {
      diameterSlider.value = diameterNumber.value;
      updateSundial();
    }
  });

  hemisphereRadios.forEach(function (radio) {
    radio.addEventListener('change', updateSundial);
  });

  numeralsRadios.forEach(function (radio) {
    radio.addEventListener('change', updateSundial);
  });

  // Example function for calculations (placeholder)
  function calculateSundial(latitude, diameter, numerals, hemisphere) {
    console.log('Calculating sundial with the following inputs:');
    console.log('Latitude:', latitude);
    console.log('Diameter:', diameter);
    console.log('Numerals:', numerals);
    console.log('Hemisphere:', hemisphere);
    // Add further logic here for actual sundial calculations
  }
});
