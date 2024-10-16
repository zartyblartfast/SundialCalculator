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
      console.log("Calculating hour angles with latitude: ", latitude); // Log latitude
  
      const hours = [6, 7, 8, 9, 10, 11]; // Morning hours
      const hourAngles = [];
  
      // Check if the latitude is valid before proceeding
      if (isNaN(latitude) || latitude < -90 || latitude > 90) {
        console.error("Invalid latitude: ", latitude);
        return [];
      }
  
      // Ensure the calculation logic is being processed correctly
      console.log("Processing hour angles with latitude (radians): ", latitude * (Math.PI / 180));
  
      hours.forEach(function(hour) {
        const hourAngle = 15 * (12 - hour); // Degrees from solar noon (15 degrees per hour)
        const radiansHourAngle = hourAngle * (Math.PI / 180); // Convert to radians
        const radiansLatitude = latitude * (Math.PI / 180); // Convert latitude to radians
  
        console.log("Hour: ", hour, " Hour Angle: ", hourAngle, "Radians Hour Angle: ", radiansHourAngle);
  
        const tanTheta = Math.sin(radiansHourAngle) * Math.tan(radiansLatitude); // Trigonometric calculation
        const theta = Math.atan(tanTheta) * (180 / Math.PI); // Convert back to degrees
  
        console.log("Theta for hour ", hour, ": ", theta); // Log theta for each hour
  
        hourAngles.push(roundToTwoDecimals(theta));
      });
  
      console.log('Calculated Hour Angles:', hourAngles); // Log hour angles
      return hourAngles;
    }
  
    // Update sundial dynamically based on input changes
    function updateSundial() {
      const latitude = parseFloat(latitudeNumber.value);
      const diameter = parseFloat(diameterNumber.value);
      const hemisphere = document.querySelector('input[name="hemisphere"]:checked').value;
      const numerals = document.querySelector('input[name="numerals"]:checked').value;
  
      // Check if latitude is being read correctly
      console.log("Latitude before calculations: ", latitude);
  
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
  
    // Function for sundial calculation
    function calculateSundial(latitude, diameter, numerals, hemisphere) {
      console.log('Calculating sundial with the following inputs:');
      console.log('Latitude:', latitude);
      console.log('Diameter:', diameter);
      console.log('Numerals:', numerals);
      console.log('Hemisphere:', hemisphere);
  
      // Calculate the hour angles
      const hourAngles = calculateHourAngles(latitude);
  
      // Log the calculated hour angles
      console.log('Calculated Hour Angles:', hourAngles);
  
      // Add logic here to use the hour angles for sundial rendering
    }
  
    // Trigger updateSundial on page load to show default values in the console
    window.onload = function() {
      updateSundial();
    };
});
