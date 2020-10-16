const toggle = document.querySelector(".toggle")
const toggleButton = document.querySelector(".toggle-button")
const bgPattern = document.querySelector(".bg-pattern")
const body = document.querySelector("body")
const cardBg = document.querySelectorAll(".card-light-bg")
const veryDarkBlue = document.querySelectorAll(".color_veryDarkBlue")
const heading = document.querySelector(".overview-main")
const followers = document.querySelector(".followers-card")
const overview = document.querySelectorAll(".overview-card")



function toggleFunc() {
	if (toggle.classList.contains("flex-start")){

		toggle.classList.remove("flex-start");


		toggle.classList.remove("flex-start");
		toggle.classList.remove("toggle-darkmode");
		toggleButton.classList.remove("background-color__desaturatedBlue")
		bgPattern.classList.remove("background-color__desaturatedBlue")
		body.classList.remove("background-color__veryDarkBlue")
		heading.classList.remove("color_white")


		for(i = 0; i<14; i++) {
			veryDarkBlue[i].classList.remove("color_white")
			cardBg[i].classList.remove("background-color__darkDesaturatedBlue")
		}


	}
	else {
		toggle.classList.add("flex-start");
		toggle.classList.add("toggle-darkmode");
		toggleButton.classList.add("background-color__desaturatedBlue")
		bgPattern.classList.add("background-color__desaturatedBlue")
		body.classList.add("background-color__veryDarkBlue")
		heading.classList.add("color_white")


		for(i = 0; i<14; i++) {
			veryDarkBlue[i].classList.add("color_white")
			cardBg[i].classList.add("background-color__darkDesaturatedBlue")
		}



	}		
}

function hovering() {
		for(i = 0; i<14; i++) {
			followers.classList.add("light-hover")
		}
}


toggleButton.addEventListener("click", toggleFunc);


followers.addEventListener("mouseover", hovering);
