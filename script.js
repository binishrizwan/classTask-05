
function calculateAge() {
    var birthdate = new Date(document.getElementById('birthdate').value);
    var today = new Date();

    var years = today.getFullYear() - birthdate.getFullYear();
    var months = today.getMonth() - birthdate.getMonth();
    var days = today.getDate() - birthdate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Get the days of the previous month
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    // Update the HTML elements
    document.getElementById('years').innerText = years;
    document.getElementById('months').innerText = months;
    document.getElementById('days').innerText = days;
}
