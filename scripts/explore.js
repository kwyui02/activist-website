function openPage(link) {
    console.log(link.value);
    location.href = link.value;
};

const menuToggle = document.querySelector(".toggle")
const showcase = document.querySelector(".showcase")

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active")
    showcase.classList.toggle("active")
})

const country = document.getElementById("country");

async function getLocation() {
    const response = await fetch("./data/sample-ip.json");
    const data = await response.json();

    console.log(data.location.country_name);
    country.textContent = data.location.country_name;
}

getLocation();