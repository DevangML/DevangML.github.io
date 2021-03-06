const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [97, 92, 20, 98, 98, 92, 98, 0];
window.addEventListener("scroll", () => {
	mainFn();
});
const mainFn = () => {
	if (window.pageYOffset >= navbarOffsetTop) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}

	function myFunction() {
		var x = document.getElementById("navbar-id");
		if (x.className === "navbar") {
			x.className += " responsive";
		} else {
			x.className = "navbar";
		}
	}
	if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
		document.querySelectorAll(".progress-percent").forEach((el, i) => {
			el.style.width = `${progressBarPercents[i]}%`;
			el.previousElementSibling.firstElementChild.textContent = progressBarPercents[i];
		});
	}
};
(function () {
	var img = document.getElementById('zoom').firstChild;
	img.onload = function () {
		if (img.height > img.width) {
			img.height = '100%';
			img.width = 'auto';
		}
	};
}());
mainFn();
window.addEventListener("resize", () => {
	window.location.reload();
});

