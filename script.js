let loginForm = document.getElementById("form");

document.getElementById("first-name-input").addEventListener("focus", function() {
    document.getElementById("first-name-input").style.borderColor = "rgb(118, 118, 118)";
    document.getElementById("error-first-name").style.visibility = "hidden";
});

document.getElementById("last-name-input").addEventListener("focus", function() {
    document.getElementById("last-name-input").style.borderColor = "rgb(118, 118, 118)";
    document.getElementById("error-last-name").style.visibility = "hidden";
});

document.getElementById("email-input").addEventListener("focus", function() {
    document.getElementById("email-input").style.borderColor = "rgb(118, 118, 118)";
    document.getElementById("error-email").style.visibility = "hidden";
});

document.getElementById("general-enquiry").addEventListener("focus", function() {
    document.getElementById("error-general-enquiry").style.visibility = "hidden";
});

document.getElementById("support-request").addEventListener("focus", function() {
    document.getElementById("error-general-enquiry").style.visibility = "hidden";
});

document.getElementById("message-request").addEventListener("focus", function () {
    document.getElementById("message-request").style.borderColor = "rgb(118, 118, 118)";
    document.getElementById("error-message-request").style.visibility = "hidden";
})

document.getElementById("consent-message-id").addEventListener("focus", function () {
    document.getElementById("error-consent-message").style.visibility = "hidden";
})

document.addEventListener("DOMContentLoaded", function () {
    const generalEnquiry = document.querySelector('.general-enquiry');
    const supportRequest = document.querySelector('.support-request');

    const radioButtons = document.querySelectorAll('input[name="query-type"]');

    radioButtons.forEach(radio => {
        radio.addEventListener("change", function () {
            if (this.value === "general-enquiry" && this.checked) {
                generalEnquiry.classList.add("selected");
                supportRequest.classList.remove("selected");
            } else if (this.value === "support-request" && this.checked) {
                supportRequest.classList.add("selected");
                generalEnquiry.classList.remove("selected");
            }
        });
    });
});

window.addEventListener('click', (e) => {
    const popup = document.getElementById("myPopup");
    if (popup.style.visibility === "visible" && !popup.contains(e.target)) {
        popup.style.visibility = "hidden";
    }
});


function validateName(firstName) {
    if(!/^[A-Za-z'-]{2,20}$/.test(firstName) || firstName[0] !== firstName[0].toUpperCase()) {
        document.getElementById("first-name-input").style.borderColor = "hsl(0, 66%, 54%)";
        document.getElementById("error-first-name").style.visibility = "visible";
        return false;
    }
    else {
        return true;
    }
}

function validateLastName(lastName) {
    if(!/^[A-Za-z'-]{2,20}$/.test(lastName) || lastName[0] !== lastName[0].toUpperCase()) {
        document.getElementById("last-name-input").style.borderColor = "hsl(0, 66%, 54%)";
        document.getElementById("error-last-name").style.visibility = "visible";
        return false;
    }
    else {
        return true;
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("email-input").style.borderColor = "hsl(0, 66%, 54%)";
        document.getElementById("error-email").style.visibility = "visible";
        return false;
    }
    else {
        return true;
    }
}

function generalEnquiry(generalEnquiry) {
    if (generalEnquiry === null) {
        document.getElementById("error-general-enquiry").style.visibility = "visible";
        return false;
    }
    else {
        return true;
    }
}

function validateMessage(message) {
    if(message.length < 1) {
        document.getElementById("message-request").style.borderColor = "hsl(0, 66%, 54%)";
        document.getElementById("error-message-request").style.visibility = "visible";
        return false;
    }
    else {
        return true;
    }
}

function validateConsentMessage(consentMessage) {
    if (!consentMessage) {
        document.getElementById("error-consent-message").style.visibility = "visible";
        return false;
    }
    else {
        return true;
    }
}

function togglePopup() {
    const popup = document.getElementById("myPopup");
    const generalEnquiry = document.querySelector('.general-enquiry');
    const supportRequest = document.querySelector('.support-request');

    popup.style.visibility = "visible";
    supportRequest.classList.remove("selected");
    generalEnquiry.classList.remove("selected");
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstName = document.getElementById("first-name-input").value;
    let lastName = document.getElementById("last-name-input").value;
    let email = document.getElementById("email-input").value;
    let generalEnquiry = document.querySelector('input[name="query-type"]:checked');
    let message = document.getElementById("message-request").value;
    let consentMessage = document.getElementById("consent-message-id").checked;
    this.validateName(firstName);
    this.validateLastName(lastName);
    this.validateEmail(email);
    this.generalEnquiry(generalEnquiry);
    this.validateMessage(message);
    this.validateConsentMessage(consentMessage);
    if (this.validateName(firstName) && this.validateLastName(lastName) && this.validateEmail(email) && this.generalEnquiry(generalEnquiry)
    && this.validateMessage(message) && this.validateConsentMessage(consentMessage)) {
        togglePopup();
        document.getElementById("form").reset();
    } else {

    }

});
