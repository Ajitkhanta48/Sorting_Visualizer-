// Get the current year
var currentYear = new Date().getFullYear();

// Update the content of the span element with the current year
document.getElementById("currentYear").textContent = currentYear;

const btn = document.getElementById("btn");
const nav = document.getElementById("navBar");

function toggleHide() {
    if (nav.style.display == "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

btn.addEventListener("click", toggleHide);
document.getElementById("currentYear").innerText = new Date().getFullYear();

function toggleSection(sectionId) {
    var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].id === sectionId) {
            sections[i].classList.add('active');
        } else {
            sections[i].classList.remove('active');
        }
    }
}