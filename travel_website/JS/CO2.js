// CO2 Emission Factors per km
const CO2_EMISSIONS = {
    car: 0.21,       // kg of CO2 per km for car
    bike: 0.00,      // 0 CO2 for biking
    carpool: 0.07    // Assuming 3 people carpooling
};

let points = 0; // Reward points

// Function to calculate CO2 emission
function calculateCO2() {
    const distance = document.getElementById('distance').value;
    const transport = document.getElementById('transportation').value;
    
    if (distance > 0) {
        const emission = CO2_EMISSIONS[transport] * distance;
        document.getElementById('result').innerText = 
            `Your trip emits ${emission.toFixed(2)} kg of CO2.`;

        updatePoints(transport);
    } else {
        document.getElementById('result').innerText = 
            'Please enter a valid distance.';
    }
}

// Update points based on eco-friendly choices
function updatePoints(transport) {
    if (transport === 'bike') {
        points += 10;
        displayBadge('🚴‍♀️ Biker Badge');
    } else if (transport === 'carpool') {
        points += 5;
        displayBadge('🚗 Carpooler Badge');
    }

    document.getElementById('points').innerText = `Points: ${points}`;
}

// Function to display badge
function displayBadge(badge) {
    const badgeDiv = document.getElementById('badges');
    const badgeElement = document.createElement('p');
    badgeElement.innerText = badge;
    badgeDiv.appendChild(badgeElement);
}

// Event Listener for Calculate button
document.getElementById('calculate').addEventListener('click', calculateCO2);