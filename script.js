const form = document.querySelector("form");
const timeContainer = document.querySelector(".countdown-area .time span");
const envCover = document.querySelector(".outside");
const card = document.querySelector(".card-content");



form.addEventListener("submit", (e) => {
	e.preventDefault();

	const dateInput = document.getElementById("date").value;
	const timeInput = document.getElementById("time").value;


	if (!dateInput || !timeInput) {
		alert("Avoid empty fields!");
		return;
	}

    const targetDate = new Date(`${dateInput}T${timeInput}`);
    

    setInterval(() => {
		const now = new Date();
		const diff = targetDate - now;

        if (diff <= 0) {
            clearInterval(this);
            timeContainer.textContent = "00:00:00";
            envCover.classList.add("outside-opened");
            card.classList.add("card-content-shown");
            return;
        }

        const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(
            2,
            "0"
        );
        const minutes = String(
            Math.floor((diff / (1000 * 60)) % 60)
        ).padStart(2, "0");
        const seconds = String(Math.floor((diff / 1000) % 60)).padStart(
            2,
            "0"
        );
		timeContainer.textContent = `${hours}:${minutes}:${seconds}`;
	}, 1000);


    envCover.classList.remove("outside-opened");
    card.classList.remove("card-content-shown");
});



