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

    // Function to round values to two decimal places
    function roundToTwoDecimals(value) {
        return Number(value).toFixed(2);
    }

    // Function to calculate hour angles for a horizontal sundial using 15-minute intervals
    function calculateQuarterHourAngles(latitude) {
        console.log("Calculating hour angles with latitude: ", latitude);

        // Represent 6AM to 6PM with 15-minute intervals
        const intervals = [];
        for (let hour = -6; hour <= 6; hour++) {
            for (let minute = 0; minute < 60; minute += 15) {
                intervals.push(hour + minute / 60);
            }
        }
        console.log("Generated intervals:", intervals);

        const hourAngles = [];

        // Convert latitude to radians
        const radiansLatitude = latitude * (Math.PI / 180);

        intervals.forEach(function(interval, index) {
            const hourAngleDegrees = 15 * interval;
            const radiansHourAngle = hourAngleDegrees * (Math.PI / 180);

            const tanTheta = Math.tan(radiansHourAngle) * Math.sin(radiansLatitude);
            const theta = Math.atan(tanTheta) * (180 / Math.PI);

            hourAngles.push(Number(theta.toFixed(2)));

            console.log(`Interval ${index}: ${interval}, Angle: ${theta.toFixed(2)}`);
        });

        console.log('Final calculated Hour Angles (15-minute intervals):', hourAngles);
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
        const hourAngles = calculateQuarterHourAngles(latitude);

        // Log the calculated hour angles
        console.log('Calculated Hour Angles (15-minute intervals):', hourAngles);

        // Add logic here to use the hour angles for sundial rendering
    }

    // Make sure the sundial is updated when the page loads
    updateSundial(); // Call it after DOMContentLoaded to ensure initial values are calculated
});
