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

  // Function to round values to two decimal places
  function roundToTwoDecimals(value) {
    return Number(value).toFixed(2);
  }

  // Function to calculate hour angles
  function calculateHourAngles(latitude) {
    const hours = [6, 7, 8, 9, 10, 11]; // Morning hours
    const hourAngles = [];

    hours.forEach(function(hour) {
      const hourAngle = 15 * (12 - hour); // Degrees from solar noon (15 degrees per hour)
      const tanTheta = Math.sin(hourAngle * (Math.PI / 180)) * Math.tan(latitude * (Math.PI / 180)); // Radians
      const theta = Math.atan(tanTheta) * (180 / Math.PI); // Convert back to degrees
      hourAngles.push(roundToTwoDecimals(theta));
    });

    console.log('Hour Angles:', hourAngles);
    return hourAngles;
  }

  // Update sundial dynamically based on input changes
  function updateSundial() {
    const latitude = parseFloat(latitudeNumber.value);
    const diameter = parseFloat(diameterNumber.value);
    const hemisphere = document.querySelector('input[name="hemisphere"]:checked').value;
    const numerals = document.querySelector('input[name="numerals"]:checked').value;

    // Call sundial calculation function
    calculateSundial(latitude, diameter, numerals, hemisphere);
  }

  // Event listeners for updating sundial dynamically
  latitudeSlider.addEventListener('input', function () {
    latitudeNumber.value = roundToTwoDecimals(this.value);
    updateSundial();
  });

  latitudeNumber.addEventListener('input', function () {
    if (this.value >= 10 && this.value <= 70) {
      latitudeSlider.value = this.value;
      latitudeNumber.value = roundToTwoDecimals(this.value);
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

    // Calculate the hour angles
    const hourAngles = calculateHourAngles(latitude);

    // Add logic here to use the hour angles for sundial rendering
  }
});
