const modeButton = document.querySelector("#mode");
const a = document.querySelector("a");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		const lightElements = document.querySelectorAll("[class^='light-']")
		for(let i=0; i < lightElements.length; i++){
			console.log(lightElements[i]);
			console.log(lightElements[i].className)
			console.log(lightElements[i].className.split('light-'));
			console.log("dark-" + lightElements[i].className.split('light-')[1]);
			lightElements[i].className = "dark-" + lightElements[i].className.split('light-')[1];
		}
		modeButton.textContent = "🔆";
	} else {
		const lightElements = document.querySelectorAll("[class^='dark-']")
		for(let i=0; i < lightElements.length; i++){
			console.log(lightElements[i]);
			console.log(lightElements[i].className)
			console.log(lightElements[i].className.split('dark-'));
			console.log("light-" + lightElements[i].className.split('dark-')[1]);
			lightElements[i].className = "light-" + lightElements[i].className.split('dark-')[1];
		}
		modeButton.textContent = "🕶️";
	}
});
