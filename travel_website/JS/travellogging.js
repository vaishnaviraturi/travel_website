document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    // Emission factors in kg CO2 per km (approximate)
    const emissionFactors = {
        car: 0.21,
        bus: 0.05,
        bike: 0,
        walk: 0,
        train: 0.041,
        other: 0.15 // generic average for other modes
    };

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form inputs
        const mode = document.getElementById("mode-of-transport").value;
        const distance = parseFloat(document.getElementById("distance").value);

        // Calculate carbon footprint
        const carbonFootprint = distance * (emissionFactors[mode] || 0);

        // Display result
        const resultDiv = document.createElement("div");
        resultDiv.style.marginTop = "20px";
        resultDiv.innerHTML = `
            <p><strong>Carbon Footprint:</strong> ${carbonFootprint.toFixed(2)} kg CO₂</p>
        `;

        // Append result to form
        form.appendChild(resultDiv);
    });
});