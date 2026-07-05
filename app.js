const weatherUrl = 'https://api.api-ninjas.com/v1/weather?';
const cordinateUrl = 'https://api.api-ninjas.com/v1/geocoding?city=';
const option = {
	method: 'GET',
	headers: {
		'x-api-key': 'pEfeJoYOzjQa6j4jhU2fWy5l3ZTMUbdwKVfbasjT',
		'Content-Type': 'application/json'
	}
};

const searchBtn = document.querySelector(".search-location");
const temp = document.querySelector(".temperature .value");
const maxTemp = document.querySelector(".max-temp .value");
const minTemp = document.querySelector(".min-temp .value");
const humidity = document.querySelector(".humidity .value");
const windSpeed = document.querySelector(".windSpeed .value");
const cityName = document.querySelector(".search input");
const image = document.querySelector(".image");
const data = document.querySelector(".data");

searchBtn.addEventListener("click", async () =>{
	image.style.animation = "fadeOut 6s ease-in-out";
	image.style.visibility = "hidden";
	data.style.animation = "fadeIn 6s ease-in-out";
	data.style.opacity = "1";
	let url1 = `${cordinateUrl}${cityName.value.toLowerCase()}`;
	const code1 = await fetch(url1, option);
	let response1 = await code1.json();
	let latitude = response1[0]["latitude"];
	let longitude = response1[0]["longitude"];
	let url2 = `${weatherUrl}lat=${latitude}&lon=${longitude}`;
	let code2 = await fetch(url2, option);
	let response2 = await code2.json();
	console.log(response2);
	temp.innerText = `${response2["temp"]}°C`;
	maxTemp.innerText = `${response2["max_temp"]+2}°C`;
	minTemp.innerText = `${response2["min_temp"]-2}°C`;
	humidity.innerText = `${response2["humidity"]}%`;
	windSpeed.innerText = `${response2["wind_speed"]}mph`;
})