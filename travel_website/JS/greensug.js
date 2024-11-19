// Function to provide green suggestions based on user input
function getGreenSuggestions() {
    const distance = document.getElementById("travelDistance").value;
    const mode = document.getElementById("currentMode").value;

    let suggestions = "";

    // Logic for green suggestions
    if (distance > 0) {
        if (mode === "car") {
            if (distance <= 2) {
                suggestions = "Consider walking for short distances to reduce emissions.";
            } else if (distance <= 10) {
                suggestions = "Biking could be a great alternative for this distance!";
            } else {
                suggestions = "Carpooling or public transport might be more eco-friendly for longer distances.";
            }
        } else if (mode === "bike") {
            suggestions = "You're already making a green choice by biking. Keep it up!";
        } else if (mode === "public") {
            suggestions = "Using public transport is a good eco-friendly option. Consider encouraging others to join!";
        } else if (mode === "walk") {
            suggestions = "Walking is the greenest option! You’re helping the planet and staying healthy.";
        }
    } else {
        suggestions = "Please enter a valid travel distance.";
    }

    // Display the suggestions
    document.getElementById("suggestions").innerText = suggestions;
}

// Event listener for button click
document.getElementById("getSuggestions").addEventListener("click", getGreenSuggestions);
