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
});
