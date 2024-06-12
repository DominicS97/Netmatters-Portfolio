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

function burgerForceclose() {
	let x = window.innerWidth;

	if (x >= 576) {
		document.getElementById("links").style.display = "none";
	}
}

// scrolling not working currently

// function scrollTop() {
// 	window.scrollTo({ top: 0, behavior: "smooth" });
// }

// form validation

// First name required
$("#fname-check").hide();
let fnameError = true;
$("#fname").keyup(function () {
	validateFname();
});

function validateFname() {
	let fnameValue = $("#fname").val();
	if (fnameValue.length == "") {
		$("#fname-check").show();
		fnameError = false;
	} else {
		$("#fname-check").hide();
		fnameError = true;
	}
}
// Message required
$("#message-check").hide();
let messageError = true;
$("#message").keyup(function () {
	validateMessage();
});

function validateMessage() {
	let messageValue = $("#message").val();
	if (messageValue.length == "") {
		$("#message-check").show();
		messageError = false;
	} else {
		$("#message-check").hide();
		messageError = true;
	}
}

// Validate Email
$("#email-check").hide();
let emailError = true;
$("#email").keyup(function () {
	validateEmail();
});

function validateEmail() {
	const email = document.getElementById("email");
	email.addEventListener("blur", () => {
		let regex =
			/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
		let s = email.value;
		if (regex.test(s)) {
			email.classList.remove("is-invalid");
			$("#email-check").hide();
			emailError = true;
		} else {
			email.classList.add("is-invalid");
			$("#email-check").show();
			emailError = false;
		}
	});
}

// Validate Phone
$("#phone-check").hide();
let phoneError = true;
$("#phone").keyup(function () {
	validatePhone();
});

function validatePhone() {
	const phone = document.getElementById("phone");
	phone.addEventListener("blur", () => {
		let regex =
			/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
		let s = phone.value;
		if (regex.test(s)) {
			phone.classList.remove("is-invalid");
			$("#phone-check").hide();
			phoneError = true;
		} else {
			phone.classList.add("is-invalid");
			$("#phone-check").show();
			phoneError = false;
		}
	});
}

// Submit button

function formValidate() {
	validateFname();
	validateMessage();
	validateEmail();
	validatePhone();
	if (
		fnameError == true &&
		messageError == true &&
		emailError == true &&
		phoneError == true
	) {
		return true;
	} else {
		return false;
	}
}
