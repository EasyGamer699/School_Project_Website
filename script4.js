
function fetchIPData() {

    fetch('https://ipinfo.io/json?token=96c44bac4511ca')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip').textContent = data.ip;
            document.getElementById('location').textContent = data.city + ', ' + data.region;
            document.getElementById('city').textContent = data.city;
            document.getElementById('country').textContent = data.country;
            document.getElementById('org').textContent = data.org;
        })
        .catch(error => {
            console.error('Fehler beim Abrufen der IP-Daten:', error);
            alert('Fehler beim Abrufen der IP-Daten');
        });
}


document.addEventListener('DOMContentLoaded', fetchIPData);


document.getElementById('refresh-btn').addEventListener('click', fetchIPData);
