/* 
    File Name: app.js
    Student Name: Priscilla Bakradze
    Student ID: 301229445
    Date: September 26, 2022
*/

//Dark/Light Mode - This function switches between the sun and the moon emoji based on user's preference. 
window.addEventListener("load", () => {
    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "light");
    }

    const theme = document.querySelector("#themeSelector");
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        theme.textContent = "☀️";
    } else {
        theme.textContent = "🌙";
    }

    theme.addEventListener("click", () => {
        if (localStorage.getItem("theme") === "light") {
            localStorage.setItem("theme", "dark");
            theme.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            theme.textContent = "🌙";
        }

        document.body.classList.toggle("dark");
    });
});

//Navigation Toggle Icon 
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.addEventListener("click", function () {
    navlist.classList.toggle("active");
});

window.onscroll = () => {
    navlist.classList.remove("active");
};

//E-mail Validation
var email = document.getElementById("e-mail");
//Regular Expression
var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function emailValidation() {
    var pass = true;
    if (!(regexEmail.test(email.value))) {
        email.setCustomValidity("E-mail format is incorrect. Please try again.");
        pass = false;
    } else {
        email.setCustomValidity("");
    }
}

function createEventListeners() {
    var send = document.getElementById('button');
    send.addEventListener("click", emailValidation, false);
}

function pageSetUp() {
    createEventListeners();
}
window.addEventListener("load", pageSetUp, false);

//Copyright Year
const copyright = `<p> © ${new Date().getFullYear()} Priscilla Bakradze </p>`;
document.getElementById("copyright-year").innerHTML = copyright;


// Confirmation
(function () {

    function Start() {
        let deleteBtns = document.querySelectorAll(".btn-danger");

        for (button of deleteBtns) {
            button.addEventListener('click', (event) => {
                if(!confirm("Delete permanently?")) {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }        
    }
    window.addEventListener("load", Start);
})();

