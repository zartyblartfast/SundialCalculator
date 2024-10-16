// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get references to the HTML elements
    const latitudeSlider = document.getElementById('latitude-slider');
    const latitudeNumber = document.getElementById('latitude-number');
    const diameterSlider = document.getElementById('diameter-slider');
    const diameterNumber = document.getElementById('diameter-number');
    
    // Synchronize the latitude slider with the number input
    latitudeSlider.addEventListener('input', function() {
        const latitudeValue = latitudeSlider.value;
        latitudeNumber.value = latitudeValue;
        console.log(`Latitude changed to: ${latitudeValue}`);
        updateSundial();
    });

    // Synchronize the latitude number input with the slider
    latitudeNumber.addEventListener('input', function() {
        const latitudeValue = latitudeNumber.value;
        latitudeSlider.value = latitudeValue;
        console.log(`Latitude changed to: ${latitudeValue}`);
        updateSundial();
    });

    // Synchronize the diameter slider with the number input
    diameterSlider.addEventListener('input', function() {
        const diameterValue = diameterSlider.value;
        diameterNumber.value = diameterValue;
        console.log(`Diameter changed to: ${diameterValue}`);
        updateSundial();
    });

    // Synchronize the diameter number input with the slider
    diameterNumber.addEventListener('input', function() {
        const diameterValue = diameterNumber.value;
        diameterSlider.value = diameterValue;
        console.log(`Diameter changed to: ${diameterValue}`);
        updateSundial();
    });

    // Hemisphere change event listener
    const hemisphereRadios = document.querySelectorAll('input[name="hemisphere"]');
    hemisphereRadios.forEach(radio => {
        radio.addEventListener('change', function(event) {
            const hemisphere = event.target.value;
            console.log(`Hemisphere changed to: ${hemisphere}`);
            updateSundial();
        });
    });

    // Numerals change event listener
    const numeralsRadios = document.querySelectorAll('input[name="numerals"]');
    numeralsRadios.forEach(radio => {
        radio.addEventListener('change', function(event) {
            const numeralsType = event.target.value;
            console.log(`Numerals changed to: ${numeralsType}`);
            updateSundial();
        });
    });

    // Function to calculate hour line angles
    function calculateHourLineAngles(latitude) {
        const hourAngles = [];
        const hours = [-90, -75, -60, -45, -30, -15, 0, 15, 30, 45, 60, 75, 90, 105]; // Corresponds to 6 AM to 11 PM
        const latitudeRadians = latitude * (Math.PI / 180); // Convert latitude to radians

        for (let i = 0; i < hours.length; i++) {
            const hourAngleRadians = hours[i] * (Math.PI / 180); // Convert hour angle to radians
            const thetaRadians = Math.atan(Math.sin(latitudeRadians) * Math.tan(hourAngleRadians)); // Formula for hour line angle
            const thetaDegrees = thetaRadians * (180 / Math.PI); // Convert back to degrees
            hourAngles.push(thetaDegrees.toFixed(2)); // Store angle, rounded to 2 decimal places
        }

        return hourAngles;
    }

    // Function to update the sundial
    function updateSundial() {
        const latitude = parseFloat(latitudeSlider.value);
        const diameter = diameterSlider.value;
        const hemisphere = document.querySelector('input[name="hemisphere"]:checked').value;
        const numerals = document.querySelector('input[name="numerals"]:checked').value;

        // Log a message when the sundial updates (you can replace this with actual logic later)
        console.log(`Updating sundial with:
            Latitude: ${latitude}, 
            Diameter: ${diameter}, 
            Hemisphere: ${hemisphere}, 
            Numerals: ${numerals}`);
        
        // Calculate and log hour line angles based on latitude
        const hourLineAngles = calculateHourLineAngles(latitude);
        console.log(`Hour line angles for 6 AM to 11 PM at latitude ${latitude}:`, hourLineAngles.join(", "));
        
        // Placeholder for actual sundial calculations and visual updates
        // Example: update the sundial graphics, angle calculations, etc.
    }

    // Initial sundial update on load
    updateSundial();
});
