document.body.onload = function () {
	document.getElementById("menulist").addEventListener("click", onMenuClick);
};

function onMenuClick(event) {
	var elem = event.target;

	document.querySelectorAll("#menulist a").forEach(function (item) {
		if (item.classList.contains("active")) {
			item.classList.remove("active");
		}
	});

	elem.classList.add("active");
}

function toggleHamburger(event) {
	var elem = document.querySelector('.hamburger-content');
    if (elem.style.display === "block") {
        elem.style.display = "none";
    } else {
        elem.style.display = "block";
    }
}