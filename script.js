function updateDateTime() {
    const now = new Date();

    // Formatting date in "Tuesday 20th September, 2024" format
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = now.toLocaleDateString('en-GB', options);

    // Formatting time in "HH:MM:SS AM/PM" format
    const currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Display the date and time
    document.getElementById('currentDate').textContent = currentDate;
    document.getElementById('currentTime').textContent = currentTime;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Call the function to display immediately on page load
updateDateTime();
