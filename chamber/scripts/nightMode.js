const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const section1 = document.querySelector(".events");
const section2 = document.querySelector("section");


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		body.style.background = "#ffffff";
		body.style.color = "#faf2a1";
        //section1.style.backgroundColor = "#401f3e";
        section1.style.backgroundColor = "#401f3e";
        section2.style.backgroundColor = "#401f3e";
        //document.getElementById("section1").style.backgroundColor = "#000000";
		modeButton.textContent = "🔆";
	} else {
		body.style.background = "#6494aa";
		body.style.color = "#041b15";
		modeButton.textContent = "🕶️";
	}
});
