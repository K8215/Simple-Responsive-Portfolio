const header = document.querySelector("#js-header")
const toggler = document.querySelector("#js-menu-toggle")
const links = document.querySelector("#js-nav")

let scrollpos = window.scrollY

//SMOOTH SCROLL ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault()

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		})
	})
})

//MOBILE NAV
toggler.addEventListener("click", function (e) {
	if (header.classList.contains("js-open")) {
		header.classList.remove("js-open")
		toggler.classList.remove("is-active")
	} else {
		header.classList.add("js-open")
		toggler.classList.add("is-active")
	}
})

links.addEventListener("click", function (e) {
	header.classList.remove("js-open")
	toggler.classList.remove("is-active")
})

//FIXED HEADER STYLES ON SCROLL
window.addEventListener("scroll", function () {
	scrollpos = window.scrollY

	if (scrollpos >= 100) {
		header.classList.add("js-scrolled")
	} else {
		header.classList.remove("js-scrolled")
	}
})
