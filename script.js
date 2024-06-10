// splash typing effect
let i = 0;
let j = 0;
let text1 = document.getElementById("type1").innerHTML;
let text2 = document.getElementById("type2").innerHTML;
if (window.innerWidth > 575) {
	document.getElementById("type1").innerHTML = "";
	document.getElementById("type2").innerHTML = "";
	typeWriter();
}

function typeWriter() {
	if (i < text1.length) {
		document.getElementById("type1").innerHTML += text1.charAt(i);
		i++;
		setTimeout(typeWriter, 80);
	} else if (j < text2.length) {
		document.getElementById("type2").innerHTML += text2.charAt(j);
		j++;
		setTimeout(typeWriter, 80);
	}
}

// burger menu

function burgerToggle() {
	let x = document.getElementById("links");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

function burgerForceClose() {
	let x = window.innerWidth;

	if (x >= 576) {
		document.getElementById("links").style.display = "none";
	}
}
