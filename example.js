// Contact form elements

const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const submit = document.getElementsByClassName("btn-primary");
const warnMsg = document.getElementById("errorMsg");
const tabletMenu = document.querySelector(".tabNavbar");
const sidebar = document.querySelector(".mobnavbar");

// Prevent submission till validation has been checked.

if (form) {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		validateInputs();
	});
}

const setError = (element, message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector(".errorMsg");

	// Grab error message from validation
	errorDisplay.innerText = message;
	// Show error message
	inputControl.classList.add("errorMsg");
	// Do not show the green input outline
	inputControl.classList.remove("success");
};

const setSuccess = (element) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector(".errorMsg");

	// Error message will be blank
	errorDisplay.innerText = "";
	// Success class will show
	inputControl.classList.add("success");
	// Error will be removed.
	inputControl.classList.remove("errorMsg");
};

const validateInputs = () => {
	// get the values and remove whitespace
	const fnameValue = fname.value.trim();
	const lnameValue = lname.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	const messageValue = message.value.trim();

	// Check the fields
	if (!fnameValue) {
		// If first name field is blank, show error
		setError(fname, "Please enter your first name.");
	} else if (!fnameValue.match(/^[A-z]\w/g)) {
		setError(fname, "Please enter a valid name");
	} else {
		// add success class
		setSuccess(fname);
	}

	if (!lnameValue) {
		// If last name field is blank, show error
		setError(lname, "Please enter your last name.");
	} else if (!lnameValue.match(/^[A-z]\w/g)) {
		setError(lname, "Please enter a valid name.");
	} else {
		setSuccess(lname);
	}
	if (!emailValue) {
		// If email field is blank, show error
		setError(email, "Please enter an email");
	} else if (!isValidEmail(emailValue)) {
		// If email is not valid, show error
		setError(email, "Please enter a valid email.");
	} else {
		setSuccess(email);
	}
	if (!phoneValue) {
		// If phone number field is blank, show error message
		setError(phone, "Please enter your phone number");
	} else if (
		!phoneValue.match(
			/^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/g
		)
	) {
		//} else if ((!isValidPhone(phoneValue) || isNaN(phoneValue) )) {
		// If phone number is not valid
		setError(phone, "Please enter a valid phone number.");
	} else {
		setSuccess(phone);
	}
	if (!messageValue) {
		// If message field is blank, show error
		setError(message, "Please enter a message.");
	} else {
		setSuccess(message);
	}
};

// Function to check validation of email
function isValidEmail(email) {
	return /([a-zA-Z0-9.])+@([a-zA-Z0-9-])+(?:\.[a-zA-Z]+)$/g.test(
		String(email).toLowerCase()
	);
}

// Function to validate phone number
function isValidPhone(phone) {
	return /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/g;
}
