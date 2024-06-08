document.addEventListener("DOMContentLoaded", function() {
 const today = new Date();
 const tomorrow = new Date(today);
 tomorrow.setDate(today.getDate() + 1);
 const todayFormatted = formatDate(today);
 const tomorrowFormatted = formatDate(tomorrow);
 fetchHoroscope('today', todayFormatted);
 fetchHoroscope('tomorrow', tomorrowFormatted);
});

function formatDate(date) {
 const year = date.getFullYear();
 const month = String(date.getMonth() + 1).padStart(2, '0');
 const day = String(date.getDate()).padStart(2, '0');
 return `${year}-${month}-${day}`;
}

function fetchHoroscope(day, date) {
 const sign = 'pisces';
 const url = `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=${date}`;
 fetch(url).then(response => response.json()).then(data => {
  if (data.success) displayHoroscope(day, data.data);
  else displayError(`Failed to load horoscope for ${day}`);
 }).catch(error => {
  displayError(`Error fetching horoscope for ${day}: ${error}`);
 });
}

function displayHoroscope(day, data) {
 if (day === 'today') {
  document.getElementById('today-date').textContent = data.date;
  document.getElementById('today-horoscope-text').textContent = data.horoscope_data;
 } else if (day === 'tomorrow') {
  document.getElementById('tomorrow-date').textContent = data.date;
  document.getElementById('tomorrow-horoscope-text').textContent = data.horoscope_data;
 }
}

function displayError(message) {
 document.getElementById('error').textContent = message;
}
